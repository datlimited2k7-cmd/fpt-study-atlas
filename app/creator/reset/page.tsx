export const dynamic = "force-dynamic";

export default async function ResetCreatorPassword({ searchParams }: {
  searchParams: Promise<{ token?: string; error?: string }>;
}) {
  const { token, error } = await searchParams;
  const validShape = Boolean(token && /^[A-Za-z0-9_-]{43}$/.test(token));
  return <main style={{ fontFamily: "system-ui", maxWidth: 440, margin: "10vh auto", padding: 24 }}>
    <meta name="referrer" content="no-referrer" />
    <h1>Đặt lại mật khẩu sáng tạo</h1>
    {!validShape && <p role="alert">Liên kết đặt lại không hợp lệ.</p>}
    {error === "mismatch" && <p role="alert" style={{ color: "#b42318" }}>Hai mật khẩu chưa khớp. Hãy nhập lại.</p>}
    {error && error !== "mismatch" && <p role="alert" style={{ color: "#b42318" }}>Liên kết đã hết hạn hoặc đã được dùng. Hãy yêu cầu một liên kết mới.</p>}
    {validShape && <form method="post" action="/api/creator/reset">
      <input type="hidden" name="token" value={token} />
      <label htmlFor="next">Mật khẩu mới (ít nhất 12 ký tự)</label>
      <input id="next" name="next" type="password" required minLength={12} maxLength={128} autoComplete="new-password"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <label htmlFor="confirm">Nhập lại mật khẩu mới</label>
      <input id="confirm" name="confirm" type="password" required minLength={12} maxLength={128} autoComplete="new-password"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <button type="submit" style={{ padding: "10px 18px" }}>Lưu mật khẩu mới</button>
    </form>}
    <p><a href="/creator/forgot">Yêu cầu liên kết khác</a></p>
  </main>;
}
