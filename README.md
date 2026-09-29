# FPT Study Atlas

Website học tập cho MAE101, CEA201, PRF193 và SDI101m. Bản đang chạy: <https://fpt-study-atlas.luwy21643.workers.dev/atlas>.

## Cấu trúc chính

| Vị trí | Vai trò |
| --- | --- |
| `public/data.js` | Danh sách môn, chương và nội dung tóm tắt gốc |
| `public/lesson-guides.js` | Phần giải thích, ví dụ, lỗi thường gặp và bài tự luyện |
| `public/open-study.js` | 16 ghi chú đào sâu từ học liệu mở, có ví dụ và liên kết theo chủ đề cho cả bốn môn |
| `public/quiz.js`, `public/quiz-expansions.js` | Câu hỏi trắc nghiệm và lời giải |
| `public/quiz-slot08-09.js` | 16 câu tự luyện từ slide mô đun và hàm C của PRF193 |
| `public/cea201-on-tap.js` | 497 câu CEA201 từ On Tap, gồm 7 câu nhiều đáp án |
| `public/app.js`, `public/atlas.html`, `public/styles.css` | Giao diện trang học |
| `public/creator-editor.js`, `app/creator/` | Chế độ sáng tạo để sửa nội dung |
| `app/api/`, `lib/`, `drizzle/` | API, xác thực và cơ sở dữ liệu Cloudflare D1 |

`scripts/generate-base.mjs` kết hợp dữ liệu từ các tệp JavaScript thành `public/base-content.json`. Chạy lại lệnh này sau khi sửa bài học hoặc câu hỏi. Nội dung lưu từ chế độ sáng tạo trong D1 được ưu tiên hơn bản tĩnh khi có bản lưu.

Ngân hàng CEA201 từ [On Tap](https://on-tap.pages.dev/quiz?s=cea201) được nhập theo xác nhận quyền sử dụng của chủ website này. Dữ liệu được sắp theo 17 chương, giữ mã câu gốc để mở trực tiếp, ví dụ `/atlas?course=CEA201#q=444`. Khi cần cập nhật nguồn, chạy `node scripts/import-on-tap-cea201.mjs`, xem lại thay đổi và chạy `node scripts/generate-base.mjs`. Đáp án và lời giải của On Tap là học liệu tự luyện; hãy đối chiếu với slide và syllabus khi ôn thi.

PRF193 có thêm 8 bài và 16 câu tự luyện dựa trên `Slot_08_09_Modules_Functions.pptx` (71 slide). Các bài mới ghi phạm vi slide ở trường nguồn. Slide 68 ghi sai điều kiện năm nhuận; bản học trên website dùng công thức đúng và nêu rõ điểm cần tránh.

Nguồn mở bổ sung gồm OpenStax Calculus/University Physics, bài giảng MIT OpenCourseWare 18.06SC/6.004/6.012, GNU C Language Manual và Microsoft Learn C++. Có 4 ghi chú áp dụng cho mỗi môn (16 tổng cộng). Mỗi ghi chú là lời giải thích và ví dụ mới, gắn trực tiếp vào bài học cùng liên kết tới nguồn cụ thể. Nguồn mở giúp đào sâu; syllabus FLM và slide đúng lớp vẫn quyết định phạm vi học và kiểm tra.

## Chạy và kiểm tra

Yêu cầu Node.js 22.13 trở lên.

```bash
npm ci
npm run build
npx tsc --noEmit
```

`npm run build` cũng tạo lại `public/base-content.json`. Để triển khai lên Cloudflare Worker đã cấu hình:

```bash
npx wrangler deploy --config dist/server/wrangler.json
```

Cloudflare Worker dùng D1 binding `DB` và các secret của chế độ sáng tạo. Các secret, đặc biệt `GMAIL_APP_PASSWORD`, chỉ được cấu hình trong Cloudflare, không lưu vào Git. Không thêm `.env`, `.dev.vars`, dữ liệu đăng nhập hay token đặt lại mật khẩu vào repository.

## Tình trạng tích hợp

- Chế độ sáng tạo dùng mật khẩu riêng và có khôi phục mật khẩu qua Gmail.
- Đăng nhập Google cho người học chưa được triển khai; cần hoàn tất cấu hình OAuth Google Cloud trước khi thêm tính năng này.
- Một số chủ đề SDI101m dựa trên syllabus và học liệu nền tảng; chưa có đủ slide gốc trên máy để đối chiếu toàn bộ.
