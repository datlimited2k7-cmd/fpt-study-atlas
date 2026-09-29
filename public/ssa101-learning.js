(function () {
  const pdf = '/resources/learning-to-learn-online-vi.pdf';
  const source = (pages) => `Learning to Learn Online · bản dịch tiếng Việt, tr. ${pages}`;
  const lesson = (title, idea, details, key, example, pitfall, practice, answer, pages) => ({
    title, idea, details, key, example, pitfall, practice, answer,
    source: source(pages), resourceUrl: `${pdf}#page=${String(pages).split('–')[0]}`,
    supplementalSource: 'learning-online-pdf'
  });
  const group = {
    name: 'Học trực tuyến theo tài liệu PDF',
    items: [
      lesson(
        '1. Tự định hướng và siêu nhận thức',
        'Người học tự đặt mục tiêu, theo dõi cách học và điều chỉnh sau phản hồi.',
        'Bắt đầu bằng mục tiêu cụ thể cho tuần và từng bài. Dùng chu trình Lập kế hoạch → Theo dõi → Đánh giá: chọn cách học, tự kiểm tra khi đang làm, rồi so kết quả với mục tiêu. Khi chưa hiểu, ghi câu hỏi và chủ động tìm hỗ trợ từ giảng viên hoặc bạn học. Đây là kỹ năng siêu nhận thức, không chỉ là hoàn thành danh sách việc.',
        'Lập kế hoạch → Theo dõi → Đánh giá → Điều chỉnh',
        'Đặt mục tiêu “giải được 5 bài vòng lặp”. Sau 2 bài, tự giải thích điều kiện dừng. Nếu còn sai, xem lại ví dụ và đổi cách luyện trước khi làm tiếp.',
        'Đánh dấu “đã đọc” không chứng minh đã hiểu; hãy tự giải thích hoặc làm bài khi không nhìn tài liệu.',
        'Nêu một mục tiêu học cụ thể cho tuần này và một cách kiểm tra bạn đã đạt mục tiêu.',
        'Ví dụ: “Đến thứ sáu, tự giải được 4/5 bài hàm C”; kiểm tra bằng bài mới, không nhìn lời giải.',
        '4'
      ),
      lesson(
        '2. Cộng đồng học tập và làm việc nhóm',
        'Học trực tuyến vẫn cần trao đổi với bạn học và giảng viên.',
        'Một nhóm hiệu quả có mục tiêu chung, vai trò rõ, thời hạn và cách liên lạc đã thống nhất. Chia việc kèm người phụ trách và mốc kiểm tra; dành thời gian ghép và sửa sản phẩm. Khi hỏi giảng viên, mô tả câu hỏi cụ thể và việc mình đã thử. Nếu trễ tiến độ, báo sớm để cả nhóm điều chỉnh.',
        'Mục tiêu chung + vai trò + thời hạn + phản hồi',
        'Nhóm làm báo cáo 4 người: một người lập dàn ý, hai người tìm và kiểm tra nguồn, một người ghép bản nháp. Cả nhóm cùng đọc lại trước hạn nộp.',
        'Chia đều số trang nhưng không thống nhất nội dung và mốc ghép bài có thể tạo báo cáo rời rạc.',
        'Một thành viên chưa xong phần việc trước hạn một ngày. Nhóm nên làm gì?',
        'Hỏi rõ phần còn thiếu, điều chỉnh phân công nếu cần và thống nhất mốc hoàn thành mới trước khi ghép bài.',
        '5–6'
      ),
      lesson(
        '3. Lập lịch học và quản lý nhiệm vụ',
        'Dùng đề cương và hạn nộp để lập lịch từ cả học kỳ đến từng ngày.',
        'Ghi hạn bài tập và ngày kiểm tra từ đề cương vào lịch. Lùi từ hạn cuối để có các mốc đọc đề, tìm tài liệu, làm bản nháp, sửa và nộp. Mỗi tuần dành thời gian cố định cho môn học, chừa giờ nghỉ và dự phòng. Việc mỗi ngày nên là hành động bắt đầu được ngay, chẳng hạn “giải 2 bài”, thay vì “học chăm hơn”.',
        'Hạn cuối → mốc trung gian → việc tuần → việc ngày',
        'Bài nộp tối thứ sáu: đọc rubric thứ hai, lập dàn ý thứ ba, viết thứ tư, kiểm tra thứ năm và nộp trước hạn vào thứ sáu.',
        'Lịch kín toàn bộ thời gian không có chỗ cho bài khó hoặc việc phát sinh.',
        'Một bài hạn sau 5 ngày: hãy nêu ít nhất ba mốc trung gian.',
        'Ví dụ: ngày 1 đọc đề và rubric; ngày 2–3 làm bản nháp; ngày 4 sửa và kiểm tra; ngày 5 nộp.',
        '6–7'
      ),
      lesson(
        '4. Giao tiếp học thuật trực tuyến',
        'Email và diễn đàn học tập cần rõ mục đích, đủ ngữ cảnh và tôn trọng người đọc.',
        'Email cho giảng viên nên có tiêu đề cụ thể, lời chào, câu hỏi ngắn gọn, thông tin môn/bài, điều đã thử và tên người gửi. Trong diễn đàn, đọc yêu cầu trước khi đăng, nêu luận điểm và căn cứ; khi phản hồi, bổ sung lý do hoặc ví dụ. Phản hồi cho bạn học tập trung vào sản phẩm và gợi ý cải thiện.',
        'Nêu vấn đề + ngữ cảnh + việc đã thử + câu hỏi cụ thể',
        'Thay “Thầy ơi em không hiểu” bằng “Em đang làm bài hàm C, đã thử khai báo prototype trước main nhưng còn lỗi liên kết. Em cần kiểm tra bước biên dịch nào?”',
        'Viết toàn chữ hoa, thiếu tiêu đề hoặc gửi ảnh lỗi không có ngữ cảnh khiến người nhận khó hỗ trợ.',
        'Viết một tiêu đề email rõ ràng để hỏi về tiêu chí chấm bài nhóm.',
        'Ví dụ: “SSA101 – hỏi về tiêu chí nguồn tham khảo trong bài nhóm tuần 4”.',
        '7'
      ),
      lesson(
        '5. Đọc đề bài, rubric và phản hồi',
        'Hiểu mục tiêu và tiêu chí chấm trước khi làm; dùng phản hồi để cải thiện bài sau.',
        'Đọc động từ yêu cầu trong đề: “mô tả”, “so sánh”, “phân tích” và “đánh giá” đòi mức xử lý khác nhau. Biến từng tiêu chí trong rubric thành việc kiểm tra được. Trước khi nộp, đối chiếu sản phẩm với rubric. Sau khi được nhận xét, chọn một thay đổi cụ thể để áp dụng ở bài tiếp theo.',
        'Đề bài → mục tiêu → rubric → bản nháp → tự kiểm → phản hồi',
        'Nếu rubric yêu cầu so sánh hai phương pháp và dẫn chứng, bài chỉ liệt kê định nghĩa là chưa đủ. Thêm điểm giống/khác và ví dụ có nguồn.',
        'Điểm số cho biết kết quả; nhận xét và rubric giúp xác định nguyên nhân cần sửa.',
        'Rubric yêu cầu “đánh giá độ tin cậy của nguồn”. Bạn sẽ kiểm tra những gì?',
        'Kiểm tra tác giả/tổ chức, ngày công bố, dẫn chứng, mục đích và sự phù hợp với câu hỏi.',
        '7–8'
      ),
      lesson(
        '6. Đọc có chiến lược với SQ3R',
        'Đọc để trả lời câu hỏi học tập thay vì chỉ đi hết số trang.',
        'SQ3R gồm Survey (khảo sát cấu trúc), Question (đặt câu hỏi), Read (đọc tìm câu trả lời), Recite (đóng tài liệu và nhắc lại bằng lời mình), Review (ôn và kiểm tra phần còn hổng). Với bài báo học thuật, xem tiêu đề, tóm tắt, mục, hình và kết luận trước khi đọc sâu phần liên quan; phân biệt kết quả nghiên cứu với cách tác giả diễn giải.',
        'SQ3R = Khảo sát → Đặt câu hỏi → Đọc → Nhắc lại → Ôn tập',
        'Trước một chương về con trỏ, xem tiêu đề và hình, hỏi “&x khác *p thế nào?”, đọc để trả lời, đóng tài liệu tự giải thích rồi quay lại sửa chỗ sai.',
        'Chỉ tô màu hoặc chép lại đoạn văn chưa phải bước Recite; bước này cần tự nhớ khi không nhìn bản gốc.',
        'Sau bước Read của SQ3R, bước nào giúp tự kiểm tra khả năng nhớ?',
        'Recite: đóng tài liệu rồi tự nói hoặc viết lại ý chính bằng lời của mình.',
        '8–9'
      ),
      lesson(
        '7. Ghi chú và ôn lại việc học',
        'Ghi chú để tổ chức ý và câu hỏi, rồi quay lại kiểm tra mục tiêu ban đầu.',
        'Ghi ý chính, từ khóa, ví dụ, điều chưa hiểu và nguồn để tìm lại; không cần chép nguyên trang. Sau buổi học, thử nhớ lại nội dung trước khi xem ghi chú, rồi đánh dấu câu hỏi chưa trả lời. Cuối tuần so tiến độ với mục tiêu và điều chỉnh lịch hoặc cách học.',
        'Ghi ý chính → tự nhớ lại → tìm chỗ hổng → ôn đúng phần hổng',
        'Sau bài về ma trận, ghi ba điều kiện nhân ma trận, một ví dụ 2×3 nhân 3×1 và một câu hỏi về thứ tự AB so với BA. Hôm sau tự trả lời trước khi mở ghi chú.',
        'Một bản chép dài không có cấu trúc có thể khó dùng khi cần ôn nhanh.',
        'Ghi chú ngắn về một bài học cần có những thành phần nào?',
        'Ít nhất: ý chính, ví dụ, câu hỏi chưa rõ và nguồn/trang để tra lại.',
        '9'
      )
    ]
  };

  window.applySsa101Learning = function () {
    const course = window.COURSES?.SSA101;
    if (!course) return;
    course.resources = [{ label: 'Learning to Learn Online · bản dịch tiếng Việt (PDF, 10 trang)', url: pdf,
      description: 'Bản tóm lược tiếng Việt do bạn cung cấp; tài liệu ghi nguồn gốc là KPU Learning Centres (2018). Dùng để học thêm, chưa thay thế đề cương lớp.' }];
    course.scope = 'Chỉ mục On Tap và 7 bài học trực tuyến từ PDF bạn cung cấp';
    if (!course.groups.some(existing => existing.name === group.name)) course.groups.push(group);
  };
  window.applySsa101Learning();
})();
