import { redirect } from "next/navigation";
import { isCreatorAuthenticated } from "../../../lib/creator-auth";

export const dynamic = "force-dynamic";

export default async function CreatorPassword({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (!(await isCreatorAuthenticated())) redirect("/creator/login");
  const { error } = await searchParams;
  return <main style={{ fontFamily: "system-ui", maxWidth: 440, margin: "10vh auto", padding: 24 }}>
    <h1>Đổi mật khẩu sáng tạo</h1>
    <p>Nhập mật khẩu hiện tại, rồi tự đặt mật khẩu mới có ít nhất 12 ký tự. Các phiên cũ sẽ hết hiệu lực.</p>
    {error && <p role="alert" style={{ color: "#b42318" }}>Không đổi được mật khẩu. Kiểm tra mật khẩu hiện tại, mật khẩu mới và thử lại.</p>}
    <form method="post" action="/api/creator/password">
      <label htmlFor="current">Mật khẩu hiện tại</label>
      <input id="current" name="current" type="password" required autoComplete="current-password"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <label htmlFor="next">Mật khẩu mới</label>
      <input id="next" name="next" type="password" required minLength={12} maxLength={128} autoComplete="new-password"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <label htmlFor="confirm">Nhập lại mật khẩu mới</label>
      <input id="confirm" name="confirm" type="password" required minLength={12} maxLength={128} autoComplete="new-password"
        style={{ display: "block", width: "100%", padding: 10, margin: "8px 0 16px" }} />
      <button type="submit" style={{ padding: "10px 18px" }}>Lưu mật khẩu mới</button>
    </form>
    <p><a href="/creator">← Quay lại chế độ sáng tạo</a></p>
  </main>;
}
