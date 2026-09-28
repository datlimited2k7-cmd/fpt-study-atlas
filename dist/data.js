// Tóm lược bằng lời mới từ bộ slide người học đang có trên máy. Mỗi mục giữ tên tài liệu để đối chiếu.
const row = (title, idea, details, key, example, source) => ({title, idea, details, key, example, source});
window.COURSES = {
  MAE101: {
    name: 'Toán cho ngành kỹ thuật', en: 'Mathematics for Engineering', accent: '#5a58cc',
    scope: 'Giải tích một biến và đại số tuyến tính',
    sourceNote: 'Dựa trên Tom_Tat_Calculus_LinearAlgebra.md/pdf trên máy và đối chiếu danh mục môn học do giảng viên FPT công bố. Chưa có bản syllabus FLM đúng lớp để xác nhận lịch kiểm tra.',
    sourceLink: 'https://sites.google.com/site/thiminhphuongvu/enseignement-teaching/fpt-university',
    groups: [
      {name:'Giải tích', items:[
        row('Hàm số và đồ thị','Hàm gán mỗi đầu vào hợp lệ đúng một đầu ra.','Xác định miền xác định trước khi biến đổi; nhận diện hàm đa thức, hữu tỉ, lượng giác, mũ, log, hàm hợp và hàm ngược. Đọc tính chẵn lẻ, đơn điệu và biến đổi đồ thị.','f⁻¹(f(x)) = x trên miền thích hợp','Với f(x)=1/(x−2), x=2 bị loại khỏi miền xác định.','Tóm tắt MAE101, tr. 1'),
        row('Giới hạn và liên tục','Giới hạn mô tả giá trị mà hàm tiến tới khi đầu vào tiến gần một điểm.','So sánh giới hạn trái và phải; dùng các quy tắc giới hạn và định lý kẹp. Liên tục tại a cần f(a) xác định và lim f(x)=f(a).','lim(x→0) sin(x)/x = 1','Hàm bị “lỗ” tại x=a có thể có giới hạn dù chưa liên tục tại a.','Tóm tắt MAE101, tr. 1–2'),
        row('Đạo hàm','Đạo hàm là tốc độ thay đổi tức thời và độ dốc tiếp tuyến.','Từ định nghĩa giới hạn suy ra các quy tắc tổng, tích, thương và hàm hợp. Cần phân biệt đạo hàm hàm ẩn, mũ, log và lượng giác.','(f∘g)′(x)=f′(g(x))g′(x)','Nếu y=(3x²+1)⁵ thì y′=5(3x²+1)⁴·6x.','Tóm tắt MAE101, tr. 2'),
        row('Ứng dụng đạo hàm','Dấu đạo hàm giúp đọc hình dạng đồ thị và tìm tối ưu.','Tìm điểm tới hạn, xét dấu f′ và f″; giải related rates, xấp xỉ tuyến tính và phương pháp Newton. Kiểm tra điều kiện định lý giá trị trung bình trước khi áp dụng.','xₙ₊₁=xₙ−f(xₙ)/f′(xₙ)','Tối ưu diện tích cần viết diện tích thành hàm một biến theo ràng buộc.','Tóm tắt MAE101, tr. 2–3'),
        row('Tích phân xác định','Tích phân cộng vô số phần rất nhỏ thành tổng thay đổi.','Từ tổng Riemann đến định lý cơ bản của giải tích. Phân biệt nguyên hàm, tích phân xác định và ý nghĩa diện tích có dấu.','∫ₐᵇ f(x)dx=F(b)−F(a)','Nếu vận tốc v(t), ∫v(t)dt trên một khoảng cho độ dời.','Tóm tắt MAE101, tr. 3–4'),
        row('Kỹ thuật tích phân','Chọn phép đổi biến hoặc từng phần theo cấu trúc biểu thức.','Đổi biến cho hàm hợp kèm đạo hàm trong biểu thức; từng phần cho tích hai yếu tố. Tích phân suy rộng phải dùng giới hạn; xấp xỉ số dùng hình thang hoặc Simpson.','∫u dv=uv−∫v du','∫2x cos(x²)dx: đặt u=x².','Tóm tắt MAE101, tr. 3–4')
      ]},
      {name:'Đại số tuyến tính', items:[
        row('Hệ phương trình tuyến tính','Viết hệ thành Ax=b để nhìn quan hệ giữa phương trình và ẩn.','Biến đổi hàng sơ cấp đưa ma trận mở rộng về dạng bậc thang; pivot và biến tự do cho biết hệ vô nghiệm, một nghiệm hoặc vô số nghiệm.','[A|b] → REF/RREF','Hàng [0 0 | 1] báo hệ vô nghiệm.','Tóm tắt MAE101, tr. 4'),
        row('Ma trận và phép biến đổi','Ma trận vừa là bảng số vừa biểu diễn ánh xạ tuyến tính.','Luyện kích thước khi nhân ma trận, chuyển vị, nghịch đảo và tác động lên vectơ. Thứ tự nhân thường không đổi được.','(AB)⁻¹=B⁻¹A⁻¹ khi A,B khả nghịch','Ma trận 2×3 nhân ma trận 3×1 cho vectơ 2×1.','Tóm tắt MAE101, tr. 5'),
        row('Định thức, trị riêng, chéo hóa','Định thức kiểm tra khả nghịch; trị riêng mô tả hướng chỉ bị co giãn.','Tính định thức bằng khai triển hoặc biến đổi hàng; giải det(A−λI)=0 rồi tìm vectơ riêng. Chéo hóa cần đủ vectơ riêng độc lập.','Av=λv; A=PDP⁻¹','Nếu det(A)=0 thì A không có nghịch đảo.','Tóm tắt MAE101, tr. 5–6'),
        row('Hình học vectơ','Tích vô hướng đo góc; tích có hướng dựng vectơ vuông góc.','Tính độ dài, góc, hình chiếu và quan hệ đường thẳng, mặt phẳng bằng vectơ. Kiểm tra chiều và đơn vị của mỗi phép toán.','u·v=||u||||v||cosθ','u·v=0 với u,v khác 0 nghĩa là vuông góc.','Tóm tắt MAE101, tr. 6'),
        row('Không gian Rⁿ và cơ sở','Tổ hợp tuyến tính, span, độc lập tuyến tính dẫn tới cơ sở và chiều.','Nhận biết không gian con bằng tính đóng dưới cộng và nhân vô hướng; liên hệ rank, null space và số biến tự do.','rank(A)+nullity(A)=số cột của A','Hai vectơ không cùng phương tạo cơ sở cho R².','Tóm tắt MAE101, tr. 6–7')
      ]}
    ]
  },
  CEA201: {
    name: 'Tổ chức và kiến trúc máy tính', en: 'Computer Organization and Architecture', accent:'#db7c33',
    scope:'21 chương trong bộ slide COA 11th Edition đang có trên máy',
    sourceNote:'Đã lập chỉ mục đủ 21 bộ slide (863 trang). Bộ slide là tài liệu học, chưa chứng minh tất cả chương đều nằm trong đề thi của lớp hiện tại.',
    sourceLink:'https://flm.fpt.edu.vn/login',
    groups:[
      {name:'Nền tảng & hiệu năng',items:[
        row('1. Khái niệm và tiến hóa','Architecture mô tả hành vi nhìn thấy bởi lập trình viên; organization nói cách phần cứng hiện thực nó.','Bốn chức năng máy tính: xử lý, lưu trữ, di chuyển dữ liệu và điều khiển. CPU, bộ nhớ, I/O và liên kết hệ thống tạo cấu trúc mức cao.','CPU = control unit + ALU + registers','Cùng ISA vẫn có thể có các đời CPU với tổ chức bên trong khác nhau.','CH01-COA11e.pptx'),
        row('2. Hiệu năng','Tốc độ phụ thuộc đồng thời vào thuật toán, CPU, bộ nhớ và I/O.','Phân biệt latency với throughput; tác động của xung nhịp, cache, song song hóa và giới hạn công suất/nhiệt. Dùng benchmark phù hợp tác vụ.','CPU time = instruction count × CPI × cycle time','CPU tăng xung không giúp nhiều nếu chương trình chờ bộ nhớ.','CH02-COA11e.pptx'),
        row('3. Chu trình lệnh và kết nối','CPU lặp fetch → decode → execute, phối hợp với bộ nhớ và I/O.','PC chỉ địa chỉ lệnh kế tiếp, IR giữ lệnh hiện hành; bus và giao tiếp nối các thành phần. Ngắt cho phép xử lý sự kiện ngoài.','PC → memory → IR → execute','Lệnh nhảy thay đổi PC nên luồng lệnh không còn tuần tự.','CH03-COA11e.pptx')
      ]},
      {name:'Bộ nhớ & I/O',items:[
        row('4. Phân cấp bộ nhớ','Bộ nhớ nhanh nhỏ ở gần CPU; bộ nhớ chậm lớn ở xa.','Tính cục bộ thời gian là dùng lại dữ liệu gần đây; cục bộ không gian là truy cập địa chỉ gần nhau. Đây là cơ sở hiệu quả của cache.','register → cache → RAM → storage','Duyệt mảng tuần tự thường tận dụng locality tốt.','CH04-COA11e.pptx'),
        row('5. Cache','Cache giữ bản sao block từ RAM để giảm thời gian truy cập trung bình.','Hiểu hit/miss, ánh xạ trực tiếp/liên kết, thay thế và chính sách ghi. Chú ý miss penalty khi phân tích hiệu năng.','AMAT = hit time + miss rate × miss penalty','Miss rate thấp vẫn tốn thời gian nếu miss penalty rất lớn.','CH05-COA11e.pptx'),
        row('6. Bộ nhớ trong','RAM là nơi làm việc chính; ROM và các công nghệ chip có vai trò khác.','So sánh SRAM và DRAM, tổ chức ô nhớ, độ rộng dữ liệu, ECC và cách ghép module bộ nhớ.','capacity = số địa chỉ × số bit/địa chỉ','SRAM thường làm cache; DRAM thường làm RAM chính.','CH06-COA11e.pptx'),
        row('7. Bộ nhớ ngoài','Lưu trữ ngoài giữ dữ liệu lâu dài với dung lượng lớn.','Nhận diện disk, SSD, optical/tape; đánh giá thời gian truy cập, tốc độ truyền, độ bền và cơ chế lưu trữ.','access time ≈ seek + rotation + transfer (HDD)','Đọc ngẫu nhiên HDD tốn thời gian tìm vị trí hơn đọc tuần tự.','CH07-COA11e.pptx'),
        row('8. Vào/ra','I/O kết nối CPU và bộ nhớ với thiết bị ngoại vi.','Các cách điều khiển: programmed I/O, interrupt-driven I/O và DMA. Phân biệt vai trò controller, buffer và bus.','DMA chuyển dữ liệu mà CPU không phải chép từng byte','Truyền khối lớn phù hợp DMA.','CH08-COA11e.pptx'),
        row('9. Hỗ trợ hệ điều hành','Phần cứng cung cấp ngắt, đặc quyền và quản lý bộ nhớ cho OS.','Liên hệ process, scheduling, virtual memory, bảo vệ và thao tác I/O với hỗ trợ từ kiến trúc máy.','địa chỉ ảo → MMU → địa chỉ vật lý','Page fault khiến OS phải nạp trang từ lưu trữ.','CH09-COA11e.pptx')
      ]},
      {name:'Biểu diễn & tập lệnh',items:[
        row('10. Hệ đếm','Mọi dữ liệu số cuối cùng được biểu diễn bằng bit.','Đổi giữa nhị phân, thập phân, thập lục phân; hiểu bit, byte và biểu diễn số có dấu.','1 hex digit = 4 bits','1111₂ = F₁₆ = 15₁₀.','CH10-COA11e.pptx'),
        row('11. Số học máy tính','Phép tính hữu hạn bit có tràn và sai số.','Bù hai cho số nguyên có dấu; cộng/trừ, nhân/chia nhị phân; floating point gồm sign, exponent và fraction.','2’s complement của x: đảo bit rồi cộng 1','Số thực nhị phân không biểu diễn chính xác mọi số thập phân.','CH11-COA11e.pptx'),
        row('12. Logic số','Cổng logic và mạch tuần tự xây nên CPU.','Boolean algebra, bảng chân trị, tổ hợp, flip-flop và thanh ghi. Phân biệt mạch tổ hợp chỉ phụ thuộc đầu vào hiện tại với mạch tuần tự có trạng thái.','A XOR B = 1 khi A và B khác nhau','Full adder cộng hai bit và carry-in.','CH12-COA11e.pptx'),
        row('13. Đặc điểm tập lệnh','ISA quy định lệnh, toán hạng và tác dụng nhìn thấy bởi phần mềm.','Phân tích kiểu toán hạng, loại thao tác, số địa chỉ và thiết kế tập lệnh.','opcode + operands','ADD có thể đọc hai thanh ghi và ghi kết quả vào thanh ghi đích.','CH13-COA11e.pptx'),
        row('14. Địa chỉ hóa và định dạng lệnh','Addressing mode quyết định cách tìm toán hạng.','Immediate, direct, indirect, register, indexed/relative; độ dài lệnh và trường opcode ảnh hưởng mã hóa, hiệu năng.','effective address có thể = base + offset','Truy cập phần tử mảng thường dùng base + chỉ số dịch.','CH14-COA11e.pptx'),
        row('15. Assembly','Assembly biểu diễn lệnh máy bằng ký hiệu dễ đọc.','Lắp ráp, nhãn, macro và liên hệ source code, object code, linker. Theo dõi thanh ghi và bộ nhớ khi đọc chương trình ngắn.','MOV / LOAD / STORE / BRANCH','Lệnh branch dựa trên cờ trạng thái để đổi luồng.','CH15-COA11e.pptx')
      ]},
      {name:'CPU & xử lý song song',items:[
        row('16. Cấu trúc CPU','Datapath vận chuyển và xử lý dữ liệu; control unit phát tín hiệu điều khiển.','Thanh ghi, ALU, pipeline và hazard giải thích cách CPU thực thi lệnh ở mức trong.','throughput pipeline khác latency của một lệnh','Pipeline có thể hoàn thành nhiều lệnh mỗi đơn vị thời gian.','CH16-COA11e.pptx'),
        row('17. RISC','RISC dùng tập lệnh tương đối đơn giản để thực thi hiệu quả.','So sánh RISC/CISC qua load/store, độ dài lệnh, thanh ghi và pipeline; tránh hiểu sai rằng một bên luôn nhanh hơn.','load/store tách truy cập bộ nhớ khỏi tính toán','ADD trên RISC thường làm việc với thanh ghi.','CH17-COA11e.pptx'),
        row('18. Song song cấp lệnh','CPU có thể thực thi chồng lấp hoặc đồng thời nhiều lệnh độc lập.','Instruction-level parallelism, superscalar, dependency, branch prediction và giới hạn do hazard.','speedup thực tế bị giới hạn bởi dependency','Hai phép cộng độc lập có thể chạy trên hai đơn vị thực thi.','CH18-COA11e.pptx'),
        row('19. Điều khiển vi chương trình','Control unit biến lệnh thành chuỗi tín hiệu điều khiển.','So sánh hardwired với microprogrammed control; microinstruction và control memory.','opcode → micro-operations','Lệnh phức tạp có thể cần nhiều micro-operation.','CH19-COA11e.pptx'),
        row('20. Xử lý song song','Chia việc giữa nhiều bộ xử lý có thể tăng thông lượng.','Phân loại kiến trúc song song, chia sẻ bộ nhớ, đồng bộ và ảnh hưởng phần tuần tự tới speedup.','Amdahl: S=1/((1−p)+p/n)','90% song song trên 4 lõi cho speedup < 4.','CH20-COA11e.pptx'),
        row('21. Đa lõi','Nhiều lõi trên một chip chia sẻ một số tài nguyên.','Cache coherence, tổ chức multicore, tranh chấp bộ nhớ và phần mềm đa luồng quyết định hiệu quả.','speedup không tuyến tính theo số lõi','Thêm lõi không tăng tốc đoạn code chỉ chạy tuần tự.','CH21-COA11e.pptx')
      ]}
    ]
  },
  PRF193: {
    name:'Cơ sở lập trình C/C++', en:'Programming Fundamentals', accent:'#1c9a94',
    scope:'7 bộ slide và 657 trang đang có trên máy',
    sourceNote:'Theo slide PRF193 trong Downloads/Desktop. Nội dung gồm cả C, C++ và các chủ đề nâng cao; mức độ kiểm tra từng phần cần xác nhận bằng syllabus của lớp.',
    sourceLink:'https://cmshn.fpt.edu.vn/course/search.php?perpage=all&search=PRF192',
    groups:[
      {name:'Từ chương trình đầu tiên',items:[
        row('1. Giới thiệu & môi trường','Chương trình biến thuật toán thành lệnh máy thông qua compiler.','Cài trình biên dịch/IDE, tạo chương trình, hiểu entry point, header, hàm main, input/output, lỗi cú pháp và lỗi logic.','source → compile → executable','Thiếu dấu ; có thể làm compile thất bại trước khi chạy.','[PRF193]-1.Introduction & Setup (1).pptx'),
        row('2. Kiểu dữ liệu và toán tử','Kiểu dữ liệu quyết định cách lưu và phép toán hợp lệ.','Khai báo biến, hằng, phạm vi kiểu; toán tử số học, so sánh, logic, bit, gán và điều kiện. Chú ý chia nguyên và ép kiểu.','int a=5/2; // a=2','5.0/2 cho 2.5, khác với 5/2.','[PRF193]-2. Fundamentals.pptx'),
        row('3. Điều khiển luồng','Điều kiện chọn nhánh; vòng lặp lặp lại việc có quy luật.','if/else, switch, for, while, do-while; vẽ thuật toán trước khi code. Theo dõi điều kiện dừng, off-by-one, break/continue.','for(init; condition; update)','Tính tổng 1..n bằng vòng lặp hoặc công thức n(n+1)/2.','[PRF193]-3. Control Flow.pptx')
      ]},
      {name:'Dữ liệu và bộ nhớ',items:[
        row('4. Mảng, chuỗi, struct, enum','Chọn cấu trúc dữ liệu theo số lượng và mối quan hệ giữa giá trị.','Mảng chứa phần tử cùng kiểu, chỉ số từ 0; chuỗi C kết thúc bằng \\0; struct gom các trường khác kiểu; enum đặt tên cho hằng.','a[0] là phần tử đầu tiên','Mảng 10 phần tử có chỉ số hợp lệ 0..9.','[PRF193]-4. Data Handling.pptx'),
        row('5. Hàm, con trỏ, quản lý bộ nhớ','Hàm chia bài toán; con trỏ lưu địa chỉ và cho phép truy cập gián tiếp.','Phân biệt truyền giá trị/tham chiếu; scope, overload, template. Xem stack/heap, cấp phát/giải phóng và lỗi dangling pointer, memory leak.','&x lấy địa chỉ; *p giải tham chiếu','Đổi x qua tham chiếu tác động biến gốc; truyền giá trị chỉ đổi bản sao.','[PRF193]-5. Functions & Memory Management.pptx')
      ]},
      {name:'C++ mở rộng',items:[
        row('6. Lập trình hướng đối tượng','Class kết hợp dữ liệu và hành vi trong một kiểu tự định nghĩa.','Object, constructor/destructor, encapsulation, inheritance, virtual function và polymorphism. Hiểu copy khi class sở hữu tài nguyên động.','class → object; virtual → dynamic dispatch','Một hàm draw() ảo có thể hoạt động khác nhau ở các lớp con.','[PRF193]-6.Object-Oriented Programming (OOP).pptx'),
        row('7. STL, file và thread','Thư viện chuẩn giúp dùng container và thuật toán đã có.','vector/map/set, iterator, sort; stream đọc ghi file; thread, join, mutex và data race. Chỉ dùng đa luồng khi bài toán cần.','vector tự đổi kích thước khi push_back','Ghi file xong cần kiểm tra trạng thái stream, tránh tưởng dữ liệu đã lưu.','[PRF193]-7. Advanced Topics.pptx')
      ]}
    ]
  },
  SDI101m: {
    name:'Nhập môn thiết bị bán dẫn', en:'Introduction to Semiconductor Devices', accent:'#cc4f7c',
    scope:'11 bộ slide đang có trên máy, chủ yếu là điện từ học nền tảng',
    sourceNote:'Bộ slide hiện có dừng ở sóng điện từ, chưa có slide riêng về tiếp giáp p–n, diode hay transistor. Những phần thiết bị bán dẫn phải bổ sung từ syllabus/lab của lớp trước khi xem là đủ môn.',
    sourceLink:'https://flm.fpt.edu.vn/login',
    groups:[
      {name:'Điện trường',items:[
        row('1. Đo lường và đơn vị','Mọi công thức vật lý cần đúng đại lượng và đơn vị SI.','Đổi đơn vị, chữ số có nghĩa, vectơ và phép đo; đọc sơ đồ đại lượng trước khi thay số.','1 μC = 10⁻⁶ C','Sai cm↔m tạo sai số 100 lần ở độ dài.','#1. Course Introduction _ Measurement.pptx'),
        row('2. Định luật Coulomb','Hai điện tích điểm hút hoặc đẩy theo dấu của chúng.','Độ lớn lực tỉ lệ tích điện tích và nghịch với bình phương khoảng cách; lực là vectơ và cộng bằng nguyên lý chồng chất.','F=k|q₁q₂|/r²','Tăng khoảng cách gấp đôi làm lực còn 1/4.','#2. Coulomb Law.pptx'),
        row('3. Điện trường','Điện trường là lực trên một điện tích thử dương tại vị trí đó.','Tính trường do điện tích điểm hoặc nhiều điện tích, cộng vectơ và đọc đường sức.','E=F/q₀; E=k|q|/r²','Điện trường hướng ra khỏi điện tích dương.','#3. Electric Field.pptx'),
        row('4. Định luật Gauss','Thông lượng điện qua mặt kín phụ thuộc điện tích bên trong.','Chọn mặt Gauss khi có đối xứng cầu, trụ hoặc phẳng; đừng dùng phép đối xứng khi phân bố điện tích không phù hợp.','∮E·dA=Qenc/ε₀','Mặt cầu đồng tâm điện tích điểm cho E không đổi trên mặt.','#4. Gauss Law.pptx'),
        row('5. Điện thế','Điện thế là thế năng điện trên một đơn vị điện tích.','Hiệu điện thế liên hệ công của điện trường; trường hướng theo chiều điện thế giảm. Phân biệt V vô hướng với E vectơ.','ΔV=−∫E·dl','Hai điểm trên cùng mặt đẳng thế có ΔV=0.','#5. Electric Potential.pptx'),
        row('6. Điện dung','Tụ điện tích trữ năng lượng trong điện trường.','Điện dung phụ thuộc hình học và điện môi; tính ghép nối tiếp/song song và năng lượng tụ.','C=Q/V; U=½CV²','Tụ song song cộng điện dung trực tiếp.','#6. Capacitance.pptx')
      ]},
      {name:'Dòng điện và từ trường',items:[
        row('7. Dòng điện & điện trở','Dòng là tốc độ dịch chuyển điện tích; điện trở cản dòng.','Định luật Ohm, điện trở suất, phụ thuộc nhiệt độ và công suất điện.','I=dQ/dt; V=IR; R=ρL/A','Dây dài gấp đôi, cùng vật liệu và tiết diện, có R gấp đôi.','#7. Current and Resistance.pptx'),
        row('8. Mạch điện','Kirchhoff dùng bảo toàn điện tích và năng lượng để giải mạch.','Nguồn suất điện động, điện trở nối tiếp/song song, quy tắc nút/vòng và quá trình nạp xả RC.','τ=RC','Sau một τ khi nạp, tụ đạt khoảng 63% điện áp cuối.','#8. Electric Circuit.pptx'),
        row('9. Từ trường','Dòng điện tạo từ trường, từ trường tác dụng lực lên điện tích chuyển động.','Quy tắc bàn tay phải, lực Lorentz, từ trường dây dẫn và vòng dây.','F=qv×B','Hạt bay song song với B có lực từ bằng 0.','#9. Magnetic Field.pptx'),
        row('10. Cảm ứng & dòng xoay chiều','Từ thông biến thiên tạo suất điện động cảm ứng.','Faraday–Lenz, độ tự cảm, phần tử RLC, pha và cộng hưởng trong mạch AC.','ε=−dΦB/dt','Dấu trừ Lenz cho biết dòng cảm ứng chống lại thay đổi từ thông.','#10. Inductance and Alternating Current.pptx'),
        row('11. Sóng điện từ','Điện trường và từ trường biến thiên lan truyền thành sóng.','Liên hệ bước sóng, tần số, vận tốc; phổ điện từ và năng lượng truyền đi.','c=λf','Tần số tăng thì bước sóng giảm nếu vận tốc không đổi.','#11. Electromagnetic Wave.pptx')
      ]}
    ]
  }
};
