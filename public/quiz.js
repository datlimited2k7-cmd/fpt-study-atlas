window.QUIZZES = {
  MAE101:[
    {q:'Để hàm f liên tục tại a, điều nào cần đúng?',o:['f(a) xác định và lim(x→a)f(x)=f(a)','Chỉ cần f(a) xác định','Chỉ cần giới hạn trái tồn tại','Đạo hàm tại a bằng 0'],a:0,e:'Liên tục đòi hỏi giá trị hàm và giới hạn hai phía trùng nhau.',s:'Tóm tắt MAE101, tr. 1–2'},
    {q:'Đạo hàm của (3x²+1)⁵ là gì?',o:['5(3x²+1)⁴','30x(3x²+1)⁴','6x(3x²+1)⁵','15x²(3x²+1)⁴'],a:1,e:'Dùng quy tắc hàm hợp: đạo hàm lớp ngoài nhân đạo hàm 3x²+1.',s:'Tóm tắt MAE101, tr. 2'},
    {q:'Hàng [0 0 | 1] trong ma trận mở rộng nói gì?',o:['Hệ có một nghiệm','Hệ có vô số nghiệm','Hệ vô nghiệm','Hệ thuần nhất'],a:2,e:'Hàng này tương đương phương trình 0=1.',s:'Tóm tắt MAE101, tr. 4'},
    {q:'Khi nào ma trận vuông A có nghịch đảo?',o:['det(A)=0','det(A)≠0','Mọi phần tử A khác 0','A có nhiều hàng hơn cột'],a:1,e:'Định thức khác 0 là điều kiện tương đương để ma trận vuông khả nghịch.',s:'Tóm tắt MAE101, tr. 5'},
    {q:'Theo định lý cơ bản của giải tích, ∫ₐᵇ f(x)dx bằng gì nếu F′=f?',o:['F(a)+F(b)','f(b)−f(a)','F(b)−F(a)','f′(b)−f′(a)'],a:2,e:'Lấy nguyên hàm F rồi tính giá trị ở cận trên trừ cận dưới.',s:'Tóm tắt MAE101, tr. 3–4'},
    {q:'Định lý giá trị trung bình khẳng định điều gì với hàm liên tục trên [a,b] và khả vi trên (a,b)?',o:['Luôn có f(a)=f(b)','Có c trong (a,b) sao cho f′(c)=[f(b)−f(a)]/(b−a)','Hàm luôn tăng','f′(x)=0 với mọi x'],a:1,e:'Tồn tại một tiếp tuyến có độ dốc bằng độ dốc dây cung nối hai đầu mút.',s:'FLM MAE101, CLO3'},
    {q:'Khi A là ma trận vuông khả nghịch, nghiệm duy nhất của Ax=b là?',o:['A+b','A⁻¹b','bA⁻¹','det(A)b'],a:1,e:'Nhân hai vế bên trái với A⁻¹ được x=A⁻¹b.',s:'FLM MAE101, CLO7'},
    {q:'Với u,v khác 0, điều kiện nào cho biết chúng vuông góc?',o:['u×v=0','u·v=0','||u||=||v||','u+v=0'],a:1,e:'Tích vô hướng bằng ||u||||v||cosθ, nên bằng 0 khi góc là 90°.',s:'FLM MAE101, CLO8'},
    {q:'Nếu A có 5 cột và rank(A)=3, nullity(A) bằng bao nhiêu?',o:['2','3','5','8'],a:0,e:'Định lý rank–nullity: rank + nullity = số cột, nên nullity=5−3=2.',s:'FLM MAE101, CLO9'}
  ],
  CEA201:[
    {q:'Bốn thành phần cấu trúc mức cao của máy tính gồm?',o:['CPU, RAM, I/O, liên kết hệ thống','CPU, compiler, IDE, I/O','Cache, SSD, HDD, OS','ALU, browser, mạng, ứng dụng'],a:0,e:'CPU xử lý, main memory lưu, I/O trao đổi với bên ngoài và interconnection nối chúng.',s:'CH01-COA11e.pptx'},
    {q:'Tính cục bộ thời gian nói về điều gì?',o:['Truy cập địa chỉ gần nhau','Dữ liệu vừa dùng có khả năng sớm được dùng lại','RAM giữ dữ liệu mãi mãi','CPU tăng xung theo thời gian'],a:1,e:'Temporal locality là xu hướng truy cập lại đơn vị bộ nhớ vừa được tham chiếu.',s:'CH04-COA11e.pptx'},
    {q:'AMAT thường được tính thế nào?',o:['Hit time + miss rate × miss penalty','Clock rate × hit rate','Miss penalty ÷ hit time','RAM size + cache size'],a:0,e:'Thời gian truy cập trung bình gồm thời gian hit và chi phí miss kỳ vọng.',s:'CH05-COA11e.pptx'},
    {q:'DMA hữu ích vì sao?',o:['Loại bỏ RAM','CPU không phải chuyển từng đơn vị dữ liệu','Thay thế hệ điều hành','Tăng kích thước thanh ghi'],a:1,e:'Bộ điều khiển DMA phụ trách truyền khối dữ liệu giữa thiết bị và bộ nhớ.',s:'CH08-COA11e.pptx'},
    {q:'Theo Amdahl, thêm lõi bị giới hạn mạnh nhất bởi phần nào?',o:['Phần chương trình tuần tự','Số bit của địa chỉ','Dung lượng ROM','Số cổng USB'],a:0,e:'Phần không thể song song hóa đặt trần cho mức tăng tốc.',s:'CH20-COA11e.pptx'},
    {q:'Cổng XOR cho đầu ra 1 trong trường hợp nào?',o:['Hai đầu vào giống nhau','Hai đầu vào khác nhau','Cả hai đều bằng 0','Luôn bằng 1'],a:1,e:'XOR biểu diễn phép hoặc loại trừ, bằng 1 khi chỉ một đầu vào bằng 1.',s:'CH12-COA11e.pptx; FLM CEA201 CLO6'},
    {q:'Toán hạng của lệnh dùng chế độ địa chỉ immediate nằm ở đâu?',o:['Trong chính lệnh','Chỉ trong ổ đĩa','Luôn ở địa chỉ do thanh ghi PC trỏ tới','Trong thiết bị I/O'],a:0,e:'Immediate chứa hằng số cần dùng ngay trong mã lệnh.',s:'CH14-COA11e.pptx; FLM CEA201 CLO7'},
    {q:'Trong kiểu RISC load/store, phép cộng thường thực hiện trên dữ liệu ở đâu?',o:['Trực tiếp trên hai ô nhớ','Trên thanh ghi','Trực tiếp trên ổ SSD','Trong bộ điều khiển I/O'],a:1,e:'Lệnh load/store chuyển dữ liệu giữa bộ nhớ và thanh ghi; phép tính thường dùng thanh ghi.',s:'CH17-COA11e.pptx; FLM CEA201 CLO8'},
    {q:'Vì sao hệ đa lõi cần cơ chế cache coherence?',o:['Để mọi lõi nhìn thấy dữ liệu chia sẻ nhất quán','Để bỏ hoàn toàn RAM','Để tăng số bit của mỗi byte','Để thay thế trình biên dịch'],a:0,e:'Các lõi có cache riêng nên bản sao của cùng dữ liệu phải được phối hợp khi có ghi.',s:'CH21-COA11e.pptx; FLM CEA201, nội dung xử lý song song'}
  ],
  PRF193:[
    {q:'int a = 5 / 2; cho a bằng bao nhiêu trong C/C++?',o:['2.5','3','2','Lỗi biên dịch'],a:2,e:'Hai toán hạng nguyên tạo kết quả chia nguyên, phần thập phân bị bỏ.',s:'[PRF193]-2. Fundamentals.pptx'},
    {q:'Chỉ số hợp lệ của mảng 10 phần tử là?',o:['1..10','0..10','0..9','−1..8'],a:2,e:'Mảng C/C++ bắt đầu tại 0, chỉ số cuối là kích thước trừ 1.',s:'[PRF193]-4. Data Handling.pptx'},
    {q:'Khác biệt chính giữa truyền giá trị và truyền tham chiếu?',o:['Truyền giá trị luôn nhanh hơn','Truyền tham chiếu có thể thay đổi biến gốc','Truyền tham chiếu tạo bản sao','Không có khác biệt'],a:1,e:'Tham số tham chiếu gắn với đối tượng được truyền vào.',s:'[PRF193]-5. Functions & Memory Management.pptx'},
    {q:'Từ khóa nào hỗ trợ dynamic dispatch trong C++?',o:['static','virtual','const','enum'],a:1,e:'Hàm virtual cho phép gọi phiên bản của lớp con qua con trỏ/tham chiếu lớp cha.',s:'[PRF193]-6.Object-Oriented Programming (OOP).pptx'},
    {q:'Container nào trong STL có thể tự mở rộng như mảng động?',o:['vector','enum','struct','char[] cố định'],a:0,e:'std::vector quản lý kích thước và cấp phát khi thêm phần tử.',s:'[PRF193]-7. Advanced Topics.pptx'},
    {q:'Muốn đọc một bản ghi ở vị trí bất kỳ trong file nhị phân C++, thao tác nào phù hợp?',o:['Dịch con trỏ đọc bằng seekg','Chỉ gọi cout','Xóa toàn bộ file','Chỉ đổi tên biến'],a:0,e:'seekg đưa vị trí đọc đến offset cần thiết trước khi gọi read.',s:'FLM PRF193 ID 13190, CLO5; [PRF193]-7. Advanced Topics.pptx'},
    {q:'Bước nào thuộc tư duy tính toán trước khi viết chương trình?',o:['Phân rã bài toán và mô hình hóa dữ liệu','Chỉ sao chép đáp án AI','Bỏ kiểm thử','Chạy chương trình khi chưa biên dịch'],a:0,e:'Phân rã và mô hình hóa giúp xác định đầu vào, đầu ra và các bước giải trước khi code; kết quả AI vẫn cần kiểm tra.',s:'FLM PRF193 ID 13190, CLO6'}
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
    {q:'Thiết bị nào chủ yếu chuyển ánh sáng thành tín hiệu điện?',o:['LED','Photodiode','Cuộn cảm','Điện trở thuần'],a:1,e:'Photodiode tạo dòng quang khi hấp thụ photon.',s:'Syllabus SDI101m, buổi 43–44; Streetman & Banerjee, ch. 8'},
    {q:'Trước khi đổi dây nối trong bài lab RLC, thao tác an toàn nào cần làm?',o:['Ngắt nguồn điện','Tăng điện áp lên tối đa','Chạm tay vào cả hai cực nguồn','Bỏ qua sơ đồ mạch'],a:0,e:'Ngắt nguồn trước khi thay đổi sơ đồ kết nối giúp giảm rủi ro chập mạch và điện giật.',s:'FLM SDI101m ID 12239, CLO2; quy tắc an toàn điện cơ bản'},
    {q:'Để kiểm chứng đặc tuyến của diode, dữ liệu nào cần đo ở nhiều mức phân cực?',o:['Cặp điện áp và dòng điện','Chỉ màu vỏ diode','Chỉ khối lượng diode','Tên của nhà sản xuất'],a:0,e:'Đo các cặp V–I rồi vẽ đồ thị cho thấy sự khác biệt giữa phân cực thuận và ngược.',s:'FLM SDI101m ID 12239, CLO4'}
  ]
};
