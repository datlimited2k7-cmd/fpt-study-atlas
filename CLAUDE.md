# Hướng dẫn sửa FPT Study Atlas

- Đọc `README.md` để hiểu cấu trúc và trạng thái tích hợp hiện tại.
- Sửa bài học trong `public/data.js` hoặc `public/lesson-guides.js`; sửa câu hỏi gốc trong `public/quiz.js` hoặc `public/quiz-expansions.js`. Chuyên đề PRF193 từ `Slot_08_09_Modules_Functions.pptx` nằm trong `public/lesson-guides.js` và `public/quiz-slot08-09.js`. Bộ 2.106 câu On Tap nằm ở `public/on-tap-sync.js`; dùng `node scripts/import-on-tap.mjs ../on-tap` từ checkout nguồn và kiểm tra bằng `node scripts/test-on-tap.mjs`. Sau đó chạy `node scripts/generate-base.mjs` và đưa `public/base-content.json` mới vào cùng commit.
- Giữ sáu mã môn MAE101, CEA201, PRF192, PRF193, SSA101, SDI101m. Mỗi bài nên có giải thích rõ giả thiết, ví dụ có lời giải, lỗi dễ mắc, bài tự luyện và đáp án. Phân biệt nội dung từ syllabus/slide với phần tự biên soạn.
- Khi sửa giao diện, kiểm tra `public/app.js`, `public/atlas.html`, `public/styles.css` và giao diện chế độ sáng tạo nếu thay đổi cấu trúc bài học.
- Nội dung từ chế độ sáng tạo có thể được lưu trong Cloudflare D1 và ghi đè bản tĩnh. Không xóa hoặc thay thế dữ liệu D1 chỉ để cập nhật mã nguồn.
- Chạy `npm run build` và `npx tsc --noEmit` trước khi triển khai.
- Không commit mật khẩu, khóa API, `.env`, `.dev.vars` hoặc mã trong liên kết đặt lại mật khẩu. Secret của Worker được quản lý riêng trên Cloudflare.
