import Script from "next/script";
import { requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

const OWNER_EMAIL = "luwy21643@gmail.com";

export default async function CreatorPage() {
  const user = await requireChatGPTUser("/creator");
  if (user.email.trim().toLowerCase() !== OWNER_EMAIL) {
    return <main style={{ fontFamily: "system-ui", maxWidth: 620, margin: "80px auto", padding: 24 }}>
      <h1>Bạn chưa có quyền sáng tạo</h1>
      <p>Tài khoản {user.email} có thể học bằng chế độ người dùng. Chỉ chủ trang mới được sửa bài học và câu hỏi.</p>
      <a href="/">Về trang học</a>
    </main>;
  }
  return <>
    <link rel="stylesheet" href="/creator.css" />
    <main className="creator-shell">
      <header className="creator-header">
        <div><span className="creator-eyebrow">BẢN ĐỒ HỌC TẬP FPT</span><h1>Chế độ sáng tạo</h1><p>Thêm hoặc sửa bài học và câu hỏi. Lưu để mọi người mở link đều thấy nội dung mới.</p></div>
        <div className="creator-header-actions"><a href="/atlas.html">← Xem như người học</a><button type="button" id="save-all" disabled>Lưu thay đổi</button></div>
      </header>
      <div id="status" className="creator-status" role="status" aria-live="polite">Đang tải nội dung…</div>
      <div id="editor" className="creator-editor" hidden>
        <aside className="creator-nav">
          <label htmlFor="course-select">Môn học</label><select id="course-select" />
          <div className="creator-tabs"><button type="button" id="lesson-tab" className="active">Bài học</button><button type="button" id="quiz-tab">Câu hỏi</button></div>
          <div id="lesson-tools"><label htmlFor="group-select">Nhóm bài</label><select id="group-select" /><div className="group-add"><input id="group-name" type="text" maxLength={120} placeholder="Tên nhóm mới" /><button type="button" id="add-group">Thêm nhóm</button></div><button type="button" id="add-lesson" className="add-item">+ Thêm bài học</button></div>
          <div id="quiz-tools" hidden><button type="button" id="add-question" className="add-item">+ Thêm câu hỏi</button></div>
          <div id="item-list" className="creator-list" />
        </aside>
        <section className="creator-form-panel"><div id="form-head" className="form-head" /><form id="content-form" /><p className="form-note">Nguồn tài liệu giúp người học đối chiếu nội dung. Hãy kiểm tra trước khi lưu.</p></section>
      </div>
    </main>
    <Script src="/creator-editor.js" strategy="afterInteractive" />
  </>;
}
