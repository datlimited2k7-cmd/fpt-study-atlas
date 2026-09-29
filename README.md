# FPT Study Atlas

Website học tập cho MAE101, CEA201, PRF192, PRF193, SSA101 và SDI101m. Bản đang chạy: <https://fpt-study-atlas.luwy21643.workers.dev/atlas>.

## Cấu trúc chính

| Vị trí | Vai trò |
| --- | --- |
| `public/data.js` | Danh sách môn, chương và nội dung tóm tắt gốc |
| `public/lesson-guides.js` | Phần giải thích, ví dụ, lỗi thường gặp và bài tự luyện |
| `public/quiz.js`, `public/quiz-expansions.js` | Câu hỏi trắc nghiệm và lời giải |
| `public/quiz-slot08-09.js` | 16 câu tự luyện từ slide mô đun và hàm C của PRF193 |
| `public/cea201-on-tap.js` | 497 câu CEA201 từ On Tap, gồm 7 câu nhiều đáp án |
| `public/app.js`, `public/atlas.html`, `public/styles.css` | Giao diện trang học |
| `public/creator-editor.js`, `app/creator/` | Chế độ sáng tạo để sửa nội dung |
| `app/api/`, `lib/`, `drizzle/` | API, xác thực và cơ sở dữ liệu Cloudflare D1 |

`scripts/generate-base.mjs` kết hợp dữ liệu từ các tệp JavaScript thành `public/base-content.json`. Chạy lại lệnh này sau khi sửa bài học hoặc câu hỏi. Nội dung lưu từ chế độ sáng tạo trong D1 được ưu tiên hơn bản tĩnh khi có bản lưu.

Ngân hàng từ repo `chenbaode/on-tap` gồm CEA201 497, MAE101 669, PRF192 462, PRF193 300, SSA101 128 và SDI101m 50 câu. Giữ nguyên mã câu, chương/đề, lời giải, hình, công thức và đáp án thay thế. Hai lựa chọn trống trong nguồn PRF192 (câu 109 và 612) được ghi rõ `[Lựa chọn trống trong nguồn]`. Các bài học và câu hỏi Atlas tự biên soạn vẫn được giữ. PRF192 và SSA101 được bổ sung thành hai môn riêng.

Cập nhật từ checkout đã xác minh của nguồn:

```sh
node scripts/import-on-tap.mjs ../on-tap
node scripts/generate-base.mjs
node scripts/test-on-tap.mjs
```

Revision và SHA-256 nguồn nằm trong `public/on-tap-manifest.json`. Lệnh import thay thế bản nhập được sinh tự động, không nối trùng sau mỗi lần chạy. Mã câu có thể mở trực tiếp bằng `/atlas?course=MAE101#q=8005`. Nội dung người sáng tạo đã lưu được ưu tiên; bộ nạp chỉ thêm câu On Tap có mã chưa tồn tại trong bản lưu. Không sửa hoặc xóa D1 khi triển khai. KaTeX được phục vụ từ `public/vendor/katex` cùng giấy phép MIT.

PRF193 có thêm 8 bài và 16 câu tự luyện dựa trên `Slot_08_09_Modules_Functions.pptx` (71 slide). Các bài mới ghi phạm vi slide ở trường nguồn. Slide 68 ghi sai điều kiện năm nhuận; bản học trên website dùng công thức đúng và nêu rõ điểm cần tránh.

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
