// Dữ liệu CEA201 từ https://on-tap.pages.dev/subjects/cea201.js
// SHA-256 nguồn: ead87a3f443f9e5fbd2627157888a9dbe5b62b2b1b5e2cca9eca81d9a597fd6c
// Nhập theo xác nhận quyền sử dụng của chủ website FPT Study Atlas.
window.QUIZZES.CEA201.push(...[
  {
    "q": "An I/O device is referred to as a __________.",
    "o": [
      "CPU",
      "control device",
      "peripheral",
      "register"
    ],
    "a": 2,
    "e": "Thiết bị I/O được gọi là peripheral (thiết bị ngoại vi) — nó nằm ngoài máy tính và được điều khiển qua module I/O.",
    "s": "On Tap CEA201, câu 2",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 2
  },
  {
    "q": "When data are moved over longer distances, to or from a remote device, the process is known as __________.",
    "o": [
      "data communications",
      "registering",
      "structuring",
      "data transport"
    ],
    "a": 0,
    "e": "Phân biệt hai dạng di chuyển dữ liệu: cự ly ngắn trong máy = data movement / I/O; cự ly xa tới thiết bị ở xa = data communications.",
    "s": "On Tap CEA201, câu 5",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 5
  },
  {
    "q": "The __________ defines the system call interface to the operating system and the hardware resources and services available in a system through the user instruction set architecture.",
    "o": [
      "HLL",
      "API",
      "ABI",
      "ISA"
    ],
    "a": 2,
    "e": "ABI (Application Binary Interface) định nghĩa giao diện system call tới hệ điều hành ⇒ tạo ra khả năng khả chuyển ở mức nhị phân (binary portability): cùng một file .exe chạy được trên nhiều máy cùng ABI.",
    "s": "On Tap CEA201, câu 18",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 18
  },
  {
    "q": "Interfaces between the computer and peripherals is an example of an organizational attribute.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Giao tiếp máy tính ↔ ngoại vi là chi tiết phần cứng, lập trình viên không nhìn thấy ⇒ thuộc organization.",
    "s": "On Tap CEA201, câu 25",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 25
  },
  {
    "q": "The ABI is the boundary between hardware and software.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Ranh giới giữa phần cứng và phần mềm là ISA, không phải ABI. ABI nằm ở ranh giới giữa chương trình ứng dụng và hệ điều hành.",
    "s": "On Tap CEA201, câu 26",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 26
  },
  {
    "q": "A common example of system interconnection is by means of a __________.",
    "o": [
      "data transport",
      "control device",
      "register",
      "system bus"
    ],
    "a": 3,
    "e": "Hiện thực phổ biến nhất của system interconnection là system bus (gồm data bus + address bus + control bus).",
    "s": "On Tap CEA201, câu 38",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 38
  },
  {
    "q": "Second generation computers used __________.",
    "o": [
      "integrated circuits",
      "large-scale integration",
      "transistors",
      "vacuum tubes"
    ],
    "a": 2,
    "e": "Thế hệ 2 = transistor — nhỏ hơn, rẻ hơn, toả nhiệt ít hơn đèn điện tử, và là linh kiện bán dẫn (solid state).",
    "s": "On Tap CEA201, câu 39",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 39
  },
  {
    "q": "Architectural attributes include __________.",
    "o": [
      "memory technology used",
      "interfaces",
      "control signals",
      "I/O mechanisms"
    ],
    "a": 3,
    "e": "Thuộc tính kiến trúc: tập lệnh, số bit biểu diễn các kiểu dữ liệu, cơ chế I/O, kỹ thuật định địa chỉ bộ nhớ. Ba phương án còn lại (công nghệ bộ nhớ, giao tiếp ngoại vi, tín hiệu điều khiển) đều thuộc tổ chức.",
    "s": "On Tap CEA201, câu 40",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 40
  },
  {
    "q": "The __________ controls the movement of data and instructions into and out of the processor.",
    "o": [
      "control unit",
      "ALU",
      "shifter",
      "branch"
    ],
    "a": 0,
    "e": "Control unit điều khiển luồng dữ liệu và lệnh ra/vào bộ xử lý, đồng thời điều khiển hoạt động của chính ALU.",
    "s": "On Tap CEA201, câu 47",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 47
  },
  {
    "q": "The __________ interprets the instructions in memory and causes them to be executed.",
    "o": [
      "I/O",
      "control unit",
      "main memory",
      "arithmetic and logic unit"
    ],
    "a": 1,
    "e": "CU thông dịch (interpret) lệnh trong bộ nhớ rồi phát tín hiệu khiến chúng được thực thi.",
    "s": "On Tap CEA201, câu 51",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 51
  },
  {
    "q": "__________ are a set of storage locations.",
    "o": [
      "Registers",
      "Control units",
      "PSWs",
      "Processors"
    ],
    "a": 0,
    "e": "Registers = tập các ô nhớ tốc độ rất cao nằm ngay trong CPU. (PSW chỉ là một thanh ghi trạng thái cụ thể.)",
    "s": "On Tap CEA201, câu 65",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 65
  },
  {
    "q": "The __________ performs the computer's data processing functions.",
    "o": [
      "system bus",
      "Register",
      "ALU",
      "CPU interconnection"
    ],
    "a": 2,
    "e": "ALU thực hiện chức năng xử lý dữ liệu thực sự (tính toán số học và logic).",
    "s": "On Tap CEA201, câu 68",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 68
  },
  {
    "q": "A common example of system interconnection is by means of a __________",
    "o": [
      "register",
      "system bus",
      "data transport",
      "control device"
    ],
    "a": 1,
    "e": "Liên kết hệ thống (system interconnection) nối CPU, bộ nhớ chính và I/O; ví dụ phổ biến nhất là system bus.",
    "s": "On Tap CEA201, câu 72",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 72
  },
  {
    "q": "The number of bits used to represent various data types is an example of an architectural attribute.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Số bit của kiểu dữ liệu ảnh hưởng trực tiếp tới kết quả logic của chương trình ⇒ thuộc architecture.",
    "s": "On Tap CEA201, câu 83",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 83
  },
  {
    "q": "__________ attributes include hardware details transparent to the programmer.",
    "o": [
      "Interface",
      "Organizational",
      "Memory",
      "Architectural"
    ],
    "a": 1,
    "e": "“Transparent to the programmer” (lập trình viên không thấy) là dấu hiệu nhận biết thuộc tính organizational.",
    "s": "On Tap CEA201, câu 100",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 100
  },
  {
    "q": "Which one of the following can be called as a peripheral?",
    "o": [
      "Control Unit",
      "Arithmetic Unit",
      "Speakers",
      "Logic Unit",
      "Main Memory"
    ],
    "a": 2,
    "e": "Loa là thiết bị ngoài ⇒ ngoại vi. CU, ALU nằm trong CPU; main memory là thành phần trong của máy tính.",
    "s": "On Tap CEA201, câu 101",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 101
  },
  {
    "q": "A __________ is a mechanism that provides for communication among CPU, main memory, i",
    "o": [
      "system interconnection",
      "CPU interconnection",
      "peripheral",
      "processor"
    ],
    "a": 0,
    "e": "System interconnection nối 3 thành phần lớn. Đừng nhầm với CPU interconnection — cái này chỉ nối ALU, CU và các thanh ghi bên trong CPU.",
    "s": "On Tap CEA201, câu 105",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 105
  },
  {
    "q": "It is a(n) __________ design issue whether a computer will have a multiply instruction.",
    "o": [
      "architectural",
      "memory",
      "elementary",
      "organizational"
    ],
    "a": 0,
    "e": "Ví dụ kinh điển trong sách. Có hay không lệnh nhân ⇒ thay đổi tập lệnh ⇒ vấn đề kiến trúc. Hãy so với câu tiếp theo để thấy ranh giới.",
    "s": "On Tap CEA201, câu 113",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 113
  },
  {
    "q": "The __________ performs the computer's data processing functions.",
    "o": [
      "Register",
      "CPU interconnection",
      "ALU",
      "system bus"
    ],
    "a": 2,
    "e": "ALU (Arithmetic and Logic Unit) thực hiện chức năng xử lý dữ liệu của máy tính. Thanh ghi chỉ lưu tạm, còn bus và liên kết nội CPU chỉ truyền dữ liệu.",
    "s": "On Tap CEA201, câu 119",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 119
  },
  {
    "q": "Backward compatible means that the programs written for the older machines can be executed on the new machine.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Nhờ tương thích ngược mà cả một “family” máy (IBM System/360, dòng x86…) giữ nguyên kiến trúc qua nhiều thế hệ, chỉ thay đổi tổ chức.",
    "s": "On Tap CEA201, câu 125",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 125
  },
  {
    "q": "__________ provide storage internal to the CPU.",
    "o": [
      "Control units",
      "ALUs",
      "Main memory",
      "Registers"
    ],
    "a": 3,
    "e": "Bốn thành phần của CPU: control unit, ALU, registers (lưu trữ bên trong CPU) và liên kết nội CPU. Bộ nhớ chính nằm ngoài CPU.",
    "s": "On Tap CEA201, câu 141",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 141
  },
  {
    "q": "Computer __________ refers to those attributes that have a direct impact on the logical execution of a program.",
    "o": [
      "organization",
      "specifics",
      "design",
      "architecture"
    ],
    "a": 3,
    "e": "Câu định nghĩa chuẩn của computer architecture: các thuộc tính có tác động trực tiếp tới việc thực thi logic của chương trình (tập lệnh, số bit biểu diễn dữ liệu, cơ chế I/O, kỹ thuật định địa chỉ bộ nhớ).",
    "s": "On Tap CEA201, câu 142",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 142
  },
  {
    "q": "A __________ system is a set of interrelated subsystems.",
    "o": [
      "secondary",
      "hierarchical",
      "complex",
      "functional"
    ],
    "a": 1,
    "e": "Sách mô tả máy tính là hệ thống phân cấp (hierarchical system): mỗi mức gồm các hệ con liên quan, cho phép ta phân tích từng tầng một (máy tính → CPU → CU → …).",
    "s": "On Tap CEA201, câu 143",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 143
  },
  {
    "q": "Changes in technology not only influence organization but also result in the introduction of more powerful and more complex architectures.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Công nghệ mới trước hết đổi cách tổ chức, nhưng lâu dài cũng kéo theo kiến trúc mạnh và phức tạp hơn (ví dụ: bổ sung tập lệnh SIMD, lệnh 64-bit).",
    "s": "On Tap CEA201, câu 146",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 146
  },
  {
    "q": "The __________ contains the 8-bit opcode instruction being executed.",
    "o": [
      "memory buffer register",
      "instruction buffer register",
      "instruction register",
      "memory address register"
    ],
    "a": 2,
    "e": "Thanh ghi IAS: IR giữ opcode 8 bit đang thực thi; IBR giữ tạm nửa lệnh bên phải của word; MBR chứa word đọc/ghi; MAR chứa địa chỉ.",
    "s": "On Tap CEA201, câu 147",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 147
  },
  {
    "q": "It is a(n) __________ issue whether the multiply instruction will be implemented by a special r mechanism that makes repeated use of the add unit of the system.",
    "o": [
      "architectural",
      "memory",
      "mechanical",
      "organizational"
    ],
    "a": 3,
    "e": "Cùng lệnh nhân, nhưng hiện thực bằng cách nào (mạch nhân riêng hay cộng lặp) thì lập trình viên không thấy ⇒ vấn đề tổ chức.",
    "s": "On Tap CEA201, câu 152",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 152
  },
  {
    "q": "The __________ defines the third generation of computers.",
    "o": [
      "integrated circuit",
      "vacuum tube",
      "transistor",
      "VLSI"
    ],
    "a": 0,
    "e": "Thế hệ 3 được định nghĩa bởi mạch tích hợp (IC) — tiêu biểu là IBM System/360 và DEC PDP-8.",
    "s": "On Tap CEA201, câu 158",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 158
  },
  {
    "q": "The end user is concerned mainly with the computer’s architecture.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Người dùng cuối quan tâm giá và hiệu năng; người quan tâm kiến trúc là lập trình viên (đặc biệt lập trình hệ thống/assembly).",
    "s": "On Tap CEA201, câu 161",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 161
  },
  {
    "q": "A computer must be able to process, store, move, and control data.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — phát biểu gọn của 4 chức năng cơ bản.",
    "s": "On Tap CEA201, câu 164",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 164
  },
  {
    "q": "Microprogramming eases the task of designing and implementing the control unit and provid family concept.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Vi chương trình (microprogramming) giúp thiết kế đơn vị điều khiển dễ hơn, và cho phép nhiều máy khác nhau về tổ chức vẫn chạy cùng một tập lệnh ⇒ nền tảng của khái niệm “family”.",
    "s": "On Tap CEA201, câu 167",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 167
  },
  {
    "q": "Architectural attributes include __________.",
    "o": [
      "I/O mechanisms",
      "control signals",
      "interfaces",
      "memory technology used"
    ],
    "a": 0,
    "e": "Thuộc tính kiến trúc là thứ lập trình viên nhìn thấy: tập lệnh, số bit biểu diễn dữ liệu, cơ chế I/O, kỹ thuật định địa chỉ. Tín hiệu điều khiển, giao tiếp ngoại vi, công nghệ bộ nhớ là thuộc tính tổ chức.",
    "s": "On Tap CEA201, câu 168",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 168
  },
  {
    "q": "A set of I/O modules is a key element of a computer system.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Module I/O là một trong bốn thành phần cấu trúc chính; nó làm cầu nối giữa máy tính và các ngoại vi.",
    "s": "On Tap CEA201, câu 169",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 169
  },
  {
    "q": "The __________ stores data.",
    "o": [
      "main memory",
      "I/O",
      "system bus",
      "control unit"
    ],
    "a": 0,
    "e": "Trong bốn thành phần mức cao, main memory là nơi lưu trữ dữ liệu.",
    "s": "On Tap CEA201, câu 178",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 178
  },
  {
    "q": "A wafer is made of silicon and is broken up into chips which consists of many gates and/or memory cells plus a number of input and output attachment points.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng, câu này khớp với sách: một tấm wafer silicon được chế tạo cùng một mẫu mạch trên nhiều ô, sau đó cắt thành các chip; mỗi chip gồm nhiều cổng và/hoặc ô nhớ cùng các điểm nối vào/ra.",
    "s": "On Tap CEA201, câu 193",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 193
  },
  {
    "q": "Which of the following is/are NOT part(s) of the CPU?",
    "o": [
      "ALU",
      "The Control unit",
      "The Registers",
      "System bus"
    ],
    "a": 3,
    "e": "System bus là liên kết giữa các thành phần lớn, không nằm trong CPU.",
    "s": "On Tap CEA201, câu 198",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 198
  },
  {
    "q": "Computer organization refers to attributes of a system visible to the programmer.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai — đó là định nghĩa của architecture. Organization là các chi tiết phần cứng trong suốt (transparent) với lập trình viên: tín hiệu điều khiển, giao tiếp với ngoại vi, công nghệ bộ nhớ được dùng.",
    "s": "On Tap CEA201, câu 199",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 199
  },
  {
    "q": "The control unit (CU) does the actual computation or processing of data.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai — tính toán là việc của ALU. CU chỉ điều khiển và điều phối.",
    "s": "On Tap CEA201, câu 201",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 201
  },
  {
    "q": "A vacuum tube is a solid-state device made from silicon.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Thiết bị bán dẫn (solid-state) làm từ silicon là transistor. Đèn điện tử là ống thuỷ tinh hút chân không, to, nóng và dễ hỏng.",
    "s": "On Tap CEA201, câu 202",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 202
  },
  {
    "q": "The ENIAC is an example of a __________ generation computer.",
    "o": [
      "first",
      "second",
      "third",
      "fourth"
    ],
    "a": 0,
    "e": "ENIAC (1946, ĐH Pennsylvania) — máy tính điện tử đa dụng đầu tiên, dùng ~18.000 đèn điện tử ⇒ thế hệ 1.",
    "s": "On Tap CEA201, câu 211",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 211
  },
  {
    "q": "The __________ defines the repertoire of machine language instructions that a computer can follow.",
    "o": [
      "ABI",
      "API",
      "HLL",
      "ISA"
    ],
    "a": 3,
    "e": "ISA (Instruction Set Architecture) = tập hợp toàn bộ lệnh máy mà CPU hiểu được. Đây cũng là ranh giới giữa phần cứng và phần mềm.",
    "s": "On Tap CEA201, câu 212",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 212
  },
  {
    "q": "The __________ stores data.",
    "o": [
      "system bus",
      "I/O",
      "main memory",
      "control unit"
    ],
    "a": 2,
    "e": "Bộ nhớ chính (main memory) lưu dữ liệu (và chương trình). System bus chỉ truyền, control unit điều khiển, I/O chuyển dữ liệu ra vào máy.",
    "s": "On Tap CEA201, câu 214",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 214
  },
  {
    "q": "Computers are classified into generations based on the fundamental hardware technology employed.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Phân thế hệ dựa trên công nghệ phần cứng nền tảng: đèn điện tử → transistor → IC → LSI/VLSI.",
    "s": "On Tap CEA201, câu 215",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 215
  },
  {
    "q": "Which of the following components was used in the first ENIAC computer?",
    "o": [
      "Bipolar transistors",
      "Field transistors",
      "Vacuum tubes",
      "Semiconductor Ics"
    ],
    "a": 2,
    "e": "ENIAC dùng đèn điện tử. Nó còn nổi tiếng vì nặng 30 tấn, tiêu thụ 140 kW và phải lập trình bằng cách cắm lại dây.",
    "s": "On Tap CEA201, câu 222",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 222
  },
  {
    "q": "Which of the following statements is true for Von Neumann architecture?",
    "o": [
      "Shared bus between the program memory and data memory",
      "Separate bus between the program memory and data memory",
      "External bus for program memory and data memory",
      "External bus for data memory only"
    ],
    "a": 0,
    "e": "Von Neumann: lệnh và dữ liệu dùng chung một bộ nhớ và chung một bus. Kiến trúc tách riêng hai bus là Harvard.",
    "s": "On Tap CEA201, câu 223",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 223
  },
  {
    "q": "Which of the following component does not belong to central processing unit?",
    "o": [
      "System interconnection",
      "Arithmetic and logic unit",
      "Registers",
      "Control unit",
      "CPU interconnection"
    ],
    "a": 0,
    "e": "Bên trong CPU có 4 phần: CU, ALU, Registers, CPU interconnection. System interconnection nằm ngoài CPU, nối CPU với bộ nhớ và I/O.",
    "s": "On Tap CEA201, câu 224",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 224
  },
  {
    "q": "Central processing unit (CPU) of IAS computer consists of __________.",
    "o": [
      "Main memory and ALU (arithmetic and logic unit)",
      "ALU (Arithmetic and Logic Unit) and CU (Control Unit)",
      "CU (Control Unit) and IO Module",
      "ALU (Arithmetic and Logic Unit) and IO Module"
    ],
    "a": 1,
    "e": "Sơ đồ IAS: CPU gồm ALU + CU (cùng các thanh ghi MBR, MAR, IR, IBR, PC, AC, MQ); main memory và I/O nằm ngoài CPU.",
    "s": "On Tap CEA201, câu 225",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 225
  },
  {
    "q": "The first generation of computers used __________ for digital logic elements and memory?",
    "o": [
      "Transistor",
      "Integrated Circuits",
      "Large-scale integration",
      "Vacuum Tubes"
    ],
    "a": 3,
    "e": "Thế hệ 1 (1946–1957) dùng đèn điện tử cho cả phần tử logic lẫn bộ nhớ.",
    "s": "On Tap CEA201, câu 226",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 226
  },
  {
    "q": "In the CPU, what is the functionality of the control unit?",
    "o": [
      "To decode program instructions",
      "To controls the sequence of operations",
      "To store program instructions",
      "To transfer data to primary storage"
    ],
    "a": 1,
    "e": "Chức năng bao trùm của CU là điều khiển trình tự các thao tác. Giải mã lệnh chỉ là một bước nhỏ nằm trong đó, nên B tổng quát hơn A.",
    "s": "On Tap CEA201, câu 229",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 229
  },
  {
    "q": "The basic components of a computer are:",
    "o": [
      "Main memory, CPU, I/O modules and system interconnection",
      "Main memory, CPU, I/O modules and Storage device",
      "Main Memory, CPU, Peripherals and Storage device",
      "Main memory, CPU, I/O modules and Storage device"
    ],
    "a": 0,
    "e": "Bốn thành phần cấu trúc mức cao: CPU · bộ nhớ chính · các module I/O · liên kết hệ thống (system interconnection). “Storage device” là ngoại vi, nằm sau module I/O nên không tính là thành phần mức cao.",
    "s": "On Tap CEA201, câu 230",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 230
  },
  {
    "q": "Which of the following components of CPU is responsible to direct the system to execute instructions?",
    "o": [
      "Arithmetic and Logic Unit (ALU)",
      "Control Unit (CU)",
      "Registers",
      "Random Access Memory (RAM)"
    ],
    "a": 1,
    "e": "“Direct the system to execute” ⇒ CU.",
    "s": "On Tap CEA201, câu 233",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 233
  },
  {
    "q": "Which component defines the system call interface to the operating system and facilitates binary portability?",
    "o": [
      "Application Binary Interface",
      "Application Programming Interface",
      "Instruction Set Architecture",
      "Central Processing Unit"
    ],
    "a": 0,
    "e": "Từ khoá “binary portability” luôn gắn với ABI. (API gắn với “source-code portability”.)",
    "s": "On Tap CEA201, câu 245",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 245
  },
  {
    "q": "What is the role of the control unit in a processor?",
    "o": [
      "The control unit's primary role is to perform arithmetic and logical operations within the processor, orchestrating the manipulation of data",
      "The control unit only manages the flow of data between the CPU and external devices and does not play a significant role in executing instructions",
      "The control unit is solely responsible for managing the flow of instructions from secondary storage to RAM and does not have a role in the internal operation of the CPU",
      "The control unit in a processor directs and coordinates the execution of instructions, interpreting and managing the flow of operations within the CPU"
    ],
    "a": 3,
    "e": "D là phát biểu đầy đủ: CU chỉ huy và điều phối việc thực thi lệnh, thông dịch lệnh và quản lý luồng thao tác trong CPU.",
    "s": "On Tap CEA201, câu 256",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 256
  },
  {
    "q": "What is the main benefit of using ARM processors over other processors?",
    "o": [
      "Low cost and low power consumption",
      "Higher degree of multi-tasking",
      "Lower error or glitches",
      "Efficient memory management"
    ],
    "a": 0,
    "e": "ARM là họ RISC nhúng, thế mạnh là giá rẻ và tiêu thụ điện thấp ⇒ thống trị điện thoại, IoT, thiết bị nhúng.",
    "s": "On Tap CEA201, câu 258",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ARM & bộ xử lý",
    "sourceId": 258
  },
  {
    "q": "Which of the following statements is part of the Von Newmann principle?",
    "o": [
      "The computer uses a program counter to indicate the location of the next statement",
      "Computer can control all operations with a single program",
      "Computer memory is not addressable",
      "Each instruction must have a memory area containing the address of the next instruction"
    ],
    "a": 0,
    "e": "Thực thi tuần tự nhờ PC chỉ tới lệnh kế tiếp — đúng nguyên lý von Neumann. D mô tả máy tính kiểu cũ nơi mỗi lệnh tự mang địa chỉ lệnh sau, trái với von Neumann.",
    "s": "On Tap CEA201, câu 270",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 270
  },
  {
    "q": "What is the distinction between Computer Architecture and Computer Organization?",
    "o": [
      "Computer Architecture is the way the system is structured, while Computer Organization is those attributes of a system that are visible to the user",
      "Computer Architecture is those attributes of a system that are visible to the user, while Computer Organization is the way the system is structured",
      "Computer Architecture and Computer Organization are the same",
      "Computer Architecture is slower than Computer Organization"
    ],
    "a": 1,
    "e": "Đây là cặp khái niệm nền của cả môn. Architecture (kiến trúc) = những thuộc tính lập trình viên nhìn thấy, ảnh hưởng trực tiếp tới việc thực thi logic của chương trình. Organization (tổ chức) = cách hệ thống được dựng nên bên trong — các đơn vị vận hành và cách chúng nối với nhau. Phương án A đảo ngược hai định nghĩa.",
    "s": "On Tap CEA201, câu 271",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 271
  },
  {
    "q": "Which of the following are the four basic functions that a computer performs?",
    "o": [
      "Data processing, Data storage, Data movement, Control",
      "Data processing, Data storage, Data movement, Interrupt",
      "Data processing, Data storage, Interrupt, Control",
      "Data processing, Interrupt, Data movement, Control"
    ],
    "a": 0,
    "e": "Bốn chức năng cơ bản: xử lý dữ liệu · lưu trữ dữ liệu · di chuyển dữ liệu · điều khiển. Ngắt (interrupt) là một cơ chế, không phải một chức năng cơ bản.",
    "s": "On Tap CEA201, câu 272",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 272
  },
  {
    "q": "Which one of four basic functions of computer describes the following statement? \"The paths among components are used to move data from memory to memory and from memory through gates to memory\".",
    "o": [
      "Data storage",
      "Data processing",
      "Data movement",
      "Control"
    ],
    "a": 2,
    "e": "Từ khoá “paths… to move data” ⇒ data movement. Khi dữ liệu đi xa tới thiết bị ở xa thì gọi riêng là data communications.",
    "s": "On Tap CEA201, câu 273",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 273
  },
  {
    "q": "During the development process of the computer, which of the following statements is false?",
    "o": [
      "The second generation uses transistors",
      "The first generation uses vacuum tubes",
      "The fourth generation uses integrated circuit",
      "The third generation uses transistor"
    ],
    "a": 3,
    "e": "Đề hỏi câu sai. Thế hệ 3 dùng IC chứ không phải transistor ⇒ D sai.",
    "s": "On Tap CEA201, câu 274",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 274
  },
  {
    "q": "What electronic component is used to govern operations such as fetching, decoding, and performing arithmetic operations executed by a processor?",
    "o": [
      "Using a system clock",
      "Using a quartz crystal",
      "Using a analog to digital converter",
      "Using a counter"
    ],
    "a": 0,
    "e": "Đồng hồ hệ thống (system clock) phát xung nhịp để đồng bộ mọi thao tác fetch–decode–execute. (Thạch anh chỉ là linh kiện tạo dao động cho clock, không phải thành phần điều phối.)",
    "s": "On Tap CEA201, câu 275",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 275
  },
  {
    "q": "What is true about IAS Memory Formats?",
    "o": [
      "The memory of the IAS consists of 1000 storage locations (called words) of 32 bits each",
      "Only data is stored in the memory",
      "Both data and instructions are stored in the memory",
      "Only instructions are stored in the memory"
    ],
    "a": 2,
    "e": "Máy IAS lưu cả dữ liệu lẫn lệnh trong cùng bộ nhớ. A sai ở con số: IAS có 1000 word × 40 bit (mỗi word chứa 1 số 40 bit hoặc 2 lệnh 20 bit).",
    "s": "On Tap CEA201, câu 279",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 279
  },
  {
    "q": "What role does an Application Programming Interface (API) play in software development?",
    "o": [
      "It allows program access to hardware resources using high-level language libraries",
      "It defines low-level machine instructions",
      "It provides a standard for binary portability",
      "It manages system resources for the operating system and machine language instructions"
    ],
    "a": 0,
    "e": "API cho chương trình truy cập tài nguyên phần cứng thông qua thư viện HLL. B là ISA, C là ABI — hai bẫy quen thuộc.",
    "s": "On Tap CEA201, câu 296",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 296
  },
  {
    "q": "Which of the following PDP series computers is known for its use of 12-bit instructions and a single general-purpose register, the accumulator?",
    "o": [
      "PDP-8",
      "PDP-10",
      "PDP-11",
      "PDP-6"
    ],
    "a": 0,
    "e": "DEC PDP-8 (1964) — minicomputer đầu tiên, lệnh 12 bit, chỉ có một thanh ghi đa dụng là accumulator, và nổi bật vì dùng cấu trúc omnibus (bus dùng chung).",
    "s": "On Tap CEA201, câu 307",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 307
  },
  {
    "q": "What is the primary function of the Arithmetic and Logic Unit (ALU) in a processor?",
    "o": [
      "Perform actual computations and data processing",
      "Control the movement of data and instructions",
      "Act as an interface to the system bus",
      "Manage the internal processor memory"
    ],
    "a": 0,
    "e": "ALU = “bàn tay tính toán”. Phương án B là việc của CU, C là của CPU interconnection / bus interface.",
    "s": "On Tap CEA201, câu 309",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 309
  },
  {
    "q": "Choose the most four basic functions of a computer.",
    "o": [
      "Moving data, storing data, processing data, controlling.",
      "Supporting operating system, accessing hard disks, supporting network connections, supporting HDMI ports.",
      "Reading disks, accessing network resources.",
      "Reading data from keyboard, printing data to monitor, allowing network connections."
    ],
    "a": 0,
    "e": "Vẫn là bộ bốn quen thuộc, chỉ đổi cách diễn đạt: move · store · process · control.",
    "s": "On Tap CEA201, câu 319",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 319
  },
  {
    "q": "__________ refers to the operational units and their interconnections that realize the architectural specifications.",
    "o": [
      "Computer architecture",
      "Computer function",
      "Computer organization",
      "Instruction set architecture"
    ],
    "a": 2,
    "e": "Computer organization = các đơn vị vận hành và liên kết giữa chúng để hiện thực hoá đặc tả kiến trúc.",
    "s": "On Tap CEA201, câu 320",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 320
  },
  {
    "q": "What is the most important function of the control unit (CU)?",
    "o": [
      "It manages the order of running instructions.",
      "It will read and process data from main memory.",
      "It directs the operation of the other CPU components.",
      "It will read instructions from main memory then decoding them."
    ],
    "a": 2,
    "e": "Chọn phát biểu tổng quát nhất: CU chỉ huy hoạt động của các thành phần khác trong CPU. A và D chỉ là một phần công việc.",
    "s": "On Tap CEA201, câu 321",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 321
  },
  {
    "q": "What is false about the von Neumann architecture?",
    "o": [
      "Data and instructions are stored in a single read-write memory.",
      "The contents of this memory are addressable by location, without regard to the type of data contained there.",
      "Execution occurs in a sequential fashion (unless explicitly modified) from one instruction to the next.",
      "Data is stored in main memory and instructions are stored in cache memory"
    ],
    "a": 3,
    "e": "A, B, C đúng là ba nguyên lý von Neumann. D sai: dữ liệu và lệnh cùng nằm trong một bộ nhớ đọc-ghi, không hề tách dữ liệu ra main memory và lệnh ra cache.",
    "s": "On Tap CEA201, câu 323",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 323
  },
  {
    "q": "__________ interprets the instructions in memory and causes them to be executed.",
    "o": [
      "Registers",
      "CPU interconnection",
      "Arithmetic and Logic Unit (ALU)",
      "I/O Modules",
      "Control Unit (CU)"
    ],
    "a": 4,
    "e": "Control Unit diễn dịch các lệnh trong bộ nhớ và tạo tín hiệu điều khiển để chúng được thực thi. ALU chỉ làm phép tính, còn thanh ghi chỉ lưu trữ.",
    "s": "On Tap CEA201, câu 325",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 325
  },
  {
    "q": "Which of the following statements is NOT part of the Von Newmann principle?",
    "o": [
      "Computers can operate according to a stored program",
      "The computer uses a program counter to indicate the location of the next statement",
      "A computer's memory is addressable",
      "Each statement must have a memory area containing the address of the next instruction"
    ],
    "a": 3,
    "e": "Câu hỏi phủ định — đọc kỹ đề! A, B, C đều là nguyên lý von Neumann; D thì không (nếu mỗi lệnh phải chứa địa chỉ lệnh kế thì PC trở nên vô nghĩa).",
    "s": "On Tap CEA201, câu 344",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 344
  },
  {
    "q": "Regarding the ALU(Arithmetic Logic Unit), besides basic arithmetic operations, what operations can it perform? (choose two correct answers)",
    "o": [
      "It handles logical operations such as AND, OR, XOR, NOT.",
      "It handles data transfer operations like MOVE, GO, JUMP.",
      "It handles decoding operations after an instruction is fetched.",
      "It handles bit shifting operations like multi and div operations by powers of two."
    ],
    "a": [
      0,
      3
    ],
    "e": "Ngoài +, −, ×, ÷, ALU còn làm phép logic (AND/OR/XOR/NOT) và dịch bit (shift — tương đương nhân/chia cho luỹ thừa của 2). MOVE/JUMP và giải mã lệnh là việc của CU.",
    "s": "On Tap CEA201, câu 345",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 345
  },
  {
    "q": "Consider some computer generations 1: the first computer generation 2: the second computer generation 3: the third computer generation And some technologies are used in computer generations A: Vacuum Tubes B: Transistors C: Integrated Circuits (IC) D: Microprocessors Select the main technology applied in each computer generation",
    "o": [
      "1-D;2-C;3-B",
      "1-A;2-C;3-D",
      "1-A;2-B;3-C",
      "1-D;2-B;3-C"
    ],
    "a": 2,
    "e": "Thứ tự cần thuộc lòng: 1 → đèn điện tử (vacuum tube), 2 → transistor, 3 → IC, 4 → LSI/VLSI (vi xử lý).",
    "s": "On Tap CEA201, câu 346",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Lịch sử & Thế hệ máy",
    "sourceId": 346
  },
  {
    "q": "What is the role of the registers in a processor?",
    "o": [
      "Registers in a processor provide fast, temporary storage for data and instructions, facilitating efficient access during instruction execution",
      "Registers are only used to store data temporarily during the execution of a program and do not contribute to the processing of instructions",
      "Registers are solely responsible for storing data from the main memory and have no involvement in holding instructions or facilitating data manipulation",
      "Registers are only necessary when the CPU is idle and have no impact on the speed or efficiency of instruction execution"
    ],
    "a": 0,
    "e": "Thanh ghi là bộ nhớ nhanh nhất, tạm thời, chứa cả dữ liệu lẫn lệnh đang dùng. B và C sai vì thu hẹp vai trò; D sai hoàn toàn.",
    "s": "On Tap CEA201, câu 358",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 358
  },
  {
    "q": "Performs the computer's data processing functions is __________?",
    "o": [
      "Arithmetic and logic unit (ALU)",
      "Control unit",
      "CPU interconnection",
      "Registers"
    ],
    "a": 0,
    "e": "Thành phần thực hiện chức năng xử lý dữ liệu là ALU (Arithmetic and Logic Unit). Control unit chỉ điều khiển, thanh ghi chỉ lưu tạm.",
    "s": "On Tap CEA201, câu 360",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 360
  },
  {
    "q": "The __________ gives a program access to the hardware resources and services available in a system through the user instruction set architecture supplemented with high-level language library calls.",
    "o": [
      "API",
      "ISA",
      "JCL",
      "ABI"
    ],
    "a": 0,
    "e": "API = user ISA cộng thêm các lời gọi thư viện ngôn ngữ bậc cao (HLL library calls). Dấu hiệu nhận dạng: cụm “high-level language library calls”.",
    "s": "On Tap CEA201, câu 411",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 411
  },
  {
    "q": "Which portion of a computer consists of an ALU, a control unit, and registers, uses for fetching and executing instructions?",
    "o": [
      "Main memory",
      "CPU",
      "I/O",
      "System interconnection"
    ],
    "a": 1,
    "e": "Đó chính là định nghĩa CPU: nơi nạp (fetch) và thực thi (execute) lệnh.",
    "s": "On Tap CEA201, câu 420",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 420
  },
  {
    "q": "Which of the following attributes do not belong to computer architecture?",
    "o": [
      "Number of bits used to represent data types",
      "The instruction set",
      "Interface between the computer and peripherals",
      "Techniques for addressing memory",
      "The memory technology used",
      "I/O mechanisms"
    ],
    "a": [
      2,
      4
    ],
    "e": "Câu hỏi ngược: chọn thứ không thuộc kiến trúc. Giao tiếp với ngoại vi và công nghệ bộ nhớ là thuộc tính tổ chức. A, B, D, F nằm đúng trong danh sách kiến trúc.",
    "s": "On Tap CEA201, câu 422",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 422
  },
  {
    "q": "Choose the appropriate words to fill in the corresponding blanks in the following definitions: __________ contains a word to be stored in memory or sent to the I/O unit, or is used to receive a word from memory or from the I/O unit. __________ specifies the address in memory of the word to be written from or read into the MBR. __________ is employed to hold temporarily the right hand instruction from a word in memory.",
    "o": [
      "MBR; MAR; IBR",
      "AC; MAR; IR",
      "MAR; MBR; IBR",
      "AC; MBR; MAR"
    ],
    "a": 0,
    "e": "Các thanh ghi của máy IAS: MBR chứa từ dữ liệu ghi vào/đọc ra bộ nhớ hoặc I/O; MAR chứa địa chỉ ô nhớ cần đọc/ghi qua MBR; IBR giữ tạm lệnh bên phải của một từ nhớ (mỗi từ chứa 2 lệnh).",
    "s": "On Tap CEA201, câu 423",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 423
  },
  {
    "q": "The stored-program concept means a computer could get its instructions by reading them from memory, and a program could be set or altered by setting the values of a portion of memory.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — đây là định nghĩa stored-program concept của von Neumann, nền tảng của mọi máy tính hiện đại.",
    "s": "On Tap CEA201, câu 424",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "von Neumann & IAS",
    "sourceId": 424
  },
  {
    "q": "What is the purpose of using an API?",
    "o": [
      "To enable application software to be ported easily to other systems that support the same API",
      "To define the repertoire of machine language instructions",
      "To standardize binary portability across programs",
      "To manage system resources"
    ],
    "a": 0,
    "e": "API cho phép phần mềm ứng dụng được chuyển (port) dễ dàng sang hệ thống khác hỗ trợ cùng API (tính khả chuyển ở mức mã nguồn). B là vai trò của ISA, C là của ABI.",
    "s": "On Tap CEA201, câu 433",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "ISA · ABI · API",
    "sourceId": 433
  },
  {
    "q": "Which of the following are the 4 basic functions of a computer?",
    "o": [
      "Data processing; Data storage; Data movement; CPU.",
      "CPU; Main memory; I/O; System interconnection.",
      "Control unit; ALU; Registers; CPU interconnection.",
      "Data processing; Data storage; Data movement; Control."
    ],
    "a": 3,
    "e": "Cẩn thận phân biệt: B là 4 thành phần cấu trúc của máy tính, C là 4 thành phần bên trong CPU, còn D mới là 4 chức năng.",
    "s": "On Tap CEA201, câu 443",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 443
  },
  {
    "q": "Which of the following are examples of architectural attributes in computer systems?",
    "o": [
      "Instruction set",
      "Control signals",
      "Memory technology",
      "Number of bits used for data types",
      "Interfaces between peripherals and the computer"
    ],
    "a": [
      0,
      3
    ],
    "e": "Danh sách thuộc tính kiến trúc trong sách gồm 4 mục: tập lệnh, số bit dùng biểu diễn các kiểu dữ liệu, cơ chế I/O, và kỹ thuật định địa chỉ bộ nhớ. B, C, E đều là thuộc tính tổ chức.",
    "s": "On Tap CEA201, câu 490",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Kiến trúc vs Tổ chức",
    "sourceId": 490
  },
  {
    "q": "A sequence of codes or instructions is called __________.",
    "o": [
      "software",
      "memory",
      "an interconnect",
      "a register"
    ],
    "a": 0,
    "e": "Một chuỗi mã/lệnh chính là phần mềm. Đây là ý mở đầu khái niệm “stored program”: thay vì đi dây lại phần cứng, ta chỉ cần cung cấp một chuỗi mã mới.",
    "s": "On Tap CEA201, câu 500",
    "chapter": "Chương 1: Khái niệm cơ bản & Lịch sử máy tính",
    "topic": "Cấu trúc & Chức năng",
    "sourceId": 500
  },
  {
    "q": "The use of multiple processors on the same chip is referred to as __________ and provides the potential to increase performance without increasing the clock rate.",
    "o": [
      "multicore",
      "GPU",
      "data channels",
      "MPC"
    ],
    "a": 0,
    "e": "Multicore = nhiều lõi xử lý trên cùng một chip. Đây là hướng tăng hiệu năng thay cho việc đẩy xung nhịp lên cao (vì xung cao ⇒ mật độ công suất và nhiệt tăng phi mã).",
    "s": "On Tap CEA201, câu 6",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đa lõi · MIC · GPU",
    "sourceId": 6
  },
  {
    "q": "Designers wrestle with the challenge of balancing processor performance with that of main memory and other computer components.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — đây là vấn đề performance balance: tốc độ CPU tăng nhanh hơn tốc độ bộ nhớ và I/O, nên nhà thiết kế phải liên tục cân bằng lại hệ thống.",
    "s": "On Tap CEA201, câu 87",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Cân bằng hiệu năng",
    "sourceId": 87
  },
  {
    "q": "The memory transfer rate has not kept up with increases in processor speed.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Dung lượng DRAM tăng mạnh nhưng tốc độ truyền của bộ nhớ tụt lại rất xa so với tốc độ CPU — khoảng cách này chính là lý do phải có cache, bus rộng hơn, bộ nhớ phân cấp.",
    "s": "On Tap CEA201, câu 137",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Cân bằng hiệu năng",
    "sourceId": 137
  },
  {
    "q": "Follow the Amdahl's law for multiprocessors, if only 10% of the code is inherently serial (f = 0.9), running the program on a multicore system with 4 processors, a performance gain (speedup factor) would be __________.",
    "o": [
      "307%",
      "297%",
      "317%",
      "327%"
    ],
    "a": 0,
    "e": "Công thức: Speedup = 1 / [(1−f) + f/N], với f là phần song song hoá được.\n= 1 / (0,1 + 0,9/4) = 1 / (0,1 + 0,225) = 1 / 0,325 ≈ 3,077 → 307%.",
    "s": "On Tap CEA201, câu 267",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Định luật Amdahl",
    "sourceId": 267
  },
  {
    "q": "The pulse rate in the ck system is known as the __________.",
    "o": [
      "ck cycle",
      "ck speed",
      "ck time",
      "ck tick"
    ],
    "a": 1,
    "e": "Clock speed / clock rate = tần số xung nhịp, đo bằng Hz (ví dụ 2 GHz). Đừng nhầm với clock cycle time τ = 1/f — là khoảng thời gian của một chu kỳ.",
    "s": "On Tap CEA201, câu 276",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đo hiệu năng",
    "sourceId": 276
  },
  {
    "q": "A benchmark program is running on a 400 MHz processor. The executed program consists of 500 instruction executions, with the following instruction mix and clock cycle count in Table below:\nInstruction type | Instruction count | Cycles per Instrucion\nArithmetic | 300 | 1\nData transfer | 100 | 2\nControl transfer | 100 | 2\nCalculate MIPS rate for this case.",
    "o": [
      "MIPS rate = 285.7",
      "MIPS rate = 275.7",
      "MIPS rate = 265.7",
      "MIPS rate = 295.7"
    ],
    "a": 0,
    "e": "Bước 1 — tính CPI trung bình: CPI = Σ(CPIᵢ × Iᵢ) / Iₜₒₜₐₗ = (300×1 + 100×2 + 100×2)/500 = 700/500 = 1,4.\nBước 2 — MIPS = f / (CPI × 10⁶) = 400×10⁶ / (1,4 × 10⁶) ≈ 285,7.",
    "s": "On Tap CEA201, câu 357",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đo hiệu năng",
    "sourceId": 357
  },
  {
    "q": "What is one way to control power density in microprocessor chips?",
    "o": [
      "Increase the clock speed of the chip.",
      "Use more of the chip area for cache memory.",
      "Reduce the size of the chip die.",
      "Use more transistors for logic operations."
    ],
    "a": 1,
    "e": "Bộ nhớ cache tiêu thụ ít điện hơn nhiều so với mạch logic, nên dành thêm diện tích chip cho cache là cách hạ mật độ công suất. Tăng xung nhịp hay thêm transistor logic thì làm điều ngược lại.",
    "s": "On Tap CEA201, câu 442",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đa lõi · MIC · GPU",
    "sourceId": 442
  },
  {
    "q": "What is a characteristic of Many Integrated Core (MIC) chips?",
    "o": [
      "They include only specialized cores for specific tasks.",
      "They consist of homogeneous general-purpose processors on a single chip.",
      "They are designed to eliminate the need for GPUs in high-performance applications.",
      "They have limited scalability beyond four cores per chip."
    ],
    "a": 1,
    "e": "MIC nhồi rất nhiều lõi đa dụng đồng nhất lên một chip (hàng chục tới hàng trăm lõi) cho HPC. Đối lập với GPGPU — gồm nhiều lõi chuyên dụng cho tính toán song song dữ liệu.",
    "s": "On Tap CEA201, câu 444",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đa lõi · MIC · GPU",
    "sourceId": 444
  },
  {
    "q": "Which of the following types of processors typically offer better performance for parallel processing?",
    "o": [
      "Single-core processors",
      "Multi-core processors",
      "Microelectronics",
      "Digital signal processors (DSPs)"
    ],
    "a": 1,
    "e": "Bộ xử lý đa lõi chạy song song nhiều luồng thật sự nên phù hợp nhất cho xử lý song song.",
    "s": "On Tap CEA201, câu 468",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đa lõi · MIC · GPU",
    "sourceId": 468
  },
  {
    "q": "Follow the Amdahl's law for multiprocessors, if only 20% of the code is inherently serial (f = 0.8), running the program on a multicore system with 8 processors, a performance gain (speedup factor) would be __________.",
    "o": [
      "333%",
      "303%",
      "313%",
      "323%"
    ],
    "a": 0,
    "e": "Speedup = 1 / (0,2 + 0,8/8) = 1 / (0,2 + 0,1) = 1/0,3 ≈ 3,33 → 333%.",
    "s": "On Tap CEA201, câu 469",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Định luật Amdahl",
    "sourceId": 469
  },
  {
    "q": "Choose an INCORRECT trend in contemporary processor designs.",
    "o": [
      "The number of processes accepted is infinitive.",
      "The number of integrated transistors is getting increasing and more larger.",
      "Higher clock frequency is applied.",
      "More cores are integrated in one chip."
    ],
    "a": 0,
    "e": "Đề hỏi xu hướng sai. Số tiến trình chạy được luôn bị giới hạn bởi bộ nhớ và tài nguyên — không thể “vô hạn”. B, C, D đều là xu hướng thật (định luật Moore, xung nhịp cao hơn, nhiều lõi hơn).",
    "s": "On Tap CEA201, câu 470",
    "chapter": "Chương 2: Các khái niệm về hiệu năng",
    "topic": "Đa lõi · MIC · GPU",
    "sourceId": 470
  },
  {
    "q": "The __________ cycle occurs at the beginning of each instruction cycle and causes an instruction to be fetched from memory.",
    "o": [
      "execute",
      "indirect",
      "fetch",
      "interrupt"
    ],
    "a": 2,
    "e": "Fetch cycle luôn mở đầu mỗi chu kỳ lệnh: CPU đọc lệnh từ bộ nhớ vào IR. Sau đó mới tới execute, và (nếu được bật) interrupt cycle ở cuối.",
    "s": "On Tap CEA201, câu 14",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 14
  },
  {
    "q": "Which one of the following CPU registers holds the address of the storage location being accessed?",
    "o": [
      "MAR (Memory address register)",
      "MBR (Memory Buffer Register)",
      "AC (Accumulator)",
      "IR (Instruction Register)"
    ],
    "a": 0,
    "e": "MAR giữ địa chỉ ô nhớ đang được truy cập. Cặp đôi luôn đi cùng: MAR ↔ đường địa chỉ, MBR ↔ đường dữ liệu.",
    "s": "On Tap CEA201, câu 24",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 24
  },
  {
    "q": "A bus that connects major computer components (processor, memory, I/O) is called a __________",
    "o": [
      "control bus",
      "system bus",
      "data bus",
      "address bus"
    ],
    "a": 1,
    "e": "System bus là bus nối các thành phần lớn; nó gồm 3 nhóm đường: data, address và control.",
    "s": "On Tap CEA201, câu 37",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 37
  },
  {
    "q": "The method of using the same lines for multiple purposes is known as time multiplexing.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Time multiplexing — ví dụ dùng chung một nhóm đường cho cả địa chỉ và dữ liệu ở hai thời điểm khác nhau ⇒ tiết kiệm số chân/đường, đổi lại mạch phức tạp và chậm hơn.",
    "s": "On Tap CEA201, câu 45",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 45
  },
  {
    "q": "The routine executed in response to an interrupt request is called __________ routine.",
    "o": [
      "Interrupt Service",
      "Interrupt acknowledge",
      "Serial interrupt",
      "Vectored interrupt",
      "Sub-routine"
    ],
    "a": 0,
    "e": "ISR — Interrupt Service Routine (trình phục vụ ngắt) là đoạn mã chạy để đáp ứng yêu cầu ngắt, thường nằm trong hệ điều hành.",
    "s": "On Tap CEA201, câu 48",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 48
  },
  {
    "q": "An I/O module must recognize one unique address for each peripheral it controls.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Mỗi ngoại vi do module I/O quản lý phải có một địa chỉ duy nhất để CPU gọi đúng thiết bị.",
    "s": "On Tap CEA201, câu 54",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Module I/O",
    "sourceId": 54
  },
  {
    "q": "The basic function of a computer is to execute programs.",
    "o": [
      "False",
      "True"
    ],
    "a": 1,
    "e": "Đúng — và chương trình là một tập lệnh nằm trong bộ nhớ.",
    "s": "On Tap CEA201, câu 55",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 55
  },
  {
    "q": "The data lines provide a path for moving data among system modules and are collectively called the __________.",
    "o": [
      "control bus",
      "system bus",
      "address bus",
      "data bus"
    ],
    "a": 3,
    "e": "Tập các đường dữ liệu gọi chung là data bus. Số đường của nó chính là độ rộng bus.",
    "s": "On Tap CEA201, câu 56",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 56
  },
  {
    "q": "The __________ determines the opcode and the operand specifiers.",
    "o": [
      "decode instruction",
      "fetch operands",
      "calculate operands",
      "execute instruction"
    ],
    "a": 0,
    "e": "Bước decode (instruction operation decoding) phân tích lệnh trong IR để xác định mã thao tác và các toán hạng cần dùng.",
    "s": "On Tap CEA201, câu 61",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 61
  },
  {
    "q": "A(n) __________ is generated by a failure such as power failure or memory parity error.",
    "o": [
      "timer interrupt",
      "hardware failure interrupt",
      "I/O interrupt",
      "program interrupt"
    ],
    "a": 1,
    "e": "Bốn lớp ngắt: program (lỗi do thực thi lệnh), timer (đồng hồ trong CPU), I/O (thiết bị báo xong hoặc lỗi), hardware failure (mất điện, lỗi parity bộ nhớ).",
    "s": "On Tap CEA201, câu 62",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 62
  },
  {
    "q": "The __________ holds the address of the next instruction to be fetched.",
    "o": [
      "MBR",
      "IR",
      "PC",
      "MAR"
    ],
    "a": 2,
    "e": "PC (Program Counter) giữ địa chỉ lệnh kế tiếp cần nạp, và tự tăng sau mỗi lần fetch.",
    "s": "On Tap CEA201, câu 66",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 66
  },
  {
    "q": "Interrupts do not improve processing efficiency.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Ngắt tăng hiệu suất rõ rệt: thay vì CPU đứng chờ thiết bị I/O chậm, nó làm việc khác và chỉ quay lại khi thiết bị báo xong.",
    "s": "On Tap CEA201, câu 69",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 69
  },
  {
    "q": "The System bus is made up of __________",
    "o": [
      "Control bus",
      "Address bus",
      "Both Control bus and Address bus",
      "Control bus, Data bus and Address bus",
      "Data bus"
    ],
    "a": 3,
    "e": "Ba thành phần: data bus (chuyển dữ liệu) + address bus (chỉ nguồn/đích) + control bus (tín hiệu điều khiển và định thời).",
    "s": "On Tap CEA201, câu 75",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 75
  },
  {
    "q": "The __________ contains the address of an instruction to be fetched.",
    "o": [
      "instruction register",
      "memory address register",
      "memory buffer register",
      "program counter"
    ],
    "a": 3,
    "e": "Vẫn là PC. Phân biệt nhanh: PC = địa chỉ lệnh sắp nạp; MAR = địa chỉ đang truy cập trên bus; IR = lệnh đang thực thi.",
    "s": "On Tap CEA201, câu 77",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 77
  },
  {
    "q": "A(n) __________ is generated by some condition that occurs as a result of an instruction exec",
    "o": [
      "timer interrupt",
      "I/O interrupt",
      "program interrupt",
      "hardware failure interrupt"
    ],
    "a": 2,
    "e": "Program interrupt sinh ra từ chính việc thực thi lệnh: tràn số học, chia cho 0, lệnh không hợp lệ, truy cập vùng nhớ cấm.",
    "s": "On Tap CEA201, câu 97",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 97
  },
  {
    "q": "During the __________ the opcode of the next instruction is loaded into the IR and the addres into the MAR.",
    "o": [
      "execute cycle",
      "fetch cycle",
      "instruction cycle",
      "clock cycle"
    ],
    "a": 1,
    "e": "Diễn biến fetch cycle: PC → MAR, bộ nhớ trả word → MBR → IR, đồng thời PC tăng lên trỏ lệnh kế tiếp.",
    "s": "On Tap CEA201, câu 106",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 106
  },
  {
    "q": "Interrupt processing allows an application program to be suspended in order that a variety of conditions can be serviced and later resumed.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — đó là bản chất của xử lý ngắt: tạm dừng → phục vụ → khôi phục, và chương trình bị ngắt không hề biết chuyện đó đã xảy ra.",
    "s": "On Tap CEA201, câu 109",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 109
  },
  {
    "q": "The __________ is connected to the data lines of the system bus.",
    "o": [
      "MAR",
      "PC",
      "MBR",
      "IR"
    ],
    "a": 2,
    "e": "MBR nối với đường dữ liệu. Học kèm cặp đối: MAR nối đường địa chỉ (câu tiếp theo).",
    "s": "On Tap CEA201, câu 112",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 112
  },
  {
    "q": "The interconnection structure must support which transfer?",
    "o": [
      "memory to processor",
      "processor to memory",
      "I/O to or from memory",
      "all of the above"
    ],
    "a": 3,
    "e": "Cấu trúc liên kết phải hỗ trợ tất cả: memory→processor, processor→memory, I/O→processor, processor→I/O, và I/O↔memory trực tiếp (DMA).",
    "s": "On Tap CEA201, câu 115",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 115
  },
  {
    "q": "The __________ are used to designate the source or destination of the data on the data bus.",
    "o": [
      "system lines",
      "data lines",
      "control lines",
      "address lines"
    ],
    "a": 3,
    "e": "Address lines chỉ ra nguồn/đích của dữ liệu đang nằm trên data bus. Độ rộng của nó quyết định dung lượng bộ nhớ tối đa hệ thống địa chỉ hoá được.",
    "s": "On Tap CEA201, câu 123",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 123
  },
  {
    "q": "Timing refers to the way in which events are coordinated on the bus.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Timing = cách phối hợp các sự kiện trên bus, chia làm hai kiểu: đồng bộ (synchronous) và bất đồng bộ (asynchronous).",
    "s": "On Tap CEA201, câu 133",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 133
  },
  {
    "q": "An interrupt is generated from software and it is provoked by the execution of an instruction.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai — mô tả này là của trap. Interrupt do phần cứng sinh ra.",
    "s": "On Tap CEA201, câu 136",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 136
  },
  {
    "q": "An I/O module cannot exchange data directly with the processor.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Module I/O trao đổi dữ liệu trực tiếp với CPU được — CPU đọc/ghi module I/O y như đọc/ghi bộ nhớ, chỉ khác là dùng địa chỉ thiết bị.",
    "s": "On Tap CEA201, câu 145",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Module I/O",
    "sourceId": 145
  },
  {
    "q": "The processor needs to store instructions and data temporarily while an instruction is being executed.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — đó chính là lý do tồn tại của các thanh ghi (MAR, MBR, PC, IR…) bên trong CPU.",
    "s": "On Tap CEA201, câu 149",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thành phần máy tính",
    "sourceId": 149
  },
  {
    "q": "When large volumes of data are to be moved, a more efficient technique is direct memory ac",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Với khối dữ liệu lớn, để CPU chuyển từng word là rất lãng phí; DMA cho phép module I/O trao đổi thẳng với bộ nhớ, CPU chỉ can thiệp lúc đầu và lúc cuối.",
    "s": "On Tap CEA201, câu 156",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Module I/O",
    "sourceId": 156
  },
  {
    "q": "The register that keeps the address of next instruction to be executed is __________.",
    "o": [
      "AC",
      "PC",
      "IR",
      "MBR",
      "MQ"
    ],
    "a": 1,
    "e": "PC. (AC = accumulator, MQ = multiplier-quotient — hai thanh ghi số học của máy IAS.)",
    "s": "On Tap CEA201, câu 162",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 162
  },
  {
    "q": "An interrupt is a hardware-generated signal to the processor.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng theo cách phân loại của sách: interrupt là tín hiệu do phần cứng sinh ra; còn tín hiệu do lệnh phần mềm gây ra thì gọi là trap.",
    "s": "On Tap CEA201, câu 171",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 171
  },
  {
    "q": "The __________ is connected to the address lines of the system bus.",
    "o": [
      "MBR",
      "MAR",
      "PC",
      "IR"
    ],
    "a": 1,
    "e": "MAR nối với đường địa chỉ của bus hệ thống.",
    "s": "On Tap CEA201, câu 177",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 177
  },
  {
    "q": "Program execution consists of repeating the process of instruction fetch and instruction execution",
    "o": [
      "False",
      "True"
    ],
    "a": 1,
    "e": "Đúng. Một chu kỳ lệnh (instruction cycle) = fetch + execute, và CPU lặp lại cho tới khi gặp lệnh dừng hoặc lỗi không khắc phục được.",
    "s": "On Tap CEA201, câu 180",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 180
  },
  {
    "q": "Instruction register stores__________",
    "o": [
      "Data of the current instruction",
      "Address of the next instruction",
      "Instruction which is currently executed",
      "Address of the current instruction"
    ],
    "a": 2,
    "e": "IR chứa chính lệnh đang được thực thi (đã nạp từ bộ nhớ vào), không phải địa chỉ của nó.",
    "s": "On Tap CEA201, câu 185",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 185
  },
  {
    "q": "With asynchronous timing the occurrence of events on the bus is determined by a clock.",
    "o": [
      "False",
      "True"
    ],
    "a": 0,
    "e": "Sai ⇒ chọn False. Có clock là đồng bộ; bất đồng bộ thì không có clock chung mà dùng cơ chế bắt tay.",
    "s": "On Tap CEA201, câu 187",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 187
  },
  {
    "q": "Because all devices on a synchronous bus are tied to a fixed clock rate, the system cannot take advantage of advances in device performance.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — đây là nhược điểm của bus đồng bộ: cả bus bị khoá theo một nhịp cố định, thiết bị nhanh cũng phải chờ theo nhịp chung. Bus bất đồng bộ thì mỗi thiết bị chạy hết tốc độ của nó.",
    "s": "On Tap CEA201, câu 210",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 210
  },
  {
    "q": "Which of the following determines the Bus Width?",
    "o": [
      "The clock speed of the CPU",
      "The number of cores in the processor",
      "The size of the motherboard",
      "The number of parallel lines in the data bus",
      "Number of components connected to Bus"
    ],
    "a": 3,
    "e": "Bus width = số đường song song của data bus (8, 16, 32, 64…). Bus càng rộng thì mỗi lần truyền được càng nhiều bit ⇒ hiệu năng cao hơn.",
    "s": "On Tap CEA201, câu 228",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 228
  },
  {
    "q": "The hardware mechanism that allows a device to notify the CPU is called __________ .",
    "o": [
      "polling",
      "interrupt",
      "driver",
      "controlling"
    ],
    "a": 1,
    "e": "Interrupt — thiết bị chủ động báo cho CPU. Ngược lại, polling là CPU phải liên tục đi hỏi từng thiết bị (tốn thời gian).",
    "s": "On Tap CEA201, câu 252",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 252
  },
  {
    "q": "What is the significance of the program counter (PC) in the fetch phase of the instruction cycle?",
    "o": [
      "The program counter (PC) is not used in the fetch phase, and its role is limited to tracking the number of instructions executed by the CPU",
      "The program counter (PC) in the fetch phase holds the memory address of the next instruction to be fetched and executed",
      "The program counter (PC) is responsible for executing instructions and has no specific role during the fetch phase",
      "The program counter (PC) is only relevant in multi-core processors and does not contribute to the fetch phase of the instruction cycle in single-core systems"
    ],
    "a": 1,
    "e": "PC là điểm khởi đầu của mỗi chu kỳ lệnh: nội dung PC được đưa ra MAR để đọc lệnh, rồi PC tự tăng.",
    "s": "On Tap CEA201, câu 269",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 269
  },
  {
    "q": "Which register is the memory address register?",
    "o": [
      "MAR",
      "MBR",
      "IR",
      "PC"
    ],
    "a": 0,
    "e": "MAR = Memory Address Register.",
    "s": "On Tap CEA201, câu 277",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 277
  },
  {
    "q": "What is the most important characteristic of the Synchronous Bus?",
    "o": [
      "Data is transmitted at the same time",
      "The occurrence of one event on a bus follows and depends on the occurrence of a previous event.",
      "The occurrence of events on the bus is determined by a clock",
      "No common clock signal controlling operation"
    ],
    "a": 2,
    "e": "Bus đồng bộ: mọi sự kiện diễn ra theo xung clock chung. B mô tả bus bất đồng bộ (sự kiện sau phụ thuộc sự kiện trước, dùng bắt tay handshaking).",
    "s": "On Tap CEA201, câu 280",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 280
  },
  {
    "q": "__________: Determine the address of the next instruction to be executed. Usually, this involves adding a fixed number to the address of the previous instruction.",
    "o": [
      "Instruction fetch",
      "Instruction operation decoding",
      "Instruction address calculation",
      "Operand fetch",
      "Operand address calculation"
    ],
    "a": 2,
    "e": "Instruction address calculation (iac) — thường chỉ là PC ← PC + độ dài lệnh. Đừng nhầm với operand address calculation (oac) ở câu kế tiếp.",
    "s": "On Tap CEA201, câu 294",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 294
  },
  {
    "q": "The PC, IR, MAR, MBR registers belong to which of the following groups?",
    "o": [
      "Control and Status Registers",
      "User-Visible Registers",
      "General Registers",
      "Handle Registers"
    ],
    "a": 0,
    "e": "PC, IR, MAR, MBR do CPU dùng để điều khiển hoạt động của chính nó ⇒ nhóm control and status registers. Nhóm còn lại — user-visible — là các thanh ghi lập trình viên trực tiếp dùng (data, address, general purpose).",
    "s": "On Tap CEA201, câu 310",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 310
  },
  {
    "q": "What is Memory Address Register (MAR)?",
    "o": [
      "Contains a word to be stored in memory or sent to the I/O unit, or is used to receive a word from memory or from the I/O unit.",
      "Employed to hold temporarily the righthand instruction from a word in memory.",
      "Contains the address in memory of the word to be written from or read into the MBR.",
      "Contains the address of the next instruction pair to be fetched from memory."
    ],
    "a": 2,
    "e": "C là định nghĩa MAR. Cảnh giác: A là MBR, B là IBR, D là PC — cả bốn đều là thanh ghi máy IAS.",
    "s": "On Tap CEA201, câu 322",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 322
  },
  {
    "q": "What is an interrupt vector?",
    "o": [
      "Part of memory which contains the addresses of interrupt handlers",
      "A signal an I/O device sends to CPU",
      "A signal an I/O software sends to CPU",
      "None of the mentioned"
    ],
    "a": 0,
    "e": "Interrupt vector / vector table là vùng nhớ chứa địa chỉ của các trình phục vụ ngắt. Nhờ nó CPU nhảy thẳng tới đúng ISR mà không phải dò tìm.",
    "s": "On Tap CEA201, câu 334",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 334
  },
  {
    "q": "__________: If the operation involves reference to an operand in memory or available via I/O, then determine the address of the operand.",
    "o": [
      "Operand fetch",
      "Data operation",
      "Operand store",
      "Operand address calculation"
    ],
    "a": 3,
    "e": "Operand address calculation (oac) — tính địa chỉ toán hạng, xảy ra khi lệnh tham chiếu dữ liệu trong bộ nhớ hoặc qua I/O.",
    "s": "On Tap CEA201, câu 335",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 335
  },
  {
    "q": "What is the primary purpose of the \"Fetch instruction\" phase in the operation of a processor?",
    "o": [
      "To read an instruction from memory",
      "To interpret the instruction",
      "To perform arithmetic operations on data",
      "To write data to memory"
    ],
    "a": 0,
    "e": "Fetch = đọc lệnh từ bộ nhớ vào CPU. B là bước interpret/decode, C là process data, D là write data.",
    "s": "On Tap CEA201, câu 340",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 340
  },
  {
    "q": "The instruction, which adds 1 to thevalue in a memory location, has five stages: fetch opcode (four cycles), fetch operand address (three cycles), fetch operand (three cycles), add 1 to operand (three cycles), and store operand (three cycles). An interrupt sends request at beginning of fetch operand stage. How many cycles does the processor enter the interrupt processing cycle?",
    "o": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "a": 3,
    "e": "Ngắt đến ở đầu fetch operand nên phần còn lại của lệnh là: 3 (fetch operand) + 3 (add 1) + 3 (store operand) = 9 chu kỳ ⇒ đáp án là D. 9.",
    "s": "On Tap CEA201, câu 347",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 347
  },
  {
    "q": "What is the function of the bus system in the computer?",
    "o": [
      "Extend the communication function of the computer",
      "Connect components in the computer",
      "Control peripherals",
      "Transform signals in the computer",
      "All of the mentioned"
    ],
    "a": 1,
    "e": "Chức năng cốt lõi của bus là kết nối các thành phần để chúng trao đổi dữ liệu. Bus là môi trường truyền dùng chung: nhiều thiết bị nối vào nhưng tại một thời điểm chỉ một thiết bị được phát.",
    "s": "On Tap CEA201, câu 348",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 348
  },
  {
    "q": "What are basic registers that help CPU establish a connection with an I/O device?",
    "o": [
      "I/OAR, I/OBR",
      "I/OAR, MAR",
      "I/OBR, MBR",
      "MAR, MBR"
    ],
    "a": 0,
    "e": "Giao tiếp CPU ↔ I/O dùng cặp I/OAR (I/O address register — chọn thiết bị) và I/OBR (I/O buffer register — trao đổi dữ liệu); tương tự như MAR/MBR là cặp dành cho bộ nhớ.",
    "s": "On Tap CEA201, câu 375",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thành phần máy tính",
    "sourceId": 375
  },
  {
    "q": "In the context of the basic instruction cycle, when the fifth instruction is executing, which of the following is the correct statement?",
    "o": [
      "The sixth instruction is fetched.",
      "The fifth instruction is fetched.",
      "The fourth instruction is fetched.",
      "All program's instructions are fetched."
    ],
    "a": 0,
    "e": "Trong chu kỳ lệnh cơ bản, lệnh được nạp từng lệnh một ngay trước khi thực thi — không nạp sẵn cả chương trình. Vì PC đã tăng trong lúc fetch lệnh 5, nên lệnh tiếp theo được nạp là lệnh 6.",
    "s": "On Tap CEA201, câu 376",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 376
  },
  {
    "q": "__________ can exchange data directly with the processor. Just as the processor can initiate a read or write with memory, designating the address of a specific location, the processor can also read data from or write data to __________.",
    "o": [
      "I/O module / Memory",
      "Interrupts / I/O module",
      "I/O module / Interrupts",
      "Interrupts / Interrupts",
      "Memory / I/O module"
    ],
    "a": 0,
    "e": "Cặp đúng là I/O module (trao đổi trực tiếp với CPU) và Memory (cách CPU đọc/ghi bộ nhớ làm hình mẫu so sánh).",
    "s": "On Tap CEA201, câu 379",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Module I/O",
    "sourceId": 379
  },
  {
    "q": "The routine executed in response to an interrupt request is called __________ routine.",
    "o": [
      "Vectored interrupt",
      "Sub-routine",
      "Serial interrupt",
      "Interrupt acknowledge",
      "Interrupt Service"
    ],
    "a": 4,
    "e": "Chương trình chạy để đáp ứng một yêu cầu ngắt gọi là interrupt service routine (ISR) — trình phục vụ ngắt, còn gọi là interrupt handler.",
    "s": "On Tap CEA201, câu 404",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 404
  },
  {
    "q": "What is the role of the memory address register (MAR) in a computer system?",
    "o": [
      "It holds data being transferred between memory and the processor.",
      "It specifies the address in memory for the next read or write operation.",
      "It performs arithmetic operations on data stored in memory.",
      "It stores program instructions after they are executed."
    ],
    "a": 1,
    "e": "MAR chỉ định địa chỉ cho thao tác đọc/ghi kế tiếp. A mô tả MBR.",
    "s": "On Tap CEA201, câu 425",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Thanh ghi",
    "sourceId": 425
  },
  {
    "q": "From a structural point of view, the external devices are controlled by __________.",
    "o": [
      "Control signals",
      "Peripheral device",
      "I/O modules",
      "Remote devices"
    ],
    "a": 2,
    "e": "Về mặt cấu trúc, thiết bị ngoài không nối thẳng vào bus mà được điều khiển qua module I/O — nơi xử lý khác biệt tốc độ, định dạng dữ liệu và tín hiệu điều khiển.",
    "s": "On Tap CEA201, câu 430",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Module I/O",
    "sourceId": 430
  },
  {
    "q": "Steps for executing a machine instruction are concerned, choose the correct statement which specifies the role of the fetching instruction step.",
    "o": [
      "The processor reads an instruction from memory (cache, main memory).",
      "The instruction is decoded to determine what action is required.",
      "The execution of an instruction may require performing some arithmetic or logical operation on data.",
      "The results of an execution may require writing data to memory or an I/O module."
    ],
    "a": 0,
    "e": "Bốn bước tổng quát: fetch instruction → interpret instruction → fetch data → process data → write data. A ứng với bước đầu tiên.",
    "s": "On Tap CEA201, câu 437",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 437
  },
  {
    "q": "The instruction, which adds 1 to the value in a memory location, has five stages: fetch opcode (2 bus cycles), fetch operand address (2 bus cycles), fetch operand (2 bus cycles), add 1 to operand (1 bus cycle), and store operand (3 bus cycles). An interrupt sends request at beginning of fetch operand address stage. How many cycles does the processor enter the interrupt processing cycle?",
    "o": [
      "6",
      "7",
      "8",
      "9",
      "5"
    ],
    "a": 2,
    "e": "Nguyên tắc: CPU kiểm tra ngắt ở cuối chu kỳ lệnh, tức phải hoàn tất lệnh đang chạy rồi mới vào interrupt cycle.\nNgắt đến ở đầu fetch operand address, nên còn phải chạy: 2 (fetch operand address) + 2 (fetch operand) + 1 (add) + 3 (store) = 8 chu kỳ.",
    "s": "On Tap CEA201, câu 445",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 445
  },
  {
    "q": "Which type of interrupt is exemplified by \"division by zero, attempt to execute an illegal machine instruction\"?",
    "o": [
      "Program",
      "Timer",
      "I/O",
      "Hardware failure"
    ],
    "a": 0,
    "e": "Chia cho 0 và lệnh máy bất hợp lệ đều phát sinh do thực thi lệnh ⇒ program interrupt.",
    "s": "On Tap CEA201, câu 446",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 446
  },
  {
    "q": "Which type is not an Interconnection bus?",
    "o": [
      "Data lines",
      "Control lines",
      "Signal lines",
      "Address lines"
    ],
    "a": 2,
    "e": "Chỉ có ba nhóm đường: data, address, control. “Signal lines” không phải một nhóm riêng ⇒ đáp án cần chọn.",
    "s": "On Tap CEA201, câu 447",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Bus & Liên kết",
    "sourceId": 447
  },
  {
    "q": "__________: Read instruction from its memory location into the processor.",
    "o": [
      "Instruction fetch",
      "Instruction operation decoding",
      "Operand address calculation",
      "Data operation"
    ],
    "a": 0,
    "e": "Đây là định nghĩa của bước instruction fetch (if) trong sơ đồ trạng thái chu kỳ lệnh.",
    "s": "On Tap CEA201, câu 454",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 454
  },
  {
    "q": "Steps for executing a machine instruction are concerned, choose the most suitable statement for the role of the interpret instruction step.",
    "o": [
      "The instruction is decoded to determine what action is required.",
      "The processor reads an instruction from memory (cache, main memory).",
      "The execution of an instruction may require performing some arithmetic or logical operation on data.",
      "The results of an execution may require writing data to memory or an I/O module."
    ],
    "a": 0,
    "e": "Interpret instruction = giải mã lệnh để biết cần làm hành động gì.",
    "s": "On Tap CEA201, câu 462",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 462
  },
  {
    "q": "Steps for executing a machine instruction are concerned, given an assembly code: ADD EAX, V. What step will access the variable V?",
    "o": [
      "The fetch data step.",
      "The fetch instruction step.",
      "The process data step.",
      "The interpret instruction step."
    ],
    "a": 0,
    "e": "V là toán hạng nằm trong bộ nhớ, nên nó được đọc ở bước fetch data (sau khi lệnh đã được nạp và giải mã), rồi mới cộng ở bước process data.",
    "s": "On Tap CEA201, câu 476",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Chu kỳ lệnh",
    "sourceId": 476
  },
  {
    "q": "When an interrupt is about to execute next, where is the Program Counter (PC) positioned?",
    "o": [
      "Add 1 to PC",
      "At the address of the last executed instruction",
      "Jump to random unknown position",
      "At the started address of an interrupt handler routine",
      "At the beginning of the memory address space"
    ],
    "a": 3,
    "e": "Trong interrupt cycle, CPU lưu ngữ cảnh hiện tại (PC cũ đẩy vào stack) rồi nạp vào PC địa chỉ bắt đầu của trình phục vụ ngắt, nên lệnh chạy tiếp theo là lệnh đầu tiên của ISR.",
    "s": "On Tap CEA201, câu 492",
    "chapter": "Chương 3: Chức năng & Liên kết ở mức cao",
    "topic": "Ngắt (Interrupt)",
    "sourceId": 492
  },
  {
    "q": "A __________ is an actual location in main memory.",
    "o": [
      "logical address",
      "partition address",
      "base address",
      "physical address"
    ],
    "a": 3,
    "e": "Physical address là vị trí thật trong bộ nhớ chính. Logical (virtual) address là địa chỉ chương trình nhìn thấy, phải qua MMU dịch sang địa chỉ vật lý.",
    "s": "On Tap CEA201, câu 3",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Địa chỉ cache",
    "sourceId": 3
  },
  {
    "q": "individual blocks or records have a unique address based on physical location with __________.",
    "o": [
      "associative",
      "physical access",
      "direct access",
      "sequential access"
    ],
    "a": 2,
    "e": "Direct access: mỗi block/record có địa chỉ riêng dựa trên vị trí vật lý; đầu đọc nhảy tới vùng lân cận rồi mới dò tuần tự. Đây là cách đĩa từ hoạt động.",
    "s": "On Tap CEA201, câu 4",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phương pháp truy cập",
    "sourceId": 4
  },
  {
    "q": "A line includes a __________ that identifies which particular block is currently being stored.",
    "o": [
      "cache",
      "hit",
      "tag",
      "locality"
    ],
    "a": 2,
    "e": "Cache chia thành line; mỗi line gồm dữ liệu của một block bộ nhớ chính cộng với một tag để biết block nào đang nằm ở đó.",
    "s": "On Tap CEA201, câu 7",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 7
  },
  {
    "q": "__________ is the simplest mapping technique and maps each block of main memory into only one possible cache line.",
    "o": [
      "Direct mapping",
      "Associative mapping",
      "Set associative mapping",
      "None of the above"
    ],
    "a": 0,
    "e": "Direct mapping: line = (số block) mod (số line). Đơn giản, rẻ, nhưng dễ bị “đá nhau” (thrashing) khi hai block hay dùng cùng ánh xạ về một line.",
    "s": "On Tap CEA201, câu 13",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 13
  },
  {
    "q": "The correspondence between the main memory blocks and those in the cache is specified by",
    "o": [
      "Segment function",
      "Hit rate",
      "Replacement algorithm",
      "Mapping function",
      "Miss penalty"
    ],
    "a": 3,
    "e": "Mapping function (hàm ánh xạ) quy định block nào của bộ nhớ chính được đưa vào line nào của cache. Ba kiểu: direct, associative, set-associative.",
    "s": "On Tap CEA201, câu 49",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 49
  },
  {
    "q": "The __________ consists of the access time plus any additional time required before a second commence.",
    "o": [
      "direct access",
      "transfer rate",
      "memory cycle time",
      "latency"
    ],
    "a": 2,
    "e": "Ba đại lượng hiệu năng: access time (thời gian truy cập), memory cycle time = access time + thời gian phục hồi trước khi truy cập kế tiếp, và transfer rate (tốc độ truyền).",
    "s": "On Tap CEA201, câu 57",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 57
  },
  {
    "q": "The performance of the cache memory is measured in terms of a quantity called __________",
    "o": [
      "Hit Ratio",
      "Instruction Ratio",
      "Miss Ratio",
      "Initialization Ratio",
      "Address Ratio"
    ],
    "a": 0,
    "e": "Hit ratio = số lần hit / tổng số lần truy cập. Hit ratio càng cao thì thời gian truy cập trung bình càng gần thời gian của cache.",
    "s": "On Tap CEA201, câu 58",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 58
  },
  {
    "q": "Internal memory capacity is typically expressed in terms of __________",
    "o": [
      "hertz",
      "nanos",
      "bytes",
      "LOR"
    ],
    "a": 2,
    "e": "Capacity của bộ nhớ trong tính bằng byte (hoặc word). Bộ nhớ ngoài thì tính bằng byte luôn. Hertz là đơn vị tần số, nano là đơn vị thời gian truy cập.",
    "s": "On Tap CEA201, câu 78",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 78
  },
  {
    "q": "In reference to access time to a two-level memory, a __________ occurs if an accessed word is found in the faster memory.",
    "o": [
      "miss",
      "hit",
      "line",
      "tag"
    ],
    "a": 1,
    "e": "Tìm thấy từ cần đọc trong bộ nhớ nhanh (cache) ⇒ hit. Không có ⇒ miss, phải đi lấy cả block từ bộ nhớ chính.",
    "s": "On Tap CEA201, câu 95",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 95
  },
  {
    "q": "The L1 cache is slower than the L3 cache.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai — ngược lại. Thứ tự tốc độ: L1 > L2 > L3; thứ tự dung lượng thì ngược: L3 > L2 > L1.",
    "s": "On Tap CEA201, câu 114",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Cache đa mức",
    "sourceId": 114
  },
  {
    "q": "Cache is not a form of internal memory.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Cache là bộ nhớ trong — nó nằm ngay trên chip CPU hoặc rất gần CPU. Bộ nhớ trong gồm: thanh ghi, cache, bộ nhớ chính.",
    "s": "On Tap CEA201, câu 117",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 117
  },
  {
    "q": "Within the processor there is a set of registers that function as a level of memory above main memory and cache in the hierarchy.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Đỉnh của kim tự tháp phân cấp là các thanh ghi trong CPU, rồi mới tới cache → bộ nhớ chính → đĩa → băng từ.",
    "s": "On Tap CEA201, câu 122",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 122
  },
  {
    "q": "When using __________ technique, all write operations are made to main memory as well as to the cache, ensuring that main memory is always valid.",
    "o": [
      "write back",
      "LRU",
      "write through",
      "unified cache"
    ],
    "a": 2,
    "e": "Write through giữ bộ nhớ chính luôn hợp lệ — an toàn cho hệ nhiều CPU/DMA, nhưng sinh nhiều lưu lượng ghi nên chậm hơn write back.",
    "s": "On Tap CEA201, câu 126",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Thay thế & ghi",
    "sourceId": 126
  },
  {
    "q": "For internal memory, the __________ is equal to the number of electrical lines into and out of the memory module.",
    "o": [
      "access time",
      "unit of transfer",
      "capacity",
      "memory ratio"
    ],
    "a": 1,
    "e": "Unit of transfer (đơn vị truyền) của bộ nhớ trong bằng đúng số đường điện ra/vào module nhớ — thường chính là độ dài word. Với bộ nhớ ngoài thì đơn vị truyền lớn hơn nhiều, gọi là block.",
    "s": "On Tap CEA201, câu 131",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 131
  },
  {
    "q": "In a volatile memory, information decays naturally or is lost when electrical power is switched",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng — đó là định nghĩa volatile (khả biến). RAM là volatile; ROM, flash, đĩa từ là nonvolatile.",
    "s": "On Tap CEA201, câu 174",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 174
  },
  {
    "q": "External memory is often equated with main memory.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai — bộ nhớ trong (internal memory) mới thường được đồng nhất với main memory. Bộ nhớ ngoài là đĩa cứng, SSD, băng từ… nối vào máy qua các module I/O.",
    "s": "On Tap CEA201, câu 175",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 175
  },
  {
    "q": "Cache memory enhances",
    "o": [
      "Memory capacity",
      "Memory access time",
      "Secondary storage capacity",
      "Secondary storage access time"
    ],
    "a": 1,
    "e": "Cache cải thiện thời gian truy cập bộ nhớ — mục tiêu là đạt tốc độ gần bằng bộ nhớ nhanh nhất trong khi vẫn có dung lượng của bộ nhớ rẻ nhất.",
    "s": "On Tap CEA201, câu 176",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 176
  },
  {
    "q": "Which of the following is an example of sequential access media?",
    "o": [
      "Main Memory",
      "CD",
      "Magnetic tape",
      "Cache memory",
      "Magnetic disk"
    ],
    "a": 2,
    "e": "Băng từ (magnetic tape) là ví dụ kinh điển của truy cập tuần tự. Đĩa từ là direct access, main memory là random access, cache là associative.",
    "s": "On Tap CEA201, câu 183",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phương pháp truy cập",
    "sourceId": 183
  },
  {
    "q": "Cache memory enhances",
    "o": [
      "Secondary storage access time",
      "Secondary storage capacity",
      "Memory capacity",
      "Memory access time"
    ],
    "a": 3,
    "e": "Cache giữ bản sao các khối hay dùng gần CPU nên rút ngắn thời gian truy cập bộ nhớ. Nó không làm tăng dung lượng bộ nhớ hay bộ nhớ phụ.",
    "s": "On Tap CEA201, câu 184",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 184
  },
  {
    "q": "\"Memory is organized into records and access must be made in a specific linear sequence\" is __________.",
    "o": [
      "sequential access",
      "direct access",
      "random access",
      "associative"
    ],
    "a": 0,
    "e": "Sequential access: dữ liệu tổ chức thành bản ghi, phải đi qua lần lượt ⇒ thời gian truy cập thay đổi rất nhiều tuỳ vị trí. Điển hình là băng từ.",
    "s": "On Tap CEA201, câu 189",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phương pháp truy cập",
    "sourceId": 189
  },
  {
    "q": "__________ refers to whether memory is internal or external to the computer.",
    "o": [
      "Location",
      "Access",
      "Hierarchy",
      "Tag"
    ],
    "a": 0,
    "e": "Danh sách đặc trưng của hệ thống nhớ mở đầu bằng Location (vị trí): bộ nhớ trong (thanh ghi, cache, main memory) hay bộ nhớ ngoài (đĩa, băng từ).",
    "s": "On Tap CEA201, câu 204",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Đặc trưng hệ thống nhớ",
    "sourceId": 204
  },
  {
    "q": "What is the correct order of memory access speed from fastest to slowest?",
    "o": [
      "Registers > Cache > RAM > SSD",
      "Cache > Registers > RAM > SSD",
      "Registers > Cache > SSD > RAM",
      "Cache > Registers > SSD > RAM",
      "All of the mentioned are wrong"
    ],
    "a": 0,
    "e": "Từ nhanh nhất xuống: thanh ghi → cache → RAM → SSD → HDD → băng từ. Đi xuống thì: chậm hơn, rẻ hơn trên mỗi bit, và dung lượng lớn hơn.",
    "s": "On Tap CEA201, câu 231",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 231
  },
  {
    "q": "What is the cache memory level that is integrated into the processor chip and has the lowest latency?",
    "o": [
      "L1 cache",
      "L2 cache",
      "L3 cache",
      "L4 cache"
    ],
    "a": 0,
    "e": "L1 nằm ngay trong lõi, độ trễ thấp nhất nhưng dung lượng nhỏ nhất. Càng ra xa (L2, L3) thì càng lớn và càng chậm.",
    "s": "On Tap CEA201, câu 232",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Cache đa mức",
    "sourceId": 232
  },
  {
    "q": "Consider a machine with a byte addressable main memory of 2^16 bytes and block size of 8 bytes. Assume that a direct mapped cache consisting of 32 lines is used with this machine. How many bits are there in the line field of the cache?",
    "o": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "a": 2,
    "e": "Với direct mapping, trường Line = log₂(số line).\n32 line ⇒ log₂32 = 5 bit.\n(Trường Word = log₂8 = 3 bit; Tag = 16 − 5 − 3 = 8 bit.)",
    "s": "On Tap CEA201, câu 234",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Tính toán cache",
    "sourceId": 234
  },
  {
    "q": "Which memory has the fastest speed and smallest capacity?",
    "o": [
      "Cache",
      "Main memory",
      "HDD",
      "Magnetic Disk"
    ],
    "a": 0,
    "e": "Trong bốn lựa chọn, cache nhanh nhất và dung lượng nhỏ nhất — đúng quy luật của phân cấp: càng nhanh thì càng đắt nên càng ít.",
    "s": "On Tap CEA201, câu 238",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 238
  },
  {
    "q": "Sort the following memory types in ascending order by access speed:",
    "o": [
      "HDD -Main Memory - L2 cache - L1 cache",
      "HDD - Main Memory - L1 cache - L2 cache",
      "HDD - L2 cache - L1 cache - Main Memory",
      "Main Memory - L2 cache - L1 cache - HDD"
    ],
    "a": 0,
    "e": "Sắp tăng dần theo tốc độ nên chậm nhất đứng đầu: HDD → bộ nhớ chính → L2 → L1.",
    "s": "On Tap CEA201, câu 240",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 240
  },
  {
    "q": "Which is the correct choice for sorting in increasing speed average of memory?",
    "o": [
      "SSD → Main Memory → Cache Memory → Magnetic Tape",
      "Magnetic Tape → SSD → Cache Memory → Main Memory",
      "Magnetic Disk → SSD → Cache Memory → Main Memory",
      "Magnetic Disk → Magnetic Tape → Main Memory → Cache Memory",
      "Magnetic Disk → SSD → Main Memory → Cache Memory"
    ],
    "a": 4,
    "e": "Tăng dần tốc độ: đĩa từ → SSD → bộ nhớ chính → cache. Hai bẫy thường gặp: đặt cache trước main memory (B, C) hoặc đặt băng từ nhanh hơn đĩa từ (D).",
    "s": "On Tap CEA201, câu 241",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 241
  },
  {
    "q": "Which cache is not a shared cache?",
    "o": [
      "L4 cache",
      "L3 cache",
      "L2 cache",
      "L1 cache"
    ],
    "a": 3,
    "e": "L1 là cache riêng của từng lõi (thường còn tách thành L1-I cho lệnh và L1-D cho dữ liệu). L3 (và L2 ở nhiều thiết kế) được các lõi dùng chung.",
    "s": "On Tap CEA201, câu 268",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Cache đa mức",
    "sourceId": 268
  },
  {
    "q": "Which of the following memory devices has the lowest access speed?",
    "o": [
      "ROM",
      "Flash memory",
      "Magnetic tape",
      "HDD",
      "Cache"
    ],
    "a": 2,
    "e": "Băng từ nằm đáy phân cấp: chậm nhất vì phải truy cập tuần tự, nhưng rẻ nhất trên mỗi bit nên vẫn dùng để sao lưu khối lượng lớn.",
    "s": "On Tap CEA201, câu 281",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 281
  },
  {
    "q": "What is the primary purpose of cache memory in a computer system?",
    "o": [
      "To store frequently used data for quick access",
      "To store the operating system",
      "To store user files and documents",
      "To store the CPU registers"
    ],
    "a": 0,
    "e": "Cache giữ dữ liệu/lệnh hay dùng để CPU lấy nhanh, dựa trên nguyên lý cục bộ tham chiếu (locality of reference): chương trình có xu hướng truy cập lặp lại một vùng nhớ nhỏ.",
    "s": "On Tap CEA201, câu 283",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 283
  },
  {
    "q": "A set-associative cache consists of 64 lines, divided into four-line sets. 2^19-words main memory contains 4K blocks of 128 words each. How many bits are there in the tag field of the cache?",
    "o": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "a": 3,
    "e": "Bước 1: số set = 64 line ÷ 4 line/set = 16 set ⇒ trường Set = log₂16 = 4 bit.\nBước 2: bộ nhớ có 4K = 2¹² block ⇒ số block cần 12 bit.\nBước 3: Tag = 12 − 4 = 8 bit. (Kiểm tra: Word = log₂128 = 7 bit; 8 + 4 + 7 = 19 ✓)",
    "s": "On Tap CEA201, câu 284",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Tính toán cache",
    "sourceId": 284
  },
  {
    "q": "Why is cache design used in high-performance computing (HPC)? (Choose three correct answers)",
    "o": [
      "Because there is a significant speed gap between the processor and the internal memory in HPC.",
      "Because applications in HPC often require a large bandwidth to support intensive data processing",
      "Because power consumption can be a significant operational cost in HPC environments.",
      "Because multiple processors are often working in parallel, caches provide a way to efficiently manage data required by these processors"
    ],
    "a": [
      0,
      1,
      3
    ],
    "e": "Ba lý do: khoảng cách tốc độ CPU–bộ nhớ (A), nhu cầu băng thông lớn (B), và nhiều bộ xử lý chạy song song cần quản lý dữ liệu hiệu quả (D). C (tiết kiệm điện) không phải lý do thiết kế cache.",
    "s": "On Tap CEA201, câu 285",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Cache đa mức",
    "sourceId": 285
  },
  {
    "q": "What is the most common mapping technique used in cache memory in modern computers?",
    "o": [
      "Direct Mapping",
      "Fully Associative",
      "Set Associative",
      "None of the mentioned"
    ],
    "a": 2,
    "e": "Set-associative là dung hoà tốt nhất: linh hoạt hơn direct mapping nhưng mạch so sánh rẻ hơn fully associative. CPU hiện đại dùng phổ biến kiểu 4-way, 8-way.",
    "s": "On Tap CEA201, câu 318",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 318
  },
  {
    "q": "What is the special feature of Memory Cache?",
    "o": [
      "Allows faster access than DRAM memory",
      "Memory cache is outboard storage memory",
      "Allows faster access than CPU registers",
      "Fixed memory - Read Only Memory",
      "Has a larger capacity than HDD"
    ],
    "a": 0,
    "e": "Cache nhanh hơn DRAM (bộ nhớ chính), nhưng vẫn chậm hơn thanh ghi.",
    "s": "On Tap CEA201, câu 326",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 326
  },
  {
    "q": "In the direct mapping method from 256MB main memory with 512KB cache, what is the number of bits for the TAG element in the address?",
    "o": [
      "6",
      "7",
      "8",
      "9"
    ],
    "a": 3,
    "e": "Với direct mapping: Tag = (số bit địa chỉ) − (số bit của dung lượng cache), vì Line + Word cộng lại đúng bằng số bit địa chỉ hoá cache.\n256 MB = 2²⁸ ⇒ 28 bit; 512 KB = 2¹⁹ ⇒ 19 bit.\nTag = 28 − 19 = 9 bit.",
    "s": "On Tap CEA201, câu 327",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Tính toán cache",
    "sourceId": 327
  },
  {
    "q": "What is the benefit of cache memory in terms of computer performance?",
    "o": [
      "It reduces the computer’s power consumption.",
      "It speeds up data access and improves system performance.",
      "It increases the storage capacity of the computer.",
      "It serves as a backup storage for critical files."
    ],
    "a": 1,
    "e": "Cache rút ngắn thời gian truy cập dữ liệu. Nó không làm tăng dung lượng lưu trữ và cũng không phải bộ nhớ sao lưu.",
    "s": "On Tap CEA201, câu 362",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Nguyên lý cache",
    "sourceId": 362
  },
  {
    "q": "Which method of accessing units of data is used to copy a block in main memory into cache memory?",
    "o": [
      "Direct access",
      "Random access",
      "Sequential access",
      "Associative"
    ],
    "a": 3,
    "e": "Associative access: từ được tìm theo một phần nội dung (so khớp tag) chứ không theo địa chỉ, và mọi ô được so sánh đồng thời. Cache dùng kiểu truy cập này.",
    "s": "On Tap CEA201, câu 363",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phương pháp truy cập",
    "sourceId": 363
  },
  {
    "q": "Which of the following algorithms is not typically used in cache memory replacement?",
    "o": [
      "Least Recently Used (LRU)",
      "First-In-First-Out (FIFO)",
      "Least Frequently Used (LFU)",
      "Round Robin (RR)"
    ],
    "a": 3,
    "e": "Bốn thuật toán thay thế cache trong sách: LRU (hiệu quả nhất, dùng phổ biến), FIFO, LFU và Random. Round Robin là thuật toán lập lịch CPU, không phải thay thế cache.",
    "s": "On Tap CEA201, câu 364",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Thay thế & ghi",
    "sourceId": 364
  },
  {
    "q": "In modern computers, which devices among the memory types usually have the smallest capacity?",
    "o": [
      "RAM",
      "Magnetic Tape",
      "Hard Disk Drive",
      "Cache Memory"
    ],
    "a": 3,
    "e": "Cache chỉ vài chục KB tới vài chục MB, nhỏ hơn RAM (GB) và đĩa (TB) rất nhiều.",
    "s": "On Tap CEA201, câu 365",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phân cấp bộ nhớ",
    "sourceId": 365
  },
  {
    "q": "What methods can be used to access units of data in memory?",
    "o": [
      "Indirect access, Direct access, Random access, Associative",
      "Sequential access, Indirect access, Random access, Associative",
      "Sequential access, Direct access, Random access, Associative",
      "Sequential access, Direct access, Random access, Indirect access"
    ],
    "a": 2,
    "e": "Bốn phương pháp truy cập: Sequential (tuần tự — băng từ), Direct (trực tiếp — đĩa), Random (ngẫu nhiên — RAM), Associative (liên kết — cache). Không có “indirect access”.",
    "s": "On Tap CEA201, câu 377",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Phương pháp truy cập",
    "sourceId": 377
  },
  {
    "q": "In one-cache system using direct mapping technique, with the cache containing 10 lines, which memory block’s data can be transfered to the cache line 7?",
    "o": [
      "7, 17, 27, 37. .....",
      "0, 1, 2, 3, 4, 5, 6, 7, ...",
      "0, 7, 17, 27, 37, ...",
      "0, 7, 77, 777, ..."
    ],
    "a": 0,
    "e": "Direct mapping: line = block mod số_line. Với 10 line thì line 7 nhận các block có số dư 7 khi chia 10: 7, 17, 27, 37…",
    "s": "On Tap CEA201, câu 378",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 378
  },
  {
    "q": "A two-way set-associative cache has lines of 16 bytes and a total size of 8 Kbytes. The 64-Mbyte main memory is byte addressable. What are the values of Tag, Set and Byte offset fields?",
    "o": [
      "14/8/4",
      "16/6/4",
      "12/10/4",
      "15/7/4",
      "13/9/4"
    ],
    "a": 0,
    "e": "Làm tuần tự bốn bước:\n① Địa chỉ: 64 MB = 2²⁶ ⇒ 26 bit.\n② Byte offset: line 16 byte = 2⁴ ⇒ 4 bit.\n③ Số line = 8 KB ÷ 16 B = 512; 2-way ⇒ số set = 512 ÷ 2 = 256 = 2⁸ ⇒ Set = 8 bit.\n④ Tag = 26 − 8 − 4 = 14 bit.",
    "s": "On Tap CEA201, câu 426",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Tính toán cache",
    "sourceId": 426
  },
  {
    "q": "Which kind of cache mapping maps each block of main memory into one unique line of the cache?",
    "o": [
      "Direct mapping",
      "Set associative mapping",
      "Fully associative mapping",
      "Direct access"
    ],
    "a": 0,
    "e": "“Một block → đúng một line duy nhất” là đặc trưng của direct mapping. Fully associative thì block vào được bất kỳ line nào.",
    "s": "On Tap CEA201, câu 448",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 448
  },
  {
    "q": "If the address received when accessing the cache memory includes Tag, Line, Word. At that time, what mapping technique is the system using?",
    "o": [
      "Direct mapping",
      "Set-direct mapping",
      "Associative mapping",
      "Set-associative mapping"
    ],
    "a": 0,
    "e": "Cấu trúc địa chỉ là chỉ dấu nhận dạng nhanh: Tag + Line + Word ⇒ direct; Tag + Set + Word ⇒ set-associative; Tag + Word ⇒ fully associative.",
    "s": "On Tap CEA201, câu 449",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Ánh xạ cache",
    "sourceId": 449
  },
  {
    "q": "In modern processors, why is cache memory typically organized into multiple levels, such as L1, L2, and L3 caches?",
    "o": [
      "To balance the trade-off between speed and size by having different cache levels",
      "To conserve chip area by reducing the cache size and increasing the memory size",
      "To provide redundancy in case of cache failures",
      "To improve cache coherence in multi-processor systems"
    ],
    "a": 0,
    "e": "Cache đa mức là cách cân bằng giữa tốc độ và dung lượng: L1 nhỏ-cực nhanh bắt phần lớn truy cập, L2/L3 lớn hơn-chậm hơn hứng những gì L1 trượt, nhờ đó vẫn tránh được việc phải xuống tận bộ nhớ chính.",
    "s": "On Tap CEA201, câu 471",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Cache đa mức",
    "sourceId": 471
  },
  {
    "q": "How many techniques are there for dealing with an update to a cache line? What are their names?",
    "o": [
      "There are 2 techniques and their names are written through, write back",
      "There are 3 techniques and their names are written through, write back, and write allocate",
      "There is only one technique and its name is \"write not allocate\"",
      "There are 4 techniques and their names are written through, write back, write allocate, write not allocate"
    ],
    "a": 0,
    "e": "Hai chính sách ghi: write through (ghi đồng thời cache + bộ nhớ chính) và write back (chỉ ghi cache, đánh dấu bit dirty, ghi xuống khi line bị thay thế).",
    "s": "On Tap CEA201, câu 480",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Thay thế & ghi",
    "sourceId": 480
  },
  {
    "q": "A two-way set-associative cache has lines of 16 bytes and a total size of 8 Kbytes. The 64-Mbyte main memory is byte addressable. How many bits are there in the set field of the cache?",
    "o": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "a": 3,
    "e": "Số line = 8 KB / 16 B = 2^13 / 2^4 = 2^9 = 512 line. Two-way ⇒ số set = 512 / 2 = 256 = 2^8 ⇒ trường set có 8 bit. (Địa chỉ 26 bit = tag 14 + set 8 + word 4.)",
    "s": "On Tap CEA201, câu 493",
    "chapter": "Chương 4: Bộ nhớ Cache",
    "topic": "Tính toán cache",
    "sourceId": 493
  },
  {
    "q": "Which properties do all semiconductor memory cells share?",
    "o": [
      "they exhibit two stable states which can be used to represent binary 1 and 0",
      "they are capable of being written into to set the state",
      "they are capable of being read to sense the state",
      "all of the above"
    ],
    "a": 3,
    "e": "Mọi ô nhớ bán dẫn đều có đủ 3 tính chất: hai trạng thái ổn định (biểu diễn 0/1), ghi được để đặt trạng thái, và đọc được để cảm nhận trạng thái.",
    "s": "On Tap CEA201, câu 10",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Ô nhớ bán dẫn",
    "sourceId": 10
  },
  {
    "q": "A number of chips can be grouped together to form a memory bank.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Ghép nhiều chip lại thành memory bank (thanh RAM) để tăng độ rộng word hoặc tăng dung lượng — đây chính là cách một module nhớ được lắp ráp.",
    "s": "On Tap CEA201, câu 15",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 15
  },
  {
    "q": "All DRAMs require a refresh operation.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Mọi DRAM đều cần refresh vì điện tích trên tụ tự rò hết chỉ sau vài mili-giây.",
    "s": "On Tap CEA201, câu 59",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 59
  },
  {
    "q": "Which of the following memory types are nonvolatile?",
    "o": [
      "erasable PROM",
      "programmable ROM",
      "flash memory",
      "all of the above"
    ],
    "a": 3,
    "e": "Cả họ ROM đều nonvolatile: ROM → PROM (ghi một lần) → EPROM (xoá bằng tia cực tím) → EEPROM (xoá bằng điện, theo byte) → Flash (xoá bằng điện, theo khối).",
    "s": "On Tap CEA201, câu 64",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Họ ROM",
    "sourceId": 64
  },
  {
    "q": "The basic element of a semiconductor memory is the memory cell.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Memory cell là phần tử cơ bản; mỗi cell lưu đúng một bit.",
    "s": "On Tap CEA201, câu 80",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Ô nhớ bán dẫn",
    "sourceId": 80
  },
  {
    "q": "RAM must be provided with a constant power supply.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. RAM (cả SRAM lẫn DRAM) là bộ nhớ khả biến: ngắt điện là dữ liệu biến mất.",
    "s": "On Tap CEA201, câu 90",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 90
  },
  {
    "q": "A characteristic of ROM is that it is volatile.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai — ROM là nonvolatile (bất biến): mất điện vẫn giữ nguyên dữ liệu. Đó là lý do ROM/flash dùng để chứa firmware và BIOS.",
    "s": "On Tap CEA201, câu 91",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Họ ROM",
    "sourceId": 91
  },
  {
    "q": "The SSDs now on the market use a type of semiconductor memory referred to as flash memory",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. SSD hiện nay dùng flash NAND — nonvolatile, không có bộ phận cơ khí nên nhanh và bền hơn đĩa từ.",
    "s": "On Tap CEA201, câu 102",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Flash & DDR",
    "sourceId": 102
  },
  {
    "q": "A computer has memory of 256k words, how many bits are required to specify the address p",
    "o": [
      "16 bits",
      "12 bits",
      "8 bits",
      "18 bits",
      "10 bits"
    ],
    "a": 3,
    "e": "256K = 256 × 1024 = 2⁸ × 2¹⁰ = 2¹⁸ ⇒ cần 18 bit địa chỉ. Quy tắc chung: dung lượng 2ⁿ ô ⇒ n bit địa chỉ.",
    "s": "On Tap CEA201, câu 118",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 118
  },
  {
    "q": "One distinguishing characteristic of memory that is designated as __________ is that it is possible to read data from the memory and to write new data into the memory easily and rapidly.",
    "o": [
      "RAM",
      "ROM",
      "EPROM",
      "EEPROM"
    ],
    "a": 0,
    "e": "RAM đọc và ghi đều dễ và nhanh (bằng tín hiệu điện, ghi tại chỗ). Tên “random access” thực ra hơi gây hiểu lầm — ROM cũng truy cập ngẫu nhiên; điểm phân biệt thật sự là ghi được dễ dàng và khả biến.",
    "s": "On Tap CEA201, câu 121",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 121
  },
  {
    "q": "An error-correcting code enhances the reliability of the memory at the cost of added complexity.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. ECC tăng độ tin cậy nhưng phải trả giá bằng bit dư thừa và mạch mã hoá/giải mã phức tạp hơn.",
    "s": "On Tap CEA201, câu 129",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 129
  },
  {
    "q": "Semiconductor memory comes in packaged chips.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Bộ nhớ bán dẫn được đóng thành chip; mỗi chip chứa một mảng ô nhớ cùng mạch giải mã địa chỉ và mạch đọc/ghi.",
    "s": "On Tap CEA201, câu 157",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 157
  },
  {
    "q": "A static RAM will hold its data as long as power is supplied to it.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. SRAM giữ dữ liệu chừng nào còn cấp điện — không cần refresh, nhưng mất điện là mất dữ liệu (vẫn là volatile).",
    "s": "On Tap CEA201, câu 163",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 163
  },
  {
    "q": "The two traditional forms of RAM used in computers are DRAM and SRAM.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng: DRAM (động — tụ điện) và SRAM (tĩnh — flip-flop).",
    "s": "On Tap CEA201, câu 191",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 191
  },
  {
    "q": "A __________ contains a permanent pattern of data that cannot be changed, is nonvolatile, and cannot have new data written into it.",
    "o": [
      "RAM",
      "SRAM",
      "ROM",
      "flash memory"
    ],
    "a": 2,
    "e": "ROM chứa mẫu dữ liệu cố định, ghi ngay lúc sản xuất, không xoá/ghi lại được. Flash thì xoá-ghi lại được nên không khớp mô tả.",
    "s": "On Tap CEA201, câu 208",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Họ ROM",
    "sourceId": 208
  },
  {
    "q": "In a __________, binary values are stored using traditional flip-flop logic-gate configurations.",
    "o": [
      "ROM",
      "SRAM",
      "DRAM",
      "RAM"
    ],
    "a": 1,
    "e": "SRAM dùng flip-flop (thường 6 transistor) nên không cần refresh, nhanh hơn nhưng to và đắt hơn DRAM ⇒ dùng làm cache.",
    "s": "On Tap CEA201, câu 219",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 219
  },
  {
    "q": "With __________ the microchip is organized so that a section of memory cells are erased in a single action.",
    "o": [
      "flash memory",
      "SDRAM",
      "DRAM",
      "EEPROM"
    ],
    "a": 0,
    "e": "Tên “flash” đến từ chính đặc điểm này: xoá cả một khối ô nhớ trong một thao tác (“in a flash”), nhanh hơn EEPROM vốn xoá từng byte.",
    "s": "On Tap CEA201, câu 221",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Họ ROM",
    "sourceId": 221
  },
  {
    "q": "What is the main idea of using Hamming code for error correction?",
    "o": [
      "Adding extra parity bits to the data bits such that the number of 1s in each subset of bits is even",
      "Adding extra parity bits to the data bits such that the number of 1s in each subset of bits is odd",
      "Adding extra parity bits to the data bits such that the parity bits form a binary number indicating the position of the error bit",
      "Adding extra parity bits to the data bits such that the parity bits form a binary number indicating the number of error bits"
    ],
    "a": 2,
    "e": "Ý tưởng cốt lõi: các bit kiểm tra ghép lại thành syndrome — một số nhị phân chỉ đúng vị trí bit bị lỗi. Syndrome = 0 nghĩa là không lỗi; syndrome = 5 nghĩa là bit ở vị trí 5 sai, chỉ việc lật nó lại.",
    "s": "On Tap CEA201, câu 236",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 236
  },
  {
    "q": "What are the key differences in the architecture of NOR and NAND flash memory?",
    "o": [
      "NOR flash memory cells are connected in series, while NAND flash memory cells are connected in parallel",
      "NOR flash memory cells are connected in parallel, while NAND flash memory cells are connected in series",
      "Both NOR and NAND flash memory cells are connected in series",
      "Both NOR and NAND flash memory cells are connected in parallel",
      "All of the mentioned are wrong"
    ],
    "a": 1,
    "e": "NOR: các ô mắc song song ⇒ đọc ngẫu nhiên nhanh theo từng byte, hợp để chứa mã lệnh (firmware). NAND: các ô mắc nối tiếp ⇒ mật độ cao, rẻ, đọc/ghi theo khối, hợp để lưu trữ dữ liệu (USB, SSD, thẻ nhớ).",
    "s": "On Tap CEA201, câu 237",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Flash & DDR",
    "sourceId": 237
  },
  {
    "q": "Using Hamming Code with one error corection to store an 12-bit word in memory, the stored word 111001001101 consists of 8 bits data and 4 bit bits parity check. What are the parity bits?",
    "o": [
      "0110",
      "0111",
      "1110",
      "0101",
      "None of the mentioned"
    ],
    "a": 3,
    "e": "Đánh số bit từ phải sang trái, vị trí 12 → 1: 111001001101. Theo cách bố trí của Stallings, bit kiểm tra nằm ở các vị trí lũy thừa của 2 là 8, 4, 2, 1, còn 8 bit dữ liệu nằm ở 12, 11, 10, 9, 7, 6, 5, 3.\nVị trí 8 = 0, 4 = 1, 2 = 0, 1 = 1 ⇒ C8 C4 C2 C1 = 0101.",
    "s": "On Tap CEA201, câu 287",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 287
  },
  {
    "q": "What is the maximum addressable memory of a 32-bit microprocessor with 24-bit address?",
    "o": [
      "16 GB",
      "16 MB",
      "16 Gbits",
      "16 Mbits"
    ],
    "a": 1,
    "e": "Dung lượng địa chỉ hoá được do số đường địa chỉ quyết định, không phải do “32-bit” của bộ xử lý (đó là độ rộng dữ liệu). 2²⁴ byte = 16 MB.",
    "s": "On Tap CEA201, câu 324",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 324
  },
  {
    "q": "A byte addressable microprocessor has 24 bit address. What is maximum memory capacity?",
    "o": [
      "4 MegaByte",
      "8 MegaByte",
      "16 MegaByte",
      "32 MegaByte"
    ],
    "a": 2,
    "e": "2²⁴ = 16.777.216 ô, mỗi ô 1 byte ⇒ 16 MB.",
    "s": "On Tap CEA201, câu 328",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 328
  },
  {
    "q": "In error correcting code (single ECC), how many bits are used to correct one bit in 8-bit data?",
    "o": [
      "4.",
      "5",
      "6",
      "7"
    ],
    "a": 0,
    "e": "Công thức phải thuộc: 2^K ≥ M + K + 1 (M = số bit dữ liệu, K = số bit kiểm tra).\nK = 4 → 16 ≥ 8 + 4 + 1 = 13 ✓\nK = 3 → 8 ≥ 8 + 3 + 1 = 12 ✗\n⇒ cần 4 bit.",
    "s": "On Tap CEA201, câu 329",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 329
  },
  {
    "q": "Which one of the following is an invalid about RAM?",
    "o": [
      "Both static and dynamic RAMs are volatile; that is, power must be continuously supplied to the memory to preserve the bit values.",
      "A dynamic memory cell is simpler and smaller than a static memory cell.",
      "Both static and dynamic RAMs requires the supporting refresh circuitry",
      "SRAMs are somewhat faster than DRAMs"
    ],
    "a": 2,
    "e": "Câu sai là C: chỉ DRAM mới cần mạch refresh, SRAM thì không. A, B, D đều đúng.",
    "s": "On Tap CEA201, câu 349",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 349
  },
  {
    "q": "The data word that was read from memory 001001001011110.Show data stored in memory",
    "o": [
      "101 0010 1001",
      "001 0010 1110",
      "101 0010 1011",
      "001 0010 1011"
    ],
    "a": 3,
    "e": "Từ 15 bit = 11 bit dữ liệu + 4 bit kiểm tra. Viết các vị trí từ trái sang là b15 → b1; bit kiểm tra nằm ở các vị trí luỹ thừa 2 (1, 2, 4, 8), còn lại là dữ liệu.\n① Tính syndrome bằng cách kiểm tra chẵn lẻ 4 nhóm C1, C2, C4, C8 → syndrome = 0000 ⇒ không có lỗi.\n② Gom các bit ở vị trí 15, 14, 13, 12, 11, 10, 9, 7, 6, 5, 3 → 001 0010 1011.",
    "s": "On Tap CEA201, câu 388",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 388
  },
  {
    "q": "How many check bits are needed if the Hamming error correction code is used to detect single bit errors in a 2030-bit data?",
    "o": [
      "11",
      "10",
      "12",
      "9"
    ],
    "a": 0,
    "e": "M = 2030:\nK = 10 → 1024 ≥ 2041 ✗\nK = 11 → 2048 ≥ 2042 ✓\n⇒ 11 bit.",
    "s": "On Tap CEA201, câu 397",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 397
  },
  {
    "q": "Given the 11-bit data word 001 0010 1010, generate the corresponding 15-bit Hamming code word.",
    "o": [
      "001 0010 01011011",
      "001 0010 01011001",
      "001 0010 01010101",
      "001 0010 01101001"
    ],
    "a": 1,
    "e": "11 bit dữ liệu đặt vào các vị trí không phải lũy thừa của 2 (15…1), bit kiểm tra ở vị trí 8, 4, 2, 1. Các bit dữ liệu bằng 1 nằm ở vị trí 13, 10, 7, 5.\nXOR các vị trí đó: 1101 ⊕ 1010 ⊕ 0111 ⊕ 0101 = 0101 ⇒ C8 = 0, C4 = 1, C2 = 0, C1 = 1.\nTừ mã (vị trí 15 → 1): 001 0010 0101 1001 = 001 0010 01011001.",
    "s": "On Tap CEA201, câu 399",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 399
  },
  {
    "q": "Semiconductor memory comes in packaged chips.",
    "o": [
      "False",
      "True"
    ],
    "a": 1,
    "e": "Đúng. Bộ nhớ bán dẫn được bán dưới dạng chip đóng gói; mỗi chip chứa một mảng ô nhớ cùng các chân địa chỉ, dữ liệu, điều khiển.",
    "s": "On Tap CEA201, câu 401",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 401
  },
  {
    "q": "How many parity check bits must be included with the data word to achieve single error correction when the data word contains 1023 bits?",
    "o": [
      "10",
      "11",
      "12",
      "9"
    ],
    "a": 1,
    "e": "Áp dụng 2^K ≥ M + K + 1 với M = 1023:\nK = 10 → 1024 ≥ 1034 ✗ (thiếu sát nút!)\nK = 11 → 2048 ≥ 1035 ✓\n⇒ 11 bit. Đừng vội chọn 10 chỉ vì 1023 ≈ 2¹⁰.",
    "s": "On Tap CEA201, câu 409",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 409
  },
  {
    "q": "How many parity check bits must be included with the data word to achieve single error correction when the data word contains 2048 bits?",
    "o": [
      "9",
      "10",
      "12",
      "11"
    ],
    "a": 2,
    "e": "M = 2048:\nK = 11 → 2048 ≥ 2048 + 11 + 1 = 2060 ✗\nK = 12 → 4096 ≥ 2061 ✓\n⇒ 12 bit.",
    "s": "On Tap CEA201, câu 412",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 412
  },
  {
    "q": "For the data 10110101100, calculated check bits?",
    "o": [
      "0101",
      "0011",
      "1100",
      "1010"
    ],
    "a": 0,
    "e": "11 bit dữ liệu (D1 ở bên phải) đặt vào các vị trí 15…3 không phải lũy thừa của 2. Các bit bằng 1 rơi vào vị trí 15, 13, 12, 10, 7, 6.\nXOR các vị trí: 1111 ⊕ 1101 ⊕ 1100 ⊕ 1010 ⊕ 0111 ⊕ 0110 = 0101 ⇒ C8 C4 C2 C1 = 0101.",
    "s": "On Tap CEA201, câu 418",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 418
  },
  {
    "q": "How many check bits are needed for a Hamming error correction code to detect single-error correction in a 1 KByte data word?",
    "o": [
      "11 bits",
      "12 bits",
      "13 bits",
      "14 bits",
      "15 bits"
    ],
    "a": 3,
    "e": "1 KByte = 1024 × 8 = 8192 bit.\nK = 13 → 8192 ≥ 8192 + 13 + 1 = 8206 ✗\nK = 14 → 16384 ≥ 8207 ✓\n⇒ 14 bit.",
    "s": "On Tap CEA201, câu 427",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 427
  },
  {
    "q": "Using Hamming Code with one error correction to store a 12-bit word in memory, the stored word 101001011101 consists of 8 bits data and 4 bits parity check. What are the data bits?",
    "o": [
      "01001101",
      "10100100",
      "10101011",
      "01011101",
      "None of the mentioned"
    ],
    "a": 2,
    "e": "Đánh số từ phải sang trái (vị trí 12 → 1): 1 0 1 0 0 1 0 1 1 1 0 1. Bit kiểm tra ở vị trí 8, 4, 2, 1; dữ liệu ở 12, 11, 10, 9, 7, 6, 5, 3 ⇒ 1010 1011.\n(Tính lại thì bit kiểm tra phải là 0111, còn từ lưu có 0101 ⇒ syndrome = 0010 = vị trí 2 — lỗi nằm ở chính bit kiểm tra C2, dữ liệu vẫn đúng.)",
    "s": "On Tap CEA201, câu 428",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Mã sửa lỗi Hamming",
    "sourceId": 428
  },
  {
    "q": "What is the key advantage of double-data-rate SDRAM compared to standard SDRAM?",
    "o": [
      "It has a larger memory capacity.",
      "It can send data twice per clock cycle.",
      "It uses less power than SDRAM.",
      "It is only compatible with desktop computers."
    ],
    "a": 1,
    "e": "DDR truyền dữ liệu ở cả sườn lên và sườn xuống của xung nhịp ⇒ gấp đôi băng thông so với SDRAM thường mà không cần tăng tần số clock.",
    "s": "On Tap CEA201, câu 450",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Flash & DDR",
    "sourceId": 450
  },
  {
    "q": "In terms of organization, what is the basic element of semiconductor memory?",
    "o": [
      "Memory capacity",
      "Memory block",
      "Memory cell",
      "Memory location"
    ],
    "a": 2,
    "e": "Về mặt tổ chức, đơn vị nhỏ nhất là memory cell — có chân select, chân control (đọc/ghi) và chân data in/out.",
    "s": "On Tap CEA201, câu 472",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Ô nhớ bán dẫn",
    "sourceId": 472
  },
  {
    "q": "EEPROM is read-mostly-memory and volatile",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai một nửa nên cả câu sai. EEPROM đúng là read-mostly memory (đọc nhiều, ghi ít và ghi rất chậm) nhưng nó nonvolatile.",
    "s": "On Tap CEA201, câu 475",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Họ ROM",
    "sourceId": 475
  },
  {
    "q": "__________ is made with cells that store data as charge on capacitors.",
    "o": [
      "SRAM",
      "DRAM",
      "RDRAM",
      "CDRAM"
    ],
    "a": 1,
    "e": "DRAM lưu bit dưới dạng điện tích trên tụ. Tụ rò điện nên phải làm tươi (refresh) định kỳ — đó là lý do có chữ “dynamic”.",
    "s": "On Tap CEA201, câu 479",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "RAM · DRAM · SRAM",
    "sourceId": 479
  },
  {
    "q": "A EPROM has 20 address lines and 8 bit data lines, what is maximum memory capacity of this chip?",
    "o": [
      "1 Mbits",
      "2 Mbits",
      "4 Mbits",
      "8 Mbits",
      "16 Mbits"
    ],
    "a": 3,
    "e": "Dung lượng = 2^(số đường địa chỉ) × (số đường dữ liệu).\n= 2²⁰ × 8 bit = 1M × 8 bit = 8 Mbit (tức 1 MByte).",
    "s": "On Tap CEA201, câu 481",
    "chapter": "Chương 5: Bộ nhớ trong",
    "topic": "Tổ chức chip nhớ",
    "sourceId": 481
  },
  {
    "q": "Data are transferred to and from the disk in __________.",
    "o": [
      "tracks",
      "gaps",
      "sectors",
      "pits"
    ],
    "a": 2,
    "e": "Mỗi track chia thành nhiều sector; dữ liệu được đọc/ghi theo đơn vị sector. Gap là khoảng trống ngăn cách giữa các track/sector; pit là vết lõm trên đĩa quang.",
    "s": "On Tap CEA201, câu 16",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 16
  },
  {
    "q": "RAID level 0 is not a true member of the RAID family because it does not include redundancy to improve performance.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng, câu này lấy nguyên văn từ sách. RAID 0 chỉ phân dải (striping) dữ liệu qua nhiều đĩa để tăng tốc, không có dư thừa nên không chịu được hỏng đĩa.",
    "s": "On Tap CEA201, câu 20",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 20
  },
  {
    "q": "Consider a magnetic disk drive with 4 surfaces, 512 tracks per surface, and 32 sectors per track. If the sector size is 512 byte. What is the disk capacity?",
    "o": [
      "32 MB",
      "512 KB",
      "64 KB",
      "16 GB",
      "64 MB"
    ],
    "a": 0,
    "e": "Dung lượng = số mặt × track/mặt × sector/track × byte/sector = 4 × 512 × 32 × 512 = 2^2·2^9·2^5·2^9 = 2^25 byte = 32 MB.",
    "s": "On Tap CEA201, câu 29",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 29
  },
  {
    "q": "Because data are striped in very small strips, RAID 3 cannot achieve very high data transfer",
    "o": [
      "False",
      "True"
    ],
    "a": 0,
    "e": "Sai. Chính vì dữ liệu được chia thành dải rất nhỏ nên mọi đĩa cùng tham gia một lần truyền ⇒ RAID 3 đạt tốc độ truyền dữ liệu rất cao (nhưng mỗi lúc chỉ phục vụ một yêu cầu I/O).",
    "s": "On Tap CEA201, câu 35",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 35
  },
  {
    "q": "__________ is when the disk rotates more slowly for accesses near the outer edge than for those near the center.",
    "o": [
      "Seek time",
      "Magnetoresistive",
      "Constant angular velocity (CAV)",
      "Constant linear velocity (CLV)"
    ],
    "a": 3,
    "e": "CLV (constant linear velocity): đĩa quay chậm dần khi đầu đọc ra mép ngoài để tốc độ dài dưới đầu đọc không đổi (dùng ở CD, DVD). CAV thì giữ tốc độ góc không đổi.",
    "s": "On Tap CEA201, câu 50",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 50
  },
  {
    "q": "A __________ disk is permanently mounted in the disk drive, such as the hard disk in a pers",
    "o": [
      "removable",
      "double sided",
      "nonremovable",
      "movable-head"
    ],
    "a": 2,
    "e": "Nonremovable disk được gắn cố định trong ổ, ví dụ ổ cứng của máy tính cá nhân. Removable disk tháo ra lắp vào được.",
    "s": "On Tap CEA201, câu 63",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 63
  },
  {
    "q": "__________ is the standardized scheme for multiple-disk database design.",
    "o": [
      "RAID",
      "CAV",
      "CLV",
      "SSD"
    ],
    "a": 0,
    "e": "RAID (Redundant Array of Independent Disks) là sơ đồ chuẩn hoá cho thiết kế nhiều đĩa, gồm các mức 0–6. CAV/CLV là cách quay đĩa, SSD là ổ bán dẫn.",
    "s": "On Tap CEA201, câu 86",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 86
  },
  {
    "q": "What is the purpose of RAID system?",
    "o": [
      "It increases the processor speed",
      "It increases the disk storage capacity",
      "It increases the disk storage capacity and availability",
      "It increases operating system efficiency",
      "It decreases operating system efficiency"
    ],
    "a": 2,
    "e": "RAID ghép nhiều đĩa để tăng dung lượng (và hiệu năng), đồng thời dùng thông tin dư thừa (mirror, parity) để tăng tính sẵn sàng khi có đĩa hỏng.",
    "s": "On Tap CEA201, câu 98",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 98
  },
  {
    "q": "Scanning information at the same rate by rotating the disk at a fixed speed is known as the __________",
    "o": [
      "constant angular velocity",
      "magnetoresistive",
      "rotational delay",
      "constant linear velocity"
    ],
    "a": 0,
    "e": "CAV (constant angular velocity): đĩa quay với tốc độ góc không đổi, nên thông tin được quét cùng một tốc độ ở mọi track. CLV thì đổi tốc độ quay theo vị trí đầu đọc.",
    "s": "On Tap CEA201, câu 116",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 116
  },
  {
    "q": "In most contemporary systems fixed-length sectors are used, with __________ bytes being the nearly universal sector size.",
    "o": [
      "64",
      "128",
      "256",
      "512"
    ],
    "a": 3,
    "e": "Hầu hết hệ thống hiện nay dùng sector độ dài cố định, và 512 byte gần như là kích thước chuẩn chung.",
    "s": "On Tap CEA201, câu 135",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 135
  },
  {
    "q": "A __________ is a high-definition video disk that can store 25 Gbytes on a single layer on a single side.",
    "o": [
      "DVD",
      "DVD-R",
      "DVD-RW",
      "Blu-ray DVD"
    ],
    "a": 3,
    "e": "Blu-ray DVD dùng laser xanh tím 405 nm nên mật độ cao hơn DVD: 25 GB cho một lớp, một mặt.",
    "s": "On Tap CEA201, câu 139",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Bộ nhớ quang",
    "sourceId": 139
  },
  {
    "q": "The sum of the seek time and the rotational delay equals the __________, which is the time it takes to get into position to read or write.",
    "o": [
      "access time",
      "gap time",
      "transfer time",
      "constant angular velocity"
    ],
    "a": 0,
    "e": "Access time = seek time + rotational delay: thời gian để đầu đọc tới đúng track và sector cần đọc/ghi. Transfer time là thời gian truyền dữ liệu, tính sau khi đã vào vị trí.",
    "s": "On Tap CEA201, câu 144",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 144
  },
  {
    "q": "Magnetic disks are the foundation of external memory on virtually all computer systems.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Đĩa từ là nền tảng của bộ nhớ ngoài trên hầu hết mọi hệ thống máy tính.",
    "s": "On Tap CEA201, câu 159",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 159
  },
  {
    "q": "When the magnetizable coating is applied to both sides of the platter the disk is then referred",
    "o": [
      "multiple sided",
      "substrate",
      "double sided",
      "all of the above"
    ],
    "a": 2,
    "e": "Phủ lớp từ tính lên cả hai mặt của platter thì gọi là đĩa double sided; phủ một mặt là single sided.",
    "s": "On Tap CEA201, câu 166",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 166
  },
  {
    "q": "There are typically hundreds of sectors per track and they may be either fixed or variable length",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng, câu này lấy từ sách. Mỗi track thường có hàng trăm sector, và sector có thể dài cố định hoặc thay đổi (hiện nay hầu hết dùng loại cố định 512 byte).",
    "s": "On Tap CEA201, câu 172",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 172
  },
  {
    "q": "The set of all the tracks in the same relative position on the platter is referred to as a __________",
    "o": [
      "cylinder",
      "floppy disk",
      "single-sided disk",
      "sector"
    ],
    "a": 0,
    "e": "Cylinder: tập các track ở cùng vị trí tương đối trên mọi platter (mọi mặt đĩa). Đầu đọc của các mặt di chuyển cùng nhau nên đọc hết một cylinder mà không phải seek.",
    "s": "On Tap CEA201, câu 186",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 186
  },
  {
    "q": "The disadvantage of __________ is that the amount of data that can be stored on the long outer tracks is the same as what can be stored on the short inner tracks.",
    "o": [
      "CAV",
      "SSD",
      "ROM",
      "CLV"
    ],
    "a": 0,
    "e": "Với CAV, mọi track có cùng số bit (mật độ track ngoài thưa hơn) nên track ngoài dài mà vẫn chứa lượng dữ liệu bằng track trong ngắn — lãng phí dung lượng. Vì thế đĩa hiện đại dùng multiple zone recording.",
    "s": "On Tap CEA201, câu 190",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 190
  },
  {
    "q": "Adjacent tracks are separated by __________.",
    "o": [
      "sectors",
      "gaps",
      "pits",
      "heads"
    ],
    "a": 1,
    "e": "Các track kề nhau được ngăn bằng khoảng trống (gap), giúp tránh lỗi do lệch đầu đọc hay nhiễu từ trường. Các sector trong một track cũng cách nhau bằng gap.",
    "s": "On Tap CEA201, câu 217",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 217
  },
  {
    "q": "__________ is a set of physical disk drives viewed by the operating system as a single logical drive.",
    "o": [
      "CLV",
      "SSD",
      "RAID",
      "CAV"
    ],
    "a": 2,
    "e": "RAID: một tập ổ đĩa vật lý mà HĐH nhìn như một ổ logic duy nhất; dữ liệu được phân dải qua các đĩa, kèm thông tin dư thừa để khôi phục.",
    "s": "On Tap CEA201, câu 239",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 239
  },
  {
    "q": "How many bytes of data does each sector in the Winchester hard drive disk have?",
    "o": [
      "128 bytes",
      "256 bytes",
      "512 bytes",
      "1024 bytes",
      "4096 bytes"
    ],
    "a": 2,
    "e": "Ổ cứng Winchester dùng sector cố định 512 byte — kích thước gần như chuẩn chung của đĩa cứng.",
    "s": "On Tap CEA201, câu 286",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 286
  },
  {
    "q": "What is correct about increasing performance and endurance?",
    "o": [
      "Hard Disk- DRAM - NAND Flash - SRAM",
      "Hard Disk - NAND Flash - DRAM - SRAM",
      "NAND Flash - Hard Disk - SRAM - DRAM",
      "Hard Disk - DRAM - NAND Flash - SRAM"
    ],
    "a": 1,
    "e": "Xếp theo hiệu năng và độ bền tăng dần: Hard Disk → NAND Flash → DRAM → SRAM. Flash nhanh hơn đĩa từ nhưng chậm và mau mòn hơn DRAM; SRAM nhanh nhất.",
    "s": "On Tap CEA201, câu 288",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "SSD",
    "sourceId": 288
  },
  {
    "q": "With the hard disk data layout, the set of all the tracks in the same relative position on the platter, is called __________.",
    "o": [
      "Cylinder",
      "Tracks",
      "Inter-track gap",
      "Sector"
    ],
    "a": 0,
    "e": "Tập các track ở cùng vị trí tương đối trên mọi platter gọi là cylinder.",
    "s": "On Tap CEA201, câu 289",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "Đĩa từ",
    "sourceId": 289
  },
  {
    "q": "Consider a 5-drive, 200 GBytes-per-drive RAID array. What is the available data storage capacity for each of the RAID levels 5?",
    "o": [
      "200 GBytes",
      "400 GBytes",
      "600 GBytes",
      "800 GBytes",
      "None of the mentioned"
    ],
    "a": 3,
    "e": "RAID 5 dành dung lượng tương đương một đĩa cho parity (phân tán trên mọi đĩa) ⇒ dung lượng dùng được = (N − 1) × dung lượng mỗi đĩa = (5 − 1) × 200 = 800 GB.",
    "s": "On Tap CEA201, câu 290",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 290
  },
  {
    "q": "What is incorrect about SSDs have the following advantages over HDDs?",
    "o": [
      "Higher access times and latency rates: Over 10 times slower than the HDD.",
      "Durability: Less susceptible to physical shock and vibration.",
      "Longer lifespan: SSDs are not susceptible to mechanical wear.",
      "Lower power consumption: SSDs use considerably less power than comparable-size HDDs.",
      "Quieter and cooler running capabilities: Less space required, lower energy costs, and a greener enterprise."
    ],
    "a": 0,
    "e": "Câu sai là A: SSD có thời gian truy cập và độ trễ thấp hơn HDD rất nhiều (nhanh hơn hơn 10 lần), không phải chậm hơn. Các ý còn lại đều là ưu điểm thật của SSD.",
    "s": "On Tap CEA201, câu 291",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "SSD",
    "sourceId": 291
  },
  {
    "q": "Which RAID level uses striping technique with a minimum of 3 disks and provides fault tolerance through the use of parity bit?",
    "o": [
      "RAID 0",
      "RAID 1",
      "RAID 2",
      "RAID 3"
    ],
    "a": 3,
    "e": "RAID 3: phân dải dữ liệu thành dải rất nhỏ trên các đĩa dữ liệu và dùng một đĩa parity ⇒ tối thiểu 3 đĩa, chịu được một đĩa hỏng. RAID 0 không có dư thừa, RAID 1 là mirror, RAID 2 dùng mã Hamming.",
    "s": "On Tap CEA201, câu 330",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 330
  },
  {
    "q": "In terms of performance, what is the main advantage of a solid state drive over a magnetic disk?",
    "o": [
      "A solid state drive has faster access time, lower latency, and higher reliability",
      "A solid state drive has larger capacity, lower power consumption, and lower cost",
      "A solid state drive has better compatibility, longer lifespan, and higher security",
      "A solid state drive has none of the mentioned advantages over a magnetic disk"
    ],
    "a": 0,
    "e": "Không có bộ phận cơ khí nên SSD truy cập nhanh hơn, độ trễ thấp hơn và bền hơn. SSD thường đắt hơn và dung lượng không lớn hơn HDD cùng giá, nên B sai.",
    "s": "On Tap CEA201, câu 331",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "SSD",
    "sourceId": 331
  },
  {
    "q": "The speed of data delivery is your main concern when configuring a RAID drive for a Media Streaming Server. This server has two hard disks installed. What type of RAID should you install, and what type of data will be stored on Disk 1 and Disk 2?",
    "o": [
      "RAID 0 - Disk 1 (Stripe) and Disk 2 (Stripe)",
      "RAID 0 - Disk 1 (Mirror) and Disk 2 (Mirror)",
      "RAID 1 - Disk 1 (Stripe) and Disk 2 (Stripe)",
      "RAID 1 - Disk 1 (Mirror) and Disk 2 (Mirror)"
    ],
    "a": 0,
    "e": "Ưu tiên tốc độ ⇒ RAID 0: dữ liệu được phân dải (stripe) qua cả hai đĩa, đọc/ghi song song nên nhanh gấp đôi. RAID 1 (mirror) chỉ tăng độ an toàn chứ không tăng tốc ghi.",
    "s": "On Tap CEA201, câu 350",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 350
  },
  {
    "q": "A 6 drive, 320GB-per-drive RAID array. What is the available data storage capacity for each of the RAID levels 5?",
    "o": [
      "960 GB",
      "1920 GB",
      "1600 GB",
      "1280 GB"
    ],
    "a": 2,
    "e": "RAID 5 mất dung lượng tương đương một đĩa cho parity ⇒ (6 − 1) × 320 = 1600 GB.",
    "s": "On Tap CEA201, câu 387",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 387
  },
  {
    "q": "What is the purpose of RAID system?",
    "o": [
      "It increases the processor speed",
      "It increases operating system efficiency",
      "It decreases operating system efficiency",
      "It increases the disk storage capacity and availability",
      "It increases the disk storage capacity"
    ],
    "a": 3,
    "e": "RAID ghép nhiều đĩa để tăng dung lượng và dùng dư thừa (mirror/parity) để tăng tính sẵn sàng. Chỉ tăng dung lượng (E) là chưa đủ.",
    "s": "On Tap CEA201, câu 389",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 389
  },
  {
    "q": "Consider the RAID array, 250GB each. Need 1000 GB storage data memory. How many drives for each RAID level 3?",
    "o": [
      "5",
      "3",
      "6",
      "4"
    ],
    "a": 0,
    "e": "Cần 1000 / 250 = 4 đĩa dữ liệu; RAID 3 thêm 1 đĩa parity ⇒ tổng cộng 5 đĩa.",
    "s": "On Tap CEA201, câu 416",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 416
  },
  {
    "q": "In terms of data storage, what is the main distinction between a solid state drive and a magnetic disk?",
    "o": [
      "A magnetic disk uses a spinning platter and a read/write head, while a solid state drive uses flash memory chips",
      "A magnetic disk uses flash memory chips, while a solid state drive uses a spinning platter and a read/write head",
      "A magnetic disk and a solid state drive both use flash memory chips, but with different interfaces",
      "A magnetic disk and a solid state drive both use a spinning platter and a read/write head, but with different speeds"
    ],
    "a": 0,
    "e": "Đĩa từ lưu dữ liệu trên platter quay, đọc/ghi bằng đầu từ; SSD lưu trên chip nhớ flash NAND, không có bộ phận chuyển động.",
    "s": "On Tap CEA201, câu 429",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "SSD",
    "sourceId": 429
  },
  {
    "q": "Which of the following issues are peculiar to SSDs compared to HDDs?",
    "o": [
      "Performance slows down as the device is used.",
      "A certain number of writes make the flash memory unusable.",
      "They are more vulnerable to physical damage.",
      "They require defragmentation to maintain performance.",
      "They are slower at data retrieval compared to HDDs."
    ],
    "a": [
      0,
      1
    ],
    "e": "Hai vấn đề riêng của SSD mà HDD không gặp: hiệu năng giảm dần khi dùng (phải đọc–xoá–ghi cả khối) và flash hỏng sau một số lần ghi nhất định. SSD bền hơn trước va đập, không cần chống phân mảnh và đọc nhanh hơn HDD.",
    "s": "On Tap CEA201, câu 451",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "SSD",
    "sourceId": 451
  },
  {
    "q": "Which is incorrect about RAID?",
    "o": [
      "RAID is a set of physical disk drives viewed by the operating system as a single logical drive.",
      "Data are distributed across the physical drives of an array in a scheme known as striping, described subsequently.",
      "RAID is only used for Windows OS",
      "Redundant disk capacity is used to store parity information, which guarantees data recoverability in case of a disk failure."
    ],
    "a": 2,
    "e": "Câu sai là C: RAID không phụ thuộc hệ điều hành — Linux, Windows hay bộ điều khiển phần cứng đều hiện thực được. A, B, D là ba đặc điểm chung của RAID mà sách nêu.",
    "s": "On Tap CEA201, câu 473",
    "chapter": "Chương 6: Bộ nhớ ngoài",
    "topic": "RAID",
    "sourceId": 473
  },
  {
    "q": "The I/O function includes a __________ requirement to coordinate the flow of traffic between internal resources and external devices.",
    "o": [
      "cycle",
      "status reporting",
      "control and timing",
      "data"
    ],
    "a": 2,
    "e": "Chức năng đầu tiên của module I/O là control and timing — điều phối luồng dữ liệu giữa tài nguyên bên trong (bộ nhớ, bus) và thiết bị bên ngoài. Các chức năng còn lại: giao tiếp với CPU, giao tiếp với thiết bị, đệm dữ liệu, phát hiện lỗi.",
    "s": "On Tap CEA201, câu 8",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Module I/O",
    "sourceId": 8
  },
  {
    "q": "Cycle stealing is/are used in which concept?",
    "o": [
      "Programmed I/O",
      "DMA",
      "Interrupts",
      "Memory mapped I/O",
      "All of the above"
    ],
    "a": 1,
    "e": "DMA mượn bus trong một chu kỳ để chuyển một từ dữ liệu, CPU phải tạm dừng dùng bus trong chu kỳ đó — gọi là cycle stealing.",
    "s": "On Tap CEA201, câu 12",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "DMA",
    "sourceId": 12
  },
  {
    "q": "With isolated I/O there is a single address space for memory locations and I/O devices.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Dùng chung một không gian địa chỉ cho bộ nhớ và thiết bị I/O là memory-mapped I/O. Isolated I/O tách riêng không gian địa chỉ I/O và cần lệnh I/O riêng.",
    "s": "On Tap CEA201, câu 17",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Địa chỉ I/O",
    "sourceId": 17
  },
  {
    "q": "I/O channels are commonly seen on microcomputers, whereas I/O controllers are used on m",
    "o": [
      "False",
      "True"
    ],
    "a": 0,
    "e": "Sai, câu này đảo ngược hai khái niệm. I/O controller phổ biến trên máy vi tính; I/O channel (bộ xử lý I/O có tập lệnh riêng) dùng trên máy mainframe.",
    "s": "On Tap CEA201, câu 60",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Kênh I/O",
    "sourceId": 60
  },
  {
    "q": "Because the 82C55A is programmable via the control register, it can be used to control variety of simple peripheral devices.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Intel 82C55A là module I/O đa năng, lập trình được qua thanh ghi điều khiển nên điều khiển được nhiều loại ngoại vi đơn giản (bàn phím, màn hình…).",
    "s": "On Tap CEA201, câu 71",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Module I/O",
    "sourceId": 71
  },
  {
    "q": "The most common means of computer/user interaction is a __________.",
    "o": [
      "keyboard/monitor",
      "mouse/printer",
      "modem/printer",
      "monitor/printer"
    ],
    "a": 0,
    "e": "Phương tiện giao tiếp người – máy phổ biến nhất là cặp bàn phím/màn hình: người dùng gõ vào bàn phím, máy hiển thị ra màn hình.",
    "s": "On Tap CEA201, câu 88",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Thiết bị ngoại vi",
    "sourceId": 88
  },
  {
    "q": "The disadvantage of the software poll is that it is time consuming.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Software poll: khi có ngắt, CPU lần lượt hỏi từng module I/O xem ai gây ngắt — đơn giản nhưng tốn thời gian. Daisy chain và bus arbitration nhanh hơn.",
    "s": "On Tap CEA201, câu 120",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O bằng ngắt",
    "sourceId": 120
  },
  {
    "q": "The __________ command is used to activate a peripheral and tell it what to do.",
    "o": [
      "control",
      "test",
      "read",
      "write"
    ],
    "a": 0,
    "e": "Bốn loại lệnh I/O: control (kích hoạt ngoại vi và bảo nó làm gì), test (kiểm tra trạng thái), read, write.",
    "s": "On Tap CEA201, câu 124",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O lập trình",
    "sourceId": 124
  },
  {
    "q": "What interface is used to connect the processor to I/O devices that require transmission of data one bit at a time?",
    "o": [
      "Parallel",
      "Serial",
      "Output",
      "Input",
      "Bus"
    ],
    "a": 1,
    "e": "Giao tiếp nối tiếp (serial) truyền dữ liệu từng bit một trên một đường; giao tiếp song song (parallel) truyền nhiều bit cùng lúc trên nhiều đường.",
    "s": "On Tap CEA201, câu 132",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Giao tiếp ngoại vi",
    "sourceId": 132
  },
  {
    "q": "The __________ command causes the I/O module to take an item of data from the data bus and transmit that data item to the peripheral.",
    "o": [
      "write",
      "test",
      "read",
      "control"
    ],
    "a": 0,
    "e": "Lệnh write khiến module I/O lấy một mục dữ liệu trên bus dữ liệu rồi gửi ra ngoại vi. Read thì làm theo chiều ngược lại.",
    "s": "On Tap CEA201, câu 181",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O lập trình",
    "sourceId": 181
  },
  {
    "q": "An I/O module that takes on most of the detailed processing burden, presenting a high-level interface to the processor, is usually referred to as an __________.",
    "o": [
      "I/O channel",
      "I/O command",
      "I/O controller",
      "device controller"
    ],
    "a": 0,
    "e": "Module I/O gánh phần lớn việc xử lý chi tiết và đưa ra giao diện mức cao cho CPU gọi là I/O channel (hay I/O processor). Module đơn giản, cần CPU điều khiển chi tiết mới gọi là I/O controller / device controller.",
    "s": "On Tap CEA201, câu 203",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Kênh I/O",
    "sourceId": 203
  },
  {
    "q": "In the computer, what categories do external devices include? (choose 3 correct answers)",
    "o": [
      "Human readable",
      "Communication",
      "Data Conversion",
      "Machine readable"
    ],
    "a": [
      0,
      1,
      3
    ],
    "e": "Thiết bị ngoài chia làm 3 nhóm: human readable (màn hình, máy in, bàn phím), machine readable (đĩa, băng, cảm biến) và communication (liên lạc với thiết bị ở xa). “Data conversion” là việc bên trong thiết bị, không phải một nhóm thiết bị.",
    "s": "On Tap CEA201, câu 227",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Thiết bị ngoại vi",
    "sourceId": 227
  },
  {
    "q": "In isolated I/O,__________",
    "o": [
      "The I/O devices and the memory share the same address space",
      "The I/O devices have a separate address space from memory",
      "The memory and I/O devices have an associated address space",
      "A part of the memory is specifically set aside for the I/O operation",
      "None of the mentioned"
    ],
    "a": 1,
    "e": "Isolated I/O: thiết bị I/O có không gian địa chỉ riêng, tách khỏi bộ nhớ, và cần lệnh I/O riêng (IN/OUT). Dùng chung không gian địa chỉ (A, D) là memory-mapped I/O.",
    "s": "On Tap CEA201, câu 244",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Địa chỉ I/O",
    "sourceId": 244
  },
  {
    "q": "For interrupts, all I/O modules share a common interrupt request line. When the processor senses an interrupt, it sends out an interrupt acknowledge. This signal propagates through a series of I/O modules until it gets to a requesting module. Which kind of interrupt technique is it?",
    "o": [
      "Multiple interrupt lines",
      "Software poll",
      "Daisy chain",
      "Bus arbitration"
    ],
    "a": 2,
    "e": "Daisy chain: các module dùng chung một đường yêu cầu ngắt; tín hiệu acknowledge của CPU truyền nối tiếp qua từng module cho tới module đang yêu cầu, module đó đặt vector của mình lên bus dữ liệu.",
    "s": "On Tap CEA201, câu 295",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O bằng ngắt",
    "sourceId": 295
  },
  {
    "q": "(1) An I/O module must recognize one unique address for each peripheral it controls. (2) I/O channels are commonly seen on microcomputers, whereas I/O controllers are used on mainframes. The statement (1) is __________ and (2) is __________",
    "o": [
      "true, false",
      "true, true",
      "false, true",
      "false, false"
    ],
    "a": 0,
    "e": "(1) đúng: module I/O phải nhận ra một địa chỉ duy nhất cho mỗi ngoại vi nó điều khiển. (2) sai vì đảo ngược: I/O controller dùng trên máy vi tính, I/O channel dùng trên mainframe.",
    "s": "On Tap CEA201, câu 333",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Module I/O",
    "sourceId": 333
  },
  {
    "q": "What is the main distinction between Interrupt-Driven I/O and Direct Memory Access (DMA)?",
    "o": [
      "Interrupt-Driven I/O involves the CPU in every data transfer, while DMA bypasses the CPU and transfers data directly between I/O device and memory",
      "Interrupt-Driven I/O requires special hardware and software support, while DMA does not need any additional components",
      "Interrupt-Driven I/O is suitable for small and frequent data transfers, while DMA is suitable for large and infrequent data transfers",
      "All of the mentioned"
    ],
    "a": 0,
    "e": "Với I/O bằng ngắt, mỗi từ dữ liệu vẫn đi qua CPU (CPU chạy trình phục vụ ngắt để chuyển). Với DMA, bộ điều khiển DMA chuyển cả khối trực tiếp giữa thiết bị và bộ nhớ, CPU chỉ bị ngắt khi xong.",
    "s": "On Tap CEA201, câu 352",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "DMA",
    "sourceId": 352
  },
  {
    "q": "What are the most basic functions of an I/O module?",
    "o": [
      "Control and timing, processor communication, device communication, data buffering, error detection.",
      "Control and timing, processor communication, data buffering, error detection, writing data to memory.",
      "Control and timing, processor communication, device communication, data buffering, blocking device.",
      "Control and timing, processor communication, device communication, error detection, data processing."
    ],
    "a": 0,
    "e": "Năm chức năng của module I/O: control and timing, processor communication, device communication, data buffering, error detection. Các phương án khác chen vào chức năng không có trong danh sách.",
    "s": "On Tap CEA201, câu 366",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Module I/O",
    "sourceId": 366
  },
  {
    "q": "The I/O technique where the processor busy waits for an I/O operation to complete is called __________",
    "o": [
      "Programmed I/O or DMA",
      "Interrupt-driven I/O",
      "Direct Memory Access (DMA)",
      "Programmed I/O"
    ],
    "a": 3,
    "e": "Programmed I/O: CPU ra lệnh I/O rồi liên tục kiểm tra trạng thái (busy waiting) cho tới khi xong — lãng phí thời gian CPU. Interrupt-driven I/O và DMA đều giải phóng CPU khỏi việc chờ.",
    "s": "On Tap CEA201, câu 367",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O lập trình",
    "sourceId": 367
  },
  {
    "q": "What is the primary role of the IO module? (choose two correct answers)",
    "o": [
      "Its role is data transfer, it will transfer data to and from peripheral devices.",
      "Its role is device communication control, it manages and controls the flow of data between the CPU and peripherals",
      "Its role is data formatting and converting analog signals into digital audio data for CPU",
      "Its role is protecting data from user, ensuring that sensitive information is not lost or intercepted."
    ],
    "a": [
      0,
      1
    ],
    "e": "Module I/O vừa truyền dữ liệu giữa CPU/bộ nhớ và ngoại vi, vừa điều khiển giao tiếp (điều phối luồng dữ liệu giữa CPU và thiết bị). Chuyển tín hiệu âm thanh hay bảo mật dữ liệu không phải vai trò chính của nó.",
    "s": "On Tap CEA201, câu 421",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Module I/O",
    "sourceId": 421
  },
  {
    "q": "In which I/O technique does an I/O channel or processor manage transfer of data, thus freeing the CPU?",
    "o": [
      "Programmed I/O",
      "Interrupt-driven I/O",
      "Channel I/O",
      "Memory-mapped I/O"
    ],
    "a": 2,
    "e": "Channel I/O: một kênh I/O (bộ xử lý I/O có tập lệnh riêng) tự chạy chương trình kênh để quản lý việc truyền dữ liệu, CPU chỉ khởi động và nhận ngắt khi xong.",
    "s": "On Tap CEA201, câu 431",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Kênh I/O",
    "sourceId": 431
  },
  {
    "q": "Which of the following is a DISADVANTAGE of using programmed I/O?",
    "o": [
      "Increases system efficiency",
      "Reduces CPU involvement in I/O operations",
      "Requires the CPU to be constantly busy with I/O tasks",
      "Increases system complexity"
    ],
    "a": 2,
    "e": "Nhược điểm của programmed I/O: CPU phải liên tục kiểm tra trạng thái và tự chuyển từng từ dữ liệu ⇒ luôn bận với việc I/O, lãng phí thời gian xử lý.",
    "s": "On Tap CEA201, câu 432",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O lập trình",
    "sourceId": 432
  },
  {
    "q": "What is the first evolutionary step in the evolution of the I/O function?",
    "o": [
      "The I/O module is enhanced to become a processor in its own right.",
      "A controller or I/O module is added, and programmed I/O without interrupts is used.",
      "The CPU directly controls a peripheral device.",
      "The I/O module is given direct access to memory via DMA.",
      "The I/O module has a local memory of its own."
    ],
    "a": 2,
    "e": "Các bước tiến hoá của chức năng I/O: (1) CPU điều khiển trực tiếp ngoại vi → (2) thêm controller/module I/O, dùng programmed I/O → (3) thêm ngắt → (4) DMA → (5) module I/O thành bộ xử lý riêng (I/O channel) → (6) có bộ nhớ riêng (I/O processor).",
    "s": "On Tap CEA201, câu 452",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Kênh I/O",
    "sourceId": 452
  },
  {
    "q": "In programmed I/O, who does initialize the transfer of data?",
    "o": [
      "I/O controller",
      "CPU",
      "DMA controller",
      "Operating system"
    ],
    "a": 1,
    "e": "Trong programmed I/O, CPU chạy chương trình khởi động việc truyền: ra lệnh cho module I/O, kiểm tra trạng thái và tự chuyển từng từ dữ liệu.",
    "s": "On Tap CEA201, câu 453",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O lập trình",
    "sourceId": 453
  },
  {
    "q": "Which statement is correct in memory-mapped I/O?",
    "o": [
      "The I/O devices and the memory share the same address space",
      "The I/O devices have a separate address space",
      "The memory and I/O devices have an associated address space",
      "A part of the memory is specifically set aside for the I/O operation"
    ],
    "a": 0,
    "e": "Memory-mapped I/O: thiết bị I/O và bộ nhớ dùng chung một không gian địa chỉ, nên dùng luôn lệnh đọc/ghi bộ nhớ để truy cập I/O. Không gian địa chỉ riêng (B) là isolated I/O.",
    "s": "On Tap CEA201, câu 491",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "Địa chỉ I/O",
    "sourceId": 491
  },
  {
    "q": "The advantage of interrupt driven I/O over programmed I/O is __________.",
    "o": [
      "the latter offers faster transfer of data",
      "the former does not have to wait until I/O operation is complete",
      "the devices have to deal with fewer address lines",
      "no advantage as such"
    ],
    "a": 1,
    "e": "Với I/O bằng ngắt (“the former”), CPU ra lệnh I/O rồi làm việc khác, module I/O ngắt khi sẵn sàng — không phải chờ bận như programmed I/O. Tốc độ truyền dữ liệu thì cả hai đều bị giới hạn vì mỗi từ vẫn đi qua CPU.",
    "s": "On Tap CEA201, câu 495",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "I/O bằng ngắt",
    "sourceId": 495
  },
  {
    "q": "What is the main advantage of using DMA over Programmed I/O or Interrupt-Driven I/O?",
    "o": [
      "DMA reduces the CPU involvement and overhead in data transfer",
      "DMA increases the data transfer rate and efficiency",
      "DMA allows concurrent execution of CPU and I/O operations",
      "All of the mentioned"
    ],
    "a": 3,
    "e": "DMA chuyển cả khối dữ liệu mà không qua CPU ⇒ giảm việc và chi phí cho CPU, tăng tốc độ truyền, và cho CPU chạy song song với I/O (chỉ bị mượn bus theo chu kỳ) ⇒ cả ba đều đúng.",
    "s": "On Tap CEA201, câu 496",
    "chapter": "Chương 7: Vào/Ra",
    "topic": "DMA",
    "sourceId": 496
  },
  {
    "q": "The OS must determine how much processor time is to be devoted to the execution of a particular user program.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Một nhiệm vụ của HĐH là lập lịch (scheduling): quyết định mỗi chương trình người dùng được dùng bộ xử lý bao lâu và khi nào.",
    "s": "On Tap CEA201, câu 22",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 22
  },
  {
    "q": "The most important system program is the OS.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. HĐH là chương trình hệ thống quan trọng nhất: che giấu chi tiết phần cứng và cung cấp giao diện thuận tiện cho lập trình viên và người dùng.",
    "s": "On Tap CEA201, câu 23",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 23
  },
  {
    "q": "With a batch operating system the user does not have direct access to the processor.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Với HĐH xử lý theo lô (batch), người dùng nộp job cho người vận hành; monitor tự nạp và chạy lần lượt các job nên người dùng không trực tiếp dùng bộ xử lý.",
    "s": "On Tap CEA201, câu 33",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 33
  },
  {
    "q": "Both batch multiprogramming and time sharing use multiprogramming.",
    "o": [
      "False",
      "True"
    ],
    "a": 1,
    "e": "Đúng. Cả hai đều dùng đa chương (multiprogramming). Batch multiprogramming nhằm tận dụng tối đa bộ xử lý; time sharing nhằm giảm thời gian đáp ứng cho người dùng tương tác.",
    "s": "On Tap CEA201, câu 42",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 42
  },
  {
    "q": "Privileged instructions are certain instructions that are designated special and can be executed only by the monitor.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Lệnh đặc quyền (privileged instructions) chỉ monitor/HĐH được thực thi; chương trình người dùng gọi tới sẽ gây lỗi và trả quyền điều khiển về monitor.",
    "s": "On Tap CEA201, câu 85",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 85
  },
  {
    "q": "__________ is when the processor spends most of its time swapping pages rather than execut",
    "o": [
      "Swapping",
      "Thrashing",
      "Paging",
      "Multitasking"
    ],
    "a": 1,
    "e": "Thrashing: bộ xử lý mất phần lớn thời gian hoán đổi trang giữa bộ nhớ và đĩa thay vì thực thi lệnh, thường do thay trang không khéo khiến trang vừa đẩy ra lại bị cần ngay.",
    "s": "On Tap CEA201, câu 92",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 92
  },
  {
    "q": "Scheduling and memory management are the two OS functions that are most relevant to the computer organization and architecture.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Trong các chức năng của HĐH, lập lịch và quản lý bộ nhớ gắn chặt nhất với tổ chức và kiến trúc máy tính (ngắt, phần cứng phân trang, TLB…).",
    "s": "On Tap CEA201, câu 108",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 108
  },
  {
    "q": "A __________ system works only one program at a time.",
    "o": [
      "batch",
      "uniprogramming",
      "kernel",
      "privileged instruction"
    ],
    "a": 1,
    "e": "Uniprogramming: tại mỗi thời điểm bộ nhớ chỉ chứa và chạy một chương trình người dùng. Ngược lại là multiprogramming.",
    "s": "On Tap CEA201, câu 128",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 128
  },
  {
    "q": "A __________ is a special type of programming language used to provide instructions to the monitor.",
    "o": [
      "job control language",
      "multiprogram",
      "kernel",
      "utility"
    ],
    "a": 0,
    "e": "Job control language (JCL) là ngôn ngữ lập trình đặc biệt dùng để ra lệnh cho monitor trong hệ thống batch (ví dụ: dịch chương trình nào, chạy ra sao).",
    "s": "On Tap CEA201, câu 130",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 130
  },
  {
    "q": "With demand paging it is necessary to load an entire process into main memory.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Demand paging chỉ nạp một trang khi nó thực sự được cần, nên không phải nạp cả tiến trình vào bộ nhớ chính — nhờ vậy tiến trình có thể lớn hơn bộ nhớ chính.",
    "s": "On Tap CEA201, câu 150",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 150
  },
  {
    "q": "The __________ scheduler determines which programs are admitted to the system for processing",
    "o": [
      "long-term",
      "medium-term",
      "short-term",
      "I/O"
    ],
    "a": 0,
    "e": "Long-term scheduler quyết định chương trình nào được đưa vào hệ thống để xử lý, qua đó điều chỉnh mức đa chương. Medium-term lo hoán đổi (swapping); short-term (dispatcher) chọn tiến trình chạy tiếp theo.",
    "s": "On Tap CEA201, câu 154",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 154
  },
  {
    "q": "Techniques that automatically move program and data blocks into the physical main memory when they are required for execution are called __________.",
    "o": [
      "Associative-Mapping techniques",
      "Main Memory techniques",
      "Virtual Memory techniques",
      "Cache Memory techniques",
      "Paging techniques"
    ],
    "a": 2,
    "e": "Bộ nhớ ảo (virtual memory): phần cứng và HĐH tự động đưa các khối chương trình/dữ liệu từ đĩa vào bộ nhớ chính khi chúng được cần để thực thi. Paging chỉ là một cơ chế được dùng bên trong.",
    "s": "On Tap CEA201, câu 165",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 165
  },
  {
    "q": "Swapping is an I/O operation.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Swapping chuyển tiến trình giữa bộ nhớ chính và đĩa nên bản thân nó là một thao tác I/O — vì vậy nếu dùng không khéo có thể làm hệ thống chậm hơn.",
    "s": "On Tap CEA201, câu 173",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Quản lý bộ nhớ",
    "sourceId": 173
  },
  {
    "q": "The __________ is a program that controls the execution of application programs and acts as an interface between applications and the computer hardware.",
    "o": [
      "nucleus",
      "batch system",
      "operating system",
      "job control language"
    ],
    "a": 2,
    "e": "Đó là định nghĩa hệ điều hành (OS): điều khiển việc thực thi chương trình ứng dụng và làm giao diện giữa ứng dụng với phần cứng. Nucleus/kernel chỉ là phần lõi của OS.",
    "s": "On Tap CEA201, câu 188",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 188
  },
  {
    "q": "Uniprogramming is the central theme of modern operating systems.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Chủ đề trung tâm của HĐH hiện đại là đa chương (multiprogramming): giữ nhiều chương trình trong bộ nhớ để CPU luôn có việc khi một chương trình chờ I/O.",
    "s": "On Tap CEA201, câu 218",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 218
  },
  {
    "q": "The __________ scheduler is also known as the dispatcher.",
    "o": [
      "long-term",
      "medium-term",
      "short-term",
      "I/O"
    ],
    "a": 2,
    "e": "Short-term scheduler (dispatcher) chạy rất thường xuyên và quyết định tiến trình nào được chạy tiếp theo trên CPU.",
    "s": "On Tap CEA201, câu 220",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 220
  },
  {
    "q": "For reads to and writes from main memory, __________ translates each virtual address into a physical address in main memory.",
    "o": [
      "MAR",
      "MMU",
      "Overlays",
      "TLB",
      "Accumulator"
    ],
    "a": 1,
    "e": "Khi đọc/ghi bộ nhớ chính, MMU (memory management unit) — phần cứng quản lý bộ nhớ — dịch mỗi địa chỉ ảo thành địa chỉ vật lý. TLB chỉ là cache bảng trang nằm bên trong quá trình dịch đó.",
    "s": "On Tap CEA201, câu 235",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 235
  },
  {
    "q": "What is the initial state of a process when it is admitted by the high-level scheduler, but not yet ready to execute?",
    "o": [
      "New",
      "Ready",
      "Running",
      "Halted"
    ],
    "a": 0,
    "e": "Vừa được long-term (high-level) scheduler nhận vào nhưng chưa sẵn sàng chạy thì tiến trình ở trạng thái New. Khi đủ tài nguyên nó mới chuyển sang Ready.",
    "s": "On Tap CEA201, câu 246",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 246
  },
  {
    "q": "The chunks of a program, known as pages, could be assigned to available chunks of memory, known as frames, is called __________.",
    "o": [
      "Swapping",
      "Partitioning",
      "Paging",
      "Virtual Memory",
      "Segmentation"
    ],
    "a": 2,
    "e": "Paging (phân trang): chương trình chia thành các khối bằng nhau gọi là page, bộ nhớ chia thành các khối cùng cỡ gọi là frame; trang nào cũng đặt được vào frame trống bất kỳ.",
    "s": "On Tap CEA201, câu 247",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 247
  },
  {
    "q": "Which state indicates that a process is currently being executed by the processor?",
    "o": [
      "Running",
      "Ready",
      "NewBorn",
      "Halted"
    ],
    "a": 0,
    "e": "Tiến trình đang được CPU thực thi ở trạng thái Running. Ready = sẵn sàng, chờ tới lượt; Halted = đã kết thúc.",
    "s": "On Tap CEA201, câu 297",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 297
  },
  {
    "q": "The task of subdivision is carried out dynamically by the OS and is known as__________ ?",
    "o": [
      "Scheduling",
      "Memory management",
      "Virtual Memory",
      "All of the mentioned"
    ],
    "a": 1,
    "e": "Trong hệ đa chương, phần bộ nhớ của người dùng được chia nhỏ cho nhiều tiến trình; việc chia này do HĐH làm động và gọi là quản lý bộ nhớ (memory management).",
    "s": "On Tap CEA201, câu 298",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Quản lý bộ nhớ",
    "sourceId": 298
  },
  {
    "q": "Which of the following statements is incorrect about Translation Look-aside Buffer (TLB)?",
    "o": [
      "The use of TLB eliminates the need for keeping a page table in memory",
      "TLB only maintains a subset of the entries stored in the full memory-based page table",
      "When there is a TLB miss the system needs to access the page table",
      "A translation lookaside buffer (TLB) is a memory cache that stores the recent translations of virtual memory to physical memory"
    ],
    "a": 0,
    "e": "Câu sai là A: TLB chỉ là cache chứa một phần các mục của bảng trang; khi TLB miss vẫn phải tra bảng trang đầy đủ trong bộ nhớ, nên bảng trang vẫn phải được giữ.",
    "s": "On Tap CEA201, câu 299",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 299
  },
  {
    "q": "We have a long-term queue of process requests, typically stored on __________.",
    "o": [
      "main memory",
      "disk",
      "cache memory",
      "registers"
    ],
    "a": 1,
    "e": "Hàng đợi dài hạn (long-term queue) chứa các yêu cầu tiến trình chưa được nhận vào hệ thống nên thường nằm trên đĩa; long-term scheduler lấy dần từ đây đưa vào bộ nhớ.",
    "s": "On Tap CEA201, câu 355",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 355
  },
  {
    "q": "Which method allows the programmer to view memory as consisting of multiple address spaces and is used to map logical addresses of variable length onto physical memory?",
    "o": [
      "Paging",
      "Overlays",
      "Segmentation",
      "Paging with segmentation"
    ],
    "a": 2,
    "e": "Segmentation: lập trình viên thấy bộ nhớ gồm nhiều không gian địa chỉ (segment) có độ dài thay đổi. Paging thì chia thành các trang cố định và trong suốt với lập trình viên.",
    "s": "On Tap CEA201, câu 368",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Quản lý bộ nhớ",
    "sourceId": 368
  },
  {
    "q": "The decision as to which process's pending I/O request shall be handled by an available I/O device",
    "o": [
      "Medium-term scheduling",
      "Short-term scheduling",
      "I/O scheduling",
      "Long-term scheduling"
    ],
    "a": 2,
    "e": "I/O scheduling: quyết định yêu cầu I/O đang chờ của tiến trình nào được một thiết bị I/O rảnh phục vụ. Long/medium/short-term scheduling là lập lịch cho bộ xử lý.",
    "s": "On Tap CEA201, câu 381",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 381
  },
  {
    "q": "Facilities and services provided by the OS that assist the programmer in creating programs are in the form of __________ programs that are not actually part of the OS but are accessible through the OS.",
    "o": [
      "utility",
      "logical address",
      "JCL",
      "multitasking"
    ],
    "a": 0,
    "e": "HĐH cung cấp các dịch vụ hỗ trợ lập trình viên (trình soạn thảo, gỡ lỗi…) dưới dạng utility programs: không thật sự thuộc HĐH nhưng truy cập được qua HĐH.",
    "s": "On Tap CEA201, câu 391",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 391
  },
  {
    "q": "__________ is when the processor spends most of its time swapping pages rather than executing instructions.",
    "o": [
      "Multitasking",
      "Swapping",
      "Thrashing",
      "Paging"
    ],
    "a": 2,
    "e": "Thrashing: bộ xử lý mất phần lớn thời gian hoán đổi trang thay vì thực thi lệnh — thường xảy ra khi bộ nhớ quá ít so với số trang các tiến trình đang cần.",
    "s": "On Tap CEA201, câu 415",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Phân trang & bộ nhớ ảo",
    "sourceId": 415
  },
  {
    "q": "The __________ scheduler executes relatively infrequently and makes the coarse-grained decision of whether or not to take on a new process, and which one to take. The __________ scheduler, also known as the dispatcher, executes frequently and makes the fine-grained decision of which job to execute next.",
    "o": [
      "short-term; medium-term",
      "medium-term; short-term",
      "long-term; short-term",
      "long-term; medium-term"
    ],
    "a": 2,
    "e": "Long-term scheduler chạy thưa, quyết định “thô” có nhận thêm tiến trình mới hay không. Short-term scheduler (dispatcher) chạy rất thường xuyên, quyết định “mịn” tiến trình nào chạy tiếp.",
    "s": "On Tap CEA201, câu 455",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Lập lịch",
    "sourceId": 455
  },
  {
    "q": "If a program accesses data in a specified file, how to manage the file's properties such as disk position, file's attributes?",
    "o": [
      "They are managed by the current operating system.",
      "They are managed using variables of the running program.",
      "They are stored on the hard disk.",
      "They are managed by the programmer."
    ],
    "a": 0,
    "e": "Thuộc tính của tệp (vị trí trên đĩa, quyền, kích thước…) do HĐH quản lý qua hệ thống tệp; chương trình chỉ gọi dịch vụ của HĐH để truy cập tệp.",
    "s": "On Tap CEA201, câu 456",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 456
  },
  {
    "q": "Choose an operation in which no operating system's utility is called.",
    "o": [
      "Y = 10 + 7;",
      "Read an integer from the keyboard.",
      "Print data to monitor.",
      "Read data from a file.",
      "None of the others"
    ],
    "a": 0,
    "e": "Y = 10 + 7 chỉ là phép tính trong CPU và bộ nhớ của chương trình. Đọc bàn phím, in ra màn hình, đọc tệp đều là I/O nên phải gọi dịch vụ của HĐH.",
    "s": "On Tap CEA201, câu 482",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Tổng quan HĐH",
    "sourceId": 482
  },
  {
    "q": "Which technique involves dividing physical memory into fixed-size or variable-size blocks to allocate memory to processes?",
    "o": [
      "Partitioning",
      "Swapping",
      "Paging",
      "Translation Lookaside Buffer"
    ],
    "a": 0,
    "e": "Partitioning (phân vùng): chia bộ nhớ vật lý thành các vùng kích thước cố định hoặc thay đổi để cấp cho tiến trình. Paging chia thành các frame nhỏ bằng nhau và cấp theo trang.",
    "s": "On Tap CEA201, câu 483",
    "chapter": "Chương 8: Hỗ trợ hệ điều hành",
    "topic": "Quản lý bộ nhớ",
    "sourceId": 483
  },
  {
    "q": "What kind of Information is stored inside the computer?",
    "o": [
      "Binary form",
      "ASCII code form",
      "Decimal form",
      "Alpha numeric",
      "Numeric form"
    ],
    "a": 0,
    "e": "Mọi thông tin trong máy tính (số, ký tự, lệnh, hình ảnh) cuối cùng đều được lưu ở dạng nhị phân (0 và 1). ASCII chỉ là một cách mã hoá ký tự thành nhị phân.",
    "s": "On Tap CEA201, câu 96",
    "chapter": "Chương 9: Hệ đếm",
    "topic": "Hệ đếm",
    "sourceId": 96
  },
  {
    "q": "Convert the 64 from decimal to their binary number equivalents.",
    "o": [
      "100000",
      "100100",
      "111000",
      "101010"
    ],
    "a": 0,
    "e": "64 = 2^6 ⇒ nhị phân là 1000000 (số 1 theo sau sáu số 0). Không lựa chọn nào viết đủ bảy chữ số; A (100000) là lựa chọn duy nhất đúng dạng 2^n — đề thiếu một số 0 — nên chọn A. Các lựa chọn khác là 36, 56, 42.",
    "s": "On Tap CEA201, câu 384",
    "chapter": "Chương 9: Hệ đếm",
    "topic": "Hệ đếm",
    "sourceId": 384
  },
  {
    "q": "Express a sign integer number (+18) in the sign magnitude representation.",
    "o": [
      "00010010",
      "10010010",
      "11110010",
      "01110010"
    ],
    "a": 0,
    "e": "Dấu – độ lớn: bit trái nhất là dấu (0 = dương), 7 bit còn lại là độ lớn. 18 = 16 + 2 = 0010010_2 ⇒ +18 = 00010010. Phương án B (10010010) là −18.",
    "s": "On Tap CEA201, câu 250",
    "chapter": "Chương 10: Số học máy tính",
    "topic": "Biểu diễn số nguyên",
    "sourceId": 250
  },
  {
    "q": "Which representation is most efficient to perform arithmetic operations on the signed integer numbers?",
    "o": [
      "Sign-magnitude",
      "2's complement",
      "1's & 2's compliment",
      "1's complement"
    ],
    "a": 1,
    "e": "Bù 2 chỉ có một số 0, và cộng/trừ số có dấu dùng chung mạch cộng như số không dấu (trừ = cộng với số bù 2) ⇒ hiệu quả nhất. Dấu – độ lớn và bù 1 đều có hai số 0 và cần xử lý bit dấu riêng.",
    "s": "On Tap CEA201, câu 278",
    "chapter": "Chương 10: Số học máy tính",
    "topic": "Biểu diễn số nguyên",
    "sourceId": 278
  },
  {
    "q": "Express an integer number +18 (using 8-bits length) in twos complement representation.",
    "o": [
      "00010010",
      "10010010",
      "00001101",
      "10011101"
    ],
    "a": 0,
    "e": "Với số dương, bù 2 giống hệt nhị phân thường: 18 = 16 + 2 ⇒ 00010010. Chỉ số âm mới phải đảo bit rồi cộng 1.",
    "s": "On Tap CEA201, câu 302",
    "chapter": "Chương 10: Số học máy tính",
    "topic": "Biểu diễn số nguyên",
    "sourceId": 302
  },
  {
    "q": "If you have an integer number +18 in sign magnitude representation, which is 00010010, what is the correct option for -18?",
    "o": [
      "00010010",
      "10010010",
      "11110010",
      "01110010"
    ],
    "a": 1,
    "e": "Dấu – độ lớn: chỉ việc đổi bit dấu (bit trái nhất) từ 0 thành 1, phần độ lớn giữ nguyên ⇒ −18 = 10010010.",
    "s": "On Tap CEA201, câu 383",
    "chapter": "Chương 10: Số học máy tính",
    "topic": "Biểu diễn số nguyên",
    "sourceId": 383
  },
  {
    "q": "The operation __________ yields true if either or both of its operands are true.",
    "o": [
      "NOT",
      "AND",
      "NAND",
      "OR"
    ],
    "a": 3,
    "e": "OR cho kết quả 1 khi ít nhất một toán hạng bằng 1. AND cần cả hai bằng 1; NAND là phủ định của AND; NOT chỉ có một toán hạng.",
    "s": "On Tap CEA201, câu 9",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 9
  },
  {
    "q": "The unary operation __________ inverts the value of its operand.",
    "o": [
      "XOR",
      "NAND",
      "NOT",
      "OR"
    ],
    "a": 2,
    "e": "NOT là phép toán một ngôi (unary) duy nhất trong các lựa chọn: đảo 0 ↔ 1. XOR, NAND, OR đều cần hai toán hạng.",
    "s": "On Tap CEA201, câu 30",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 30
  },
  {
    "q": "Counters can be designated as __________.",
    "o": [
      "asynchronous",
      "neither asynchronous or synchronous",
      "synchronous",
      "both asynchronous and synchronous"
    ],
    "a": 3,
    "e": "Bộ đếm có cả hai loại: asynchronous (ripple counter — flip-flop sau lấy xung từ đầu ra flip-flop trước) và synchronous (mọi flip-flop đổi trạng thái cùng một xung clock).",
    "s": "On Tap CEA201, câu 46",
    "chapter": "Chương 11: Logic số",
    "topic": "Mạch tuần tự",
    "sourceId": 46
  },
  {
    "q": "A __________ is an electronic circuit that produces an output signal that is a simple Boolean op signals.",
    "o": [
      "gate",
      "decoder",
      "counter",
      "flip-flop"
    ],
    "a": 0,
    "e": "Cổng (gate) là mạch điện tử tạo tín hiệu ra bằng một phép toán Boole đơn giản trên các tín hiệu vào (AND, OR, NOT…). Decoder, counter, flip-flop đều được ghép từ nhiều cổng.",
    "s": "On Tap CEA201, câu 104",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 104
  },
  {
    "q": "__________ are used in digital circuits to control signal and data routing.",
    "o": [
      "Multiplexers",
      "Program counters",
      "Flip-flops",
      "Gates"
    ],
    "a": 0,
    "e": "Bộ dồn kênh (multiplexer) chọn một trong nhiều đầu vào để đưa ra đầu ra theo tín hiệu chọn, nên dùng để điều khiển đường đi của tín hiệu và dữ liệu (ví dụ chọn nguồn nạp cho PC).",
    "s": "On Tap CEA201, câu 196",
    "chapter": "Chương 11: Logic số",
    "topic": "Mạch tổ hợp",
    "sourceId": 196
  },
  {
    "q": "For the following Boolean expressions: AB + AB' and the truth table\nA | B | B' | output\n1 | 0 | 1 | ?\n1 | 1 | 0 | ?\n0 | 0 | 1 | ?\n0 | 1 | 0 | ?\nChoose the correct option to replace at \"?\" (order top to bottom)",
    "o": [
      "1,1,1,0",
      "1,1,1,1",
      "1,0,1,0",
      "0,1,1,0"
    ],
    "a": 0,
    "e": "Lưu ý: nếu tính đúng theo biểu thức in trong đề thì AB + AB' = A(B + B') = A ⇒ cột output là 1,1,0,0 — không có trong các lựa chọn. Đề gốc nhiều khả năng là AB + B': thay từng dòng được 0+1 = 1; 1+0 = 1; 0+1 = 1; 0+0 = 0 ⇒ 1,1,1,0 (đáp án A, cũng là đáp án được chấm).",
    "s": "On Tap CEA201, câu 242",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 242
  },
  {
    "q": "If you have a boolean function with 3 variables, how may rows are there in the truth table?",
    "o": [
      "8 rows",
      "3 rows",
      "6 rows",
      "12 rows"
    ],
    "a": 0,
    "e": "Mỗi biến có 2 giá trị nên n biến cho 2^n tổ hợp: 2^3 = 8 dòng.",
    "s": "On Tap CEA201, câu 243",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 243
  },
  {
    "q": "How does Boolean algebra contribute to the design of digital circuits?",
    "o": [
      "It simplifies the implementation of desired functions",
      "It helps in the analysis of economic data",
      "It facilitates the design of analog circuits",
      "It is primarily used for chemical engineering and physical engineering"
    ],
    "a": 0,
    "e": "Đại số Boole là công cụ toán học để phân tích và rút gọn mạch số: biểu diễn chức năng mong muốn bằng biểu thức rồi rút gọn, giúp hiện thực bằng ít cổng hơn. Nó dành cho mạch số, không phải mạch tương tự.",
    "s": "On Tap CEA201, câu 248",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 248
  },
  {
    "q": "When both inputs are 1, what is the result of a NAND gate?",
    "o": [
      "0",
      "1",
      "2",
      "Undefined",
      "#NA"
    ],
    "a": 0,
    "e": "NAND = NOT(AND). Khi cả hai đầu vào bằng 1 thì AND = 1 ⇒ NAND = 0. Đây là trường hợp duy nhất NAND cho ra 0.",
    "s": "On Tap CEA201, câu 249",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 249
  },
  {
    "q": "Consider an expression: A + (B.C) What expression is equal to the given expression?",
    "o": [
      "(A + B).(A + C)",
      "(A + B).C",
      "A.(B + C)",
      "NOT(A.(B + C))"
    ],
    "a": 0,
    "e": "Luật phân phối của phép OR đối với AND: A + B·C = (A + B)·(A + C). Kiểm tra: (A + B)(A + C) = A + AC + AB + BC = A(1 + C + B) + BC = A + BC.",
    "s": "On Tap CEA201, câu 293",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 293
  },
  {
    "q": "What is the output of a NOT gate when the input is 0?",
    "o": [
      "0",
      "1",
      "Undefined",
      "2"
    ],
    "a": 1,
    "e": "Cổng NOT đảo giá trị: vào 0 thì ra 1.",
    "s": "On Tap CEA201, câu 301",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 301
  },
  {
    "q": "Consider the expression : NOT(A + B) = ? Apply DeMorgan's Theorem to replace at \"?\"",
    "o": [
      "NOT A AND NOT B",
      "NOT A OR NOT B",
      "NOT A AND B",
      "A OR NOT B"
    ],
    "a": 0,
    "e": "Định lý De Morgan: (A + B)' = A'·B' — phủ định của OR bằng AND các phủ định ⇒ NOT A AND NOT B. (Còn (A·B)' = A' + B'.)",
    "s": "On Tap CEA201, câu 332",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 332
  },
  {
    "q": "Assume that a truth table:\nX | Y | OUTPUT\n1 | 1 | 1\n1 | 0 | 1\n0 | 1 | 1\n0 | 0 | 0\nWhich basic operator matches the table above?",
    "o": [
      "AND",
      "OR",
      "NAND",
      "NOR"
    ],
    "a": 1,
    "e": "Kết quả bằng 1 khi ít nhất một đầu vào bằng 1, chỉ bằng 0 khi cả hai bằng 0 ⇒ phép OR.",
    "s": "On Tap CEA201, câu 351",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 351
  },
  {
    "q": "When both inputs are 0, what is the result of a NOR gate?",
    "o": [
      "0",
      "1",
      "2",
      "Undefined",
      "#NA"
    ],
    "a": 1,
    "e": "NOR = NOT(OR). Hai đầu vào đều 0 thì OR = 0 ⇒ NOR = 1. Đây là trường hợp duy nhất NOR cho ra 1.",
    "s": "On Tap CEA201, câu 353",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 353
  },
  {
    "q": "The operation __________ yields true (binary value 1) if and only if both of its operands are true.",
    "o": [
      "OR",
      "AND",
      "XOR",
      "NAND"
    ],
    "a": 1,
    "e": "AND cho 1 khi và chỉ khi cả hai toán hạng bằng 1. OR chỉ cần một; XOR cần hai giá trị khác nhau.",
    "s": "On Tap CEA201, câu 354",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 354
  },
  {
    "q": "Consider an expression: NOT (A OR B) Choose the correct expression that is equal to the given expression.",
    "o": [
      "A NOR B",
      "A NAND B",
      "NOT A NOR B",
      "NOT A OR B"
    ],
    "a": 0,
    "e": "NOR chính là “NOT OR” ⇒ NOT (A OR B) = A NOR B (= NOT A AND NOT B theo De Morgan).",
    "s": "On Tap CEA201, câu 380",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 380
  },
  {
    "q": "Which gate can be used to create an inverted output of an input signal in digital logic?",
    "o": [
      "NOT gate",
      "OR gate",
      "AND gate",
      "XOR gate"
    ],
    "a": 0,
    "e": "Cổng NOT (inverter) cho đầu ra là tín hiệu đảo của đầu vào.",
    "s": "On Tap CEA201, câu 382",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 382
  },
  {
    "q": "Which of the following Boolean expressions is equivalent to F(A, B, C) = Σ(0, 1, 3, 4, 5)",
    "o": [
      "F = AC + B'",
      "F = A'C + B'",
      "F = A'C' + B",
      "F = AC' + B"
    ],
    "a": 1,
    "e": "Các minterm (ABC): 000, 001, 011, 100, 101.\n• Nhóm 000, 001, 100, 101 (B = 0) ⇒ B'.\n• Còn 011; ghép với 001 (A = 0, C = 1) ⇒ A'C.\n⇒ F = A'C + B'.",
    "s": "On Tap CEA201, câu 386",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 386
  },
  {
    "q": "__Simplify the following Boolean expression: (A + B + C)(A + B' + C)(A' + B + C')(A' + B' + C')",
    "o": [
      "A'BC + AB'C'",
      "A'C + AC'",
      "A'D + AD'",
      "AD' + BC'"
    ],
    "a": 1,
    "e": "Mỗi thừa số là một maxterm (hàm = 0 tại đó): 000, 010, 101, 111 ⇒ hàm = 1 tại 001, 011, 100, 110.\n• 001, 011 ⇒ A'C\n• 100, 110 ⇒ AC'\n⇒ F = A'C + AC' (= A XOR C).",
    "s": "On Tap CEA201, câu 390",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 390
  },
  {
    "q": "The Boolean expression F = A'C' + AC' + BC = B + C'. true or false",
    "o": [
      "true",
      "false"
    ],
    "a": 0,
    "e": "A'C' + AC' = C'(A' + A) = C'. Khi đó F = C' + BC = (C' + B)(C' + C) = B + C' ⇒ đúng (true).",
    "s": "On Tap CEA201, câu 392",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 392
  },
  {
    "q": "Use Boolean algebra to find the most simplified SOP expression for F = ABD + CD + ACD + ABC + ABCD.",
    "o": [
      "F = AC + AD",
      "F = CD + AD",
      "F = ABD + ABC + CD",
      "F = BC + AB"
    ],
    "a": 2,
    "e": "Luật hấp thụ: ACD nằm trong CD, ABCD nằm trong ABD ⇒ bỏ đi, còn F = ABD + ABC + CD. Không thể rút thêm: mỗi hạng tử đều phủ một trường hợp mà hạng tử khác không phủ (ví dụ ABC'D chỉ ABD phủ).",
    "s": "On Tap CEA201, câu 393",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 393
  },
  {
    "q": "Applying DeMorgan's theorem to the expression ((A + B + C)D)', we get __________.",
    "o": [
      "ABCD'",
      "(ABC)'D",
      "A'B'C' + D'",
      "A'B'C'D'"
    ],
    "a": 2,
    "e": "De Morgan lần 1: ((A + B + C)·D)' = (A + B + C)' + D'.\nLần 2: (A + B + C)' = A'B'C'.\n⇒ A'B'C' + D'.",
    "s": "On Tap CEA201, câu 394",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 394
  },
  {
    "q": "Which logic gate has an output of 1 only if both inputs are 0 or both inputs are 1?",
    "o": [
      "NOT gate",
      "AND gate",
      "XNOR gate",
      "OR gate"
    ],
    "a": 2,
    "e": "XNOR (phủ định của XOR) cho 1 khi hai đầu vào giống nhau: cùng 0 hoặc cùng 1 — nên còn gọi là cổng so sánh bằng.",
    "s": "On Tap CEA201, câu 395",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 395
  },
  {
    "q": "__For the SOP expression AB + B'C, how many 0s are in the truth table's output column?",
    "o": [
      "4",
      "zero",
      "1",
      "5"
    ],
    "a": 0,
    "e": "AB = 1 tại 110, 111; B'C = 1 tại 001, 101 ⇒ có 4 dòng ra 1. Bảng 3 biến có 8 dòng ⇒ số dòng ra 0 là 8 − 4 = 4.",
    "s": "On Tap CEA201, câu 396",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 396
  },
  {
    "q": "__Karnaugh map is a systematic way of reducing which type of expression?",
    "o": [
      "those with overbars",
      "sum-of-products",
      "product-of-sums",
      "exclusive NOR"
    ],
    "a": 1,
    "e": "Bìa Karnaugh là cách có hệ thống để rút gọn biểu thức dạng tổng các tích (SOP): gom các ô 1 kề nhau thành nhóm 2, 4, 8… để loại bớt biến.",
    "s": "On Tap CEA201, câu 398",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 398
  },
  {
    "q": "Which logic gate is also known as a \"buffer\" and simply passes its input to its output?",
    "o": [
      "XOR gate",
      "NOT gate",
      "AND gate",
      "OR gate"
    ],
    "a": 1,
    "e": "Đáp án được chấm là NOT gate: ký hiệu buffer chính là tam giác của cổng NOT nhưng bỏ vòng tròn đảo. Nói chặt chẽ thì buffer đưa thẳng tín hiệu vào ra đầu ra, còn cổng NOT đảo tín hiệu — đề gộp hai loại cổng một đầu vào này làm một.",
    "s": "On Tap CEA201, câu 400",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 400
  },
  {
    "q": "Which of the following Boolean expressions is equivalent to F=AB'+ABC'+AB'C",
    "o": [
      "F = AC + AB'",
      "F = A'C + AB'",
      "F = AC + AB",
      "F = AC' + AB'"
    ],
    "a": 3,
    "e": "AB'C nằm trong AB' (hấp thụ) ⇒ F = AB' + ABC' = A(B' + BC') = A(B' + C') = AB' + AC'.",
    "s": "On Tap CEA201, câu 402",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 402
  },
  {
    "q": "For the SOP expression AB'C+A'BC+ABC', how many 1s are in the truth table's output column?",
    "o": [
      "5",
      "3",
      "1",
      "2"
    ],
    "a": 1,
    "e": "Mỗi hạng tử là một minterm đủ 3 biến, ứng với đúng một dòng bằng 1: AB'C = 101, A'BC = 011, ABC' = 110 ⇒ 3 số 1.",
    "s": "On Tap CEA201, câu 403",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 403
  },
  {
    "q": "__Simplify the following Boolean expression: AB'C' + A'BC + ABC + ABC'",
    "o": [
      "AC' + BC",
      "AC + BC'",
      "BC + AB + AB'C'",
      "A'B + B'C"
    ],
    "a": 0,
    "e": "Các minterm: 100, 011, 111, 110.\n• 100 + 110 ⇒ AC'\n• 011 + 111 ⇒ BC\n⇒ F = AC' + BC. C cũng bằng F nhưng chưa rút gọn (AB và AB'C' là thừa).",
    "s": "On Tap CEA201, câu 405",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 405
  },
  {
    "q": "Applying DeMorgan's theorem to the expression (ABC)', we get __________.",
    "o": [
      "(A+B+C)'",
      "A+B'+CC'",
      "A' + B' + C'",
      "A(B+C)"
    ],
    "a": 2,
    "e": "De Morgan: phủ định của một tích bằng tổng các phủ định ⇒ (ABC)' = A' + B' + C'.",
    "s": "On Tap CEA201, câu 406",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 406
  },
  {
    "q": "__What is the output of the following Boolean expression: (A' + B + C) AND (A + B' + C')?",
    "o": [
      "1",
      "0",
      "A XOR B",
      "Depends on the values of A, B, and C"
    ],
    "a": 3,
    "e": "Thử vài bộ giá trị: A = B = C = 0 ⇒ (1)(1) = 1; A = 0, B = C = 1 ⇒ (1)(0) = 0; A = 1, B = C = 0 ⇒ (0)(1) = 0. Kết quả thay đổi ⇒ phụ thuộc vào giá trị của A, B, C.",
    "s": "On Tap CEA201, câu 407",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 407
  },
  {
    "q": "__Which of the following is an important feature of the sum-of-products (SOP) form of expression?",
    "o": [
      "No signal must pass through more than two gates, not including inverters.",
      "All logic circuits are reduced to nothing more than simple AND and OR gates.",
      "The delay times are greatly reduced over other forms.",
      "The maximum number of gates that any signal must pass through is reduced by a factor of two."
    ],
    "a": 0,
    "e": "Dạng SOP hiện thực bằng mạch hai tầng (một tầng AND rồi một tầng OR), nên mọi tín hiệu đi qua tối đa hai cổng, không tính cổng đảo.",
    "s": "On Tap CEA201, câu 408",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 408
  },
  {
    "q": "Write the Boolean expression for each of the logic circuits.",
    "o": [
      "F = A'C' + AB + AB'C",
      "F = AC + A'B + AB'C",
      "F = A'C' + A'B + AB'C",
      "F = AC' + A'B + AB'C"
    ],
    "a": 0,
    "e": "Ảnh đề gốc trong ngân hàng không kèm hình mạch, nên không tự kiểm lại được; đáp án theo đáp án được chấm: F = A'C' + AB + AB'C. Cách làm: viết biểu thức đầu ra từng cổng AND (mỗi cổng ứng với một hạng tử) rồi OR lại.",
    "s": "On Tap CEA201, câu 410",
    "chapter": "Chương 11: Logic số",
    "topic": "Mạch tổ hợp",
    "sourceId": 410
  },
  {
    "q": "A Karnaugh map is a systematic way of reducing which type of expression?",
    "o": [
      "product-of-sums",
      "those with overbars",
      "exclusive NOR",
      "sum-of-products"
    ],
    "a": 3,
    "e": "Bìa Karnaugh là cách có hệ thống để rút gọn biểu thức dạng tổng các tích (sum-of-products).",
    "s": "On Tap CEA201, câu 413",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 413
  },
  {
    "q": "__Simplify the following Boolean expression using De Morgan's Law: (AB')'",
    "o": [
      "A + B",
      "A'B",
      "AB'",
      "A' + B"
    ],
    "a": 3,
    "e": "(AB')' = A' + (B')' = A' + B.",
    "s": "On Tap CEA201, câu 414",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 414
  },
  {
    "q": "__Which of the following is NOT a Boolean identity?",
    "o": [
      "A AND (A OR B) = A",
      "A XOR B = (A AND B') OR (A' AND B)",
      "(A OR B)' = A' AND B'",
      "A + A' = 1"
    ],
    "a": 3,
    "e": "Theo đúng đề in, cả bốn đều là đẳng thức đúng: A(A + B) = A (hấp thụ), A ⊕ B = AB' + A'B, (A + B)' = A'B' (De Morgan), A + A' = 1. Đáp án được chấm là D — nhiều khả năng đề gốc là A + A = 1, và đó mới là đẳng thức sai vì A + A = A.",
    "s": "On Tap CEA201, câu 417",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 417
  },
  {
    "q": "Which output expression might indicate a product-of-sums circuit construction?",
    "o": [
      "X = CD + EG",
      "X = (CD)'(D + E + F)",
      "X = (AC + BD + EF)'",
      "X = (C + D)(E + G)"
    ],
    "a": 3,
    "e": "Dạng tích các tổng (POS): các nhóm OR được AND lại với nhau ⇒ X = (C + D)(E + G). A là SOP; B, C có phủ định cả nhóm nên không phải dạng chuẩn.",
    "s": "On Tap CEA201, câu 419",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 419
  },
  {
    "q": "Which of the following is a characteristic of sequential circuits compared to combinational circuits?",
    "o": [
      "Do not use gates",
      "Output depends only on current inputs",
      "Output depends on current inputs and past inputs",
      "Simpler to design and implement"
    ],
    "a": 2,
    "e": "Mạch tuần tự có phần tử nhớ (flip-flop) nên đầu ra phụ thuộc cả đầu vào hiện tại lẫn trạng thái trước đó. Mạch tổ hợp chỉ phụ thuộc đầu vào hiện tại.",
    "s": "On Tap CEA201, câu 457",
    "chapter": "Chương 11: Logic số",
    "topic": "Mạch tuần tự",
    "sourceId": 457
  },
  {
    "q": "Question: 29 (Choose 1 answer) Given the following Karnaugh map, what is the optimal expression in the sum of product format (X' means Not X)?\nA\\BC | 00 | 01 | 11 | 10\n0 | 1 | 1 | 1 | 1\n1 | 1 |  |  | 1",
    "o": [
      "A' + C'",
      "A + B",
      "B + C'",
      "A + B'C' + BC'"
    ],
    "a": 0,
    "e": "• Hàng A = 0 toàn 1 ⇒ nhóm 4 ô: A'.\n• Cột BC = 00 và 10 (C = 0) có 1 ở cả hai hàng ⇒ nhóm 4 ô: C'.\nHai nhóm phủ hết các ô 1 ⇒ F = A' + C'.",
    "s": "On Tap CEA201, câu 484",
    "chapter": "Chương 11: Logic số",
    "topic": "Rút gọn biểu thức & bìa Karnaugh",
    "sourceId": 484
  },
  {
    "q": "Consider the truth table\nA | B | F\n0 | 0 | 1\n0 | 1 | 0\n1 | 0 | 0\n1 | 1 | 0\nChoose the correct Algebraic Functions matches with given truth table",
    "o": [
      "F = NOT (A + B)",
      "F = A XOR B",
      "F = A AND NOT B",
      "F = NOT A AND B"
    ],
    "a": 0,
    "e": "F chỉ bằng 1 khi cả hai đầu vào bằng 0 ⇒ đó là NOR: F = NOT (A + B) = A'B'.",
    "s": "On Tap CEA201, câu 494",
    "chapter": "Chương 11: Logic số",
    "topic": "Đại số Boole & cổng logic",
    "sourceId": 494
  },
  {
    "q": "What is stored in the Stack Pointer?",
    "o": [
      "Address of next instruction",
      "Stack data values",
      "Addressing method",
      "Operations",
      "Address of top item"
    ],
    "a": 4,
    "e": "Stack pointer chứa địa chỉ của phần tử đỉnh ngăn xếp. Địa chỉ lệnh kế tiếp là việc của PC; bản thân dữ liệu nằm trong ngăn xếp chứ không nằm trong SP.",
    "s": "On Tap CEA201, câu 52",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Ngăn xếp",
    "sourceId": 52
  },
  {
    "q": "What is stored in the Stack Pointer?",
    "o": [
      "Operations",
      "Addressing method",
      "Stack data values",
      "Address of top item",
      "Address of next instruction"
    ],
    "a": 3,
    "e": "Stack pointer chứa địa chỉ phần tử đỉnh ngăn xếp. Địa chỉ lệnh kế tiếp nằm trong PC, còn các giá trị dữ liệu nằm trong chính ngăn xếp.",
    "s": "On Tap CEA201, câu 138",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Ngăn xếp",
    "sourceId": 138
  },
  {
    "q": "Why is it essential to use symbolic representation of machine instructions?",
    "o": [
      "It makes machine instructions more human-readable and understandable",
      "It reduces the overall complexity of computer systems and user programs",
      "It minimizes the need for memory storage for the user programs",
      "It enables fastest execution of high level language instructions"
    ],
    "a": 0,
    "e": "Lệnh máy thật là chuỗi bit rất khó đọc, nên người ta dùng biểu diễn ký hiệu (ví dụ ADD, SUB, LOAD kèm tên toán hạng) để lập trình viên dễ đọc, dễ hiểu — đó là nền tảng của hợp ngữ.",
    "s": "On Tap CEA201, câu 251",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Đặc trưng lệnh máy",
    "sourceId": 251
  },
  {
    "q": "What is a branch instrtuction?",
    "o": [
      "The intructions that are used to divide a program into multiple subprograms",
      "The intructions that have as one of its operands the address of the next instruction to be executed",
      "The intructions that are used to pause the program",
      "The intructions that are used to return to the beginning of the program"
    ],
    "a": 1,
    "e": "Lệnh rẽ nhánh (branch) có một toán hạng là địa chỉ của lệnh sẽ thực thi tiếp theo. Nếu rẽ (điều kiện đúng hoặc rẽ vô điều kiện), CPU nạp địa chỉ đó vào PC.",
    "s": "On Tap CEA201, câu 253",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 253
  },
  {
    "q": "Consider an expression: NOT (1111 1010) What is the result of this expression?",
    "o": [
      "0000 1010",
      "0000 0101",
      "1111 0101",
      "1111 1010"
    ],
    "a": 1,
    "e": "NOT đảo từng bit: 1111 1010 → 0000 0101.",
    "s": "On Tap CEA201, câu 282",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 282
  },
  {
    "q": "(R1) = 01110110, (R2) = 11011111, the result of (R1) XOR (R2) is:",
    "o": [
      "11011011",
      "00010110",
      "10101001",
      "11001101"
    ],
    "a": 2,
    "e": "XOR từng bit (khác nhau → 1, giống nhau → 0):\n  01110110\n⊕ 11011111\n= 10101001",
    "s": "On Tap CEA201, câu 300",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 300
  },
  {
    "q": "What are the most important general categories of data that machine instructions operate on?",
    "o": [
      "Addresses, numbers, characters, and logical data",
      "Text, images, and audio",
      "Variables, functions, and arrays",
      "Instructions, control signals, and registers"
    ],
    "a": 0,
    "e": "Các loại dữ liệu chính mà lệnh máy thao tác: địa chỉ, số, ký tự và dữ liệu logic.",
    "s": "On Tap CEA201, câu 304",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu toán hạng",
    "sourceId": 304
  },
  {
    "q": "What is the output of Left Shift Operator << on (00011000<<2)?",
    "o": [
      "01100000",
      "11000000",
      "00000110",
      "00000011"
    ],
    "a": 0,
    "e": "Dịch trái 2 bit: các bit chạy sang trái 2 vị trí, bên phải điền 0: 00011000 → 01100000 (24 × 4 = 96).",
    "s": "On Tap CEA201, câu 305",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 305
  },
  {
    "q": "What is result of 10100101 xor 11001001?",
    "o": [
      "11101101",
      "10000001",
      "01101100",
      "10101100"
    ],
    "a": 2,
    "e": "XOR từng bit (khác → 1, giống → 0):\n  10100101\n⊕ 11001001\n= 01101100",
    "s": "On Tap CEA201, câu 336",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 336
  },
  {
    "q": "What is result left rotate of 10110101 by 2 bit?",
    "o": [
      "01101011",
      "10101101",
      "01101101",
      "11010110",
      "11010100"
    ],
    "a": 3,
    "e": "Quay trái 2 bit: 2 bit cao nhất “10” bị đẩy ra và quay vòng về cuối: 10|110101 → 110101|10 = 11010110.",
    "s": "On Tap CEA201, câu 337",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 337
  },
  {
    "q": "Consider an expression: 1000 0000 OR 1111 1010 What is the result of this expression?",
    "o": [
      "1000 0000",
      "1111 1010",
      "1001 1010",
      "1001 0101"
    ],
    "a": 1,
    "e": "OR từng bit (có 1 → 1):\n  1000 0000\nOR 1111 1010\n= 1111 1010 — bit 1 duy nhất của số đầu đã có sẵn ở số sau.",
    "s": "On Tap CEA201, câu 361",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 361
  },
  {
    "q": "What is result logical right shift of 10110000 by 2 bit?",
    "o": [
      "00101100",
      "01011000",
      "01001100",
      "00110000"
    ],
    "a": 0,
    "e": "Dịch phải logic 2 bit: các bit sang phải 2 vị trí, bên trái điền 0: 10110000 → 00101100.",
    "s": "On Tap CEA201, câu 369",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 369
  },
  {
    "q": "Consider an expression: 1000 0000 AND 1111 1010 What is the result of this expression?",
    "o": [
      "1000 0000",
      "1111 0000",
      "1001 1010",
      "1001 0101"
    ],
    "a": 0,
    "e": "AND từng bit (cả hai là 1 → 1):\n  1000 0000\nAND 1111 1010\n= 1000 0000 — chỉ bit trái nhất là 1 ở cả hai số.",
    "s": "On Tap CEA201, câu 374",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 374
  },
  {
    "q": "What type of instruction is used for converting data formats?",
    "o": [
      "Transfer",
      "Arithmetic",
      "Control",
      "Conversion"
    ],
    "a": 3,
    "e": "Lệnh conversion đổi định dạng dữ liệu, ví dụ thập phân ↔ nhị phân, hay lệnh Translate (TR) của IBM đổi mã EBCDIC ↔ ASCII.",
    "s": "On Tap CEA201, câu 435",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 435
  },
  {
    "q": "In a conditional branch instruction, what happens if the specified condition is met?",
    "o": [
      "The program counter is updated to equal the address specified in the operand.",
      "The program counter increments as usual.",
      "The instruction is skipped.",
      "The program terminates."
    ],
    "a": 0,
    "e": "Điều kiện thoả thì PC được nạp địa chỉ đích ghi trong toán hạng ⇒ lệnh tiếp theo lấy từ đích rẽ nhánh. Không thoả thì PC tăng như bình thường.",
    "s": "On Tap CEA201, câu 458",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 458
  },
  {
    "q": "With respect to elements of a machine instruction, what does the instruction code mean?",
    "o": [
      "It specifies the operation to be performed.",
      "It specifies data which will be processed.",
      "It specifies memory access.",
      "It specifies an IO device."
    ],
    "a": 0,
    "e": "Operation code (opcode) chỉ ra phép toán cần thực hiện (ADD, I/O…). Dữ liệu, địa chỉ bộ nhớ và thiết bị I/O thuộc về các tham chiếu toán hạng.",
    "s": "On Tap CEA201, câu 459",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Đặc trưng lệnh máy",
    "sourceId": 459
  },
  {
    "q": "Question 32: Which of the following is not an operand type?",
    "o": [
      "Addresses",
      "Logical data",
      "Value",
      "Characters"
    ],
    "a": 2,
    "e": "Các loại toán hạng chính: địa chỉ, số, ký tự, dữ liệu logic. “Value” không phải một loại toán hạng.",
    "s": "On Tap CEA201, câu 486",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu toán hạng",
    "sourceId": 486
  },
  {
    "q": "In an arithmetic left shift operation, what is appended to the rightmost bits?",
    "o": [
      "Zeros",
      "Ones",
      "The original leftmost bit",
      "Random bits"
    ],
    "a": 0,
    "e": "Dịch trái số học giống dịch trái logic: các bit sang trái, bên phải điền 0 (tương đương nhân 2). Dịch phải số học mới giữ lại bit dấu.",
    "s": "On Tap CEA201, câu 499",
    "chapter": "Chương 12: Tập lệnh: Đặc điểm & Chức năng",
    "topic": "Kiểu thao tác",
    "sourceId": 499
  },
  {
    "q": "__________ has the advantage of flexibility, but the disadvantage of complexity.",
    "o": [
      "Stack addressing",
      "Displacement addressing",
      "Direct addressing",
      "Register addressing"
    ],
    "a": 1,
    "e": "Displacement addressing (EA = A + (R)) gộp cả direct và register indirect nên rất linh hoạt (relative, base-register, indexing đều là biến thể của nó), đổi lại phần cứng và định dạng lệnh phức tạp hơn.",
    "s": "On Tap CEA201, câu 1",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 1
  },
  {
    "q": "Assume an instruction set that uses a fixed 14-bit instruction length. Operand specifiers are 6 bits length. What is the maximum number of one-operand instructions that can be supported?",
    "o": [
      "256",
      "128",
      "32",
      "512",
      "64"
    ],
    "a": 0,
    "e": "Lệnh dài 14 bit, toán hạng chiếm 6 bit ⇒ còn 14 − 6 = 8 bit opcode. Tối đa 2^8 = 256 lệnh một toán hạng. 64 = 2^6 chỉ là số giá trị của trường toán hạng, không phải số lệnh.",
    "s": "On Tap CEA201, câu 27",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 27
  },
  {
    "q": "Three of the most common uses of stack addressing are relative addressing, base-register addressing, and indexing.",
    "o": [
      "False",
      "True"
    ],
    "a": 0,
    "e": "Sai. Relative, base-register và indexing là ba cách dùng phổ biến của displacement addressing, không phải stack addressing.",
    "s": "On Tap CEA201, câu 31",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 31
  },
  {
    "q": "__________ is a principle by which two variables are independent of each other.",
    "o": [
      "Autoindexing",
      "Opcode",
      "Completeness",
      "Orthogonality"
    ],
    "a": 3,
    "e": "Orthogonality (tính trực giao): hai biến độc lập với nhau. Trong tập lệnh, nghĩa là các phần khác của lệnh (như chế độ địa chỉ) không bị opcode quy định — nguyên tắc thiết kế của PDP-11.",
    "s": "On Tap CEA201, câu 34",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 34
  },
  {
    "q": "With direct addressing, the length of the address field is usually less than the word length, thus limiting the address range.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Direct addressing: EA = A. Trường địa chỉ thường ngắn hơn độ dài từ nên chỉ trỏ được tới một vùng bộ nhớ giới hạn.",
    "s": "On Tap CEA201, câu 53",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 53
  },
  {
    "q": "The method of calculating the EA is the same for both base-register addressing and indexing",
    "o": [
      "False",
      "True"
    ],
    "a": 1,
    "e": "Đúng. Cả hai đều tính EA = A + (R). Khác nhau ở cách hiểu: base-register thì R giữ địa chỉ gốc và A là độ lệch; indexing thì A là địa chỉ gốc và R là chỉ số.",
    "s": "On Tap CEA201, câu 67",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 67
  },
  {
    "q": "For __________, the address field references a main memory address and the referenced register contains a positive displacement from that address.",
    "o": [
      "indexing",
      "base-register addressing",
      "relative addressing",
      "all of the above"
    ],
    "a": 0,
    "e": "Đó là cách hiểu của indexing: trường địa chỉ A là địa chỉ gốc trong bộ nhớ, thanh ghi chứa độ lệch dương (chỉ số). Base-register thì ngược lại: thanh ghi giữ địa chỉ gốc, A là độ lệch.",
    "s": "On Tap CEA201, câu 73",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 73
  },
  {
    "q": "Indexing performed after the indirection is __________ .",
    "o": [
      "relative addressing",
      "autoindexing",
      "postindexing",
      "preindexing"
    ],
    "a": 2,
    "e": "Postindexing: gián tiếp trước rồi mới cộng chỉ số, EA = (A) + (R). Preindexing thì ngược lại: EA = (A + (R)).",
    "s": "On Tap CEA201, câu 81",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 81
  },
  {
    "q": "Register indirect addressing uses the same number of memory references as indirect addressing.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Register indirect (EA = (R)) cần 1 lần truy cập bộ nhớ để lấy toán hạng; indirect (EA = (A)) cần 2 lần — một lần lấy địa chỉ, một lần lấy toán hạng.",
    "s": "On Tap CEA201, câu 84",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 84
  },
  {
    "q": "Typically an instruction set will include both preindexing and postindexing.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Một tập lệnh thường chỉ hỗ trợ một trong hai: preindexing hoặc postindexing, hiếm khi có cả hai.",
    "s": "On Tap CEA201, câu 89",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 89
  },
  {
    "q": "The value of the mode field determines which addressing mode is to be used.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Nhiều kiến trúc dùng trường mode trong lệnh; giá trị của nó cho biết toán hạng được định địa chỉ theo chế độ nào.",
    "s": "On Tap CEA201, câu 93",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 93
  },
  {
    "q": "Which of the following interrelated factors go into determining the use of the addressing bits?",
    "o": [
      "number of operands",
      "number of register sets",
      "address range",
      "all of the above"
    ],
    "a": 3,
    "e": "Các yếu tố liên quan nhau khi phân bổ bit địa chỉ: số chế độ địa chỉ, số toán hạng, thanh ghi hay bộ nhớ, số tập thanh ghi, khoảng địa chỉ, độ mịn địa chỉ ⇒ cả ba lựa chọn đều đúng.",
    "s": "On Tap CEA201, câu 99",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 99
  },
  {
    "q": "INT 21h / AH=1 is __________",
    "o": [
      "write character from standard input, entry is stored in AL.",
      "read character from standard input, with echo, result is stored in AL.",
      "write character from standard input, entry is stored in AH.",
      "read character from standard input, with echo, result is stored in AH."
    ],
    "a": 1,
    "e": "Hàm DOS INT 21h, AH = 1: đọc một ký tự từ bàn phím (standard input) có hiện lên màn hình (echo), mã ASCII của ký tự được trả về trong AL. AH chỉ dùng để chọn số hàm.",
    "s": "On Tap CEA201, câu 103",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Hợp ngữ",
    "sourceId": 103
  },
  {
    "q": "In a system without virtual memory, the effective address is a virtual address or a register.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Không có bộ nhớ ảo thì EA là địa chỉ bộ nhớ chính hoặc một thanh ghi. Chỉ khi có bộ nhớ ảo thì EA mới là địa chỉ ảo (hoặc thanh ghi).",
    "s": "On Tap CEA201, câu 110",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 110
  },
  {
    "q": "__________ has the advantage of large address space, however it has the disadvantage of multiple memory references.",
    "o": [
      "Indirect addressing",
      "Direct addressing",
      "Immediate addressing",
      "Stack addressing"
    ],
    "a": 0,
    "e": "Indirect addressing (EA = (A)): trường địa chỉ trỏ tới một ô nhớ chứa địa chỉ đầy đủ nên không gian địa chỉ lớn, nhưng phải truy cập bộ nhớ nhiều lần (lấy địa chỉ rồi mới lấy toán hạng).",
    "s": "On Tap CEA201, câu 127",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 127
  },
  {
    "q": "The principal advantage of __________ addressing is that it is a very simple form of addressing.",
    "o": [
      "displacement",
      "register",
      "stack",
      "direct"
    ],
    "a": 3,
    "e": "Sách viết: “A very simple form of addressing is direct addressing” — trường địa chỉ chứa luôn địa chỉ hiệu dụng (EA = A), chỉ cần một lần truy cập bộ nhớ và không phải tính toán gì.",
    "s": "On Tap CEA201, câu 140",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 140
  },
  {
    "q": "The advantage of __________ is that no memory reference other than the instruction fetch is required to obtain the operand.",
    "o": [
      "direct addressing",
      "immediate addressing",
      "register addressing",
      "stack addressing"
    ],
    "a": 1,
    "e": "Immediate addressing: toán hạng nằm ngay trong lệnh (operand = A), nên ngoài lần nạp lệnh ra không cần truy cập bộ nhớ để lấy toán hạng.",
    "s": "On Tap CEA201, câu 148",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 148
  },
  {
    "q": "The only form of addressing for branch instructions is __________ addressing.",
    "o": [
      "register",
      "relative",
      "base",
      "immediate"
    ],
    "a": 3,
    "e": "Theo sách, trên ARM lệnh rẽ nhánh chỉ dùng immediate addressing: lệnh chứa sẵn giá trị 24 bit, dịch trái 2 bit rồi cộng với PC để ra địa chỉ đích (nên thực chất là địa chỉ tương đối).",
    "s": "On Tap CEA201, câu 151",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 151
  },
  {
    "q": "The disadvantage of immediate addressing is that the size of the number is restricted to the size of the address field.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Toán hạng immediate nằm trong trường địa chỉ, mà trường này thường ngắn hơn độ dài từ ⇒ độ lớn của số bị giới hạn.",
    "s": "On Tap CEA201, câu 153",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 153
  },
  {
    "q": "The advantages of __________ addressing are that only a small address field is needed in the instruction and no time-consuming memory references are required.",
    "o": [
      "indirect",
      "displacement",
      "direct",
      "register"
    ],
    "a": 3,
    "e": "Register addressing: trường địa chỉ chỉ cần vài bit để chọn thanh ghi, và toán hạng lấy ngay từ thanh ghi nên không phải truy cập bộ nhớ. Nhược điểm: không gian địa chỉ rất hạn chế.",
    "s": "On Tap CEA201, câu 182",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 182
  },
  {
    "q": "Register addressing is similar to direct addressing with the only difference being that the address field refers to a register rather than a main memory address.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Register addressing giống direct addressing (EA = R thay vì EA = A), chỉ khác là trường địa chỉ trỏ tới thanh ghi chứ không trỏ tới ô nhớ.",
    "s": "On Tap CEA201, câu 207",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 207
  },
  {
    "q": "The effective address of __________ is\nEA = A + (R)\n(R) ← (R) + 1",
    "o": [
      "relative addressing",
      "autoindexing",
      "postindexing",
      "preindexing"
    ],
    "a": 1,
    "e": "Autoindexing: dùng indexing (EA = A + (R)) rồi tự động tăng thanh ghi chỉ số sau mỗi lần truy cập — tiện khi duyệt mảng trong vòng lặp.",
    "s": "On Tap CEA201, câu 254",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 254
  },
  {
    "q": "In MASM32, which OPCODE is used to compare two values?",
    "o": [
      "COM",
      "CMP",
      "IF ... ELSE",
      "TEST"
    ],
    "a": 1,
    "e": "Lệnh CMP so sánh hai giá trị bằng cách trừ (không lưu kết quả) và đặt cờ để lệnh nhảy có điều kiện (JE, JG, JL…) dùng. TEST thì làm phép AND để kiểm tra bit; IF … ELSE không phải opcode.",
    "s": "On Tap CEA201, câu 255",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Hợp ngữ",
    "sourceId": 255
  },
  {
    "q": "Which addressing mode allows direct specification of the memory address within the instruction?",
    "o": [
      "Direct",
      "Indirect",
      "Register Indirect",
      "Displacement"
    ],
    "a": 0,
    "e": "Direct addressing: trường địa chỉ trong lệnh chứa trực tiếp địa chỉ ô nhớ của toán hạng (EA = A).",
    "s": "On Tap CEA201, câu 306",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 306
  },
  {
    "q": "In MASM32, which command is incorrect?",
    "o": [
      "ADD EAX, a",
      "ADD EAX, EBX",
      "ADD a, EAX",
      "ADD a, b"
    ],
    "a": 3,
    "e": "Lệnh x86 không cho phép cả hai toán hạng đều là ô nhớ ⇒ ADD a, b sai. Phải đưa một biến vào thanh ghi trước, ví dụ MOV EAX, b rồi ADD a, EAX.",
    "s": "On Tap CEA201, câu 308",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Hợp ngữ",
    "sourceId": 308
  },
  {
    "q": "The effective address of Register indirect addressing mode is __________.",
    "o": [
      "EA = R",
      "EA = (R)",
      "EA = (R) + A",
      "EA = (R) + (A)"
    ],
    "a": 1,
    "e": "Register indirect: thanh ghi R chứa địa chỉ của toán hạng ⇒ EA = (R). EA = R là register addressing; EA = A + (R) là displacement.",
    "s": "On Tap CEA201, câu 338",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 338
  },
  {
    "q": "What is the main difference between x86 and ARM instruction formats?",
    "o": [
      "x86 instructions are variable in length, while ARM instructions are fixed",
      "x86 instructions are fixed in length, while ARM instructions are variable",
      "Both x86 and ARM instructions are fixed in length",
      "Both x86 and ARM instructions are variable in length"
    ],
    "a": 0,
    "e": "Lệnh x86 có độ dài thay đổi (1 tới 15 byte, nhiều tiền tố và trường tùy chọn); lệnh ARM (tập lệnh ARM chuẩn) dài cố định 32 bit.",
    "s": "On Tap CEA201, câu 339",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 339
  },
  {
    "q": "Which of the following statement is correct about addressing modes?",
    "o": [
      "They define how the operands of an instruction are specified, including immediate, register, direct, and indirect addressing modes",
      "Addressing modes are irrelevant in computer architecture, and all instructions only operate on values stored in registers",
      "Addressing modes are limited to only immediate and direct modes; register and indirect addressing modes are not used in modern computer systems",
      "All instructions in computer architecture use indirect addressing modes, making it the only relevant mode for operand specification"
    ],
    "a": 0,
    "e": "Chế độ địa chỉ quy định cách xác định toán hạng của lệnh: immediate, direct, indirect, register, register indirect, displacement, stack… Các phát biểu còn lại đều cực đoan và sai.",
    "s": "On Tap CEA201, câu 356",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 356
  },
  {
    "q": "What does the x86 assembly instruction \"jmp label\" typically do?",
    "o": [
      "Jumps to the memory address stored in the label",
      "Jumps to the next instruction",
      "Jumps to the label if a specific condition is met",
      "Moves the label's address to the EIP register"
    ],
    "a": 3,
    "e": "JMP là lệnh nhảy không điều kiện: nạp địa chỉ của nhãn vào con trỏ lệnh EIP, nên lệnh tiếp theo được thực thi là lệnh tại nhãn. Nhảy theo điều kiện là JE/JNE/JG…",
    "s": "On Tap CEA201, câu 385",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Hợp ngữ",
    "sourceId": 385
  },
  {
    "q": "The effective address of __________ is EA=top of stack",
    "o": [
      "Immediate",
      "Direct",
      "Indirect",
      "Displacement",
      "Implicit"
    ],
    "a": 4,
    "e": "EA = đỉnh ngăn xếp là stack addressing, một dạng định địa chỉ ngầm (implicit/implied): lệnh không cần trường địa chỉ vì toán hạng mặc định nằm ở đỉnh ngăn xếp.",
    "s": "On Tap CEA201, câu 436",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 436
  },
  {
    "q": "What is the primary advantage of indirect addressing mode?",
    "o": [
      "Faster access to operands",
      "Ability to access a larger data set",
      "Flexibility in data location",
      "Reduced instruction size"
    ],
    "a": 1,
    "e": "Bảng tổng kết chế độ địa chỉ của Stallings ghi: indirect (EA = (A)) — ưu điểm chính là không gian địa chỉ lớn (large address space), nhược điểm là nhiều lần truy cập bộ nhớ ⇒ B. “Flexibility” là ưu điểm của displacement addressing.",
    "s": "On Tap CEA201, câu 460",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 460
  },
  {
    "q": "In the context of addressing modes with both indirect addressing and indexing, what is postindexing?",
    "o": [
      "Indexing is performed after the indirection",
      "Indexing is performed before the indirection",
      "Both indexing and indirection are avoided",
      "Indexing and indirection occur simultaneously"
    ],
    "a": 0,
    "e": "Postindexing: gián tiếp trước, cộng chỉ số sau: EA = (A) + (R). Preindexing thì cộng chỉ số trước rồi mới gián tiếp: EA = (A + (R)).",
    "s": "On Tap CEA201, câu 474",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 474
  },
  {
    "q": "In the MASM, how to receive numbers from user?",
    "o": [
      "Raw data from keyboard are string. The function sval(num-string) will convert num-string to signed number.",
      "Raw data from keyboard are string. The function str$(num-string) will convert num-string to signed number.",
      "Raw data from keyboard are string. The function chr$(num-string) will convert num-string to signed number.",
      "Raw data from keyboard are string. The function chr$(num-string) will convert num-string to unsigned number."
    ],
    "a": 0,
    "e": "Trong MASM32, dữ liệu nhập từ bàn phím là chuỗi; macro sval() đổi chuỗi số thành số nguyên có dấu (uval() cho số không dấu). str$() làm chiều ngược lại (số → chuỗi), chr$() chỉ tạo chuỗi ký tự.",
    "s": "On Tap CEA201, câu 478",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Hợp ngữ",
    "sourceId": 478
  },
  {
    "q": "Which type of instruction format is more flexible but can lead to inefficient use of memory?",
    "o": [
      "Fixed-Length Instruction Format",
      "Variable-Length Instruction Format",
      "Compact Instruction Format",
      "Standardized Instruction Format"
    ],
    "a": 1,
    "e": "Định dạng lệnh độ dài thay đổi linh hoạt (nhiều opcode, nhiều chế độ địa chỉ), nhưng phần cứng giải mã phức tạp hơn và có thể lãng phí bộ nhớ vì lệnh không khớp gọn với ranh giới từ.",
    "s": "On Tap CEA201, câu 485",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 485
  },
  {
    "q": "Indirect addressing, the length of the address field is usually greater than the word length, because unlimiting the address range.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Trường địa chỉ thường ngắn hơn độ dài từ (đó là hạn chế của direct addressing). Indirect addressing khắc phục bằng cách để trường địa chỉ trỏ tới một từ nhớ chứa địa chỉ đầy đủ ⇒ không gian địa chỉ 2^N với N là độ dài từ.",
    "s": "On Tap CEA201, câu 487",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Chế độ định địa chỉ",
    "sourceId": 487
  },
  {
    "q": "Assume an instruction set that uses a fixed 16-bit instruction length. Operand specifiers are 6 bits in length. What is the maximum number of one-operand instructions that can be supported?",
    "o": [
      "256",
      "512",
      "1024",
      "2048"
    ],
    "a": 2,
    "e": "Lệnh dài 16 bit, toán hạng chiếm 6 bit ⇒ còn 16 − 6 = 10 bit opcode ⇒ tối đa 2^10 = 1024 lệnh một toán hạng.",
    "s": "On Tap CEA201, câu 488",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Định dạng lệnh",
    "sourceId": 488
  },
  {
    "q": "Which instruction is used by MASM32 to return from a procedure?",
    "o": [
      "RET",
      "EXIT",
      "END",
      "RES"
    ],
    "a": 0,
    "e": "RET lấy địa chỉ trở về từ đỉnh ngăn xếp (do CALL đã cất) nạp vào EIP để quay lại chương trình gọi. END chỉ đánh dấu hết mã nguồn, không phải lệnh máy.",
    "s": "On Tap CEA201, câu 489",
    "chapter": "Chương 13: Tập lệnh: Chế độ địa chỉ & Định dạng",
    "topic": "Hợp ngữ",
    "sourceId": 489
  },
  {
    "q": "Pipelining is a means of introducing parallelism into the essentially sequential nature of a machine-instruction program.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Chương trình máy vốn chạy tuần tự từng lệnh; pipeline cho nhiều lệnh ở các giai đoạn khác nhau cùng chạy, tức là đưa song song vào một dòng lệnh tuần tự (ví dụ pipeline lệnh, xử lý vector).",
    "s": "On Tap CEA201, câu 21",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 21
  },
  {
    "q": "The predict-never-taken approach is the most popular of all the branch prediction methods.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng, câu này lấy nguyên văn từ sách. Predict never taken (luôn đoán không rẽ, cứ nạp lệnh tuần tự) đơn giản nhất nên được dùng phổ biến nhất trong các cách dự đoán rẽ nhánh.",
    "s": "On Tap CEA201, câu 43",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Rẽ nhánh & dự đoán",
    "sourceId": 43
  },
  {
    "q": "__________ registers may be used only to hold data and cannot be employed in the calculation of an address.",
    "o": [
      "General purpose",
      "Condition code",
      "Data",
      "Address"
    ],
    "a": 2,
    "e": "Data registers chỉ chứa dữ liệu, không dùng để tính địa chỉ toán hạng. Address registers thì dành cho việc định địa chỉ; general purpose dùng được cho cả hai.",
    "s": "On Tap CEA201, câu 44",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 44
  },
  {
    "q": "The __________ is a small cache memory associated with the instruction fetch stage of the pipeline.",
    "o": [
      "dynamic branch",
      "loop table",
      "branch history table",
      "flag"
    ],
    "a": 2,
    "e": "Branch history table là một cache nhỏ gắn với giai đoạn fetch, lưu địa chỉ lệnh rẽ nhánh, đích rẽ nhánh và vài bit lịch sử để dự đoán lần rẽ tới.",
    "s": "On Tap CEA201, câu 70",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Rẽ nhánh & dự đoán",
    "sourceId": 70
  },
  {
    "q": "__________ are a set of storage locations.",
    "o": [
      "Processors",
      "PSWs",
      "Registers",
      "Control units"
    ],
    "a": 2,
    "e": "Thanh ghi (registers) là tập các vị trí lưu trữ nhanh nằm ngay trong CPU. PSW chỉ là một thanh ghi trạng thái cụ thể.",
    "s": "On Tap CEA201, câu 74",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 74
  },
  {
    "q": "One of the major problems in designing an instruction pipeline is assuring a steady flow of in initial stages of the pipeline.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Khó khăn lớn nhất khi thiết kế pipeline lệnh là giữ cho dòng lệnh chảy đều vào các giai đoạn đầu; lệnh rẽ nhánh có điều kiện là thủ phạm chính làm đứt dòng này.",
    "s": "On Tap CEA201, câu 107",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Rẽ nhánh & dự đoán",
    "sourceId": 107
  },
  {
    "q": "The __________ stage includes ALU operations, cache access, and register update.",
    "o": [
      "decode",
      "execute",
      "fetch",
      "write back"
    ],
    "a": 1,
    "e": "Trong pipeline 5 giai đoạn của 80486 (Fetch, D1, D2, EX, WB), giai đoạn Execute gồm các phép toán ALU, truy cập cache và cập nhật thanh ghi. Write back chỉ ghi kết quả và cập nhật cờ.",
    "s": "On Tap CEA201, câu 111",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 111
  },
  {
    "q": "The allocation of control information between registers and memory are not considered to be issue.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Sách coi việc phân bổ thông tin điều khiển giữa thanh ghi và bộ nhớ là một vấn đề thiết kế — ví dụ để phần lớn bảng trạng thái trong bộ nhớ, chỉ giữ vài thanh ghi điều khiển.",
    "s": "On Tap CEA201, câu 155",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 155
  },
  {
    "q": "The cycle time of an instruction pipeline is the time needed to advance a set of instructions one stage through the pipeline.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Cycle time τ của pipeline là thời gian để đẩy một loạt lệnh tiến thêm một giai đoạn: τ = max(τ_i) + d (độ trễ giai đoạn chậm nhất cộng độ trễ chốt).",
    "s": "On Tap CEA201, câu 170",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 170
  },
  {
    "q": "A __________ is a small, very-high-speed memory maintained by the instruction fetch stage of the pipeline and containing the n most recently fetched instructions in sequence.",
    "o": [
      "delayed branch",
      "loop buffer",
      "branch prediction",
      "multiple stream"
    ],
    "a": 1,
    "e": "Loop buffer: bộ nhớ nhỏ, rất nhanh ở giai đoạn fetch, chứa n lệnh được nạp gần nhất. Nếu đích rẽ nhánh nằm trong buffer (vòng lặp ngắn) thì khỏi phải nạp lại từ bộ nhớ.",
    "s": "On Tap CEA201, câu 179",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Rẽ nhánh & dự đoán",
    "sourceId": 179
  },
  {
    "q": "__________ are bits set by the processor hardware as the result of operations.",
    "o": [
      "MIPS",
      "Condition codes",
      "Stacks",
      "PSWs"
    ],
    "a": 1,
    "e": "Condition codes (flags) là các bit do phần cứng bộ xử lý tự đặt theo kết quả phép toán (dương, âm, bằng 0, tràn…), để lệnh rẽ nhánh có điều kiện kiểm tra.",
    "s": "On Tap CEA201, câu 200",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 200
  },
  {
    "q": "A __________ hazard occurs when there is a conflict in the access of an operand location.",
    "o": [
      "resource",
      "data",
      "structural",
      "control"
    ],
    "a": 1,
    "e": "Data hazard: xung đột khi truy cập vị trí toán hạng — ví dụ lệnh sau đọc thanh ghi mà lệnh trước chưa ghi xong. Resource (structural) hazard là tranh chấp tài nguyên; control hazard do rẽ nhánh.",
    "s": "On Tap CEA201, câu 206",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 206
  },
  {
    "q": "Condition codes facilitate multiway branches.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Một ưu điểm của condition codes: các lệnh tính toán tự đặt cờ nên một phép so sánh có thể theo sau bởi nhiều lệnh rẽ nhánh (lớn hơn, bằng, nhỏ hơn…) ⇒ dễ làm rẽ nhánh nhiều hướng.",
    "s": "On Tap CEA201, câu 209",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 209
  },
  {
    "q": "A control hazard occurs when two or more instructions that are already in the pipeline need the same resource.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Hai lệnh trong pipeline cùng cần một tài nguyên là resource (structural) hazard. Control hazard (branch hazard) xảy ra khi pipeline đoán sai hướng rẽ nhánh và phải bỏ các lệnh đã nạp.",
    "s": "On Tap CEA201, câu 216",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 216
  },
  {
    "q": "How do data registers and address registers differ in some computer systems?",
    "o": [
      "Address registers can be employed in calculating operand addresses, while data registers hold data.",
      "Data registers are only used for stack-related operations",
      "Data registers are used for indexed addressing, while address registers are used for data storage",
      "Address registers are reserved for segmented addressing, while data registers are general-purpose"
    ],
    "a": 0,
    "e": "Ở một số máy, thanh ghi được tách riêng: address registers dùng để tính địa chỉ toán hạng, còn data registers chỉ chứa dữ liệu.",
    "s": "On Tap CEA201, câu 257",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 257
  },
  {
    "q": "Which registers can interact with the secondary storage?",
    "o": [
      "MAR",
      "PC",
      "IR",
      "R0",
      "All of the mentioned"
    ],
    "a": 0,
    "e": "Muốn lấy dữ liệu từ bộ nhớ (kể cả khi dữ liệu được nạp từ bộ nhớ phụ), CPU phải đặt địa chỉ vào MAR; PC, IR và các thanh ghi đa năng như R0 không tham gia truy cập bộ nhớ.",
    "s": "On Tap CEA201, câu 292",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 292
  },
  {
    "q": "Which registers can be assigned to a variety of functions by the programmer?",
    "o": [
      "Data registers",
      "General purpose registers",
      "Address registers",
      "Condition codes (flags)"
    ],
    "a": 1,
    "e": "Thanh ghi đa năng (general purpose registers) được lập trình viên dùng cho nhiều việc: chứa toán hạng, tính địa chỉ… Data/address registers và cờ có vai trò cố định hơn.",
    "s": "On Tap CEA201, câu 303",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 303
  },
  {
    "q": "When considering the number of pipeline stages, what trade-offs must be made in computer architecture?",
    "o": [
      "Trade-offs between potential speedup and increased cost and delays",
      "Trade-offs between software and hardware",
      "Trade-offs between speed and efficiency",
      "Trade-offs between branching and executing instructions with conditions"
    ],
    "a": 0,
    "e": "Thêm giai đoạn pipeline thì có thể tăng tốc, nhưng chi phí phần cứng tăng và độ trễ chốt giữa các giai đoạn cũng tăng. Vì vậy phải cân nhắc giữa mức tăng tốc tiềm năng với chi phí và độ trễ tăng thêm.",
    "s": "On Tap CEA201, câu 311",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 311
  },
  {
    "q": "Control and status registers are used by which entities to control the operation of the processor?",
    "o": [
      "Privileged, operating system programs",
      "Machine or assembly language programmers",
      "External I/O devices",
      "Main memory modules"
    ],
    "a": 0,
    "e": "Control and status registers (PC, IR, MAR, MBR, PSW…) dùng để điều khiển hoạt động của bộ xử lý; hầu hết chỉ các chương trình đặc quyền của HĐH mới được truy cập. Thanh ghi user-visible mới là thứ lập trình viên assembly dùng.",
    "s": "On Tap CEA201, câu 341",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 341
  },
  {
    "q": "Which of the following statement is correct in the context of Instruction Pipelining?",
    "o": [
      "Instruction Pipelining reduces the efficiency of instruction execution by introducing delays and dependencies between instructions",
      "Instruction Pipelining is only effective for specific types of instructions and has no impact on the overall efficiency of instruction execution",
      "Instruction Pipelining enhances efficiency by enabling simultaneous execution of multiple instructions in different stages, boosting overall throughput",
      "Instruction Pipelining improves efficiency by processing multiple instructions simultaneously, reducing execution time. However, it can face challenges like hazards, introducing delays and impacting overall performance"
    ],
    "a": 3,
    "e": "D là phát biểu đầy đủ nhất: pipeline xử lý chồng lấn nhiều lệnh nên giảm tổng thời gian chạy, nhưng gặp hazard (dữ liệu, tài nguyên, rẽ nhánh) gây trễ. C chỉ nêu mặt lợi; A, B sai.",
    "s": "On Tap CEA201, câu 342",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 342
  },
  {
    "q": "How many general-purpose registers are there in the Microprocessor Register Organizations of Intel 80386–Pentium 4 ?",
    "o": [
      "8",
      "16",
      "4",
      "12"
    ],
    "a": 0,
    "e": "Từ 80386 tới Pentium 4 có 8 thanh ghi đa năng 32 bit: EAX, EBX, ECX, EDX, ESP, EBP, ESI, EDI (ngoài ra còn 6 thanh ghi đoạn, EFLAGS và EIP).",
    "s": "On Tap CEA201, câu 371",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 371
  },
  {
    "q": "In the context of instruction execution, how is a product on an assembly line conceptually similar to an instruction in a pipeline?",
    "o": [
      "Both undergo multiple stages of production",
      "Both are executed in a single clock cycle",
      "Both follow a linear sequence of tasks",
      "Both are processed by the control unit"
    ],
    "a": 0,
    "e": "Pipeline giống dây chuyền lắp ráp: sản phẩm (lệnh) đi qua nhiều công đoạn, và ở mỗi thời điểm có nhiều sản phẩm nằm ở các công đoạn khác nhau.",
    "s": "On Tap CEA201, câu 372",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 372
  },
  {
    "q": "What is the primary purpose of index registers within the processor?",
    "o": [
      "To manage control signals",
      "To hold condition codes",
      "To facilitate indexed addressing",
      "To execute arithmetic operations"
    ],
    "a": 2,
    "e": "Index registers dùng cho indexed addressing: cộng chỉ số vào địa chỉ gốc để duyệt mảng, có thể tự tăng/giảm (autoindexing).",
    "s": "On Tap CEA201, câu 461",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 461
  },
  {
    "q": "What is a drawback of Instruction Pipelining?",
    "o": [
      "It increases the instruction throughput",
      "It allows more CPU throughput than a multicycle computer at a given ck rate",
      "It may increase latency due to the added overhead of the pipelining process itself",
      "It decreases the complexity of the computer system"
    ],
    "a": 2,
    "e": "Nhược điểm: mỗi lệnh phải đi qua các thanh ghi chốt giữa các giai đoạn nên độ trễ (latency) của từng lệnh có thể tăng, dù thông lượng tăng. A, B là ưu điểm; pipeline làm hệ thống phức tạp hơn chứ không đơn giản đi.",
    "s": "On Tap CEA201, câu 463",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Pipeline lệnh",
    "sourceId": 463
  },
  {
    "q": "Choose the register that controls sequential execution.",
    "o": [
      "Program counter (PC)",
      "Instruction register(IR)",
      "Memory address register (MAR)",
      "Memory buffer register (MBR)"
    ],
    "a": 0,
    "e": "PC (program counter) giữ địa chỉ lệnh kế tiếp và tự tăng sau mỗi lần nạp lệnh, nên quyết định thứ tự thực thi tuần tự. Lệnh rẽ nhánh thay đổi thứ tự bằng cách ghi đè PC.",
    "s": "On Tap CEA201, câu 498",
    "chapter": "Chương 14: Cấu trúc & Chức năng bộ xử lý",
    "topic": "Thanh ghi",
    "sourceId": 498
  },
  {
    "q": "It is possible to improve pipeline performance by automatically rearranging instructions within a program so that branch instructions occur later than actually desired.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Đó là kỹ thuật delayed branch: trình biên dịch tự sắp xếp lại lệnh để lệnh rẽ nhánh có hiệu lực muộn hơn một lệnh, lấp chỗ trống trong pipeline bằng lệnh có ích.",
    "s": "On Tap CEA201, câu 11",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Pipeline RISC",
    "sourceId": 11
  },
  {
    "q": "It is common for programs, both system and application, to continue to exhibit new bugs after years of operation.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Sách dùng ý này để nói phần mềm vừa đắt vừa kém tin cậy, lý do các ngôn ngữ bậc cao ngày càng mạnh — dẫn tới khoảng cách ngữ nghĩa (semantic gap) mà CISC và RISC giải quyết theo hai hướng khác nhau.",
    "s": "On Tap CEA201, câu 19",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Đặc điểm thực thi lệnh",
    "sourceId": 19
  },
  {
    "q": "The cache is capable of handling global as well as local variables.",
    "o": [
      "False",
      "True"
    ],
    "a": 1,
    "e": "Đúng. Khi so sánh tệp thanh ghi lớn với cache, sách nêu: cache xử lý được cả biến toàn cục lẫn biến cục bộ và tự phát hiện biến toàn cục hay dùng, còn cửa sổ thanh ghi chủ yếu phục vụ biến cục bộ.",
    "s": "On Tap CEA201, câu 28",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tệp thanh ghi lớn",
    "sourceId": 28
  },
  {
    "q": "When using graph coloring, nodes that share the same color cannot be assigned to the same [register]",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Trong graph coloring, hai nút nối với nhau (cùng sống một lúc) phải khác màu. Các nút cùng màu thì không xung đột nên được gán vào cùng một thanh ghi thật.",
    "s": "On Tap CEA201, câu 32",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tối ưu thanh ghi bằng trình biên dịch",
    "sourceId": 32
  },
  {
    "q": "The register file employs much shorter addresses than addresses for cache and memory.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Tệp thanh ghi chỉ có vài chục – vài trăm thanh ghi nên địa chỉ chỉ cần vài bit (5–8 bit), ngắn hơn nhiều so với địa chỉ 32 bit của cache và bộ nhớ.",
    "s": "On Tap CEA201, câu 36",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tệp thanh ghi lớn",
    "sourceId": 36
  },
  {
    "q": "The instruction location immediately following the delayed branch is referred to as the __________",
    "o": [
      "delay load",
      "delay file",
      "delay register",
      "delay slot"
    ],
    "a": 3,
    "e": "Vị trí lệnh ngay sau lệnh rẽ nhánh trễ gọi là delay slot. Lệnh đặt ở đây luôn được thực thi trước khi rẽ nhánh có hiệu lực, nên trình biên dịch cố đặt vào đó một lệnh có ích.",
    "s": "On Tap CEA201, câu 41",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Pipeline RISC",
    "sourceId": 41
  },
  {
    "q": "__________ determines the control and pipeline organization.",
    "o": [
      "Calculation",
      "Execution sequencing",
      "Operations performed",
      "Operands used"
    ],
    "a": 1,
    "e": "Ba khía cạnh của việc thực thi lệnh: operations performed quyết định chức năng CPU và cách tương tác với bộ nhớ; operands used quyết định tổ chức bộ nhớ và chế độ địa chỉ; execution sequencing quyết định tổ chức điều khiển và pipeline.",
    "s": "On Tap CEA201, câu 76",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Đặc điểm thực thi lệnh",
    "sourceId": 76
  },
  {
    "q": "Cache memory is a much faster memory than the register file.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Tệp thanh ghi nằm ngay trong CPU nên nhanh hơn cache; đó chính là lý do RISC dùng nhiều thanh ghi để giữ các toán hạng hay dùng.",
    "s": "On Tap CEA201, câu 79",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tệp thanh ghi lớn",
    "sourceId": 79
  },
  {
    "q": "__________ instructions are used to position quantities in registers temporarily for computational operations.",
    "o": [
      "Load-and-store",
      "Window",
      "Complex",
      "Branch"
    ],
    "a": 0,
    "e": "Trong RISC, phép tính chỉ làm trên thanh ghi; lệnh load/store là lệnh duy nhất truy cập bộ nhớ, dùng để đưa dữ liệu vào thanh ghi (và cất ra) phục vụ tính toán.",
    "s": "On Tap CEA201, câu 82",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Kiến trúc RISC",
    "sourceId": 82
  },
  {
    "q": "A tactic similar to the delayed branch is the __________, which can be used on LOAD instructions",
    "o": [
      "delayed load",
      "delayed program",
      "delayed slot",
      "delayed register"
    ],
    "a": 0,
    "e": "Delayed load: thanh ghi đích của lệnh LOAD bị khoá, CPU tiếp tục chạy các lệnh sau (không dùng thanh ghi đó) cho tới khi dữ liệu về — tương tự ý tưởng delayed branch.",
    "s": "On Tap CEA201, câu 94",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Pipeline RISC",
    "sourceId": 94
  },
  {
    "q": "The register file is on the same chip as the ALU and control unit.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Tệp thanh ghi nhỏ về vật lý, nằm cùng chip với ALU và khối điều khiển, nên là nơi lưu trữ nhanh nhất — nhanh hơn cả cache và bộ nhớ chính.",
    "s": "On Tap CEA201, câu 134",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tệp thanh ghi lớn",
    "sourceId": 134
  },
  {
    "q": "A __________ instruction can be used to account for data and branch delays.",
    "o": [
      "SUB",
      "NOOP",
      "JUMP",
      "all of the above"
    ],
    "a": 1,
    "e": "Chèn lệnh NOOP (không làm gì) là cách đơn giản để bù cho độ trễ do phụ thuộc dữ liệu và do rẽ nhánh trong pipeline; trình biên dịch sau đó cố thay NOOP bằng lệnh có ích.",
    "s": "On Tap CEA201, câu 197",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Pipeline RISC",
    "sourceId": 197
  },
  {
    "q": "The major cost in the life cycle of a system is hardware.",
    "o": [
      "True",
      "False"
    ],
    "a": 1,
    "e": "Sai. Chi phí lớn nhất trong vòng đời một hệ thống là phần mềm, không phải phần cứng — lý do thúc đẩy các ngôn ngữ bậc cao ngày càng mạnh.",
    "s": "On Tap CEA201, câu 205",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Đặc điểm thực thi lệnh",
    "sourceId": 205
  },
  {
    "q": "Almost all RISC instructions use simple register addressing.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Đúng. Đặc trưng RISC: phép toán làm trên thanh ghi nên hầu hết lệnh dùng register addressing đơn giản; chỉ LOAD/STORE mới dùng thêm chế độ displacement hay PC-relative.",
    "s": "On Tap CEA201, câu 213",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Kiến trúc RISC",
    "sourceId": 213
  },
  {
    "q": "Which statement is incorrect about RISC and CISC architecture?",
    "o": [
      "CISC architecture is more convenient for programmers than RISC architecture.",
      "CISC architecture has more operands in a intruction compared to RISC architecture.",
      "CISC architecture has a more flexible instruction set than RISC architecture.",
      "CISC architecture requires more general-purpose registers than RISC architecture."
    ],
    "a": 3,
    "e": "Câu sai là D: chính RISC mới cần nhiều thanh ghi đa năng (thường ≥ 32, có cả register window) vì mọi phép toán làm trên thanh ghi. CISC có lệnh phức tạp, nhiều toán hạng, linh hoạt và thuận tiện cho lập trình viên hơn.",
    "s": "On Tap CEA201, câu 259",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "RISC vs CISC",
    "sourceId": 259
  },
  {
    "q": "In the concept of Register Windows, how many register groups are there?",
    "o": [
      "4",
      "3",
      "2",
      "No distinction"
    ],
    "a": 1,
    "e": "Mỗi cửa sổ thanh ghi chia thành 3 nhóm: parameter registers (chồng với cửa sổ của hàm gọi), local registers, và temporary registers (chồng với cửa sổ của hàm được gọi).",
    "s": "On Tap CEA201, câu 260",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tệp thanh ghi lớn",
    "sourceId": 260
  },
  {
    "q": "What is the main benefit of using RISC over CISC?",
    "o": [
      "RISC has more instructions and addressing modes than CISC",
      "RISC has faster instruction execution and simpler instruction decoding than CISC",
      "RISC has variable-length instruction formats and direct memory access than CISC",
      "RISC has more registers and pipelines than CISC"
    ],
    "a": 1,
    "e": "RISC có ít lệnh, lệnh đơn giản, độ dài cố định ⇒ giải mã đơn giản, thực thi nhanh (thường một lệnh mỗi chu kỳ) và dễ pipeline. Lệnh dài thay đổi và nhiều chế độ địa chỉ là đặc điểm của CISC.",
    "s": "On Tap CEA201, câu 261",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "RISC vs CISC",
    "sourceId": 261
  },
  {
    "q": "What does CISC stand for?",
    "o": [
      "Complex Instruction Set Computer",
      "Computer Instruction Set Complex",
      "Complex Instruction Summarize Computer",
      "Computer Instruction Summarize Complex"
    ],
    "a": 0,
    "e": "CISC = Complex Instruction Set Computer — máy tính có tập lệnh phức tạp; đối lập với RISC (Reduced Instruction Set Computer).",
    "s": "On Tap CEA201, câu 312",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "RISC vs CISC",
    "sourceId": 312
  },
  {
    "q": "What is one of the advantages of using a register file in computer architecture?",
    "o": [
      "Reduction in memory accesses, saving time",
      "More efficient use of space due to dynamic adaptation",
      "Efficient handling of both local and global variables",
      "Easier management of cache residency"
    ],
    "a": 0,
    "e": "Giữ các toán hạng hay dùng trong tệp thanh ghi giúp giảm số lần truy cập bộ nhớ nên tiết kiệm thời gian. B, C, D là ưu điểm của cache khi so với tệp thanh ghi.",
    "s": "On Tap CEA201, câu 313",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Tệp thanh ghi lớn",
    "sourceId": 313
  },
  {
    "q": "How does pipelining in a RISC architecture handle branch instruction?",
    "o": [
      "By using NOOP instructions inserted by the compiler or assembler",
      "By eliminating branch instructions from the instruction stream",
      "By executing branch instructions in a separate pipeline",
      "By delaying all instructions until branch instructions are executed"
    ],
    "a": 0,
    "e": "Trong pipeline RISC, trình biên dịch hoặc trình hợp dịch chèn lệnh NOOP sau lệnh rẽ nhánh (rồi cố thay bằng lệnh có ích — delayed branch), thay vì bắt phần cứng phải dừng pipeline.",
    "s": "On Tap CEA201, câu 314",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Pipeline RISC",
    "sourceId": 314
  },
  {
    "q": "What type of addressing is primarily used by almost all RISC instructions?",
    "o": [
      "Immediate addressing",
      "Register addressing",
      "Indirect addressing",
      "Direct addressing"
    ],
    "a": 1,
    "e": "Hầu hết lệnh RISC dùng register addressing vì phép toán chỉ làm trên thanh ghi; chỉ LOAD/STORE mới truy cập bộ nhớ.",
    "s": "On Tap CEA201, câu 434",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Kiến trúc RISC",
    "sourceId": 434
  },
  {
    "q": "Which of the following describes a RISC (Reduced Instruction Set Computer) architecture?",
    "o": [
      "Many complex instructions",
      "Fixed instruction length",
      "Extensive use of memory addressing modes",
      "Emphasis on multi-tasking capabilities"
    ],
    "a": 1,
    "e": "RISC có tập lệnh ít và đơn giản, độ dài lệnh cố định (thường 32 bit), ít chế độ địa chỉ. Nhiều lệnh phức tạp và nhiều chế độ địa chỉ bộ nhớ là đặc điểm của CISC.",
    "s": "On Tap CEA201, câu 438",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Kiến trúc RISC",
    "sourceId": 438
  },
  {
    "q": "Choose an INCORRECT statement about high-level programming languages (HLLs).",
    "o": [
      "HLLs support directives for accessing the CPU's registers.",
      "HLLs allow the programmer to express algorithms more concisely.",
      "HLLs allow the compiler to take care of details that are not important in the programmer’s expression of algorithms.",
      "HLLs often support the use of structured programming and/or object-oriented design."
    ],
    "a": 0,
    "e": "Câu sai là A: ngôn ngữ bậc cao che giấu thanh ghi CPU; truy cập trực tiếp thanh ghi là việc của hợp ngữ. B, C, D đúng là các ưu điểm của HLL mà sách nêu.",
    "s": "On Tap CEA201, câu 439",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Đặc điểm thực thi lệnh",
    "sourceId": 439
  },
  {
    "q": "What is a primary disadvantage of CISC (Complex Instruction Set Computer) architectures?",
    "o": [
      "Increased implementation complexity",
      "Limited instruction set",
      "Slower execution due to complex instructions",
      "Higher energy consumption"
    ],
    "a": 2,
    "e": "Lệnh CISC phức tạp cần nhiều chu kỳ và bộ giải mã/vi chương trình phức tạp, nên thực thi chậm hơn — kể cả các lệnh đơn giản cũng bị kéo chậm theo. Đó là lý do RISC ra đời.",
    "s": "On Tap CEA201, câu 464",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "RISC vs CISC",
    "sourceId": 464
  },
  {
    "q": "In various statement types in a high-level programming language, what is not the most common statement?",
    "o": [
      "GOTO statement.",
      "IF statement.",
      "CLOOP statement.",
      "CALL procedure statement."
    ],
    "a": 0,
    "e": "Các nghiên cứu về tần suất câu lệnh trong chương trình bậc cao (bảng trong chương RISC) cho thấy phép gán, IF, CALL, LOOP chiếm phần lớn, còn GOTO hiếm khi xuất hiện.",
    "s": "On Tap CEA201, câu 477",
    "chapter": "Chương 15: Máy tính tập lệnh rút gọn (RISC)",
    "topic": "Đặc điểm thực thi lệnh",
    "sourceId": 477
  },
  {
    "q": "A __________ architecture is one that makes use of more, and more fine-grained pipeline stages.",
    "o": [
      "parallel",
      "superpipelined",
      "superscalar",
      "hybrid"
    ],
    "a": 1,
    "e": "Superpipelined: chia pipeline thành nhiều giai đoạn hơn và mịn hơn để mỗi giai đoạn chỉ tốn nửa chu kỳ clock. Superscalar thì nhân bản các pipeline để chạy song song nhiều lệnh.",
    "s": "On Tap CEA201, câu 160",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 160
  },
  {
    "q": "What is the benefit of using a superscalar organization over a scalar organization?",
    "o": [
      "It increases the instruction throughput and improves the performance",
      "It reduces the power consumption and the heat dissipation",
      "It simplifies the instruction set and the compiler design",
      "All of the mentioned",
      "None of the mentioned"
    ],
    "a": 0,
    "e": "Superscalar có nhiều pipeline độc lập nên phát nhiều lệnh mỗi chu kỳ ⇒ tăng thông lượng lệnh, tăng hiệu năng. Cái giá là phần cứng phức tạp hơn và tốn điện hơn, chứ không làm tập lệnh đơn giản đi.",
    "s": "On Tap CEA201, câu 262",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 262
  },
  {
    "q": "What does the term \"instruction-level parallelism\" refer to in computer architecture?",
    "o": [
      "The degree to which instructions in a program can be executed in parallel",
      "The number of processor cores in a multi-core CPU with multiple resources",
      "The complexity of the instruction set architecture",
      "The length of an instruction cycle with high level programing language"
    ],
    "a": 0,
    "e": "Instruction-level parallelism (ILP) là mức độ mà các lệnh của một chương trình có thể thực thi song song (xen kẽ), phụ thuộc vào phụ thuộc dữ liệu, phụ thuộc thủ tục và xung đột tài nguyên giữa các lệnh.",
    "s": "On Tap CEA201, câu 263",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Song song mức lệnh",
    "sourceId": 263
  },
  {
    "q": "To enhance performance in a superscalar processor, which method(s) should we apply?",
    "o": [
      "Duplication of resources.",
      "Out-of-order issue.",
      "Renaming registers",
      "All of the mentioned."
    ],
    "a": 3,
    "e": "Các kỹ thuật tăng hiệu năng superscalar: nhân bản tài nguyên (nhiều ALU, nhiều cổng đọc/ghi), phát lệnh không theo thứ tự (out-of-order issue) và đổi tên thanh ghi để loại bỏ phụ thuộc giả ⇒ dùng cả ba.",
    "s": "On Tap CEA201, câu 264",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 264
  },
  {
    "q": "__________ is (are) determined by the number of instructions that can be fetched and executed at the same time (the number of parallel pipelines) and by the speed and sophistication of the mechanisms that the processor uses to find independent instructions.",
    "o": [
      "Instruction-level parallelism",
      "Machine parallelism",
      "Both instruction-level parallelism and machine parallelism",
      "None of the mentioned"
    ],
    "a": 1,
    "e": "Machine parallelism là khả năng của bộ xử lý: số lệnh nạp và thực thi được cùng lúc (số pipeline) và độ tinh vi của cơ chế tìm lệnh độc lập. ILP thì là tính chất của chương trình.",
    "s": "On Tap CEA201, câu 315",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Song song mức lệnh",
    "sourceId": 315
  },
  {
    "q": "In SuperScalar computer architecture, the primary goal of utilizing multiple processors concurrently is to",
    "o": [
      "Increase processing speed by increasing CPU frequency.",
      "Improve performance by executing more than one instruction per machine cycle.",
      "Reduce the size of the CPU to conserve energy.",
      "Enhance computational power by increasing the number of CPU cores."
    ],
    "a": 1,
    "e": "Mục tiêu của superscalar: dùng nhiều đơn vị thực thi/pipeline độc lập để thực thi nhiều hơn một lệnh mỗi chu kỳ máy. Tăng tần số hay tăng số lõi là hướng khác.",
    "s": "On Tap CEA201, câu 359",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 359
  },
  {
    "q": "__________ there are multiple functional units, each of which is implemented as a pipeline.",
    "o": [
      "Scalar",
      "Superpipelined",
      "Superscalar",
      "Vector"
    ],
    "a": 2,
    "e": "Superscalar: có nhiều đơn vị chức năng, mỗi đơn vị là một pipeline, nên nhiều lệnh được thực thi song song trên các pipeline khác nhau.",
    "s": "On Tap CEA201, câu 373",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 373
  },
  {
    "q": "What role does branch prediction play in superscalar processors?",
    "o": [
      "It reduces the need for registers",
      "It prevents the execution of any branches",
      "It minimizes pipeline stalling by guessing the paths of branches",
      "It reduces the number of functional units required"
    ],
    "a": 2,
    "e": "Dự đoán rẽ nhánh đoán trước hướng đi của lệnh rẽ nhánh để nạp và thực thi lệnh tiếp theo sớm, giảm việc pipeline bị dừng — càng quan trọng khi mỗi chu kỳ phát nhiều lệnh.",
    "s": "On Tap CEA201, câu 440",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 440
  },
  {
    "q": "What is the primary method used to cope with storage conflicts in registers?",
    "o": [
      "Increasing the size of the instruction set",
      "Register renaming",
      "Using shared memory",
      "Using technique of out-of-order issue with out-of-order completion"
    ],
    "a": 1,
    "e": "Xung đột lưu trữ (phụ thuộc giả WAR, WAW) xảy ra khi nhiều lệnh dùng chung tên thanh ghi. Cách xử lý chính là đổi tên thanh ghi (register renaming): phần cứng cấp phát thanh ghi vật lý mới cho mỗi giá trị.",
    "s": "On Tap CEA201, câu 465",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Song song mức lệnh",
    "sourceId": 465
  },
  {
    "q": "What is a scalar instruction?",
    "o": [
      "An instruction in which all operands must be single values.",
      "An instruction in which all operands must be groups such as arrays.",
      "An instruction in which all operands can be single values or groups.",
      "An instruction in which has no operand."
    ],
    "a": 0,
    "e": "Lệnh vô hướng (scalar) thao tác trên các toán hạng là giá trị đơn (một số nguyên, một số thực). Lệnh vector mới thao tác trên cả mảng.",
    "s": "On Tap CEA201, câu 466",
    "chapter": "Chương 16: Song song mức lệnh & Siêu vô hướng",
    "topic": "Superscalar & superpipeline",
    "sourceId": 466
  },
  {
    "q": "How many common classifications of parallel systems are there as proposed by Flynn?",
    "o": [
      "2",
      "3",
      "4",
      "5"
    ],
    "a": 2,
    "e": "Flynn phân loại theo số dòng lệnh và dòng dữ liệu, được 4 loại: SISD, SIMD, MISD, MIMD.",
    "s": "On Tap CEA201, câu 265",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Phân loại Flynn",
    "sourceId": 265
  },
  {
    "q": "How does multithreading improve the performance of a processor?",
    "o": [
      "It increases the instruction-level parallelism by issuing multiple instructions from different threads in the same cycle",
      "It increases the thread-level parallelism by executing multiple threads on different cores or processors",
      "It increases the utilization of the processor resources by hiding the latency of long-latency events such as cache misses or branch mispredictions",
      "All of the mentioned"
    ],
    "a": 3,
    "e": "Đa luồng giúp tăng hiệu năng theo cả ba cách: phát lệnh của nhiều luồng trong cùng chu kỳ (SMT), chạy các luồng trên nhiều lõi (chip multiprocessing), và che độ trễ — khi một luồng chờ cache miss thì luồng khác chạy tiếp.",
    "s": "On Tap CEA201, câu 266",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Đa luồng",
    "sourceId": 266
  },
  {
    "q": "Which is the correct choice for the decription: \"A single machine instruction controls the simultaneous execution of a number of processing elements such as vector and array processors\"?",
    "o": [
      "Single instruction, single data (SISD)",
      "Single instruction, multiple data (SIMD)",
      "Multiple instruction, single data (MISD)",
      "Multiple instruction, multiple data (MIMD)"
    ],
    "a": 1,
    "e": "SIMD: một lệnh máy điều khiển nhiều phần tử xử lý cùng lúc, mỗi phần tử làm trên dữ liệu riêng — đó chính là vector processor và array processor.",
    "s": "On Tap CEA201, câu 316",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Phân loại Flynn",
    "sourceId": 316
  },
  {
    "q": "What is one advantage of Nonuniform Memory Access (NUMA) over Uniform Memory Access (UMA)?",
    "o": [
      "NUMA provides each processor with its own local memory, reducing memory access times",
      "NUMA allows all processors to access the same memory location simultaneously",
      "NUMA is easier to implement than UMA",
      "NUMA provides limited memory capacity"
    ],
    "a": 0,
    "e": "Trong NUMA, mỗi bộ xử lý (node) có bộ nhớ cục bộ riêng; truy cập bộ nhớ cục bộ nhanh hơn nhiều so với truy cập qua node khác, nên hệ thống mở rộng được mà vẫn giữ thời gian truy cập thấp. Đổi lại NUMA khó hiện thực hơn UMA.",
    "s": "On Tap CEA201, câu 317",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "NUMA & cluster",
    "sourceId": 317
  },
  {
    "q": "\"Multiple processors share a single memory or pool of memory by means of a shared bus or other interconnection mechanism; a distinguishing feature is that the memory access time to any region of memory is approximately the same for each processor\". Which concept does the statement belong to?",
    "o": [
      "Symmetric multiprocessor (SMP)",
      "Nonuniform memory access (NUMA)",
      "Cluster",
      "Single instruction, multiple data (SIMD)"
    ],
    "a": 0,
    "e": "Đó là định nghĩa SMP (symmetric multiprocessor): các bộ xử lý dùng chung bộ nhớ qua bus, và thời gian truy cập mọi vùng nhớ gần như như nhau với mọi bộ xử lý (UMA). NUMA thì thời gian truy cập phụ thuộc vùng nhớ.",
    "s": "On Tap CEA201, câu 343",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "SMP",
    "sourceId": 343
  },
  {
    "q": "Which architectural concept involves replicating register banks to facilitate the sharing of pipeline resources among multiple threads?",
    "o": [
      "Pipelining",
      "Superscalar",
      "Simultaneous multithreading",
      "Superpipelining"
    ],
    "a": 2,
    "e": "SMT (simultaneous multithreading) nhân bản các tệp thanh ghi để nhiều luồng dùng chung tài nguyên pipeline của một bộ xử lý superscalar, và lệnh của các luồng khác nhau được phát trong cùng một chu kỳ.",
    "s": "On Tap CEA201, câu 370",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Đa luồng",
    "sourceId": 370
  },
  {
    "q": "Which is the correct choice for the description: \"A single processor executes a single instruction stream to operate on data stored in a single memory. \"?",
    "o": [
      "Single instruction, single data (SISD)",
      "Single instruction, multiple data (SIMD)",
      "Multiple instruction, single data (MISD)",
      "Multiple instruction, multiple data (MIMD)"
    ],
    "a": 0,
    "e": "Một bộ xử lý chạy một dòng lệnh trên dữ liệu trong một bộ nhớ ⇒ SISD — máy đơn xử lý truyền thống.",
    "s": "On Tap CEA201, câu 441",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Phân loại Flynn",
    "sourceId": 441
  },
  {
    "q": "Which computing model is characterized by a large number of processors working on different parts of a problem simultaneously?",
    "o": [
      "Single instruction, single data (SISD)",
      "Single instruction, multiple data (SIMD)",
      "Multiple instruction, multiple data (MIMD)",
      "Multiple instruction, single data (MISD)"
    ],
    "a": 2,
    "e": "Nhiều bộ xử lý, mỗi cái chạy dòng lệnh riêng trên dữ liệu riêng để cùng giải các phần khác nhau của một bài toán ⇒ MIMD (SMP, cluster, NUMA).",
    "s": "On Tap CEA201, câu 467",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Phân loại Flynn",
    "sourceId": 467
  },
  {
    "q": "With respect to multi-threading technique, choose an INCORRECT statement.",
    "o": [
      "A thread is a dispatchable unit of work within a process.",
      "Each thread needs an individual program counter and stack pointer.",
      "Each thread has its own data area for a stack (to enable subroutine branching).",
      "A thread executes sequentially and interrupts cannot be allowed."
    ],
    "a": 3,
    "e": "Câu sai là D: luồng thực thi tuần tự nhưng có thể bị ngắt để bộ xử lý chuyển sang luồng khác. A, B, C đúng theo định nghĩa: luồng là đơn vị công việc có thể điều phối trong tiến trình, có PC, SP và vùng ngăn xếp riêng.",
    "s": "On Tap CEA201, câu 497",
    "chapter": "Chương 17: Xử lý song song",
    "topic": "Đa luồng",
    "sourceId": 497
  }
]);
