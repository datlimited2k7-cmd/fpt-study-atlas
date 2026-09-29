// Ví dụ và bài tự luyện được biên soạn lại để học từng bước; nguồn học phần giữ ở từng chủ đề.
(function () {
  const prfOriginal = window.COURSES.PRF193.groups.flatMap(group => group.items);
  const prfTopic = (sourceIndex, title, idea, details, key, example) =>
    ({ ...prfOriginal[sourceIndex], title, idea, details, key, example });
  const moduleLesson = (title, idea, details, key, example, pitfall, practice, answer, slides) =>
    ({ title, idea, details, key, example, pitfall, practice, answer,
       source: `Slot_08_09_Modules_Functions.pptx, slide ${slides}` });
  window.COURSES.PRF193.scope = '23 chủ đề học từ 8 bộ slide PRF193';
  window.COURSES.PRF193.groups = [
    { name: 'Từ chương trình đầu tiên', items: [
      prfTopic(0, '1. Giới thiệu & môi trường', 'Chương trình C/C++ cần được biên dịch trước khi chạy.', 'Tạo file nguồn, chọn compiler, biên dịch rồi chạy; phân biệt lỗi biên dịch, lỗi lúc chạy và lỗi logic.', 'source → compile → executable', 'Thiếu dấu ; làm biên dịch thất bại; phép tính sai dù chạy được là lỗi logic.'),
      prfTopic(0, '2. Thiết kế thuật toán và kiểm thử', 'Viết rõ đầu vào, đầu ra và trường hợp biên trước khi code.', 'Chia bài toán thành bước nhỏ, lập giả mã, rồi thử dữ liệu thường, dữ liệu biên và đầu vào không hợp lệ.', 'input → process → output → test', 'Tính trung bình phải xử lý danh sách rỗng trước khi chia.'),
      prfTopic(1, '3. Kiểu dữ liệu và biến', 'Kiểu quyết định miền giá trị, phép toán và cách lưu.', 'Phân biệt số nguyên, số thực, ký tự, bool; khai báo biến, hằng và phạm vi.', 'int, double, char, bool', '5/2 bằng 2 với số nguyên; 5.0/2 bằng 2.5.'),
      prfTopic(1, '4. Toán tử, ép kiểu và biểu thức', 'Biểu thức được tính theo kiểu và thứ tự ưu tiên của toán tử.', 'Dùng toán tử số học, so sánh, logic, gán và ép kiểu; chú ý chia nguyên và tràn số.', 'int a=5/2; // a=2', 'static_cast<double>(5)/2 cho 2.5.'),
      prfTopic(2, '5. Rẽ nhánh', 'Điều kiện giúp chương trình chọn đường đi phù hợp.', 'Dùng if/else và switch; viết điều kiện loại trừ rõ ràng và thử mọi nhánh.', 'if (condition) { ... } else { ... }', 'Điểm 8 thuộc nhánh đạt nếu điều kiện là score >= 5.'),
      prfTopic(2, '6. Vòng lặp', 'Vòng lặp lặp việc theo quy tắc cho đến khi đạt điều kiện dừng.', 'Dùng for, while, do-while; theo dõi biến đếm và lỗi lệch một đơn vị.', 'for(init; condition; update)', 'Tính tổng 1..n bằng cách cộng từng số.'),
    ] },
    { name: 'Dữ liệu và bộ nhớ', items: [
      prfTopic(3, '7. Mảng và chỉ số', 'Mảng chứa nhiều phần tử cùng kiểu, truy cập từ chỉ số 0.', 'Kiểm tra kích thước trước khi truy cập; phân biệt mảng tĩnh, vector và mảng nhiều chiều.', 'a[0] là phần tử đầu tiên', 'Mảng 10 phần tử có chỉ số hợp lệ 0..9.'),
      prfTopic(3, '8. Chuỗi, struct và enum', 'Chuỗi biểu diễn văn bản; struct và enum đặt tên cho dữ liệu có cấu trúc.', 'Chuỗi C có ký tự kết thúc; std::string quản lý độ dài; struct gom trường và enum gom trạng thái.', 'std::string s; s.size()', 'Student có name và score nên gom thành một struct.'),
      prfTopic(4, '9. Hàm và tham số', 'Hàm chia bài toán thành các đơn vị có trách nhiệm rõ.', 'Phân biệt truyền giá trị, truyền tham chiếu, scope và trường hợp dừng của đệ quy.', 'int square(int x) { return x*x; }', 'Hàm nhận x bằng giá trị không sửa biến gốc của người gọi.'),
      prfTopic(4, '10. Con trỏ và quản lý bộ nhớ', 'Con trỏ lưu địa chỉ; quyền sở hữu quyết định ai giải phóng tài nguyên.', 'Dùng &, *, nullptr; phân biệt stack/heap, tham chiếu và con trỏ; ưu tiên RAII.', '&x lấy địa chỉ; *p giải tham chiếu', 'Đổi x qua tham chiếu tác động biến gốc; truyền giá trị chỉ đổi bản sao.'),
    ] },
    { name: 'Chuyên đề mô đun và hàm C · Slot 08–09', items: [
      moduleLesson('11. Thiết kế mô đun: cohesion và coupling',
        'Mỗi mô đun nên làm một việc rõ ràng và giao tiếp với mô đun khác qua dữ liệu cần thiết.',
        `Bắt đầu bằng cách liệt kê các động từ trong yêu cầu: nhập, tính, in. Mỗi nhiệm vụ đủ rõ có thể thành một hàm. Cohesion cao nghĩa là các câu lệnh trong cùng hàm cùng phục vụ một mục đích; coupling thấp nghĩa là hàm ít phụ thuộc biến toàn cục hoặc chi tiết bên trong hàm khác.\n\nVí dụ bài tổng các ước: tách hàm nhập n, hàm sumDivisors(n) chỉ tính tổng, và hàm in kết quả. main điều phối các bước. Cách này giúp kiểm thử hàm tính bằng đầu vào cố định mà không cần nhập từ bàn phím.`,
        'Một hàm → một nhiệm vụ; dữ liệu đi qua tham số và giá trị trả về.',
        'Với n=12, sumDivisors(12) trả 1+2+3+4+6+12=28. Hàm tính không gọi scanf hay printf, nên có thể dùng lại trong chương trình khác.',
        'Gộp nhập liệu, tính toán và in vào cùng một hàm làm khó kiểm thử; nhiều hàm cùng sửa biến toàn cục làm coupling tăng.',
        'Thiết kế các hàm cho chương trình nhận hai số dương và in UCLN, BCNN.',
        'Tách nhập hai số, gcd(a,b), lcm(a,b) và in kết quả. Với số dương, lcm(a,b)=a/gcd(a,b)×b; tính a/gcd trước để giảm nguy cơ tràn.',
        '7–25'),
      moduleLesson('12. Định nghĩa và gọi hàm C',
        'Hàm C gồm kiểu trả về, tên, danh sách tham số và thân hàm; lời gọi truyền đối số theo đúng thứ tự.',
        `Dạng tổng quát là returnType name(type parameter, ...) { statements; return value; }. Hàm void thực hiện tác vụ không trả giá trị. Parameter là biến trong khai báo/định nghĩa; argument là biểu thức được đưa vào khi gọi. Hàm main là điểm bắt đầu của chương trình C và nên khai báo rõ int main(void), rồi trả 0 khi kết thúc thành công.\n\nKhi hàm tính số thực từ số nguyên, ép kiểu trước phép chia hoặc dùng mẫu số thực. Giá trị trả về double không cứu được phần lẻ nếu phép chia nguyên đã xảy ra trước đó.`,
        'double average(int a,int b,int c) { return (a+b+c)/3.0; }',
        'average(4,5,6) tính 15/3.0=5.0. Nếu tổng là 5, phép chia 5/3.0 cho khoảng 1.6667; dùng 5/3 rồi gán vào double chỉ còn 1.0.',
        'Đừng nhầm tham số với đối số, hoặc dùng /3 rồi mong kiểu trả về double khôi phục phần lẻ.',
        'Hàm average(1,2,2) phải trả gần bao nhiêu? Vì sao mẫu số phải là 3.0?',
        'Tổng bằng 5, kết quả là 5/3≈1.6667. /3.0 làm phép chia số thực; /3 là phép chia nguyên cho kết quả 1.',
        '27–41'),
      moduleLesson('13. Prototype và header',
        'Prototype báo trước tên, kiểu trả về và kiểu tham số để trình biên dịch kiểm tra lời gọi.',
        `Nếu định nghĩa hàm nằm sau main, khai báo trước lời gọi, ví dụ int sumOddNumbers(int n);. Khi chuyển hàm sang tệp khác, đặt khai báo trong header riêng và thêm tệp nguồn chứa định nghĩa vào bước biên dịch/liên kết. #include <stdio.h> tìm header hệ thống; #include "my_math.h" thường tìm header của dự án.\n\nPrototype phải khớp định nghĩa về kiểu trả về và danh sách tham số. Trình biên dịch kiểm tra lời gọi theo khai báo; trình liên kết cần tìm được định nghĩa tương ứng.`,
        'Khai báo: int sumOddNumbers(int n);  ·  Định nghĩa: int sumOddNumbers(int n) { ... }',
        'Đặt prototype trước main, gọi sumOddNumbers(5) trong main, rồi định nghĩa hàm phía dưới. Tổng các số lẻ từ 1 đến 5 là 1+3+5=9.',
        'Thiếu prototype hoặc sai kiểu tham số có thể gây lỗi/cảnh báo; chỉ có header mà không biên dịch tệp định nghĩa vẫn gây lỗi liên kết.',
        'Vì sao có prototype nhưng vẫn có thể bị lỗi “undefined reference” khi build?',
        'Prototype chỉ khai báo giao diện; cần có định nghĩa của hàm trong tệp được liên kết vào chương trình.',
        '44–48'),
      moduleLesson('14. Truyền tham trị và lời gọi hàm',
        'Trong C, tham số nhận bản sao của giá trị đối số; sửa tham số không tự sửa biến bên gọi.',
        `Khi gọi swap(x,y) với hai tham số int a,int b, a và b là biến khác x,y. Hàm có thể hoán đổi bản sao, còn x,y không đổi. Muốn hàm C sửa biến của người gọi, truyền địa chỉ và nhận con trỏ, ví dụ swap(&x,&y) với tham số int *a,int *b. C++ còn có tham chiếu int&, nhưng đó không phải cú pháp truyền tham chiếu của C.\n\nMỗi lần gọi có vùng lưu trạng thái thực thi cho tham số và biến cục bộ; khi lời gọi kết thúc, biến cục bộ tự động hết thời gian sống. Chi tiết bố trí stack phụ thuộc trình biên dịch và nền tảng.`,
        'C: swap(int *a,int *b) { int t=*a; *a=*b; *b=t; }',
        'x=5,y=7: swap(x,y) với hai tham số int để x=5,y=7. swap(&x,&y) với hai con trỏ và thân hàm như trên cho x=7,y=5.',
        'Slide minh họa in địa chỉ bằng %u; trong C hãy dùng %p với (void*)ptr. Không trả con trỏ tới biến cục bộ đã hết thời gian sống.',
        'Một hàm void setTen(int n){n=10;} được gọi với x=3. Sau lời gọi, x bằng bao nhiêu?',
        'x vẫn bằng 3 vì n là bản sao. Muốn sửa x trong C, truyền &x và nhận int *n rồi gán *n=10.',
        '49–53'),
      moduleLesson('15. Phân rã bài toán thành hàm',
        'Chia thuật toán theo trách nhiệm để có thể thử từng hàm trước khi ghép chương trình.',
        `Với bài in n số nguyên tố đầu tiên, main đọc n rồi gọi printNPrimes(n). Hàm này tăng dần ứng viên từ 2, gọi isPrime(value), in số nguyên tố và dừng khi đã in đủ n số. isPrime chỉ kiểm tra một số: n<2 là sai; với n≥2, tìm ước từ 2 đến căn bậc hai của n.\n\nTương tự, bài UCLN/BCNN nên có gcd(a,b) dùng Euclid và lcm(a,b) dùng kết quả gcd, thay vì lặp lại cùng logic trong main. Đầu vào ngoài miền yêu cầu cần được xử lý rõ trước khi gọi.`,
        'main → printNPrimes(n) → isPrime(value)',
        'n=5 cho dãy 2, 3, 5, 7, 11. Kiểm tra isPrime(1)=false, isPrime(2)=true, isPrime(9)=false trước khi chạy cả chương trình.',
        'Mẫu kiểm tra chỉ lặp từ 2 mà không xử lý n<2 sẽ nhận nhầm 0 và 1 là số nguyên tố.',
        'Với n=3, printNPrimes(n) in gì? Hàm isPrime(1) phải trả gì?',
        'In 2, 3, 5. isPrime(1) trả false vì số nguyên tố phải lớn hơn 1.',
        '55–59'),
      moduleLesson('16. Scope, thời gian sống và che khuất biến',
        'Scope là nơi tên biến được nhìn thấy; thời gian sống là khoảng đối tượng tồn tại trong bộ nhớ.',
        `Biến cục bộ tự động khai báo trong một khối thường chỉ dùng được từ chỗ khai báo đến dấu } đóng khối đó và hết thời gian sống khi rời khối. Biến khai báo ngoài mọi hàm có phạm vi tệp/toàn cục tùy khai báo và thời gian sống suốt chương trình. Một biến trong khối trong có thể che biến cùng tên ở khối ngoài; dùng tên gần nhất đang thấy.\n\nTránh dùng biến toàn cục làm kênh trao đổi dữ liệu giữa các hàm khi có thể truyền tham số. Điều này giảm phụ thuộc ngầm và giúp kiểm thử độc lập.`,
        'Scope = vùng mã truy cập được tên; lifetime = lúc đối tượng tồn tại.',
        'int x=5; trong một khối con khai báo int x=9; printf ở khối con in 9, sau khi ra khối con in 5. Hai biến có cùng tên nhưng là hai đối tượng khác nhau.',
        'Đừng trả địa chỉ của biến cục bộ tự động. Biến cục bộ chưa khởi tạo cũng không mặc định bằng 0.',
        'Một hàm trả &local, trong đó local là biến int cục bộ. Sau khi hàm kết thúc, con trỏ này còn hợp lệ không?',
        'Không. Thời gian sống của local đã kết thúc, nên dùng con trỏ đó là không hợp lệ.',
        '60–64'),
      moduleLesson('17. Walkthrough qua lời gọi hàm',
        'Theo dõi từng đối số, tham số, giá trị trả về và biến bên gọi để hiểu kết quả.',
        `Lập bảng theo từng bước: giá trị trước lời gọi, ánh xạ đối số→tham số, tính trong hàm, giá trị return, rồi biểu thức ở nơi gọi. Với phép chia số nguyên C, bỏ phần lẻ theo hướng về 0. Việc ghi lại giá trị giúp phát hiện lỗi thứ tự đối số và nhầm biến cục bộ với biến ở main.\n\nCó thể dùng debugger để bước vào hàm và quan sát, nhưng trước hết nên dự đoán kết quả bằng tay để có cơ sở so sánh.`,
        'Đối số → tham số → tính trong hàm → return → biểu thức bên gọi.',
        'f(a,b,c) trả 2*(a+b-c)/5. Với x=5,y=6,z=7, f(y,x,z)=2*(6+5-7)/5=8/5=1 theo chia nguyên; t=3*f(y,x,z)=3.',
        'Đừng đọc f(y,x,z) như f(x,y,z). Kết quả trung gian 8/5 là 1 trong C, không phải 1,6.',
        'Nếu gọi f(5,6,7) và gán t=2*f(5,6,7), t bằng bao nhiêu?',
        'f=2*(5+6-7)/5=8/5=1 theo chia nguyên; t=2.',
        '65–66'),
      moduleLesson('18. Kiểm tra điều kiện biên trong bài hàm',
        'Công thức ngắn vẫn cần tiền điều kiện và ca thử ở ranh giới.',
        `Mẹo kiểm tra lũy thừa của 2 là n>0 && (n & (n-1))==0. Điều kiện n>0 là bắt buộc: riêng biểu thức bit cho n=0 cũng bằng 0 nhưng 0 không là lũy thừa của 2.\n\nNăm nhuận khi chia hết cho 400, hoặc chia hết cho 4 nhưng không chia hết cho 100. Công thức trên slide 68 bị đảo điều kiện 100/400; khi xây hàm isLeapYear(y), dùng (y%400==0) || (y%4==0 && y%100!=0). Khi kiểm tra ngày hợp lệ, xét số ngày mỗi tháng, năm nhuận cho tháng 2, và từ chối tháng/ngày ngoài miền.`,
        'isPower2(n): n>0 && (n&(n-1))==0; isLeapYear(y): y%400==0 || (y%4==0 && y%100!=0)',
        'isPower2(0)=false, isPower2(8)=true. Năm 1900 không nhuận vì chia hết 100 nhưng không chia hết 400; năm 2000 nhuận.',
        'Không chép nguyên công thức năm nhuận trên slide 68: nó phân loại sai 1900 và 2100 là năm nhuận. Luôn thử 0, 1, số mũ hai và các năm thế kỷ.',
        'Trong các năm 1900, 2000, 2024, năm nào nhuận?',
        '2000 và 2024 nhuận; 1900 không nhuận. 2000 chia hết 400, 2024 chia hết 4 mà không chia hết 100.',
        '67–68'),
    ] },
    { name: 'C++ mở rộng', items: [
      prfTopic(5, '19. Lớp và đối tượng', 'Class kết hợp trạng thái và hành vi thành kiểu tự định nghĩa.', 'Tạo object, constructor/destructor, private/public và giữ bất biến của đối tượng.', 'class → object', 'BankAccount có thể che số dư và chỉ cho deposit hợp lệ.'),
      prfTopic(5, '20. Kế thừa và đa hình', 'Kế thừa dùng cho quan hệ is-a; virtual chọn hành vi theo kiểu đối tượng thật.', 'Dùng base/derived, override và virtual destructor đúng chỗ.', 'virtual → dynamic dispatch', 'draw() ảo gọi cách vẽ tương ứng với lớp con.'),
      prfTopic(6, '21. STL và thuật toán', 'Thư viện chuẩn cung cấp container, iterator và thuật toán dùng lại.', 'Chọn vector/map/set theo thao tác cần làm; dùng sort, find và hiểu iterator.', 'vector tự đổi kích thước khi push_back', 'std::sort(v.begin(),v.end()) sắp xếp vector tăng mặc định.'),
      prfTopic(6, '22. File, ngoại lệ và template', 'File lưu dữ liệu lâu dài; exception tách lỗi khỏi luồng thường.', 'Dùng fstream, kiểm tra trạng thái, xử lý ngoại lệ và viết template cơ bản.', 'if (!file) xử lý lỗi mở file', 'Mở file thất bại phải được báo, không được giả định đã đọc dữ liệu.'),
      prfTopic(6, '23. Đa luồng và dữ liệu dùng chung', 'Thread cho nhiều việc tiến triển đồng thời nhưng dữ liệu chung cần đồng bộ.', 'Dùng std::thread, join, mutex; nhận biết data race và đo hiệu năng sau khi sửa đúng.', 'khóa trước khi sửa trạng thái dùng chung', 'Hai thread tăng cùng biến không khóa có thể làm mất lượt cập nhật.'),
    ] },
  ];
  const guides = {
    MAE101: [
      {
        details: `Trước tiên tìm miền xác định: mẫu khác 0, căn bậc hai có biểu thức dưới căn không âm, log có đối số dương. Sau đó xét giao với trục, tính đối xứng, khoảng tăng giảm và tiệm cận để phác đồ thị. Hàm hợp f(g(x)) chỉ có nghĩa khi x thuộc miền của g và g(x) thuộc miền của f. Hàm ngược chỉ tồn tại như một hàm trên khoảng mà f là một-một; đồ thị của nó đối xứng qua đường y=x.`,
        example: `Xét f(x)=2x+3. Miền xác định và tập giá trị đều là R. Giải y=2x+3 theo x được x=(y−3)/2, nên f⁻¹(x)=(x−3)/2. Kiểm tra: f⁻¹(f(4))=(11−3)/2=4.`,
        pitfall: `f⁻¹(x) là hàm ngược, không phải 1/f(x). Với hàm hữu tỉ, đừng quên loại điểm làm mẫu bằng 0.`,
        practice: `Tìm miền xác định của g(x)=√(x−1)/(x−3).`,
        answer: `Cần x−1≥0 và x−3≠0. Vậy miền xác định là [1,3)∪(3,+∞).`
      },
      {
        details: `Giới hạn xét xu hướng của f(x) khi x tiến tới a, không bắt buộc f(a) phải tồn tại. Muốn có giới hạn hai phía, giới hạn trái và phải phải bằng nhau. Khi thay trực tiếp được 0/0, hãy rút gọn, nhân liên hợp hoặc dùng giới hạn cơ bản rồi mới thế. Liên tục tại a cần đủ ba điều: f(a) xác định, giới hạn hai phía tồn tại, và giới hạn ấy bằng f(a).`,
        example: `lim(x→1)(x²−1)/(x−1) có dạng 0/0. Với x≠1, rút gọn (x−1)(x+1)/(x−1)=x+1, nên giới hạn bằng 2. Biểu thức gốc chưa xác định tại x=1; muốn liên tục, phải đặt f(1)=2.`,
        pitfall: `0/0 là dạng vô định, không phải kết quả bằng 0. Một giới hạn hữu hạn cũng chưa đủ kết luận hàm liên tục.`,
        practice: `Cho f(x)=x+2 khi x≠2 và f(2)=k. Chọn k để f liên tục tại 2.`,
        answer: `lim(x→2)(x+2)=4, vì vậy phải chọn k=4.`
      },
      {
        details: `Đạo hàm tại a là giới hạn [f(a+h)−f(a)]/h khi h→0, nếu giới hạn tồn tại. Nó cho độ dốc tiếp tuyến và tốc độ thay đổi tức thời. Khi tính, nhận diện lớp ngoài/lớp trong trước khi áp dụng quy tắc hàm hợp; với tích dùng (uv)′=u′v+uv′, với thương dùng (u/v)′=(u′v−uv′)/v². Kiểm tra miền xác định và điểm góc, nơi đạo hàm có thể không tồn tại.`,
        example: `y=(3x²+1)⁵: đặt u=3x²+1, nên y=u⁵. Theo hàm hợp, y′=5u⁴u′=5(3x²+1)⁴·6x=30x(3x²+1)⁴.`,
        pitfall: `Không bỏ đạo hàm của lớp trong. Đạo hàm tồn tại kéo theo liên tục, nhưng liên tục chưa chắc có đạo hàm.`,
        practice: `Tính đạo hàm của h(x)=x²sin x.`,
        answer: `Quy tắc tích cho h′(x)=2x sin x+x²cos x.`
      },
      {
        details: `Bài toán cực trị bắt đầu bằng một hàm mục tiêu theo một biến và miền giá trị hợp lệ. Tìm điểm tới hạn nơi f′=0 hoặc f′ không tồn tại; dùng bảng dấu f′, f″ hoặc so sánh giá trị ở cả điểm biên để kết luận. f′>0 cho khoảng tăng, f′<0 cho khoảng giảm. Với phương pháp Newton, lặp từ một giá trị gần nghiệm nhưng phải tránh điểm f′=0 và kiểm tra hội tụ.`,
        example: `Một hình chữ nhật có nửa chu vi 10: nếu hai cạnh là x và 10−x thì A(x)=x(10−x), 0<x<10. A′=10−2x=0 tại x=5, A″=−2<0, nên diện tích lớn nhất là 25.`,
        pitfall: `f′(x)=0 chỉ tạo ứng viên cực trị; cần xét dấu hoặc f″ và cả biên của miền.`,
        practice: `Tìm giá trị nhỏ nhất của f(x)=x²−4x+3 trên R.`,
        answer: `f′=2x−4=0 tại x=2, f″=2>0. Giá trị nhỏ nhất là f(2)=−1.`
      },
      {
        details: `Tích phân xác định là giới hạn của các tổng Riemann và cho độ biến thiên có dấu. Nếu F′=f trên [a,b], định lý cơ bản cho ∫ₐᵇf(x)dx=F(b)−F(a). Khi tính diện tích hình học, chia tại các nghiệm của f và tích phân |f|; kết quả có dấu âm ở phần đồ thị nằm dưới trục hoành. Luôn kiểm tra đơn vị: tích phân vận tốc theo thời gian cho độ dời, không tự động là quãng đường.`,
        example: `∫₀²x dx=[x²/2]₀²=2. Nếu x biểu thị vận tốc m/s và biến tích phân là giây, kết quả là 2 m độ dời.`,
        pitfall: `Đừng cộng hằng số C cho tích phân xác định; đừng nhầm diện tích với tích phân có dấu.`,
        practice: `Tính ∫₀³(2x+1)dx.`,
        answer: `Nguyên hàm là x²+x; thay cận được (9+3)−0=12.`
      },
      {
        details: `Đổi biến phù hợp khi thấy một biểu thức bên trong và đạo hàm của nó ở bên ngoài: đặt u=g(x), du=g′(x)dx. Tích phân từng phần phù hợp cho tích mà một thừa số dễ lấy đạo hàm, thừa số kia dễ tìm nguyên hàm. Với tích phân suy rộng, thay cận vô cực hoặc điểm gián đoạn bằng giới hạn rồi xét hội tụ. Sau khi tính, lấy đạo hàm kết quả để tự kiểm tra.`,
        example: `∫2x cos(x²)dx: đặt u=x², du=2x dx. Khi đó ∫cos u du=sin u+C=sin(x²)+C. Lấy đạo hàm sin(x²) được 2x cos(x²), đúng với đề.`,
        pitfall: `Đổi biến trong tích phân xác định phải đổi luôn cận, hoặc đổi biến ngược trước khi thế cận.`,
        practice: `Tính ∫x eˣ dx bằng từng phần.`,
        answer: `Chọn u=x, dv=eˣdx. Khi đó ∫x eˣdx=x eˣ−∫eˣdx=(x−1)eˣ+C.`
      },
      {
        details: `Lập ma trận mở rộng [A|b], thực hiện ba phép hàng sơ cấp: đổi hàng, nhân hàng với số khác 0, cộng bội một hàng vào hàng khác. Đưa về dạng bậc thang rồi thế ngược hoặc rút gọn thêm. Hàng [0 … 0 | c] với c≠0 báo vô nghiệm. Nếu không mâu thuẫn, số biến tự do bằng số ẩn trừ số pivot; bằng 0 thì nghiệm duy nhất, lớn hơn 0 thì vô số nghiệm.`,
        example: `Hệ x+y=3, x−y=1 có ma trận [1 1|3; 1 −1|1]. Lấy hàng 2 trừ hàng 1 được [0 −2|−2], suy ra y=1 rồi x=2. Thế lại cả hai phương trình để kiểm tra.`,
        pitfall: `Phép biến đổi hàng phải tác động cả vế phải; một hàng toàn 0 không tự động có nghĩa vô nghiệm.`,
        practice: `Hệ x+y=4 và 2x+2y=8 có bao nhiêu nghiệm?`,
        answer: `Hàng thứ hai là hai lần hàng thứ nhất, nên có một biến tự do: vô số nghiệm (x,y)=(t,4−t).`
      },
      {
        details: `Ma trận m×n nhân được với ma trận n×p, kết quả có kích thước m×p. Phần tử hàng i cột j của AB là tích vô hướng hàng i của A với cột j của B. Xem A như phép biến đổi vectơ: cột thứ j của A chính là ảnh của vectơ cơ sở eⱼ. Với ma trận vuông, A có nghịch đảo chỉ khi các cột độc lập tuyến tính; tính A⁻¹ bằng Gauss–Jordan trên [A|I].`,
        example: `A=[1 2; 0 1], b=[3;4]. Khi nhân, hàng đầu cho 1·3+2·4=11, hàng sau cho 0·3+1·4=4; vậy Ab=[11;4].`,
        pitfall: `AB thường khác BA. Kiểm tra kích thước trước khi nhân để tránh một phép toán không xác định.`,
        practice: `A kích thước 2×3, B kích thước 3×4. AB có kích thước nào? BA có xác định không?`,
        answer: `AB là 2×4; BA không xác định vì 4 cột của B không khớp 2 hàng của A.`
      },
      {
        details: `Với ma trận vuông, det(A)≠0 tương đương A khả nghịch. Để tìm trị riêng, giải det(A−λI)=0, rồi với từng λ giải (A−λI)v=0 để tìm vectơ riêng v≠0. Ma trận n×n chéo hóa được khi có n vectơ riêng độc lập tuyến tính; khi đó A=PDP⁻¹ với các cột P là vectơ riêng và đường chéo D là trị riêng tương ứng. Trị riêng lặp không bảo đảm đủ vectơ riêng.`,
        example: `A=[2 0; 0 3] có det(A)=6 nên khả nghịch. Phương trình det(A−λI)=(2−λ)(3−λ)=0 cho λ=2,3; vectơ riêng lần lượt là (1,0) và (0,1). Vì đủ hai vectơ độc lập, A đã ở dạng chéo.`,
        pitfall: `Không được kết luận chéo hóa được chỉ vì đa thức đặc trưng có đủ bội đại số.`,
        practice: `Tính det([1 2; 3 4]) và kết luận ma trận có nghịch đảo không.`,
        answer: `Định thức 1·4−2·3=−2≠0, nên ma trận có nghịch đảo.`
      },
      {
        details: `Tích vô hướng u·v=∑uᵢvᵢ cho biết góc và hình chiếu: cosθ=(u·v)/(|u||v|) nếu cả hai khác 0. Trong R³, tích có hướng u×v vuông góc với hai vectơ và độ dài bằng diện tích hình bình hành do chúng tạo ra. Phương trình mặt phẳng cần một điểm và vectơ pháp tuyến n: n·(x−x₀)=0. Luôn kiểm tra số chiều và đơn vị trước khi áp dụng hình học.`,
        example: `u=(1,2), v=(2,−1) thì u·v=1·2+2·(−1)=0. Cả hai khác 0, nên chúng vuông góc.`,
        pitfall: `Tích có hướng thông thường chỉ dùng cho vectơ trong R³; u·v=0 với vectơ 0 không cho một góc xác định.`,
        practice: `Tính cos góc giữa u=(1,0) và v=(1,1).`,
        answer: `u·v=1, |u|=1, |v|=√2, nên cosθ=1/√2 và θ=45°.`
      },
      {
        details: `Một tập là không gian con khi chứa vectơ 0 và đóng dưới phép cộng, nhân vô hướng. Cơ sở vừa độc lập tuyến tính vừa sinh toàn bộ không gian; số vectơ trong cơ sở là chiều. Dùng phép khử Gauss để tìm pivot: các cột pivot của ma trận gốc tạo cơ sở cho không gian cột, còn nghiệm của Ax=0 tạo không gian không. Định lý rank–nullity liên hệ số chiều hai không gian: rank(A)+nullity(A)=số cột A.`,
        example: `Ma trận 2×3 có rank 2 thì không gian nghiệm Ax=0 có chiều 3−2=1. Nghĩa là hệ thuần nhất có một tham số tự do, dù ma trận có hai hàng.`,
        pitfall: `Khi tìm cơ sở của không gian cột, lấy cột pivot từ ma trận gốc, không lấy cột đã biến đổi hàng.`,
        practice: `Hai vectơ (1,0) và (0,1) có là cơ sở của R² không?`,
        answer: `Có. Chúng độc lập và mọi (a,b)=a(1,0)+b(0,1), nên sinh R².`
      }
    ],
    CEA201: [
      {
        details: `Kiến trúc máy tính mô tả những gì lập trình viên nhìn thấy, như tập lệnh, thanh ghi và cách đánh địa chỉ. Tổ chức máy tính là cách phần cứng hiện thực kiến trúc ấy: đường dữ liệu, bộ điều khiển, cache và bus. Tách hai tầng này giúp giải thích vì sao phần mềm đã biên dịch vẫn chạy trên nhiều đời CPU cùng ISA nhưng hiệu năng khác nhau. Bốn chức năng cơ bản là xử lý, lưu trữ, di chuyển dữ liệu và điều khiển.`,
        example: `Hai CPU cùng chạy một chương trình x86-64. Chúng có thể hỗ trợ cùng lệnh ADD, nhưng một CPU có cache lớn hơn và pipeline khác nên chạy nhanh hơn. ISA tương tự, tổ chức bên trong khác.`,
        pitfall: `Đừng dùng “kiến trúc” và “tổ chức” như hai từ đồng nghĩa; thông số xung nhịp cũng không phải toàn bộ hiệu năng.`,
        practice: `Nếu một đời CPU tăng cache nhưng giữ nguyên tập lệnh, phần nào thay đổi chủ yếu?`,
        answer: `Tổ chức phần cứng thay đổi; giao diện ISA mà chương trình thấy có thể giữ nguyên.`
      },
      {
        details: `Đánh giá hiệu năng bằng thời gian chạy cùng một công việc, không chỉ bằng GHz. Mô hình cơ bản: CPU time = số lệnh × số chu kỳ/lệnh (CPI) × thời gian mỗi chu kỳ. Tăng tần số làm chu kỳ ngắn hơn, nhưng CPI có thể tăng do chờ bộ nhớ hoặc nhánh sai. Khi so sánh, giữ cùng chương trình, dữ liệu và điều kiện đo; phân biệt độ trễ của một tác vụ với thông lượng tác vụ mỗi giây.`,
        example: `Chương trình có 10⁹ lệnh, CPI=2, xung 2 GHz: thời gian CPU xấp xỉ 10⁹×2/(2×10⁹)=1 giây. Nếu CPI tăng lên 4 vì chờ bộ nhớ thì dù xung không đổi, thời gian thành 2 giây.`,
        pitfall: `Không suy tốc độ chương trình trực tiếp từ số GHz; cần tính cả số lệnh, CPI và thời gian I/O nếu đo toàn chương trình.`,
        practice: `10⁸ lệnh với CPI=3 và xung 1,5 GHz cần khoảng bao lâu CPU time?`,
        answer: `10⁸×3/(1,5×10⁹)=0,2 giây, bỏ qua chờ ngoài mô hình.`
      },
      {
        details: `Một chu trình lệnh thường gồm lấy lệnh từ địa chỉ PC, giải mã trong IR, lấy toán hạng, thực thi rồi ghi kết quả. PC thông thường trỏ tới lệnh kế tiếp, nhưng nhánh, ngắt hoặc ngoại lệ có thể đổi nó. CPU, bộ nhớ và thiết bị trao đổi qua các liên kết dữ liệu, địa chỉ và điều khiển; băng thông và độ trễ của liên kết ảnh hưởng toàn hệ thống.`,
        example: `Giả sử PC=100 và mỗi lệnh dài 4 byte. Sau lệnh tuần tự, PC thường thành 104. Nếu lệnh tại 100 là nhánh tới 200 và điều kiện đúng, PC thành 200 thay vì 104.`,
        pitfall: `Không xem “fetch–execute” là một thao tác nguyên tử; truy cập bộ nhớ và ngắt có thể xen vào.`,
        practice: `PC=40, lệnh dài 4 byte, nhánh không được lấy. PC kế tiếp là bao nhiêu?`,
        answer: `PC=44 nếu kiến trúc dùng địa chỉ byte và lệnh tuần tự dài 4 byte như giả thiết.`
      },
      {
        details: `Thanh ghi nhanh và nhỏ; cache gần CPU; RAM lớn hơn nhưng chậm hơn; SSD/HDD lớn hơn nữa và lưu được khi tắt máy. Phân cấp bộ nhớ khai thác tính cục bộ thời gian (dùng lại dữ liệu vừa dùng) và không gian (truy cập địa chỉ gần nhau). Khi thiết kế thuật toán, truy cập tuần tự và tái sử dụng dữ liệu thường giúp giảm số lần phải xuống tầng chậm.`,
        example: `Duyệt mảng 1 triệu phần tử theo thứ tự có thể nạp một cache line rồi dùng nhiều phần tử liên tiếp. Truy cập các vị trí ngẫu nhiên dễ làm mỗi lần phải nạp line mới.`,
        pitfall: `Đừng kết luận mọi truy cập RAM đều có cùng thời gian; cache hit và cache miss khác nhau đáng kể.`,
        practice: `Lặp lại phép tính trên cùng một khối dữ liệu nhỏ thể hiện tính cục bộ nào?`,
        answer: `Chủ yếu là cục bộ thời gian vì dữ liệu đã dùng được dùng lại sớm.`
      },
      {
        details: `Cache lưu dữ liệu theo block hay cache line. Địa chỉ được tách thành tag, index và offset để chọn vị trí và kiểm tra line có đúng dữ liệu hay không. Hit lấy dữ liệu từ cache; miss phải tìm ở tầng thấp hơn và trả giá miss penalty. AMAT = hit time + miss rate × miss penalty là mô hình đơn giản cho thời gian truy cập trung bình. Các chính sách thay thế và ghi (write-through/write-back) tạo đánh đổi riêng.`,
        example: `Hit time=1 ns, miss rate=5%, miss penalty=80 ns thì AMAT=1+0,05×80=5 ns. Giảm miss rate xuống 2% đưa AMAT còn 2,6 ns dù hit time không đổi.`,
        pitfall: `Miss rate phải đổi từ phần trăm sang số thập phân; AMAT của nhiều tầng cache cần xét lần lượt từng tầng.`,
        practice: `Hit time=2 ns, miss rate=10%, miss penalty=50 ns. Tính AMAT.`,
        answer: `AMAT=2+0,10×50=7 ns theo mô hình một tầng.`
      },
      {
        details: `Bộ nhớ trong gồm RAM và các dạng ROM/flash cho vai trò khác nhau. SRAM thường nhanh và không cần refresh nên hợp làm cache nhưng tốn diện tích; DRAM lưu bit bằng điện tích nên cần làm tươi, phù hợp RAM dung lượng lớn. Dung lượng một bộ nhớ đánh địa chỉ theo byte bằng số địa chỉ nhân số byte mỗi địa chỉ; n bit địa chỉ phân biệt tối đa 2ⁿ địa chỉ, nhưng hệ thống thực còn ràng buộc ánh xạ và phần cứng.`,
        example: `Nếu có 20 bit địa chỉ và mỗi địa chỉ chỉ một byte, không gian địa chỉ tối đa là 2²⁰ byte = 1 MiB. Nếu mỗi địa chỉ chỉ một word 4 byte thì dung lượng tương ứng là 4 MiB.`,
        pitfall: `Đừng nhầm bit địa chỉ với bit dữ liệu, hoặc MB thập phân với MiB nhị phân.`,
        practice: `16 bit địa chỉ, mỗi địa chỉ một byte, cho không gian địa chỉ tối đa bao nhiêu KiB?`,
        answer: `2¹⁶ byte = 65.536 byte = 64 KiB.`
      },
      {
        details: `Lưu trữ ngoài giữ dữ liệu khi mất điện. HDD dùng cơ cấu quay nên truy cập ngẫu nhiên chịu thời gian tìm rãnh và chờ quay; SSD dùng flash nên không có độ trễ cơ học ấy. Khi đánh giá thiết bị, tách độ trễ một yêu cầu, thông lượng tuần tự, IOPS, độ bền và chi phí/GB. Hệ điều hành và file system có thể đệm hoặc gộp I/O, nên số đo ứng dụng không chỉ do bản thân thiết bị quyết định.`,
        example: `Đọc 100 khối liền nhau trên HDD có thể trả một lần tìm rồi truyền liên tục. Đọc 100 khối rải rác phải tìm vị trí nhiều lần, chậm hơn rõ rệt dù tổng byte bằng nhau.`,
        pitfall: `Không coi SSD là RAM: SSD không mất dữ liệu khi tắt nguồn nhưng độ trễ vẫn lớn hơn RAM.`,
        practice: `Vì sao quét tuần tự một file lớn thường dễ đạt thông lượng tốt hơn đọc ngẫu nhiên cùng số byte trên HDD?`,
        answer: `Đọc tuần tự giảm số lần seek và chờ quay; đầu đọc truyền dữ liệu liên tục hơn.`
      },
      {
        details: `CPU có thể làm I/O bằng thăm dò (polling), nhận ngắt khi thiết bị sẵn sàng, hoặc giao việc truyền khối cho DMA. Polling đơn giản nhưng tốn chu kỳ nếu phải đợi; ngắt tránh đợi liên tục nhưng có chi phí xử lý; DMA giảm việc CPU chép từng đơn vị dữ liệu. Trước khi truyền, CPU vẫn cần cấu hình thiết bị, địa chỉ và kích thước, và sau đó kiểm tra hoàn thành/lỗi.`,
        example: `Đọc một khối 1 MiB từ thiết bị: với DMA, CPU cấp vùng RAM đích và kích thước, bộ điều khiển truyền dữ liệu, rồi báo hoàn thành qua ngắt. CPU không phải lặp 1 triệu lần để chép từng byte.`,
        pitfall: `DMA không có nghĩa CPU không làm gì cả; vẫn có chi phí thiết lập, đồng bộ và quản lý bộ nhớ.`,
        practice: `Một nút bấm phát sự kiện rất hiếm: polling liên tục hay ngắt thường hợp lý hơn?`,
        answer: `Ngắt thường hợp lý hơn vì CPU có thể làm việc khác cho tới khi sự kiện xảy ra.`
      },
      {
        details: `Hệ điều hành dùng chế độ đặc quyền để bảo vệ tài nguyên; chương trình người dùng phải gọi system call khi cần dịch vụ được bảo vệ. Bộ nhớ ảo cho mỗi tiến trình một không gian địa chỉ logic; MMU và bảng trang dịch địa chỉ ảo sang địa chỉ vật lý. Page fault xảy ra khi ánh xạ chưa hợp lệ hoặc trang chưa ở RAM; hệ điều hành xử lý hoặc báo lỗi. Phân biệt lỗi trang hợp lệ cần nạp dữ liệu với lỗi truy cập trái phép.`,
        example: `Chương trình truy cập địa chỉ ảo thuộc một trang chưa ở RAM. MMU tạo page fault; OS có thể nạp trang từ lưu trữ, cập nhật bảng trang rồi chạy lại lệnh.`,
        pitfall: `Địa chỉ ảo không phải địa chỉ vật lý; page fault không luôn đồng nghĩa chương trình bị lỗi.`,
        practice: `Vì sao hai tiến trình đều có thể dùng cùng địa chỉ ảo 0x1000 mà không ghi đè lên nhau?`,
        answer: `Mỗi tiến trình có bảng ánh xạ riêng, nên cùng địa chỉ ảo có thể trỏ tới trang vật lý khác nhau.`
      },
      {
        details: `Một số nguyên không âm có thể viết ở cơ số b bằng tổng các chữ số nhân bⁿ theo vị trí. Nhị phân dùng 0/1; thập lục phân dùng 0–9 và A–F. Mỗi chữ số hex tương ứng đúng 4 bit, nên đổi nhị phân–hex bằng cách nhóm 4 bit từ phải sang trái. Cùng chuỗi bit có thể diễn giải khác nhau tùy xem là số có dấu, không dấu, ký tự hay lệnh máy.`,
        example: `10110110₂ nhóm thành 1011 0110, tương ứng B6₁₆. Theo thập phân không dấu, 128+32+16+4+2=182.`,
        pitfall: `Không đọc chuỗi bit như số có dấu nếu chưa biết độ rộng bit và quy ước biểu diễn.`,
        practice: `Đổi 1111 0001₂ sang hex và thập phân không dấu.`,
        answer: `1111=F, 0001=1, nên F1₁₆; giá trị không dấu là 241₁₀.`
      },
      {
        details: `Bù hai của số âm trong n bit: lấy biểu diễn dương, đảo bit rồi cộng 1; miền giá trị là −2ⁿ⁻¹ đến 2ⁿ⁻¹−1. Cộng tràn khi kết quả toán học ra ngoài miền biểu diễn, khác với carry-out đơn thuần. Số thực IEEE 754 dùng bit dấu, số mũ và phần trị; nhiều phân số thập phân như 0,1 không có biểu diễn nhị phân hữu hạn nên phải làm tròn. Khi lập trình, chọn kiểu dữ liệu theo miền giá trị và mức sai số cần chấp nhận.`,
        example: `Trong 8 bit, +5=00000101; đảo thành 11111010 rồi cộng 1 được 11111011, tức −5. Cộng −5+5 theo 8 bit cho 00000000 (bỏ carry ngoài).`,
        pitfall: `Không so sánh số thực tính toán bằng dấu bằng tuyệt đối khi có sai số làm tròn; dùng sai số cho phép phù hợp.`,
        practice: `Trong số nguyên 8 bit có dấu, 127+1 cho hiện tượng gì?`,
        answer: `Giá trị toán học 128 vượt mức lớn nhất 127, nên xảy ra overflow; bit kết quả bù hai là 10000000, diễn giải thành −128.`
      },
      {
        details: `Mạch tổ hợp cho đầu ra chỉ phụ thuộc đầu vào hiện tại; mạch tuần tự còn phụ thuộc trạng thái lưu trước đó. AND, OR, NOT và XOR là các cổng cơ bản; đại số Boolean giúp rút gọn mạch. Half adder cộng hai bit, full adder cộng thêm carry-in và tạo sum cùng carry-out. Với mạch tuần tự, clock, flip-flop và điều kiện setup/hold quyết định lúc trạng thái được cập nhật.`,
        example: `Full adder có A=1, B=1, carry-in=0: tổng nhị phân là 10₂, nên sum=0 và carry-out=1. Nếu carry-in=1 thì tổng là 11₂, sum=1, carry-out=1.`,
        pitfall: `XOR khác OR khi cả hai đầu vào cùng bằng 1: XOR=0 còn OR=1.`,
        practice: `A=1, B=0, carry-in=1 trong full adder cho sum và carry-out bằng bao nhiêu?`,
        answer: `1+0+1=2=10₂, nên sum=0, carry-out=1.`
      },
      {
        details: `ISA quy định các lệnh mà phần mềm có thể yêu cầu CPU thực hiện. Một lệnh thường chứa opcode (việc cần làm) và toán hạng (dữ liệu hoặc nơi chứa dữ liệu); định dạng lệnh còn quy định độ dài và vị trí trường. Tập lệnh ảnh hưởng cách compiler sinh mã, nhưng cùng một lệnh có thể được thực hiện bằng các vi kiến trúc khác nhau. Khi đọc lệnh, xác định rõ nguồn, đích và tác dụng lên cờ hoặc bộ nhớ.`,
        example: `Một lệnh cộng dạng ADD R3,R1,R2 có thể hiểu là R3←R1+R2 trong một ISA giả định. Hai toán hạng nguồn là R1,R2; đích là R3. Không suy nghĩa chính xác của cú pháp này cho mọi ISA.`,
        pitfall: `Cú pháp và thứ tự toán hạng của assembly thay đổi theo kiến trúc; luôn đọc tài liệu của ISA đang dùng.`,
        practice: `Trong một lệnh gồm opcode và hai địa chỉ thanh ghi, opcode cho biết điều gì?`,
        answer: `Opcode chỉ loại thao tác, ví dụ cộng, tải, lưu hoặc nhảy; địa chỉ thanh ghi xác định toán hạng.`
      },
      {
        details: `Chế độ địa chỉ hóa cho biết cách tìm toán hạng: immediate lấy hằng trong lệnh, register lấy từ thanh ghi, base+offset tính địa chỉ hiệu dụng rồi truy cập bộ nhớ. Nếu phần tử có kích thước s byte, A[i] thường ở base+i×s, không chỉ base+i. Định dạng lệnh phải dành đủ bit cho opcode, thanh ghi và hằng/offset; tăng bit ở một trường có thể giảm chỗ cho trường khác.`,
        example: `Mảng int 4 byte bắt đầu tại địa chỉ 1000. A[3] nằm tại 1000+3×4=1012. Một lệnh load dạng [base+12] có thể đọc phần tử này nếu base=1000.`,
        pitfall: `Không quên nhân chỉ số với kích thước phần tử; phân biệt giá trị offset với địa chỉ hiệu dụng.`,
        practice: `Mảng phần tử 8 byte có base=4096. A[5] ở địa chỉ nào?`,
        answer: `4096+5×8=4136.`
      },
      {
        details: `Assembly biểu diễn lệnh máy bằng ký hiệu dễ đọc hơn, nhưng vẫn phụ thuộc ISA. Đọc đoạn mã bằng cách lập bảng trạng thái thanh ghi, cờ và bộ nhớ sau từng lệnh. Nhánh có điều kiện kiểm tra cờ hoặc kết quả so sánh, nên luồng chạy có thể bỏ qua các lệnh. Khi dịch từ thuật toán cấp cao, xác định vòng lặp, điều kiện dừng và nơi biến được lưu.`,
        example: `Mã giả: R1←3; R1←R1+2; nếu R1=5 thì nhảy tới DONE. Sau hai lệnh đầu R1=5, nên nhánh được lấy; các lệnh giữa nhánh và DONE không chạy.`,
        pitfall: `MOV/LOAD/STORE không có nghĩa y hệt trên mọi ISA; phân biệt địa chỉ trong thanh ghi với dữ liệu ở địa chỉ đó.`,
        practice: `Nếu R2=7, lệnh giả SUB R2,R2,1 rồi so sánh R2 với 6 cho kết quả gì?`,
        answer: `Sau phép trừ R2=6, điều kiện bằng 6 đúng. Cú pháp chỉ là minh họa, không ràng buộc ISA cụ thể.`
      },
      {
        details: `Đường dữ liệu CPU gồm thanh ghi, ALU, bộ chọn dữ liệu và đường nối; bộ điều khiển phát tín hiệu cho từng bước. Pipeline chia xử lý lệnh thành các giai đoạn để nhiều lệnh cùng ở các giai đoạn khác nhau. Điều này thường cải thiện thông lượng sau khi pipeline đầy, nhưng độ trễ của một lệnh không nhất thiết giảm. Pipeline có thể dừng bởi phụ thuộc dữ liệu, nhánh hoặc tranh chấp tài nguyên.`,
        example: `Pipeline 5 giai đoạn, mỗi giai đoạn một chu kỳ: lệnh đầu có thể cần khoảng 5 chu kỳ để hoàn tất, sau khi đầy lý tưởng có thể hoàn tất gần một lệnh mỗi chu kỳ. Hai con số đo hai khái niệm khác nhau.`,
        pitfall: `Đừng tính tốc độ gấp đúng số giai đoạn: thời gian đổ pipeline, mất cân bằng giai đoạn và hazard làm giảm mức tăng.`,
        practice: `Pipeline 4 giai đoạn lý tưởng hoàn tất một lệnh mỗi chu kỳ sau khi đầy. Một lệnh riêng lẻ có độ trễ tối thiểu khoảng mấy chu kỳ?`,
        answer: `Khoảng 4 chu kỳ nếu mỗi giai đoạn tốn một chu kỳ, dù thông lượng về sau là một lệnh/chu kỳ.`
      },
      {
        details: `RISC thường dùng lệnh tương đối đều, nhiều thanh ghi và thiết kế load/store: phép tính số học làm trên thanh ghi, còn lệnh riêng truy cập bộ nhớ. Điều này giúp giải mã và pipeline thuận lợi trong nhiều thiết kế, nhưng hiệu năng thực phụ thuộc compiler, cache và vi kiến trúc. CISC có thể cung cấp lệnh phức tạp hơn; ranh giới hiện đại không tuyệt đối vì bên trong CPU có thể tách lệnh thành vi thao tác.`,
        example: `Muốn cộng một giá trị trong RAM với R1 theo mô hình load/store: LOAD R2,[addr]; ADD R3,R1,R2; có thể STORE R3,[dest]. Phép ADD không trực tiếp đọc RAM trong mô hình này.`,
        pitfall: `Không kết luận RISC luôn nhanh hơn CISC hoặc số lệnh ít hơn luôn chạy nhanh hơn.`,
        practice: `Trong ISA load/store, lệnh nào thường lấy dữ liệu từ RAM vào thanh ghi?`,
        answer: `Lệnh LOAD; phép ADD sau đó dùng toán hạng đã ở thanh ghi.`
      },
      {
        details: `Song song cấp lệnh khai thác các lệnh độc lập trong cùng luồng chương trình. Hazard dữ liệu xảy ra khi lệnh sau cần kết quả chưa sẵn; hazard điều khiển do chưa biết nhánh; hazard cấu trúc do tranh chấp phần cứng. Forwarding, stall, dự đoán nhánh và thực thi ngoài thứ tự là những cách xử lý, nhưng phải giữ kết quả quan sát được đúng theo chương trình.`,
        example: `R1←R2+R3 và R4←R5+R6 độc lập nên có thể chạy chồng lấp. Nhưng R4←R1+R6 phải chờ giá trị R1 mới; nếu không có forwarding hoặc lịch phù hợp, pipeline cần stall.`,
        pitfall: `Hai lệnh khác thanh ghi đích vẫn có thể phụ thuộc nếu một lệnh đọc kết quả của lệnh kia hoặc truy cập cùng bộ nhớ.`,
        practice: `A: R1←R2+R3; B: R4←R1+1. B có phụ thuộc dữ liệu vào A không?`,
        answer: `Có. B đọc R1 do A tạo ra; đây là phụ thuộc read-after-write.`
      },
      {
        details: `Trong điều khiển vi chương trình, một lệnh máy có thể được phân thành chuỗi vi thao tác: đọc thanh ghi, đưa dữ liệu vào ALU, ghi kết quả, cập nhật PC. Một bộ nhớ điều khiển hoặc cơ chế tương đương lưu thứ tự tín hiệu; cách hiện thực thay đổi theo CPU. So với điều khiển nối cứng, vi chương trình có thể thuận tiện để mô tả lệnh phức tạp, nhưng không được nhầm microcode với mã assembly của người dùng.`,
        example: `Lệnh giả ADD R1,R2 có thể gồm: đọc R1 và R2, ALU cộng, ghi tổng về R1, cập nhật cờ. Đây là mô hình khái niệm; số vi thao tác thực tế tùy CPU.`,
        pitfall: `Vi thao tác là bước phần cứng nội bộ, không nhất thiết tương ứng một-một với lệnh được lập trình viên nhìn thấy.`,
        practice: `Trong mô hình trên, cập nhật cờ zero sau phép ADD thuộc mức lệnh ISA hay bước hiện thực nội bộ?`,
        answer: `Cờ zero có thể là trạng thái kiến trúc, còn thao tác phần cứng tạo và ghi cờ là bước hiện thực nội bộ.`
      },
      {
        details: `Xử lý song song chia công việc cho nhiều đơn vị thực thi. Nếu tỉ lệ p của thời gian chạy có thể song song hóa hoàn hảo trên n đơn vị, định luật Amdahl cho speedup tối đa S=1/[(1−p)+p/n]. Phần tuần tự đặt trần ngay cả khi n tăng vô hạn. Trên hệ thực, truyền dữ liệu, đồng bộ và mất cân bằng tải còn làm kết quả thấp hơn mô hình.`,
        example: `p=0,9 và n=4: S=1/(0,1+0,9/4)=1/0,325≈3,08, không phải 4. Khi n→∞, trần là 1/0,1=10.`,
        pitfall: `p là phần thời gian có thể song song của chương trình gốc; không được bỏ qua chi phí truyền dữ liệu khi dự đoán hiệu năng thực.`,
        practice: `Nếu 20% chương trình không thể song song, speedup tối đa khi số lõi tăng vô hạn là bao nhiêu?`,
        answer: `1/0,2=5 lần theo Amdahl, trước khi xét thêm overhead.`
      },
      {
        details: `CPU đa lõi đặt nhiều lõi xử lý trên cùng chip, có thể dùng cache riêng và cache chung. Chương trình chỉ hưởng lợi khi công việc chia được thành luồng độc lập đủ lớn; dữ liệu chung cần đồng bộ để tránh race condition. Cache coherence giúp các lõi nhìn thấy trạng thái bộ nhớ nhất quán theo giao thức, nhưng chia sẻ dữ liệu quá nhiều tạo lưu lượng và giảm tốc. Phân biệt concurrency (nhiều việc tiến triển) với parallelism (chạy đồng thời thật).`,
        example: `Chia 1.000 ảnh độc lập cho 4 lõi thường dễ tăng thông lượng. Nếu 4 luồng cùng tăng một biến đếm mà không đồng bộ, kết quả có thể nhỏ hơn 1.000 vì các cập nhật bị ghi đè.`,
        pitfall: `Thêm lõi không tự động tăng tốc chương trình một luồng; khóa quá nhiều cũng có thể biến phần song song thành tuần tự.`,
        practice: `Một chương trình có 80% thời gian song song, 20% tuần tự. Với 4 lõi, speedup lý tưởng theo Amdahl là bao nhiêu?`,
        answer: `S=1/(0,2+0,8/4)=1/0,4=2,5 lần.`
      }
    ],
    PRF193: [
      {
        details: `Bắt đầu với chương trình nhỏ có hàm main. Compiler dịch mã nguồn thành mã thực thi và báo lỗi cú pháp/kiểu; linker ghép các phần đã biên dịch. IDE hỗ trợ soạn thảo và gỡ lỗi nhưng không thay thế compiler. Quy trình hữu ích là viết ít, biên dịch, chạy với đầu vào dự kiến, rồi dùng debugger hoặc in trạng thái để tìm lỗi logic. Ghi lại lệnh biên dịch và chuẩn C++ đang dùng để người khác tái hiện được.`,
        example: `Chương trình tính 2+3 phải in 5. Nếu thiếu dấu ;, compiler dừng trước khi chạy. Nếu chương trình chạy và in 6 vì dùng phép nhân, đó là lỗi logic; cần xem lại biểu thức chứ không phải cài lại compiler.`,
        pitfall: `“Chạy được” chưa chứng minh chương trình đúng; luôn so đầu ra với kết quả đã biết.`,
        practice: `Một chương trình biên dịch thành công nhưng in 0 thay vì 10. Đây là lỗi loại nào?`,
        answer: `Lỗi logic hoặc lỗi lúc chạy làm thay đổi kết quả; bắt đầu kiểm tra dữ liệu vào và từng bước tính, không phải lỗi cú pháp.`
      },
      {
        details: `Trước khi code, viết hợp đồng bài toán: dữ liệu vào có kiểu và miền nào, đầu ra phải thỏa điều kiện gì. Chia lời giải thành các bước có thể kiểm tra riêng; dùng giả mã để tập trung vào thuật toán thay vì cú pháp. Sau đó lập bộ thử gồm trường hợp thông thường, giá trị biên, rỗng, âm hoặc không hợp lệ khi phù hợp. Dùng công cụ AI để gợi ý cách thử hoặc giải thích, nhưng tự xác minh bằng chạy mã và đối chiếu yêu cầu.`,
        example: `Bài tìm số lớn nhất trong danh sách: nếu danh sách rỗng thì trả lỗi/không có kết quả; nếu không, đặt max bằng phần tử đầu rồi duyệt các phần tử còn lại, cập nhật khi gặp giá trị lớn hơn. Thử [3,1,5], [−2], và danh sách rỗng.`,
        pitfall: `Đừng khởi tạo max=0 nếu mọi số có thể âm; dữ liệu [−5,−2] sẽ cho kết quả sai.`,
        practice: `Với bài tính trung bình cộng, một trường hợp biên bắt buộc kiểm tra là gì?`,
        answer: `Danh sách rỗng: mẫu số bằng 0, nên phải quy định cách xử lý trước khi tính.`
      },
      {
        details: `Biến có tên, kiểu, giá trị và phạm vi. int phù hợp số nguyên trong miền của kiểu; double dùng số thực gần đúng; char giữ một đơn vị ký tự theo mã hóa; bool giữ true/false. Dùng const khi giá trị không nên đổi. Khi chọn kiểu, kiểm tra miền dữ liệu và nguy cơ tràn; không dựa vào kích thước cố định của int trên mọi nền tảng. Khởi tạo biến trước khi đọc để tránh giá trị không xác định.`,
        example: `int count=3; double price=2.5; double total=count*price cho 7.5. Nếu price là int 2 thì phép nhân cho 6; kiểu của biến quyết định phép toán trước khi gán vào total.`,
        pitfall: `Một biến cục bộ chưa khởi tạo không tự động bằng 0. double cũng không biểu diễn chính xác mọi số thập phân.`,
        practice: `Giá trị 2.75 nên lưu bằng int hay double để giữ phần lẻ?`,
        answer: `Dùng double; gán vào int sẽ làm mất phần lẻ theo quy tắc chuyển kiểu.`
      },
      {
        details: `Phân tích biểu thức theo thứ tự ưu tiên, nhưng thêm ngoặc để thể hiện ý định rõ ràng. Phép chia hai số nguyên cho thương nguyên; muốn kết quả thực, chuyển ít nhất một toán hạng sang double trước khi chia. So sánh == khác phép gán =; && và || là phép logic có thể dừng sớm. Khi ép kiểu, kiểm tra mất thông tin do cắt phần lẻ hoặc tràn miền. Tránh viết biểu thức có nhiều thay đổi cùng một biến khó kiểm soát.`,
        example: `int a=5,b=2; a/b cho 2. static_cast<double>(a)/b cho 2.5 vì phép chia được thực hiện ở kiểu double. Chuyển kiểu sau khi đã tính a/b thì quá muộn: static_cast<double>(a/b) vẫn là 2.0.`,
        pitfall: `5/2 và 5.0/2 khác nhau; đừng dùng = thay cho == trong điều kiện.`,
        practice: `Giá trị của static_cast<double>(7/2) và 7.0/2 lần lượt là gì?`,
        answer: `7/2 tính trước thành 3, rồi đổi thành 3.0; 7.0/2 cho 3.5.`
      },
      {
        details: `if/else phù hợp điều kiện tổng quát; switch tiện khi chọn theo một giá trị rời rạc và các nhánh được hỗ trợ. Viết điều kiện từ trường hợp hẹp đến rộng hoặc dùng if/else-if để các khoảng không chồng lấn. Với dữ liệu không hợp lệ, quyết định rõ trả lỗi hay dùng nhánh mặc định. Kiểm thử điểm sát ranh giới như 4,9; 5,0; 5,1 thay vì chỉ thử giá trị giữa khoảng.`,
        example: `Xếp loại đạt nếu score≥5 và score≤10. Trước hết kiểm tra score<0 hoặc score>10 là không hợp lệ; sau đó score≥5 in “đạt”, còn lại “chưa đạt”. Điểm 5 phải vào nhánh đạt.`,
        pitfall: `Nếu hai nhánh dùng if riêng và điều kiện giao nhau, cả hai có thể chạy; dùng else-if khi chỉ muốn chọn một.`,
        practice: `Điểm 5,0 với điều kiện if(score>5) có được xếp đạt không? Sửa thế nào?`,
        answer: `Không; nếu mốc đạt bao gồm 5, phải dùng score>=5.`
      },
      {
        details: `for phù hợp khi biết cách cập nhật biến đếm; while phù hợp khi lặp đến điều kiện dừng; do-while chạy thân ít nhất một lần. Trước khi chạy, xác định trạng thái đầu, điều kiện duy trì và cách tiến gần tới dừng. Duyệt n phần tử mảng từ 0 đến n−1, không đến n. break thoát vòng hiện tại, continue bỏ phần còn lại của lượt hiện tại; dùng vừa đủ để luồng dễ đọc.`,
        example: `Tính tổng 1..4: sum=0; với i từ 1 đến 4, cộng i vào sum. Các giá trị sum lần lượt 1,3,6,10. Kiểm tra bằng công thức 4×5/2=10.`,
        pitfall: `Vòng while thiếu cập nhật biến điều kiện có thể không bao giờ dừng; dấu <= thay cho < có thể truy cập quá mảng.`,
        practice: `Vòng for(int i=0;i<5;i++) chạy thân bao nhiêu lần và i nhận các giá trị nào?`,
        answer: `5 lần; i lần lượt là 0,1,2,3,4.`
      },
      {
        details: `Mảng cố định có các phần tử cùng kiểu, truy cập qua chỉ số 0..n−1. std::vector cũng lưu tuần tự nhưng có thể thay đổi kích thước và cung cấp size(); at() có kiểm tra biên, còn toán tử [] không kiểm tra. Với mảng nhiều chiều, nhớ thứ tự hàng/cột và chỉ số ở từng chiều. Khi truyền mảng kiểu C vào hàm, kích thước thường không tự đi cùng con trỏ; nên truyền riêng kích thước hoặc dùng container an toàn hơn.`,
        example: `int a[3]={4,7,9}; a[0]=4, a[2]=9. Muốn cộng các phần tử, lặp i=0,1,2; không đọc a[3]. Với vector v={4,7,9}, v.size() là 3.`,
        pitfall: `Truy cập ngoài biên có thể cho kết quả ngẫu nhiên hoặc làm hỏng bộ nhớ; không dựa vào việc chương trình “vẫn chạy”.`,
        practice: `Một mảng có 8 phần tử thì chỉ số cuối hợp lệ là bao nhiêu?`,
        answer: `Chỉ số cuối là 7 vì đếm từ 0.`
      },
      {
        details: `Chuỗi C là dãy char kết thúc bằng ký tự null, cần chỗ cho ký tự kết thúc. std::string quản lý dung lượng và hỗ trợ nối, so sánh, lấy chiều dài thuận tiện hơn. struct gom nhiều trường liên quan thành một kiểu; enum đặt tên cho một tập trạng thái hữu hạn. Chọn biểu diễn giúp hàm nhận một đối tượng có nghĩa thay vì nhiều biến rời dễ nhầm. Với văn bản tiếng Việt UTF-8, số byte khác số ký tự hiển thị.`,
        example: `struct Student { string name; double score; }; Một biến Student s có thể giữ s.name="An" và s.score=8.5. Hàm in kết quả nhận cả s thay vì hai tham số không liên quan.`,
        pitfall: `sizeof chuỗi C gồm cả ký tự kết thúc; std::string::size() đếm byte/code unit theo biểu diễn, không luôn bằng số chữ người đọc thấy.`,
        practice: `Cần bao nhiêu ô char để lưu chuỗi C "FPT"?`,
        answer: `4 ô: 'F','P','T' và ký tự kết thúc '\\0'.`
      },
      {
        details: `Hàm nên có một nhiệm vụ rõ, tên mô tả việc làm, tham số đầu vào và giá trị trả về phù hợp. Truyền giá trị tạo bản sao; truyền tham chiếu cho phép hàm tác động biến gốc, còn const reference tránh sao chép mà không cho sửa. Đệ quy cần trường hợp dừng và mỗi lần gọi phải tiến gần tới nó; nếu không sẽ tràn stack. Khi gỡ lỗi, thử hàm riêng với đầu vào nhỏ trước khi tích hợp chương trình lớn.`,
        example: `int square(int x){return x*x;} Gọi square(4) trả 16 nhưng không đổi biến 4 ở phía gọi. Hàm void addOne(int& x){x++;} thì addOne(a) sửa trực tiếp a.`,
        pitfall: `Đừng trả về tham chiếu hoặc con trỏ tới biến cục bộ đã hết thời gian sống.`,
        practice: `Nếu a=3, gọi một hàm nhận int x bằng giá trị rồi thực hiện x=10, a thành bao nhiêu?`,
        answer: `a vẫn là 3 vì hàm chỉ sửa bản sao x.`
      },
      {
        details: `Con trỏ chứa địa chỉ của một đối tượng; &x lấy địa chỉ, *p truy cập đối tượng mà p trỏ tới. nullptr biểu thị không trỏ tới đối tượng hợp lệ và phải được kiểm tra trước khi giải tham chiếu. Cấp phát động tạo tài nguyên cần quản lý thời gian sống; RAII gắn việc giải phóng với destructor của đối tượng sở hữu. Trong C++ hiện đại, ưu tiên vector, string và smart pointer; dùng con trỏ thô khi không nắm quyền sở hữu hoặc giao tiếp API cũ.`,
        example: `int x=5; int* p=&x; *p=7; sau đó x=7 vì p trỏ tới x. Nếu p=nullptr thì *p không hợp lệ.`,
        pitfall: `Dùng p sau khi đối tượng bị giải phóng tạo dangling pointer; quên giải phóng tài nguyên sở hữu gây leak.`,
        practice: `x=4, p=&x, thực hiện *p=9. Giá trị x là gì?`,
        answer: `x=9 vì *p truy cập chính ô nhớ của x.`
      },
      {
        details: `Class khai báo kiểu gồm dữ liệu và hàm thành viên; object là một thể hiện. Che dữ liệu bằng private và cung cấp thao tác public có kiểm tra để duy trì bất biến. Constructor đưa object vào trạng thái hợp lệ ngay khi tạo; destructor dọn tài nguyên khi object hết thời gian sống. Nếu class tự sở hữu tài nguyên động, cần hiểu quy tắc sao chép/di chuyển; dùng container và RAII giúp tránh lỗi sở hữu.`,
        example: `BankAccount có balance private, constructor yêu cầu số dư ban đầu không âm, deposit(amount) chỉ cộng khi amount>0. Người dùng class không thể tự đặt balance=-100 qua giao diện public.`,
        pitfall: `Một setter cho phép ghi mọi giá trị có thể phá vỡ bất biến; “đóng gói” không chỉ là thêm từ khóa private.`,
        practice: `Vì sao constructor nên kiểm tra số dư ban đầu của BankAccount?`,
        answer: `Để mọi object được tạo đều bắt đầu ở trạng thái hợp lệ, giúp các hàm khác có thể dựa trên bất biến số dư.`
      },
      {
        details: `Kế thừa diễn đạt quan hệ is-a: đối tượng lớp con dùng được nơi cần đối tượng lớp cơ sở. Hàm virtual cho phép gọi phiên bản override theo kiểu thật khi truy cập qua con trỏ/tham chiếu base. Nếu xóa đối tượng derived qua con trỏ base, destructor base cần virtual. Dùng composition khi quan hệ chỉ là has-a; lạm dụng kế thừa làm hệ thống khó sửa và dễ vi phạm hợp đồng của base.`,
        example: `Shape có virtual area(); Circle override area()=πr², Rectangle override area()=w×h. Một danh sách con trỏ Shape có thể gọi area() và nhận đúng phép tính cho từng object.`,
        pitfall: `Nếu quên virtual, lời gọi qua base có thể chạy bản base thay vì bản derived; không kế thừa chỉ để dùng lại vài dòng mã.`,
        practice: `Một Car có Engine nên dùng kế thừa Car : Engine hay composition?`,
        answer: `Composition: Car có một Engine (has-a), không phải là một Engine (is-a).`
      },
      {
        details: `std::vector phù hợp dãy cần truy cập theo chỉ số và thêm cuối; std::map lưu cặp khóa–giá trị có thứ tự; std::set lưu khóa duy nhất. Iterator trỏ tới vị trí trong container, cho thuật toán chuẩn như sort hoặc find làm việc trên khoảng [begin,end). Khi container thay đổi, một số iterator/con trỏ có thể mất hiệu lực, đặc biệt vector khi cấp phát lại. Chọn container theo thao tác thường dùng, không theo thói quen.`,
        example: `vector<int> v={3,1,2}; sort(v.begin(),v.end()) cho {1,2,3}. Nếu cần tra tên→điểm theo khóa có thứ tự, map<string,int> phù hợp hơn vector tìm tuyến tính.`,
        pitfall: `end() là vị trí sau phần tử cuối, không phải phần tử cuối; không giải tham chiếu end().`,
        practice: `Cần lưu 10.000 mã sinh viên duy nhất và kiểm tra một mã có tồn tại: vector hay set phù hợp hơn về ý nghĩa dữ liệu?`,
        answer: `set thể hiện tính duy nhất và hỗ trợ tìm theo khóa; với yêu cầu hiệu năng cụ thể có thể cân nhắc unordered_set.`
      },
      {
        details: `Đọc/ghi file qua ifstream/ofstream/fstream cần kiểm tra mở file thành công và trạng thái sau thao tác. Dữ liệu văn bản cần quy ước định dạng để đọc lại; dữ liệu nhị phân cần chú ý kiểu, kích thước và tương thích nền tảng. Exception báo tình huống lỗi mà luồng thông thường không xử lý tại chỗ; bắt ở tầng có khả năng quyết định cách phục hồi. Template mô tả hàm/lớp dùng được với nhiều kiểu khi phép toán cần thiết tồn tại.`,
        example: `ifstream file("scores.txt"); nếu !file thì báo lỗi và dừng bước đọc. Khi đọc từng số, dùng while(file>>score) để chỉ xử lý giá trị đọc thành công, không lặp theo !eof() trước khi đọc.`,
        pitfall: `Không giả định ghi file thành công chỉ vì đã gọi toán tử <<; cần kiểm tra trạng thái stream khi độ tin cậy quan trọng.`,
        practice: `Vì sao while(!file.eof()) rồi mới đọc thường sai?`,
        answer: `Cờ EOF chỉ bật sau một lần đọc thất bại, nên vòng có thể xử lý thừa dữ liệu cũ; dùng điều kiện đọc thành công.`
      },
      {
        details: `Thread có thể tăng thông lượng khi công việc độc lập, nhưng truy cập biến chung cần quan hệ đồng bộ. Data race xảy ra khi ít nhất một thread ghi cùng vùng nhớ mà không có đồng bộ phù hợp; hành vi C++ là không xác định. mutex bảo vệ đoạn tới hạn; std::lock_guard tự nhả khóa khi ra khỏi phạm vi. join chờ thread hoàn tất. Tránh khóa quá rộng, tránh thứ tự khóa bất nhất gây deadlock, và chỉ dùng đa luồng sau khi đo nhu cầu.`,
        example: `Hai thread cùng chạy count++ 1.000 lần không bảo đảm count=2.000, vì mỗi phép tăng gồm đọc–cộng–ghi. Bọc đoạn tăng bằng lock_guard<mutex> giúp các cập nhật không chồng chéo.`,
        pitfall: `count++ không tự động nguyên tử; mutex không giải quyết được lỗi nếu có đường truy cập khác bỏ qua cùng mutex.`,
        practice: `Một thread sửa vector trong khi thread khác đọc nó mà không khóa. Vấn đề chính là gì?`,
        answer: `Có thể có data race hoặc iterator mất hiệu lực; phải thiết kế đồng bộ hoặc trao đổi dữ liệu an toàn.`
      }
    ],
    SDI101m: [
      {
        details: `Vật lý mô tả đại lượng bằng số và đơn vị. Hệ SI dùng mét (m), kilôgam (kg), giây (s), ampe (A); tiền tố k, m, µ lần lượt là 10³, 10⁻³, 10⁻⁶. Đổi đơn vị trước khi thay số vào công thức và kiểm tra thứ nguyên của kết quả. Sai số đo gồm độ phân giải dụng cụ và biến thiên giữa các lần đo; số chữ số có nghĩa không thể vượt quá độ chính xác dữ liệu.`,
        example: `Dòng 2 mA chạy trong 3 s chuyển điện lượng Q=It=0,002×3=0,006 C, tức 6 mC.`,
        pitfall: `Dùng mA như A làm kết quả lệch 1.000 lần; nhiều chữ số thập phân không có nghĩa là phép đo chính xác hơn.`,
        practice: `Đổi 470 µF sang F và tính điện lượng khi điện áp là 10 V.`,
        answer: `470 µF=4,70×10⁻⁴ F; Q=CV=4,70×10⁻³ C.`
      },
      {
        details: `Điện tích cùng dấu đẩy, trái dấu hút. Trong chân không, độ lớn lực giữa hai điện tích điểm là F=k|q₁q₂|/r² với k≈8,99×10⁹ N·m²/C². Lực nằm trên đường nối hai điện tích và có thể cộng vectơ theo nguyên lý chồng chất. Mô hình điện tích điểm phù hợp khi kích thước vật nhỏ so với khoảng cách khảo sát.`,
        example: `Hai điện tích +1 µC và +2 µC cách 0,10 m đẩy nhau với F≈1,80 N.`,
        pitfall: `Không cộng đại số độ lớn của các lực khác hướng; khoảng cách phải bình phương và tính bằng mét.`,
        practice: `Nếu giữ điện tích và tăng khoảng cách lên gấp đôi, lực đổi thế nào?`,
        answer: `Lực còn 1/4 vì F tỉ lệ nghịch với r².`
      },
      {
        details: `Điện trường tại một điểm là lực trên một đơn vị điện tích thử dương: E=F/q, đơn vị N/C hoặc V/m. Điện trường do điện tích điểm có độ lớn k|Q|/r², hướng ra xa điện tích dương và về điện tích âm. Khi có nhiều nguồn, cộng các vectơ E, không cộng riêng độ lớn. Đường sức chỉ là cách biểu diễn hướng trường, không phải quỹ đạo bắt buộc của hạt.`,
        example: `Điện tích +1 µC trong chân không tạo E≈8,99×10⁵ N/C tại điểm cách nó 0,10 m, hướng ra ngoài.`,
        pitfall: `Với điện tích thử âm, lực ngược hướng điện trường; bản thân E vẫn được quy ước theo điện tích thử dương.`,
        practice: `Điện tích −2 µC đặt trong E=500 N/C hướng sang phải chịu lực thế nào?`,
        answer: `F=qE=−0,001 N; lực có độ lớn 1 mN và hướng sang trái.`
      },
      {
        details: `Thông lượng điện qua mặt kín là Φ=∮E·dA. Định luật Gauss cho Φ=Q_bên_trong/ε₀; chỉ điện tích nằm trong mặt kín quyết định thông lượng tổng. Muốn suy ra E nhanh cần đối xứng cầu, trụ hoặc phẳng, khi đó chọn mặt Gauss để E có độ lớn cố định trên phần mặt hữu ích. Thiếu đối xứng, định luật vẫn đúng nhưng không tự cho công thức E đơn giản.`,
        example: `Với điện tích điểm Q ở tâm mặt cầu bán kính r: E(4πr²)=Q/ε₀ nên E=Q/(4πε₀r²).`,
        pitfall: `Thông lượng bằng 0 không có nghĩa E bằng 0 tại mọi điểm trên mặt kín.`,
        practice: `Một điện tích +3 nC ở ngoài mặt kín có đóng góp vào Q_bên_trong không?`,
        answer: `Không; nó có thể tạo trường trên mặt nhưng tổng thông lượng do nó qua mặt kín bằng 0.`
      },
      {
        details: `Điện thế V là thế năng điện trên một đơn vị điện tích: V=U/q; hiệu điện thế liên hệ với công của điện trường qua ΔU=qΔV. Trường tĩnh điện hướng từ nơi điện thế cao đến thấp; trong trường đều cùng hướng đường đi, ΔV=−Ed. Chọn mốc V=0 tùy bài toán, còn hiệu điện thế giữa hai điểm mới quyết định công và chuyển động.`,
        example: `Điện tích +2 µC đi từ 5 V đến 2 V có ΔU=q(2−5)=−6 µJ; trường thực hiện công +6 µJ.`,
        pitfall: `Nhầm dấu giữa công của lực điện và độ biến thiên thế năng: W_điện=−ΔU.`,
        practice: `Trong trường đều 200 V/m, đi 0,05 m theo chiều E thì điện thế đổi bao nhiêu?`,
        answer: `ΔV=−Ed=−10 V.`
      },
      {
        details: `Tụ điện tích điện lượng Q=CV, với C tính bằng farad. Tụ bản phẳng lý tưởng có C=εA/d; tăng diện tích hoặc hằng số điện môi làm C tăng, tăng khoảng cách làm C giảm. Năng lượng tích trữ U=½CV². Tụ song song có điện dung cộng trực tiếp; tụ nối tiếp có 1/C_tđ=Σ1/Cᵢ. Công thức bản phẳng bỏ qua hiệu ứng rìa khi kích thước bản lớn hơn nhiều so với khoảng cách.`,
        example: `Tụ 10 µF ở 12 V giữ Q=120 µC và U=0,00072 J.`,
        pitfall: `Khi ngắt nguồn rồi thay điện môi, Q có thể cố định; khi còn nối nguồn, V được giữ cố định.`,
        practice: `Hai tụ 6 µF mắc nối tiếp có điện dung tương đương bao nhiêu?`,
        answer: `C_tđ=3 µF.`
      },
      {
        details: `Dòng điện I=dQ/dt là tốc độ chuyển điện tích, quy ước theo chiều chuyển động của điện tích dương. Với phần tử ohmic ở nhiệt độ ổn định, V=IR; điện trở dây đều R=ρL/A. Công suất điện P=VI=I²R=V²/R khi áp dụng định luật Ohm. Chất bán dẫn và diode thường phi tuyến, vì vậy không được dùng R hằng cho mọi điện áp.`,
        example: `Điện trở 1 kΩ đặt ở 5 V có I=5 mA và P=25 mW.`,
        pitfall: `Không coi V=IR là định luật phổ quát cho mọi linh kiện; kiểm tra cả định mức công suất điện trở.`,
        practice: `Dây cùng vật liệu dài gấp đôi, tiết diện giữ nguyên: R thay đổi thế nào?`,
        answer: `R gấp đôi theo R=ρL/A, nếu nhiệt độ không đổi.`
      },
      {
        details: `Mạch nối tiếp có cùng dòng và điện trở tương đương R_tđ=ΣRᵢ; mạch song song có cùng điện áp và 1/R_tđ=Σ1/Rᵢ. Định luật Kirchhoff nút bảo toàn điện tích (tổng dòng vào bằng tổng dòng ra); định luật vòng bảo toàn năng lượng (tổng biến thiên điện thế trên vòng bằng 0). Chọn chiều dòng giả định nhất quán; kết quả âm chỉ chiều thực ngược giả định.`,
        example: `Nguồn 12 V cấp hai điện trở 2 kΩ và 4 kΩ nối tiếp: I=2 mA; sụt áp tương ứng 4 V và 8 V.`,
        pitfall: `Không áp dụng chia áp nối tiếp cho hai phần tử mắc song song.`,
        practice: `Hai điện trở 3 kΩ và 6 kΩ mắc song song có R_tđ bằng bao nhiêu?`,
        answer: `R_tđ=(3×6)/(3+6)=2 kΩ.`
      },
      {
        details: `Điện tích chuyển động tạo từ trường B. Lực lên điện tích q có vận tốc v là F=q(v×B), nên vuông góc với v và B; độ lớn |q|vBsinθ. Dây dẫn dài mang dòng trong trường đều chịu lực F=IL×B. Quy tắc bàn tay phải cho điện tích dương và dòng quy ước; điện tích âm đảo chiều lực. Từ trường không tự làm thay đổi động năng của một điện tích điểm vì lực từ vuông góc vận tốc.`,
        example: `Hạt q=+1 µC đi vuông góc B=0,2 T với v=100 m/s chịu lực có độ lớn 20 µN.`,
        pitfall: `Nếu v song song B thì lực từ bằng 0, không phải cực đại.`,
        practice: `Độ lớn lực từ đổi thế nào khi góc giữa v và B từ 90° về 0°?`,
        answer: `Giảm từ |q|vB xuống 0 vì sin0°=0.`
      },
      {
        details: `Từ thông qua vòng là Φ_B=∫B·dA. Suất điện động cảm ứng tuân theo định luật Faraday ε=−N dΦ_B/dt; dấu âm thể hiện định luật Lenz: dòng cảm ứng chống lại sự biến thiên từ thông gây ra nó. Với mạch xoay chiều hình sin, giá trị hiệu dụng V_rms=V_đỉnh/√2 và I_rms=I_đỉnh/√2. Mạch RLC lý tưởng có tần số cộng hưởng f₀=1/(2π√LC); điện trở làm giảm độ sắc cộng hưởng.`,
        example: `Từ thông qua 10 vòng giảm đều 0,02 Wb trong 0,1 s: độ lớn suất điện động cảm ứng 2 V.`,
        pitfall: `Dòng cảm ứng chống sự thay đổi từ thông, không nhất thiết chống lại từ trường ban đầu.`,
        practice: `Điện áp sin có đỉnh 10 V thì V_rms xấp xỉ bao nhiêu?`,
        answer: `10/√2≈7,07 V, với dạng sin thuần.`
      },
      {
        details: `Sóng điện từ là dao động liên kết của điện trường và từ trường, truyền được trong chân không. Trong chân không c=fλ≈3,00×10⁸ m/s; tần số do nguồn quyết định, bước sóng thay đổi khi tốc độ truyền đổi trong môi trường. Phổ trải từ sóng vô tuyến đến tia gamma; photon có năng lượng E=hf. Tương tác với vật chất phụ thuộc tần số và vật liệu, nên không thể đánh giá tác động chỉ từ cường độ hoặc chỉ từ tần số.`,
        example: `Sóng 100 MHz trong chân không có λ=c/f≈3 m.`,
        pitfall: `Sóng điện từ không cần môi trường vật chất như sóng âm.`,
        practice: `Ánh sáng có tần số tăng gấp đôi trong chân không thì bước sóng đổi thế nào?`,
        answer: `Bước sóng giảm một nửa theo λ=c/f.`
      },
      {
        details: `Trong thí nghiệm RLC, ghi rõ sơ đồ, giá trị R/L/C, tần số nguồn, dụng cụ và sai số. Quét tần số quanh cộng hưởng, đo điện áp và dòng ở mỗi điểm, rồi so sánh với f₀=1/(2π√LC). Khi đo pha, dùng cùng mốc thời gian và quy đổi Δφ=2πfΔt. Trước khi sửa dây phải tắt nguồn; kiểm tra giới hạn điện áp của tụ và máy đo.`,
        example: `L=10 mH, C=100 nF cho f₀≈5,03 kHz theo mô hình lý tưởng; số đo thực có thể lệch do điện trở và dung/ký sinh.`,
        pitfall: `Chỉ ghi điểm có biên độ lớn nhất mà bỏ bảng đo và điều kiện thí nghiệm sẽ khó kiểm chứng kết luận.`,
        practice: `Khi L tăng gấp 4 còn C giữ nguyên, f₀ đổi thế nào?`,
        answer: `f₀ giảm một nửa vì f₀ tỉ lệ nghịch với √L.`
      },
      {
        details: `Vi mạch hình thành qua chuỗi thiết kế, chế tạo wafer, đóng gói và kiểm thử; mỗi bước có bài toán riêng về hiệu suất, độ tin cậy và chi phí. Silicon đơn tinh thể có mạng tuần hoàn, còn tinh thể thật chứa khuyết tật và tạp chất ảnh hưởng tính điện. Định hướng tinh thể và cấu trúc vùng năng lượng giúp giải thích vì sao vật liệu có thể dẫn điện hoặc cách điện. Phân biệt nguyên liệu, wafer, die và chip đã đóng gói.`,
        example: `Một wafer chứa nhiều die; nếu một die lỗi trong kiểm thử, không có nghĩa toàn bộ wafer đều phải bỏ.`,
        pitfall: `Không đánh đồng kích thước transistor danh nghĩa với mọi kích thước vật lý thực trong chip.`,
        practice: `Sắp xếp: đóng gói, thiết kế, chế tạo wafer, kiểm thử.`,
        answer: `Thường: thiết kế → chế tạo wafer → đóng gói → kiểm thử cuối; kiểm thử còn xuất hiện ở các công đoạn trước.`
      },
      {
        details: `Electron trong nguyên tử chỉ có các trạng thái năng lượng cho phép; mô hình lượng tử dùng hàm sóng và xác suất tìm thấy, không xem electron như hành tinh chạy trên quỹ đạo cổ điển. Phương trình Schrödinger mô tả trạng thái và năng lượng trong thế đã cho. Nguyên lý Pauli hạn chế số electron có thể cùng chiếm một trạng thái lượng tử. Khi rất nhiều nguyên tử ghép thành tinh thể, các mức rời rạc mở rộng thành dải năng lượng.`,
        example: `Hai electron có thể cùng một orbital khi spin đối nhau; không thể có hai electron có mọi số lượng tử giống hệt.`,
        pitfall: `Hàm sóng ψ không trực tiếp là mật độ xác suất; |ψ|² mới liên hệ xác suất.`,
        practice: `Vì sao mô hình quỹ đạo hành tinh không đủ mô tả electron trong nguyên tử?`,
        answer: `Nó bỏ qua tính lượng tử và phân bố xác suất, nên không giải thích đúng các mức năng lượng rời rạc.`
      },
      {
        details: `Trong chất rắn, dải hóa trị và dải dẫn cách nhau bởi vùng cấm E_g. Kim loại có các trạng thái trống dễ tiếp cận gần mức Fermi; bán dẫn có vùng cấm vừa phải; chất cách điện thường có vùng cấm lớn. Nhiệt hoặc ánh sáng đủ năng lượng có thể đưa electron từ dải hóa trị lên dải dẫn, để lại lỗ trống. Cách phân loại này là mô hình nền tảng; độ dẫn thực còn phụ thuộc tạp chất, nhiệt độ và cấu trúc vật liệu.`,
        example: `Photon chỉ tạo cặp electron–lỗ trống qua hấp thụ liên dải khi năng lượng đáp ứng ngưỡng và quy tắc chuyển mức của vật liệu.`,
        pitfall: `Lỗ trống là trạng thái thiếu electron với điện tích hiệu dụng dương, không phải hạt proton đi trong tinh thể.`,
        practice: `Tăng E_g nói chung làm kích thích nhiệt qua vùng cấm dễ hay khó hơn ở cùng nhiệt độ?`,
        answer: `Khó hơn vì cần năng lượng lớn hơn để tạo cặp hạt tải.`
      },
      {
        details: `Bán dẫn nội tại lý tưởng có mật độ electron n và lỗ trống p bằng nhau: n=p=n_i. Pha donor thường tạo loại n, pha acceptor thường tạo loại p; ở cân bằng nhiệt không suy biến, np=n_i². Hạt tải đa số quyết định loại bán dẫn, còn hạt tải thiểu số vẫn quan trọng với diode và BJT. Mức pha tạp, nhiệt độ và khả năng ion hóa quyết định mật độ thực, nên không mặc nhiên bằng đúng mật độ tạp chất ở mọi điều kiện.`,
        example: `Nếu n=10¹⁶ cm⁻³ và n_i=10¹⁰ cm⁻³ ở cùng nhiệt độ, p≈10⁴ cm⁻³ theo np=n_i².`,
        pitfall: `Loại n không mang điện tích tổng âm: vùng vật liệu vẫn gần trung hòa nhờ ion donor dương.`,
        practice: `Trong bán dẫn loại p, hạt tải đa số và thiểu số là gì?`,
        answer: `Lỗ trống là đa số; electron là thiểu số.`
      },
      {
        details: `Ở cân bằng nhiệt, tích np=n_i² và mức Fermi nằm tại vị trí phản ánh mật độ hạt tải. Với bán dẫn không suy biến và tạp chất ion hóa đầy đủ, n≈N_D trong loại n pha donor mạnh hơn acceptor; khi có bù tạp, cần xét N_D−N_A. Mật độ nội tại n_i phụ thuộc mạnh vào nhiệt độ và vật liệu. Các xấp xỉ này mất chính xác khi pha tạp quá mạnh, nhiệt độ rất thấp hoặc hệ ngoài cân bằng.`,
        example: `Cho n_i=10¹⁰ cm⁻³ và mẫu n cân bằng có n≈10¹⁵ cm⁻³; khi đó p≈10⁵ cm⁻³.`,
        pitfall: `Không dùng np=n_i² cho hệ bị bơm hạt tải ngoài cân bằng mà không xét mức Fermi giả.`,
        practice: `Nếu n ở cân bằng tăng 100 lần tại cùng nhiệt độ, p đổi thế nào?`,
        answer: `p giảm 100 lần theo np=n_i².`
      },
      {
        details: `Hạt tải trôi do điện trường và khuếch tán do gradient nồng độ. Trong miền tuyến tính, độ lớn vận tốc trôi v_d=µE; dòng dẫn gồm phần electron và lỗ trống, với độ dẫn σ=q(nµ_n+pµ_p). Dòng khuếch tán xuất hiện dù không có điện trường khi n hoặc p biến thiên theo vị trí. Ở cân bằng của tiếp giáp p-n, dòng trôi và khuếch tán triệt tiêu về tổng dòng, chứ từng cơ chế không biến mất.`,
        example: `Với n=10¹⁶ cm⁻³, µ_n=1.000 cm²/(V·s), bỏ qua lỗ trống: σ≈1,6 (Ω·cm)⁻¹.`,
        pitfall: `Electron chuyển động trôi ngược chiều E, nhưng dòng quy ước do electron lại cùng chiều E.`,
        practice: `Trong vật liệu có nồng độ hạt tải đều và E=0, có dòng khuếch tán thuần không?`,
        answer: `Không; không có gradient nồng độ để tạo dòng khuếch tán thuần.`
      },
      {
        details: `Photon có năng lượng E=hf=hc/λ. Hấp thụ liên dải có thể tạo cặp electron–lỗ trống nếu năng lượng và quy tắc chuyển mức cho phép. Khi electron và lỗ trống tái hợp, năng lượng có thể phát ra photon hoặc chuyển thành nhiệt; hiệu quả phát quang phụ thuộc vật liệu và cơ chế tái hợp. Bán dẫn vùng cấm trực tiếp thường thuận lợi cho LED hơn silicon vùng cấm gián tiếp.`,
        example: `Ánh sáng bước sóng 620 nm có năng lượng photon xấp xỉ 1240/620=2,0 eV.`,
        pitfall: `Photon có năng lượng lớn hơn E_g không bảo đảm mọi photon đều bị hấp thụ; còn phụ thuộc bề dày và hệ số hấp thụ.`,
        practice: `Photon 2,0 eV có bước sóng xấp xỉ bao nhiêu trong chân không?`,
        answer: `λ≈1240/2,0=620 nm.`
      },
      {
        details: `Khi ghép vùng p và n, hạt tải đa số khuếch tán qua biên rồi tái hợp, để lại ion cố định tạo vùng nghèo và điện trường nội. Ở cân bằng, thế chắn chống khuếch tán tiếp, tổng dòng bằng 0. Phân cực thuận giảm thế chắn và tăng dòng; phân cực ngược mở rộng vùng nghèo cho đến khi có cơ chế đánh thủng. Hình vẽ vùng năng lượng giúp nối ý tưởng điện thế, hạt tải và dòng.`,
        example: `Nối cực dương nguồn vào phía p và cực âm vào phía n là phân cực thuận của diode p-n.`,
        pitfall: `Không xem vùng nghèo là hoàn toàn không có điện tích: trong đó vẫn có ion donor/acceptor cố định.`,
        practice: `Phân cực ngược thông thường làm vùng nghèo rộng hay hẹp hơn?`,
        answer: `Rộng hơn vì điện trường ngoài tăng rào thế của tiếp giáp.`
      },
      {
        details: `Mô hình diode lý tưởng vùng thuận thường viết I=I_S[exp(V_D/(nV_T))−1], với V_T=kT/q≈25,9 mV ở 300 K và n là hệ số lý tưởng. Nó mô tả tính phi tuyến, nhưng diode thật có điện trở nối tiếp, rò ngược và giới hạn công suất. Mô hình sụt áp cố định 0,7 V cho silicon chỉ là xấp xỉ mạch ở một miền dòng, không phải hằng số vật lý. Khi phân cực ngược quá giới hạn, diode thường có thể hỏng; diode Zener được thiết kế cho vùng đánh thủng phù hợp.`,
        example: `Mạch nguồn 5 V, diode xấp xỉ 0,7 V và điện trở 430 Ω nối tiếp: I≈(5−0,7)/430=10 mA.`,
        pitfall: `Không dùng dòng mũ lý tưởng đến vô hạn hoặc mặc định mọi diode đều có sụt áp 0,7 V.`,
        practice: `Nếu nguồn 9 V, một diode xấp xỉ 0,7 V và R=830 Ω, dòng gần đúng là bao nhiêu?`,
        answer: `I≈(9−0,7)/830≈10 mA, nếu diode đang phân cực thuận.`
      },
      {
        details: `Vùng nghèo của tiếp giáp hoạt động như điện môi giữa các vùng điện tích, tạo điện dung chuyển tiếp C_j phụ thuộc điện áp ngược; phân cực ngược mạnh hơn thường làm C_j giảm. Khi diode dẫn thuận, điện tích hạt tải tích trữ tạo điện dung khuếch tán. Trong mạch cao tần, hai hiệu ứng ảnh hưởng tốc độ đóng cắt và đáp ứng tần số. Varactor khai thác sự thay đổi điện dung với điện áp ngược.`,
        example: `Mạch cộng hưởng dùng varactor để thay đổi C; C giảm làm f₀=1/(2π√LC) tăng.`,
        pitfall: `Không xem điện dung diode là một số cố định độc lập điện áp và tần số.`,
        practice: `Giữ L cố định, điện dung varactor giảm còn 1/4 thì f₀ đổi thế nào?`,
        answer: `f₀ tăng gấp đôi theo quan hệ 1/√C.`
      },
      {
        details: `Tiếp xúc kim loại–bán dẫn có thể tạo tiếp xúc chỉnh lưu Schottky hoặc ohmic, tùy vật liệu, pha tạp và xử lý bề mặt. Diode Schottky dùng hạt tải đa số nên thường có chuyển mạch nhanh và sụt áp thuận thấp hơn diode p-n silicon tương đương, nhưng có thể rò ngược cao hơn. Tiếp xúc ohmic mong muốn đặc tuyến gần tuyến tính để đưa dòng vào/ra linh kiện. Mô hình rào thế lý tưởng cần hiệu chỉnh vì trạng thái bề mặt và ghim mức Fermi.`,
        example: `Trong mạch chỉnh lưu tần số cao, Schottky có thể giảm tổn hao chuyển mạch; vẫn phải kiểm tra điện áp ngược cho phép.`,
        pitfall: `Không suy đặc tuyến tiếp xúc chỉ từ tên kim loại mà bỏ qua pha tạp và trạng thái giao diện.`,
        practice: `Đặc trưng mong muốn của tiếp xúc ohmic là gì?`,
        answer: `Dẫn hai chiều với quan hệ dòng–áp gần tuyến tính và điện trở tiếp xúc nhỏ trong miền làm việc.`
      },
      {
        details: `JFET điều khiển dòng kênh dẫn bằng điện áp phân cực ngược ở cổng p-n. Khi tăng độ phân cực ngược, vùng nghèo lấn vào kênh và dòng giảm; cổng lý tưởng gần như không có dòng một chiều. Phân biệt điện áp pinch-off của kênh với điều kiện ngắt dòng theo quy ước V_GS của loại n/p. Mô hình bình phương Shockley chỉ gần đúng trong miền thích hợp và các tham số phải lấy từ datasheet hoặc phép đo.`,
        example: `JFET kênh n có V_GS từ 0 xuống âm hơn thì kênh bị siết và I_D giảm trong vùng hoạt động thông thường.`,
        pitfall: `Không áp điện áp cổng thuận lớn như với MOSFET; tiếp giáp cổng p-n khi thuận sẽ dẫn dòng.`,
        practice: `Với JFET kênh n thông thường, V_GS âm hơn làm I_D tăng hay giảm?`,
        answer: `Giảm, vì vùng nghèo mở rộng và kênh dẫn hẹp lại.`
      },
      {
        details: `Tụ MOS gồm cổng, lớp cách điện và bán dẫn; điện áp cổng thay đổi trạng thái tích lũy, nghèo và đảo hạt tải ở bề mặt. MOSFET khai thác lớp đảo để tạo kênh giữa source và drain. Với nMOS tăng cường, V_GS vượt ngưỡng V_T mới hình thành kênh mạnh; dòng còn phụ thuộc V_DS và miền làm việc. Kênh ngắn, hiệu ứng thân và dòng rò khiến linh kiện thực khác mô hình bình phương đơn giản.`,
        example: `nMOS tăng cường có V_T=1 V: V_GS=0,5 V thường ở trạng thái tắt theo mô hình cơ bản, còn V_GS=2 V có thể dẫn nếu V_DS phù hợp.`,
        pitfall: `Ngưỡng V_T không phải điện áp làm transistor đột ngột có điện trở bằng 0; dòng dưới ngưỡng vẫn có thể tồn tại.`,
        practice: `Vai trò lớp oxide ở cổng MOSFET là gì?`,
        answer: `Cách điện cổng với kênh, cho phép điện trường điều khiển hạt tải mà dòng cổng DC lý tưởng rất nhỏ.`
      },
      {
        details: `BJT gồm hai tiếp giáp p-n (NPN hoặc PNP). Ở miền khuếch đại thuận của NPN, tiếp giáp base–emitter phân cực thuận và base–collector phân cực ngược; dòng collector lớn được điều khiển bởi điều kiện tiêm hạt tải tại base, thường xấp xỉ I_C≈βI_B trong một miền. Ở mạch công tắc cần phân biệt ngắt, khuếch đại và bão hòa; β thay đổi giữa linh kiện, nhiệt độ và dòng.`,
        example: `Nếu β≈100 và I_B=20 µA trong miền khuếch đại thuận, I_C≈2 mA; tải có thể làm transistor bão hòa trước mức đó.`,
        pitfall: `Không thiết kế công tắc dựa trên β danh nghĩa duy nhất; cần kiểm tra dòng tải, điện áp bão hòa và công suất.`,
        practice: `NPN ở miền khuếch đại thuận có hai tiếp giáp phân cực ra sao?`,
        answer: `Base–emitter thuận, base–collector ngược.`
      },
      {
        details: `LED biến tái hợp hạt tải thành ánh sáng; màu phụ thuộc vùng cấm và cấu trúc vật liệu. Photodiode chuyển photon hấp thụ thành dòng quang, thường đo ở phân cực ngược; pin mặt trời tạo công suất từ ánh sáng mà không cần nguồn phân cực ngoài. Chọn linh kiện theo bước sóng đáp ứng, hiệu suất, dòng tối, tốc độ và giới hạn nhiệt. Khi làm thí nghiệm, luôn có điện trở hạn dòng cho LED thông thường.`,
        example: `Nguồn 5 V, LED có V_F≈2 V ở dòng mục tiêu 10 mA: chọn R≈(5−2)/0,01=300 Ω, rồi kiểm tra dải V_F trong datasheet.`,
        pitfall: `Không nối LED thẳng vào nguồn áp chỉ vì điện áp nguồn gần V_F; dòng có thể tăng quá mức.`,
        practice: `Photodiode trong cảm biến đo ánh sáng thường cho đại lượng điện nào thay đổi theo quang thông?`,
        answer: `Dòng quang tăng theo số photon được hấp thụ trong miền làm việc.`
      },
      {
        details: `CMOS kết hợp nMOS và pMOS bổ sung. Bộ đảo cơ bản kéo ngõ ra lên nguồn khi đầu vào thấp và kéo xuống mass khi đầu vào cao; ở trạng thái tĩnh lý tưởng gần như không có đường dẫn DC xuyên nguồn. Công suất động xấp xỉ P≈αCV²f, với α là hệ số chuyển mạch, nên giảm điện áp hoặc số lần chuyển mạch giảm điện năng. Rò, ngắn mạch lúc chuyển mức và tải thực làm công suất không bằng 0.`,
        example: `Nếu V giảm còn 0,8 lần và C, f, α giữ nguyên, công suất động còn khoảng 0,64 lần.`,
        pitfall: `Không kết luận CMOS không tiêu thụ điện khi chờ; transistor thật có dòng rò.`,
        practice: `Bộ đảo CMOS nhận mức logic cao ổn định thì nMOS và pMOS ở trạng thái nào?`,
        answer: `nMOS dẫn, pMOS tắt; đầu ra ở mức thấp trong mô hình logic cơ bản.`
      },
      {
        details: `Vi mạch tích hợp nhiều phần tử trên một die để giảm kích thước và kết nối ngoài. Bộ nhớ SRAM dùng ô chốt lưu bit khi có nguồn, DRAM lưu điện tích trên tụ và phải làm tươi, flash là bộ nhớ không mất dữ liệu khi tắt nguồn nhờ cơ chế giữ điện tích hoặc trạng thái vật liệu. So sánh dung lượng, tốc độ, năng lượng, độ bền ghi và chi phí theo ứng dụng; không có loại bộ nhớ tốt nhất cho mọi tiêu chí.`,
        example: `Cache CPU thường dùng SRAM để lấy dữ liệu nhanh; bộ nhớ chính thường dùng DRAM vì mật độ cao hơn.`,
        pitfall: `Không gọi DRAM là bộ nhớ không bay hơi: dữ liệu mất khi ngừng cấp nguồn.`,
        practice: `Loại nào cần làm tươi định kỳ: SRAM, DRAM hay flash?`,
        answer: `DRAM, vì điện tích ở ô nhớ bị rò theo thời gian.`
      },
      {
        details: `Chip tăng tốc AI tổ chức nhiều phép nhân–cộng song song và khai thác tái sử dụng dữ liệu để giảm di chuyển giữa bộ tính và bộ nhớ. Hiệu năng phụ thuộc kiểu dữ liệu, băng thông, dung lượng bộ nhớ, kiến trúc mạng và kích thước batch; số TOPS công bố chỉ có ý nghĩa với điều kiện đo cụ thể. Lượng tử hóa có thể tiết kiệm năng lượng và bộ nhớ nhưng cần đánh giá sai số mô hình. Thiết kế còn phải xét tỏa nhiệt, chi phí và phần mềm hỗ trợ.`,
        example: `Ma trận lớn có thể chạy nhanh trên phần cứng song song, nhưng nếu phải liên tục đọc dữ liệu chậm từ bộ nhớ ngoài, lợi ích bị giới hạn bởi băng thông.`,
        pitfall: `Không so sánh hai chip chỉ bằng TOPS nếu độ chính xác phép tính và điều kiện đo khác nhau.`,
        practice: `Vì sao bộ nhớ có thể là nút thắt khi đơn vị nhân–cộng rất nhanh?`,
        answer: `Dữ liệu không được cấp đủ nhanh cho bộ tính, nên các đơn vị xử lý phải chờ.`
      },
      {
        details: `Thí nghiệm linh kiện bán dẫn nên bắt đầu bằng sơ đồ, cực tính, giới hạn nguồn và datasheet. Quét điện áp từng bước nhỏ, đo cặp (V,I), rồi vẽ đặc tuyến và nhận biết vùng thuận, ngược hoặc ngưỡng điều khiển. Dùng điện trở hạn dòng và giới hạn nguồn để bảo vệ linh kiện; không vượt công suất P≈VI hoặc điện áp đánh thủng. Ghi sai số dụng cụ, nhiệt độ và điều kiện đo để giải thích khác biệt với mô hình lý tưởng.`,
        example: `Với diode silicon, thu nhiều điểm I–V từ dòng nhỏ đến lớn, không lấy một điểm 0,7 V rồi suy toàn bộ đặc tuyến là đường thẳng.`,
        pitfall: `Đảo cực que đo hoặc bỏ điện trở hạn dòng có thể làm hỏng linh kiện và cho kết quả vô nghĩa.`,
        practice: `Muốn kiểm tra mô hình sụt áp cố định của diode, cần đo tối thiểu điều gì?`,
        answer: `Nhiều cặp dòng–áp ở vùng thuận, kèm điều kiện nhiệt độ và sai số, để thấy điện áp thay đổi theo dòng.`
      }
    ]
  };

  for (const [code, additions] of Object.entries(guides)) {
    const lessons = window.COURSES[code].groups.flatMap(group => group.items)
      .filter(lesson => code !== 'PRF193' || !lesson.source.startsWith('Slot_08_09_'));
    if (lessons.length !== additions.length) throw new Error(`Thiếu bài hướng dẫn ${code}: ${additions.length}/${lessons.length}`);
    lessons.forEach((lesson, index) => {
      const guide = additions[index];
      lesson.details = `${lesson.details}\n\n${guide.details}`;
      lesson.example = guide.example;
      lesson.pitfall = guide.pitfall;
      lesson.practice = guide.practice;
      lesson.answer = guide.answer;
      lesson.source += '; ví dụ và bài tự luyện do nhóm biên soạn';
    });
  }
})();
