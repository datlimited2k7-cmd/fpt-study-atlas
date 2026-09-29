// Câu tự luyện biên soạn từ Slot_08_09_Modules_Functions.pptx.
(() => {
const questions = [
  {
    q:'Một hàm chỉ tính tổng ước của n và trả kết quả, không tự nhập hoặc in. Thiết kế này thể hiện điều gì?',
    o:['Cohesion cao và coupling thấp hơn','Cohesion thấp vì có ít dòng','Coupling cao vì có tham số','Không thể dùng lại hàm'],
    a:0,e:'Hàm tập trung vào một nhiệm vụ; dữ liệu đi qua tham số và giá trị trả về nên không phụ thuộc thao tác nhập/in.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 13–25'
  },
  {
    q:'Khi nhiều hàm cùng đọc và sửa một biến toàn cục, vấn đề thiết kế chính là gì?',
    o:['Coupling tăng do phụ thuộc dữ liệu chung','Cohesion chắc chắn tăng','Mọi hàm tự động chạy nhanh hơn','Không còn cần tham số'],
    a:0,e:'Trạng thái dùng chung tạo phụ thuộc ngầm; thay đổi ở một hàm có thể ảnh hưởng hàm khác và gây khó kiểm thử.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 15–24'
  },
  {
    q:'Nếu tính cả 1 và n, tổng các ước dương của 12 là bao nhiêu?',
    o:['16','24','28','36'],
    a:2,e:'Các ước dương của 12 là 1, 2, 3, 4, 6, 12; tổng bằng 28.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 9, 21–27'
  },
  {
    q:'Bốn phần chính của một định nghĩa hàm C là gì?',
    o:['Kiểu trả về, tên, tham số, thân hàm','Header, linker, IDE, terminal','Biến toàn cục, stack, heap, file','Chỉ tên và dấu chấm phẩy'],
    a:0,e:'Phần đầu nêu kiểu trả về, tên và tham số; thân hàm chứa các câu lệnh thực hiện nhiệm vụ.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 27–29'
  },
  {
    q:'Hàm C chỉ in các ước của n và không trả giá trị nên khai báo kiểu trả về nào?',
    o:['void','int','double','char'],
    a:0,e:'void biểu thị hàm không trả một giá trị để dùng trong biểu thức; tác dụng của hàm là in kết quả.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 27, 31–32'
  },
  {
    q:'double average(int a,int b,int c){return (a+b+c)/3;} gọi với (1,2,2) trả giá trị nào?',
    o:['1.0','1.666…','2.0','Lỗi vì kiểu trả về là double'],
    a:0,e:'Tổng 5 chia cho số nguyên 3 cho thương nguyên 1 trước khi đổi thành double. Dùng /3.0 để giữ phần lẻ.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 28–29'
  },
  {
    q:'Trong khai báo int sumOddNumbers(int n);, n là gì? Trong lời gọi sumOddNumbers(5), 5 là gì?',
    o:['n là tham số, 5 là đối số','n là đối số, 5 là tham số','Cả hai đều là hàm','Cả hai đều là kiểu trả về'],
    a:0,e:'Tham số là tên trong khai báo/định nghĩa; đối số là giá trị hoặc biểu thức cung cấp khi gọi hàm.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 39, 44–45'
  },
  {
    q:'Vì sao cần prototype khi định nghĩa hàm được đặt sau main trong tệp C?',
    o:['Để trình biên dịch biết giao diện và kiểm tra lời gọi trước khi thấy định nghĩa','Để hàm chạy hai lần','Để thay thế hoàn toàn định nghĩa','Để tăng dung lượng stack'],
    a:0,e:'Prototype khai báo tên, kiểu trả về và kiểu tham số. Chương trình vẫn cần định nghĩa tương ứng khi liên kết.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 44–45'
  },
  {
    q:'Cú pháp nào thường dùng để thêm header của dự án trong C?',
    o:['#include "my_math.h"','#include <my_math.h> là bắt buộc','import my_math.h;','using my_math.h;'],
    a:0,e:'Dấu ngoặc kép thường tìm header dự án; ngoặc nhọn thường dùng cho header hệ thống theo cấu hình trình biên dịch.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 46–48'
  },
  {
    q:'Trong C, gọi void swap(int a,int b) với x=5,y=7 rồi hoán đổi a,b bên trong hàm. Sau lời gọi, x và y là?',
    o:['x=5, y=7','x=7, y=5','x=5, y=5','Không xác định chỉ vì gọi hàm'],
    a:0,e:'C truyền tham trị: a,b là bản sao của x,y. Đổi hai bản sao không đổi hai biến ở nơi gọi.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 49–53'
  },
  {
    q:'Muốn hàm C hoán đổi trực tiếp hai biến int của người gọi, kiểu tham số và lời gọi nào phù hợp?',
    o:['int *a,int *b và swap(&x,&y)','int a,int b và swap(x,y)','void a,void b và swap(x,y)','int a,int b và swap(&x,&y)'],
    a:0,e:'Truyền địa chỉ x,y qua con trỏ; trong hàm dùng *a và *b để sửa hai đối tượng gốc.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 52–53; phần con trỏ được giải thích thêm'
  },
  {
    q:'Khác nhau giữa scope và thời gian sống của biến là gì?',
    o:['Scope là vùng mã thấy tên; thời gian sống là khoảng đối tượng tồn tại','Scope là số byte; thời gian sống là tên biến','Hai khái niệm luôn đồng nghĩa','Scope chỉ áp dụng cho biến toàn cục'],
    a:0,e:'Một khái niệm nói về nơi truy cập được tên, khái niệm kia nói về lúc đối tượng còn tồn tại.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 60–64'
  },
  {
    q:'Nếu biến x=5 ở khối ngoài và một biến x=9 được khai báo ở khối trong, dùng x trong khối trong lấy giá trị nào?',
    o:['9','5','14','Lỗi vì trùng tên ở hai khối'],
    a:0,e:'Tên ở phạm vi hẹp hơn che tên ở phạm vi ngoài; sau khi ra khỏi khối trong, x bên ngoài vẫn là 5.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 64'
  },
  {
    q:'Trong slide walkthrough, f(a,b,c) trả 2*(a+b-c)/5. Nếu t=3*f(6,5,7), t bằng bao nhiêu trong C?',
    o:['3','4.8','8','1'],
    a:0,e:'2*(6+5−7)=8; 8/5 là 1 theo phép chia nguyên, nên t=3×1=3.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 66'
  },
  {
    q:'Điều kiện nào nhận đúng các số nguyên dương là lũy thừa của 2, kể cả trường hợp n=0?',
    o:['n>0 && (n&(n-1))==0','(n&(n-1))==0','n%2==0','n>=0 && n%2==0'],
    a:0,e:'Phép bit đơn lẻ trả đúng cả với 0, nhưng 0 không phải lũy thừa của 2; cần điều kiện n>0.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 67; bổ sung điều kiện biên'
  },
  {
    q:'Trong ba năm 1900, 2000 và 2024, năm nào là năm nhuận?',
    o:['2000 và 2024','Cả ba','Chỉ 1900','1900 và 2024'],
    a:0,e:'Năm chia hết 400 là năm nhuận; năm chia hết 100 nhưng không chia hết 400 thì không. Công thức trên slide 68 bị sai ở ca năm thế kỷ.',
    s:'Slot_08_09_Modules_Functions.pptx, slide 68; công thức đã sửa'
  }
];
window.QUIZZES.PRF193.push(...questions.map(question => ({ ...question, chapter: 'Slot 08–09: Mô đun và hàm C' })));
})();
