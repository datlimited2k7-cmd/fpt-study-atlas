// Ghi chú do nhóm biên soạn từ các học liệu mở; không chép nguyên văn tài liệu.
// Giữ tài liệu gốc của lớp trong `source`, còn nguồn bổ sung ở `openStudy`.
(function () {
  const additions = {
    MAE101: [
      {
        title: 'Ứng dụng đạo hàm',
        note: 'Bài toán tốc độ liên quan có ba bước: lập quan hệ giữa các đại lượng đang thay đổi, lấy đạo hàm hai vế theo thời gian, rồi mới thay giá trị tại thời điểm cần xét. Nếu thay bán kính cụ thể trước khi đạo hàm, ta vô tình biến đại lượng đang thay đổi thành hằng số. Kiểm tra đơn vị của đạo hàm cuối cùng, chẳng hạn cm²/s đối với tốc độ đổi diện tích.',
        worked: 'Diện tích hình tròn A=πr². Khi r=3 cm và dr/dt=2 cm/s, ta có dA/dt=2πr·dr/dt=12π cm²/s.',
        label: 'OpenStax Calculus 1 · Related Rates',
        url: 'https://openstax.org/books/calculus-volume-1/pages/4-1-related-rates'
      },
      {
        title: 'Tích phân xác định',
        note: 'Định lý cơ bản của giải tích nối tốc độ biến thiên với lượng tích lũy. Nếu F′=f và f liên tục trên [a,b] thì ∫ₐᵇf(x)dx=F(b)−F(a). Giá trị tích phân là diện tích có dấu: phần đồ thị dưới trục hoành đóng góp âm. Muốn diện tích hình học, cần tách khoảng tại những điểm f đổi dấu và cộng trị tuyệt đối từng phần.',
        worked: '∫₀³2x dx=[x²]₀³=9. Nếu f là vận tốc m/s và x là thời gian s, kết quả là độ dời 9 m, không tự động là tổng quãng đường.',
        label: 'OpenStax Calculus 1 · Fundamental Theorem of Calculus',
        url: 'https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus'
      },
      {
        title: 'Hệ phương trình tuyến tính',
        note: 'Khử Gauss trên ma trận mở rộng [A|b] giữ nguyên tập nghiệm. Sau khi về dạng bậc thang, một hàng [0 … 0 | c] với c khác 0 chứng tỏ vô nghiệm; nếu không có hàng như vậy, các cột không có pivot tạo biến tự do. Đừng kết luận có nghiệm duy nhất chỉ vì số phương trình bằng số ẩn.',
        worked: 'Hệ x+y=3 và 2x+2y=6 cho hàng thứ hai bằng 0 sau phép R₂←R₂−2R₁. Đặt y=t thì x=3−t: vô số nghiệm.',
        label: 'MIT OCW 18.06SC · Solving Ax=b: Row Reduced Form',
        url: 'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/resources/solving-ax-b-row-reduced-form-r/'
      },
      {
        title: 'Định thức, trị riêng, chéo hóa',
        note: 'Tìm trị riêng bằng det(A−λI)=0, rồi giải (A−λI)v=0 để tìm vectơ riêng khác 0. Ma trận n×n chỉ chéo hóa được khi có n vectơ riêng độc lập tuyến tính. Có trị riêng lặp không đủ để kết luận chéo hóa được; phải kiểm tra số chiều không gian riêng.',
        worked: 'A=[[2,1],[0,3]] có λ=2,3. Vectơ riêng tương ứng có thể chọn (1,0) và (1,1); chúng độc lập nên lập được P và A=PDP⁻¹.',
        label: 'MIT OCW 18.06SC · Eigenvalues and Eigenvectors',
        url: 'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/resources/lecture-21-eigenvalues-and-eigenvectors-1/'
      }
    ],
    CEA201: [
      {
        title: '5. Cache',
        note: 'Cache khai thác việc chương trình hay dùng lại dữ liệu gần đây hoặc dữ liệu ở địa chỉ lân cận. Một lần miss phải lấy block từ tầng nhớ thấp hơn; vì vậy tỉ lệ hit cao chưa đủ để đánh giá nếu chi phí miss lớn. Khi đọc bài cache, tách rõ hit time, miss rate và miss penalty rồi mới tính thời gian trung bình.',
        worked: 'Hit time 1 ns, miss rate 5%, miss penalty thêm 40 ns: AMAT=1+0,05×40=3 ns. Đây là thời gian trung bình theo mô hình đơn giản.',
        label: 'MIT OCW 6.004 · Caches and the Memory Hierarchy',
        url: 'https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c14/c14s1/'
      },
      {
        title: '14. Địa chỉ hóa và định dạng lệnh',
        note: 'Tách hằng immediate khỏi địa chỉ bộ nhớ: immediate là giá trị nằm trong mã lệnh, còn toán hạng ở bộ nhớ cần một địa chỉ hiệu dụng. Trong ví dụ ISA Beta của MIT, lệnh tải dùng địa chỉ bằng nội dung thanh ghi cơ sở cộng độ dời; lệnh cộng hằng dùng cùng trường hằng nhưng lấy nó làm số để tính. Cú pháp và độ rộng trường phụ thuộc từng ISA, nên không chuyển nguyên mã Beta sang x86 hay RISC-V.',
        worked: 'Nếu thanh ghi cơ sở chứa 0x1000 và độ dời là 8 byte, địa chỉ hiệu dụng của một lệnh tải kiểu base+offset là 0x1008; số 8 là độ dời, không phải dữ liệu được tải.',
        label: 'MIT OCW 6.004 · Designing an Instruction Set',
        url: 'https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/'
      },
      {
        title: '16. Cấu trúc CPU',
        note: 'Pipeline chia việc thực hiện lệnh thành các giai đoạn để nhiều lệnh cùng tiến triển. Nó thường tăng thông lượng sau khi pipeline đã đầy, nhưng độ trễ của một lệnh riêng lẻ không nhất thiết giảm. Phụ thuộc dữ liệu có thể cần chuyển tiếp kết quả hoặc chèn chu kỳ chờ; nhánh có thể làm hủy những lệnh đã nạp sai đường.',
        worked: 'Một lệnh LOAD chưa có dữ liệu kịp cho lệnh dùng kết quả ngay sau nó. Pipeline có thể phải chờ một chu kỳ dù các lệnh khác vẫn đang ở những giai đoạn khác.',
        label: 'MIT OCW 6.004 · Pipelining the Beta',
        url: 'https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c15/c15s1/'
      },
      {
        title: '21. Đa lõi',
        note: 'Mỗi lõi có thể giữ bản sao của cùng một dòng bộ nhớ trong cache riêng. Khi một lõi ghi, hệ thống cần cơ chế cache coherence để những lõi khác không tiếp tục dùng bản sao đã cũ. Coherence về một địa chỉ không tự giải quyết mọi vấn đề đồng bộ chương trình: thứ tự quan sát nhiều thao tác và data race còn phụ thuộc mô hình bộ nhớ và phần mềm.',
        worked: 'Hai lõi cùng tăng biến đếm bằng đọc→cộng→ghi có thể cùng đọc 0 rồi cùng ghi 1. Cache coherence vẫn có thể hoạt động đúng nhưng kết quả cuối là 1; phép tăng cần đồng bộ hoặc thao tác nguyên tử.',
        label: 'MIT OCW 6.004 · Parallel Processing and Cache Coherence',
        url: 'https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c21/c21s1/'
      }
    ],
    PRF193: [
      {
        title: '10. Con trỏ và quản lý bộ nhớ',
        note: 'Con trỏ lưu địa chỉ của đối tượng, còn *p truy cập đối tượng tại địa chỉ đó khi p hợp lệ. Phải phân biệt con trỏ chưa khởi tạo, NULL và con trỏ trỏ tới đối tượng đã hết thời gian sống. Trong C++ hiện đại, nếu một đối tượng có quyền sở hữu tài nguyên thì có thể dùng RAII và smart pointer phù hợp để tự thu hồi tài nguyên; các khái niệm này thuộc phần C++ chứ không phải cú pháp C.',
        worked: 'int x=7; int *p=&x; *p=9; thì x bằng 9. Trái lại, trả &x khi x là biến cục bộ của hàm sẽ để lại địa chỉ không còn đối tượng hợp lệ sau khi hàm kết thúc.',
        label: 'GNU C Manual · Pointers; Microsoft Learn · RAII',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Pointers.html',
        extra: { label: 'Microsoft Learn · RAII trong C++', url: 'https://learn.microsoft.com/en-us/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170' }
      },
      {
        title: '12. Định nghĩa và gọi hàm C',
        note: 'Một lời gọi hàm phải khớp kiểu trả về và danh sách tham số đã khai báo. Hàm tính toán nên nhận dữ liệu qua tham số và trả kết quả để có thể thử độc lập. Nếu phép tính có phép chia, hãy xét kiểu của hai toán hạng trước khi chia: gán kết quả vào double sau phép chia nguyên sẽ không lấy lại phần lẻ đã mất.',
        worked: 'double mean(int a,int b){return (a+b)/2.0;} cho mean(2,3)=2.5; nếu viết (a+b)/2 thì kết quả phép chia nguyên là 2 rồi mới đổi sang double.',
        label: 'GNU C Reference Manual · Functions',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Definitions.html'
      },
      {
        title: '14. Truyền tham trị và lời gọi hàm',
        note: 'Trong C, mỗi tham số thường nhận giá trị từ biểu thức đối số. Nếu giá trị đó là địa chỉ, bản sao con trỏ vẫn chỉ tới cùng đối tượng, nên thao tác *p có thể sửa đối tượng của hàm gọi. Điều này khác với việc gán lại chính tham số p: gán p sang một địa chỉ khác không tự đổi biến con trỏ ở hàm gọi.',
        worked: 'void set(int *p){*p=10;} và int x=3; set(&x); cho x=10. Với void f(int p){p=10;} rồi f(x), x vẫn là 3.',
        label: 'GNU C Reference Manual · Function Parameters',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Call-Semantics.html'
      },
      {
        title: '19. Lớp và đối tượng',
        note: 'Lớp C++ gom dữ liệu và hành vi, đồng thời giới hạn thao tác từ bên ngoài bằng private/public. Constructor thiết lập trạng thái ban đầu; nếu lớp quản lý tài nguyên, cần xác định rõ ai sở hữu và thời điểm giải phóng. Dữ liệu private không tự bảo đảm bất biến: các hàm public vẫn phải kiểm tra đầu vào trước khi sửa trạng thái.',
        worked: 'Một lớp Account giữ balance ở private và chỉ cho deposit(amount) khi amount>0; gọi deposit(-5) cần bị từ chối để số dư không thay đổi trái quy tắc.',
        label: 'Microsoft Learn · Classes and Structs in C++',
        url: 'https://learn.microsoft.com/en-us/cpp/cpp/classes-and-structs-cpp?view=msvc-170'
      }
    ],
    PRF192: [
      {
        title: 'Tính toán cơ bản',
        note: 'Trong C, kiểu của toán hạng quyết định phép chia: hai số nguyên cho thương nguyên và bỏ phần lẻ về phía 0; chỉ cần một toán hạng là số thực thì phép chia được thực hiện ở kiểu số thực phù hợp. Kiểm tra chia cho 0 và giới hạn kiểu trước khi tính. Để đọc biểu thức dài, thêm ngoặc cho ý định tính thay vì chỉ dựa vào thứ tự ưu tiên toán tử.',
        worked: 'Với int a=5,b=2, a/b bằng 2. Muốn 2.5, dùng (double)a/b hoặc a/2.0. Gán a/b vào biến double sau đó vẫn chỉ được 2.0.',
        label: 'GNU C Language Manual · Division and Remainder',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Division-and-Remainder.html'
      },
      {
        title: 'Cấu trúc điều khiển',
        note: 'Trước khi viết vòng lặp, xác định trạng thái ban đầu, điều kiện còn lặp và cách trạng thái tiến gần điểm dừng. Với for, điều kiện được kiểm tra trước mỗi lượt; nếu sai ngay từ đầu thì thân không chạy lần nào. Với bài đếm hoặc duyệt mảng, thử n=0, n=1 và phần tử cuối để phát hiện lỗi lệch một.',
        worked: 'for(int i=0;i<n;i++) duyệt đúng các chỉ số 0…n−1 khi n≥0. Nếu n=0, điều kiện 0<n sai và vòng lặp không chạy.',
        label: 'GNU C Language Manual · for Statement',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/for-Statement.html'
      },
      {
        title: 'Module và hàm',
        note: 'Tách một phép tính thành hàm có tham số và giá trị trả về giúp thử nó mà không cần nhập từ bàn phím. Nếu gọi hàm trước khi định nghĩa, đặt khai báo tương thích ở phía trên hoặc trong header. Tệp header báo cho trình biên dịch giao diện; khi tách nhiều tệp .c, bước liên kết vẫn phải nhận tệp chứa định nghĩa.',
        worked: 'double square(double x){return x*x;} nhận 3.0 và trả 9.0. Nếu main nằm trước định nghĩa, thêm double square(double x); trước main.',
        label: 'GNU C Language Manual · Forward Function Declarations',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Forward-Function-Declarations.html'
      },
      {
        title: 'Con trỏ',
        note: 'Địa chỉ &x và giá trị *p là hai thứ khác nhau. Chỉ giải tham chiếu khi p trỏ tới một đối tượng còn sống và phù hợp kiểu. Con trỏ NULL là trạng thái “không trỏ tới đối tượng” có chủ ý; con trỏ chưa khởi tạo chứa giá trị không xác định. Khi truyền địa chỉ vào hàm, hàm có thể sửa đối tượng mà con trỏ trỏ tới.',
        worked: 'int x=4; int *p=&x; *p=6; thì x bằng 6. Đặt p=NULL rồi dùng *p là thao tác không hợp lệ.',
        label: 'GNU C Language Manual · Pointers',
        url: 'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Pointers.html'
      }
    ],
    SSA101: [
      {
        title: 'Học tập, trí nhớ và thi cử',
        note: 'Đọc lại tài liệu tạo cảm giác quen, nhưng tự nhớ lại mà chưa xem đáp án giúp phát hiện phần còn hổng. Chia các lần ôn ra nhiều ngày giúp nhớ lâu hơn học dồn một đêm. Sau mỗi lần tự kiểm tra, xem lời giải, sửa lỗi và thử lại bằng câu hỏi khác để phân biệt hiểu cơ chế với chỉ nhớ lựa chọn.',
        worked: 'Sau khi học một chủ đề, gấp tài liệu và viết 5 ý chính từ trí nhớ. Hôm sau làm 5 câu mới, ghi lại câu sai và ôn riêng phần đó sau vài ngày.',
        label: 'Cornell Learning Strategies Center · Effective Study Strategies',
        url: 'https://lsc.cornell.edu/how-to-study/studying-for-and-taking-exams/effective-study-strategies/'
      },
      {
        title: 'Quản lý thời gian',
        note: 'Chuyển mục tiêu mơ hồ thành việc cụ thể, có thời lượng và thời điểm bắt đầu. Lịch học nên dành chỗ cho bài tập, ôn cách quãng và thời gian dự phòng trước hạn nộp. Cuối tuần xem lại tiến độ thực tế để điều chỉnh; một lịch quá kín khiến việc trễ một buổi kéo theo cả kế hoạch.',
        worked: 'Thay “học C tối nay” bằng “19:30–20:15 giải 3 bài vòng lặp; 20:15–20:30 so đáp án và ghi lỗi”. Đặt thêm 30 phút dự phòng trước hạn nộp.',
        label: 'Cornell Learning Strategies Center · Time Management',
        url: 'https://lsc.cornell.edu/wp-content/uploads/2015/10/A-Simple-Effective-Time-Management-System.pdf'
      },
      {
        title: 'Hiểu biết thông tin',
        note: 'Khi dùng một trang web hay bài viết làm căn cứ, kiểm tra tác giả/tổ chức, ngày cập nhật, loại nguồn và dẫn chứng. Đọc xem nội dung là dữ kiện, ý kiến hay quảng cáo; so chéo điểm quan trọng với nguồn độc lập. Nguồn phù hợp cho một câu hỏi thời sự có thể không phù hợp cho công thức toán hoặc quy định học vụ.',
        worked: 'Nếu một bài đăng nói “quy chế thi đã đổi”, tìm văn bản hoặc thông báo chính thức của trường, kiểm tra ngày áp dụng rồi mới cập nhật kế hoạch ôn.',
        label: 'Purdue OWL · Evaluating Sources of Information',
        url: 'https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/index.html'
      },
      {
        title: 'AI và đạo đức học thuật',
        note: 'AI có thể giúp gợi ý cấu trúc, giải thích lại và đặt câu hỏi tự luyện, nhưng kết quả cần kiểm chứng vì có thể sai hoặc thiếu nguồn. Không nhập thông tin cá nhân hay bài làm được bảo mật vào dịch vụ ngoài khi chưa được phép. Quy định cụ thể về cách sử dụng và ghi nhận AI phụ thuộc môn học và trường, nên kiểm tra hướng dẫn của giảng viên trước khi nộp.',
        worked: 'Dùng AI để gợi ý ba cách giải một bài; tự làm lại, kiểm tra từng bước bằng tài liệu học, rồi ghi rõ việc đã dùng AI nếu yêu cầu nộp bài của lớp quy định.',
        label: 'UNESCO · Guidance for Generative AI in Education and Research',
        url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=83294'
      }
    ],
    SDI101m: [
      {
        title: '8. Mạch điện',
        note: 'Điện trở nối tiếp có cùng dòng và điện trở tương đương bằng tổng các điện trở. Các nhánh song song có cùng hiệu điện thế và nghịch đảo điện trở tương đương bằng tổng các nghịch đảo. Với các điện trở dương mắc song song, điện trở tương đương luôn nhỏ hơn từng điện trở thành phần; đây là cách kiểm tra nhanh kết quả tính.',
        worked: 'R₁=100 Ω, R₂=200 Ω, R₃=300 Ω mắc song song: 1/R=1/100+1/200+1/300=11/600, nên R=600/11≈54,55 Ω. Đây cũng là ví dụ tính bằng hàm C ở PRF193.',
        label: 'OpenStax University Physics 2 · Series and Parallel Resistors',
        url: 'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel'
      },
      {
        title: '15. Bán dẫn tinh khiết & pha tạp',
        note: 'Trong bán dẫn tinh khiết ở cân bằng, electron và lỗ trống cùng được tạo bởi kích thích nhiệt. Pha donor làm electron trở thành hạt tải đa số của vật liệu loại n; pha acceptor làm lỗ trống là hạt tải đa số của loại p. “Loại n” không có nghĩa toàn khối mang điện âm: ion pha tạp và hạt tải vẫn thỏa gần trung hòa điện ở vùng khối.',
        worked: 'Pha một lượng nhỏ donor vào silicon làm mật độ electron cân bằng tăng. Theo quan hệ np=nᵢ² trong mô hình cân bằng, mật độ lỗ trống thiểu số giảm tương ứng.',
        label: 'MIT OCW 6.012 · Intrinsic Semiconductors and Doping',
        url: 'https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/pages/lecture-notes/'
      },
      {
        title: '19. Tiếp giáp p–n',
        note: 'Khi ghép vùng p và n, hạt tải đa số khuếch tán qua ranh giới rồi tái hợp, để lại các ion pha tạp cố định. Vùng nghèo tạo điện trường nội chống lại quá trình khuếch tán. Ở cân bằng nhiệt, dòng trôi và dòng khuếch tán triệt tiêu về tổng; phân cực ngoài thay đổi rào thế và độ rộng vùng nghèo.',
        worked: 'Tăng phân cực ngược thường làm vùng nghèo rộng hơn và dòng hạt tải đa số qua tiếp giáp giảm mạnh; vẫn có dòng rò nhỏ do hạt tải thiểu số trong linh kiện thực.',
        label: 'MIT OCW 6.012 · p–n Junction Lectures',
        url: 'https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/pages/lecture-notes/'
      },
      {
        title: '24. Tụ MOS và MOSFET',
        note: 'Điện áp cổng của tụ MOS điều khiển điện tích ở bề mặt bán dẫn qua lớp cách điện. Với nMOS tăng cường, điện áp cổng đủ dương tạo lớp đảo dẫn giữa source và drain; dòng còn phụ thuộc V_DS. Ngưỡng V_T đánh dấu điều kiện mô hình kênh mạnh, không phải ranh giới tắt/mở tuyệt đối của transistor thật.',
        worked: 'Nếu V_T≈1 V, V_GS=2 V cho điện áp vượt ngưỡng khoảng 1 V. Chưa thể tính I_D chỉ từ hai con số này: cần V_DS và tham số linh kiện, đồng thời xác định miền hoạt động.',
        label: 'MIT OCW 6.012 · MOS Capacitor and MOSFET Lectures',
        url: 'https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/pages/lecture-notes/'
      }
    ]
  };

  window.OPEN_STUDY = additions;
  window.applyOpenStudy = function () {
    for (const [code, entries] of Object.entries(additions)) {
      const lessons = window.COURSES[code]?.groups.flatMap(group => group.items) || [];
      for (const entry of entries) {
        const lesson = lessons.find(item => item.title === entry.title);
        if (lesson && !lesson.openStudy) {
          const { title, ...study } = entry;
          lesson.openStudy = study;
        }
      }
    }
  };
  window.applyOpenStudy();
})();
