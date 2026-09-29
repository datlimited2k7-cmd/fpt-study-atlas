import { env } from "cloudflare:workers";

export const dynamic = "force-dynamic";

export default async function ForgotCreatorPassword({ searchParams }: {
  searchParams: Promise<{ sent?: string; unavailable?: string }>;
}) {
  const { sent, unavailable } = await searchParams;
  const ready = Boolean(env.GMAIL_APP_PASSWORD);
  return <main style={{ fontFamily: "system-ui", maxWidth: 440, margin: "10vh auto", padding: 24 }}>
    <h1>Quên mật khẩu sáng tạo</h1>
    <p>Nhập Gmail khôi phục đã đăng ký. Nếu khớp, liên kết đặt lại sẽ được gửi tới hộp thư và hết hạn sau 15 phút.</p>
    {sent && <p role="status" style={{ color: "#176a38" }}>Nếu địa chỉ khớp, hãy kiểm tra hộp thư và thư rác.</p>}
    {unavailable && <p role="alert" style={{ color: "#b42318" }}>Chưa gửi được thư. Vui lòng thử lại sau.</p>}
    {!ready && <p role="status">Tính năng gửi thư đang chờ kết nối Gmail của chủ trang.</p>}
    {ready && <form method="post" action="/api/creator/forgot">
      <label htmlFor="email">Gmail khôi phục</label>
      <input id="email" name="email" type="email" required autoComplete="email"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <button type="submit" style={{ padding: "10px 18px" }}>Gửi liên kết đặt lại</button>
    </form>}
    <p><a href="/creator/login">← Quay lại đăng nhập</a></p>
  </main>;
}
