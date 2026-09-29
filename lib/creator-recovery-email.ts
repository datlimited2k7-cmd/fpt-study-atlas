import { connect } from "cloudflare:sockets";
import { env } from "cloudflare:workers";

export const RECOVERY_EMAIL = "datlimited2k7@gmail.com";
const SITE_ORIGIN = "https://fpt-study-atlas.luwy21643.workers.dev";
const encoder = new TextEncoder();

function base64(value: string): string {
  return btoa(String.fromCharCode(...encoder.encode(value)));
}

function timeout<T>(promise: Promise<T>): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error("SMTP timeout")), 10_000); }),
  ]).finally(() => clearTimeout(timer));
}

export async function sendCreatorRecoveryEmail(token: string): Promise<boolean> {
  const appPassword = env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!appPassword || !/^[a-zA-Z0-9]{16}$/.test(appPassword)) return false;
  const socket = connect({ hostname: "smtp.gmail.com", port: 465 }, { secureTransport: "on", allowHalfOpen: false });
  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();
  const decoder = new TextDecoder();
  let buffer = "";

  async function reply(expected: number): Promise<void> {
    for (;;) {
      const lineEnd = buffer.indexOf("\n");
      if (lineEnd >= 0) {
        const line = buffer.slice(0, lineEnd).replace(/\r$/, "");
        buffer = buffer.slice(lineEnd + 1);
        if (!/^\d{3}[ -]/.test(line)) throw new Error("Invalid SMTP reply");
        if (line[3] === "-") continue;
        if (Number(line.slice(0, 3)) !== expected) throw new Error(`SMTP rejected step: ${line.slice(0, 3)}`);
        return;
      }
      const chunk = await timeout(reader.read());
      if (chunk.done) throw new Error("SMTP connection closed");
      buffer += decoder.decode(chunk.value, { stream: true });
      if (buffer.length > 16_384) throw new Error("SMTP reply too large");
    }
  }

  async function command(value: string, expected: number): Promise<void> {
    await timeout(writer.write(encoder.encode(`${value}\r\n`)));
    await reply(expected);
  }

  try {
    await timeout(socket.opened);
    await reply(220);
    await command("EHLO fpt-study-atlas.luwy21643.workers.dev", 250);
    await command("AUTH LOGIN", 334);
    await command(base64(RECOVERY_EMAIL), 334);
    await command(base64(appPassword), 235);
    await command(`MAIL FROM:<${RECOVERY_EMAIL}>`, 250);
    await command(`RCPT TO:<${RECOVERY_EMAIL}>`, 250);
    await command("DATA", 354);
    const link = `${SITE_ORIGIN}/creator/reset?token=${encodeURIComponent(token)}`;
    const body = `Bạn đã yêu cầu đặt lại mật khẩu chế độ sáng tạo FPT Study Atlas.\n\nMở liên kết này trong 15 phút:\n${link}\n\nNếu không phải bạn yêu cầu, hãy bỏ qua thư này.`;
    const lines = base64(body).match(/.{1,76}/g)?.join("\r\n") ?? "";
    const message = [
      `From: FPT Study Atlas <${RECOVERY_EMAIL}>`,
      `To: <${RECOVERY_EMAIL}>`,
      "Subject: FPT Study Atlas - Dat lai mat khau sang tao",
      `Date: ${new Date().toUTCString()}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      lines,
      ".",
      "",
    ].join("\r\n");
    await timeout(writer.write(encoder.encode(message)));
    await reply(250);
    await command("QUIT", 221);
    return true;
  } catch {
    return false;
  } finally {
    reader.releaseLock();
    writer.releaseLock();
    await socket.close().catch(() => {});
  }
}
