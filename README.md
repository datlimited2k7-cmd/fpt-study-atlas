# FPT Study Atlas

Website học tập cho MAE101, CEA201, PRF193 và SDI101m. Bản đang chạy: <https://fpt-study-atlas.luwy21643.workers.dev/atlas>.

## Cấu trúc chính

| Vị trí | Vai trò |
| --- | --- |
| `public/data.js` | Danh sách môn, chương và nội dung tóm tắt gốc |
| `public/lesson-guides.js` | Phần giải thích, ví dụ, lỗi thường gặp và bài tự luyện |
| `public/quiz.js`, `public/quiz-expansions.js` | Câu hỏi trắc nghiệm và lời giải |
| `public/cea201-on-tap.js` | 497 câu CEA201 từ On Tap, gồm 7 câu nhiều đáp án |
| `public/app.js`, `public/atlas.html`, `public/styles.css` | Giao diện trang học |
| `public/creator-editor.js`, `app/creator/` | Chế độ sáng tạo để sửa nội dung |
| `app/api/`, `lib/`, `drizzle/` | API, xác thực và cơ sở dữ liệu Cloudflare D1 |

`scripts/generate-base.mjs` kết hợp dữ liệu từ các tệp JavaScript thành `public/base-content.json`. Chạy lại lệnh này sau khi sửa bài học hoặc câu hỏi. Nội dung lưu từ chế độ sáng tạo trong D1 được ưu tiên hơn bản tĩnh khi có bản lưu.

Ngân hàng CEA201 từ [On Tap](https://on-tap.pages.dev/quiz?s=cea201) được nhập theo xác nhận quyền sử dụng của chủ website này. Dữ liệu được sắp theo 17 chương, giữ mã câu gốc để mở trực tiếp, ví dụ `/atlas?course=CEA201#q=444`. Khi cần cập nhật nguồn, chạy `node scripts/import-on-tap-cea201.mjs`, xem lại thay đổi và chạy `node scripts/generate-base.mjs`. Đáp án và lời giải của On Tap là học liệu tự luyện; hãy đối chiếu với slide và syllabus khi ôn thi.

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
