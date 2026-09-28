window.QUIZZES = {
  MAE101:[
    {q:'Để hàm f liên tục tại a, điều nào cần đúng?',o:['f(a) xác định và lim(x→a)f(x)=f(a)','Chỉ cần f(a) xác định','Chỉ cần giới hạn trái tồn tại','Đạo hàm tại a bằng 0'],a:0,e:'Liên tục đòi hỏi giá trị hàm và giới hạn hai phía trùng nhau.',s:'Tóm tắt MAE101, tr. 1–2'},
    {q:'Đạo hàm của (3x²+1)⁵ là gì?',o:['5(3x²+1)⁴','30x(3x²+1)⁴','6x(3x²+1)⁵','15x²(3x²+1)⁴'],a:1,e:'Dùng quy tắc hàm hợp: đạo hàm lớp ngoài nhân đạo hàm 3x²+1.',s:'Tóm tắt MAE101, tr. 2'},
    {q:'Hàng [0 0 | 1] trong ma trận mở rộng nói gì?',o:['Hệ có một nghiệm','Hệ có vô số nghiệm','Hệ vô nghiệm','Hệ thuần nhất'],a:2,e:'Hàng này tương đương phương trình 0=1.',s:'Tóm tắt MAE101, tr. 4'},
    {q:'Khi nào ma trận vuông A có nghịch đảo?',o:['det(A)=0','det(A)≠0','Mọi phần tử A khác 0','A có nhiều hàng hơn cột'],a:1,e:'Định thức khác 0 là điều kiện tương đương để ma trận vuông khả nghịch.',s:'Tóm tắt MAE101, tr. 5'},
    {q:'Theo định lý cơ bản của giải tích, ∫ₐᵇ f(x)dx bằng gì nếu F′=f?',o:['F(a)+F(b)','f(b)−f(a)','F(b)−F(a)','f′(b)−f′(a)'],a:2,e:'Lấy nguyên hàm F rồi tính giá trị ở cận trên trừ cận dưới.',s:'Tóm tắt MAE101, tr. 3–4'}
  ],
  CEA201:[
    {q:'Bốn thành phần cấu trúc mức cao của máy tính gồm?',o:['CPU, RAM, I/O, liên kết hệ thống','CPU, compiler, IDE, I/O','Cache, SSD, HDD, OS','ALU, browser, mạng, ứng dụng'],a:0,e:'CPU xử lý, main memory lưu, I/O trao đổi với bên ngoài và interconnection nối chúng.',s:'CH01-COA11e.pptx'},
    {q:'Tính cục bộ thời gian nói về điều gì?',o:['Truy cập địa chỉ gần nhau','Dữ liệu vừa dùng có khả năng sớm được dùng lại','RAM giữ dữ liệu mãi mãi','CPU tăng xung theo thời gian'],a:1,e:'Temporal locality là xu hướng truy cập lại đơn vị bộ nhớ vừa được tham chiếu.',s:'CH04-COA11e.pptx'},
    {q:'AMAT thường được tính thế nào?',o:['Hit time + miss rate × miss penalty','Clock rate × hit rate','Miss penalty ÷ hit time','RAM size + cache size'],a:0,e:'Thời gian truy cập trung bình gồm thời gian hit và chi phí miss kỳ vọng.',s:'CH05-COA11e.pptx'},
    {q:'DMA hữu ích vì sao?',o:['Loại bỏ RAM','CPU không phải chuyển từng đơn vị dữ liệu','Thay thế hệ điều hành','Tăng kích thước thanh ghi'],a:1,e:'Bộ điều khiển DMA phụ trách truyền khối dữ liệu giữa thiết bị và bộ nhớ.',s:'CH08-COA11e.pptx'},
    {q:'Theo Amdahl, thêm lõi bị giới hạn mạnh nhất bởi phần nào?',o:['Phần chương trình tuần tự','Số bit của địa chỉ','Dung lượng ROM','Số cổng USB'],a:0,e:'Phần không thể song song hóa đặt trần cho mức tăng tốc.',s:'CH20-COA11e.pptx'}
  ],
  PRF193:[
    {q:'int a = 5 / 2; cho a bằng bao nhiêu trong C/C++?',o:['2.5','3','2','Lỗi biên dịch'],a:2,e:'Hai toán hạng nguyên tạo kết quả chia nguyên, phần thập phân bị bỏ.',s:'[PRF193]-2. Fundamentals.pptx'},
    {q:'Chỉ số hợp lệ của mảng 10 phần tử là?',o:['1..10','0..10','0..9','−1..8'],a:2,e:'Mảng C/C++ bắt đầu tại 0, chỉ số cuối là kích thước trừ 1.',s:'[PRF193]-4. Data Handling.pptx'},
    {q:'Khác biệt chính giữa truyền giá trị và truyền tham chiếu?',o:['Truyền giá trị luôn nhanh hơn','Truyền tham chiếu có thể thay đổi biến gốc','Truyền tham chiếu tạo bản sao','Không có khác biệt'],a:1,e:'Tham số tham chiếu gắn với đối tượng được truyền vào.',s:'[PRF193]-5. Functions & Memory Management.pptx'},
    {q:'Từ khóa nào hỗ trợ dynamic dispatch trong C++?',o:['static','virtual','const','enum'],a:1,e:'Hàm virtual cho phép gọi phiên bản của lớp con qua con trỏ/tham chiếu lớp cha.',s:'[PRF193]-6.Object-Oriented Programming (OOP).pptx'},
    {q:'Container nào trong STL có thể tự mở rộng như mảng động?',o:['vector','enum','struct','char[] cố định'],a:0,e:'std::vector quản lý kích thước và cấp phát khi thêm phần tử.',s:'[PRF193]-7. Advanced Topics.pptx'}
  ],
  SDI101m:[
    {q:'Khoảng cách hai điện tích điểm tăng gấp đôi thì lực Coulomb còn?',o:['1/2','1/4','2 lần','4 lần'],a:1,e:'Độ lớn lực tỉ lệ nghịch với bình phương khoảng cách.',s:'#2. Coulomb Law.pptx'},
    {q:'Mặt Gauss nào thuận lợi cho điện tích điểm?',o:['Mặt cầu đồng tâm','Hình hộp lệch tâm bất kỳ','Mặt phẳng hở','Đường tròn hở'],a:0,e:'Đối xứng cầu làm E cùng độ lớn trên mặt cầu đồng tâm.',s:'#4. Gauss Law.pptx'},
    {q:'Đơn vị của điện dung là?',o:['Ohm','Ampere','Farad','Tesla'],a:2,e:'Điện dung C=Q/V có đơn vị Coulomb/Volt, gọi là Farad.',s:'#6. Capacitance.pptx'},
    {q:'Với mạch RC, hằng số thời gian bằng?',o:['R/C','RC','C/R','1/(RC)'],a:1,e:'τ=RC; nó đặc trưng tốc độ nạp hoặc xả tụ.',s:'#8. Electric Circuit.pptx'},
    {q:'Hạt mang điện bay song song với B chịu lực từ bằng?',o:['qvB','0','qB/v','v/B'],a:1,e:'F=qvB sinθ và θ=0 khi v song song B.',s:'#9. Magnetic Field.pptx'},
    {q:'Pha tạp donor vào silicon thường tạo loại bán dẫn nào?',o:['Loại n','Loại p','Chất cách điện hoàn toàn','Kim loại tinh khiết'],a:0,e:'Donor cung cấp electron; electron trở thành hạt tải đa số.',s:'Syllabus SDI101m, buổi 26; Streetman & Banerjee, ch. 3'},
    {q:'Vùng nghèo của tiếp giáp p–n thường thay đổi thế nào khi phân cực ngược mạnh hơn?',o:['Hẹp lại','Rộng ra','Biến mất','Không đổi trong mọi trường hợp'],a:1,e:'Phân cực ngược làm tăng rào thế và mở rộng vùng nghèo.',s:'Syllabus SDI101m, buổi 31–34; Streetman & Banerjee, ch. 5'},
    {q:'Điện áp nào điều khiển kênh của MOSFET?',o:['Gate–source','Chỉ điện áp trên điện trở tải','Điện áp pin CMOS','Điện áp tần số'],a:0,e:'Điện trường từ gate, so với source, chi phối sự hình thành kênh.',s:'Syllabus SDI101m, buổi 38–40; Streetman & Banerjee, ch. 6'},
    {q:'Trong cổng đảo CMOS, cặp linh kiện điển hình là?',o:['Hai điện trở','Một pMOS và một nMOS','Một diode và một cuộn cảm','Hai tụ điện'],a:1,e:'CMOS dùng transistor kênh p và kênh n bổ sung nhau.',s:'Syllabus SDI101m, buổi 45–46; Streetman & Banerjee, ch. 9'},
    {q:'Thiết bị nào chủ yếu chuyển ánh sáng thành tín hiệu điện?',o:['LED','Photodiode','Cuộn cảm','Điện trở thuần'],a:1,e:'Photodiode tạo dòng quang khi hấp thụ photon.',s:'Syllabus SDI101m, buổi 43–44; Streetman & Banerjee, ch. 8'}
  ]
};
