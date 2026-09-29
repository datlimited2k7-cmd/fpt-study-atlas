export const dynamic = "force-dynamic";

export default async function CreatorLogin({ searchParams }: { searchParams: Promise<{ error?: string; changed?: string; session?: string }> }) {
  const { error, changed, session } = await searchParams;
  return <main style={{ fontFamily: "system-ui", maxWidth: 420, margin: "10vh auto", padding: 24 }}>
    <h1>Đăng nhập chế độ sáng tạo</h1>
    <p>Nhập mật khẩu riêng để sửa bài học và câu hỏi.</p>
    {error && <p role="alert" style={{ color: "#b42318" }}>Mật khẩu không đúng hoặc phiên đăng nhập chưa sẵn sàng.</p>}
    {session && <p role="alert" style={{ color: "#b42318" }}>Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại rồi đổi mật khẩu.</p>}
    {changed && <p role="status" style={{ color: "#176a38" }}>Đã đổi mật khẩu. Hãy đăng nhập bằng mật khẩu mới.</p>}
    <form method="post" action="/api/creator/login">
      <label htmlFor="password">Mật khẩu</label>
      <input id="password" name="password" type="password" required autoComplete="current-password"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <button type="submit" style={{ padding: "10px 18px" }}>Đăng nhập</button>
    </form>
    <p><a href="/creator/forgot">Quên mật khẩu?</a></p>
    <p><a href="/atlas.html">← Về trang học</a></p>
  </main>;
}
