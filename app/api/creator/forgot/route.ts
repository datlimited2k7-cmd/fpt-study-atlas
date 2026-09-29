import { env } from "cloudflare:workers";
import { cancelCreatorResetToken, issueCreatorResetToken } from "../../../../lib/creator-auth";
import { RECOVERY_EMAIL, sendCreatorRecoveryEmail } from "../../../../lib/creator-recovery-email";

const MAX_BODY_LENGTH = 1024;

export async function POST(request: Request) {
  const url = new URL(request.url);
  if (request.headers.get("origin") !== url.origin) return new Response(null, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) {
    return new Response(null, { status: 415 });
  }
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_LENGTH) {
    return new Response(null, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) return new Response(null, { status: 413 });
  const email = new URLSearchParams(raw).get("email")?.trim().toLowerCase();
  if (!env.GMAIL_APP_PASSWORD) {
    return new Response(null, { status: 303, headers: { Location: "/creator/forgot?unavailable=1", "Cache-Control": "no-store" } });
  }
  if (email === RECOVERY_EMAIL) {
    const pending = await issueCreatorResetToken();
    if (pending) {
      const sent = await sendCreatorRecoveryEmail(pending.token).catch(() => false);
      if (!sent) {
        await cancelCreatorResetToken(pending.hash);
        return new Response(null, { status: 303, headers: { Location: "/creator/forgot?unavailable=1", "Cache-Control": "no-store" } });
      }
    }
  }
  return new Response(null, { status: 303, headers: { Location: "/creator/forgot?sent=1", "Cache-Control": "no-store" } });
}
