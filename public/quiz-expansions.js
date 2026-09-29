(() => {
  const additions = {
    MAE101: [
      ['Nguyên hàm của 2x là gì?', ['x²+C', '2x²+C', '2+C', '1/x+C'], 0, 'Lấy đạo hàm của x²+C được 2x; hằng số C có đạo hàm bằng 0.'],
      ['Nếu A có hai vectơ riêng độc lập trong R² thì điều nào đúng?', ['A chéo hóa được', 'A luôn là ma trận đơn vị', 'det(A)=0', 'Hai trị riêng phải bằng nhau'], 0, 'Hai vectơ riêng độc lập tạo ma trận cơ sở P khả nghịch, nên P⁻¹AP là ma trận chéo.'],
      ['Độ dốc tiếp tuyến của y=x² tại x=3 là?', ['3', '6', '9', '12'], 1, 'Đạo hàm y′=2x; thay x=3 được 6.']
    ],
    CEA201: [
      ['CPU 2 GHz thực hiện trung bình 2 chu kỳ mỗi lệnh. Tốc độ gần đúng là?', ['0,5 tỉ lệnh/s', '1 tỉ lệnh/s', '2 tỉ lệnh/s', '4 tỉ lệnh/s'], 1, '2 tỉ chu kỳ mỗi giây chia 2 chu kỳ mỗi lệnh bằng 1 tỉ lệnh mỗi giây, nếu CPI giữ ổn định.'],
      ['Trong chu trình lệnh, bước nào thường đưa lệnh từ bộ nhớ vào CPU?', ['Fetch', 'Decode', 'Execute', 'Write-back'], 0, 'Fetch lấy lệnh; các bước sau giải mã, thực thi và ghi kết quả tùy kiến trúc.'],
      ['Cache miss nghĩa là gì?', ['Dữ liệu tìm thấy trong cache', 'Dữ liệu không có ở cấp cache đang xét', 'CPU hết điện', 'Đĩa đã đầy'], 1, 'Miss buộc hệ thống tìm ở cấp thấp hơn, thường tốn thêm thời gian.'],
      ['Bộ nhớ nào thường mất dữ liệu khi tắt nguồn?', ['ROM', 'SSD', 'DRAM', 'Flash'], 2, 'DRAM là bộ nhớ bay hơi và cần làm tươi khi hoạt động.'],
      ['Vì sao SSD thường có truy cập ngẫu nhiên nhanh hơn HDD?', ['Không cần đầu đọc cơ di chuyển đến vị trí', 'Có dung lượng luôn lớn hơn', 'Không bao giờ có lỗi', 'Dùng băng từ'], 0, 'SSD không phải chờ chuyển động cơ học của đầu đọc và đĩa quay như HDD.'],
      ['Bộ xử lý cần bảo vệ vùng nhớ của tiến trình khác. Cơ chế nào giúp ánh xạ và kiểm tra quyền?', ['MMU cùng bảng trang', 'Bộ cộng ALU', 'Cổng XOR', 'DMA đơn lẻ'], 0, 'MMU dịch địa chỉ và kiểm tra quyền dựa trên cấu hình hệ điều hành.'],
      ['Số nhị phân 1011₂ bằng bao nhiêu ở hệ thập phân?', ['9', '10', '11', '12'], 2, '1×8+0×4+1×2+1×1=11.'],
      ['Số nguyên 8 bit có dấu theo bù hai có miền giá trị nào?', ['0 đến 255', '−127 đến 127', '−128 đến 127', '−128 đến 128'], 2, 'Một bit dấu trong biểu diễn bù hai cho miền từ −2⁷ đến 2⁷−1.'],
      ['Lệnh assembly dùng nhãn (label) chủ yếu để làm gì?', ['Đặt tên vị trí lệnh hoặc dữ liệu', 'Tăng dung lượng RAM', 'Thay CPU', 'Tự cấp nguồn'], 0, 'Assembler chuyển nhãn thành địa chỉ hoặc độ dời tương ứng.'],
      ['Pipeline cải thiện chủ yếu đại lượng nào khi dòng lệnh đủ dài?', ['Thông lượng lệnh', 'Dung lượng bộ nhớ', 'Số bit một byte', 'Điện áp nguồn'], 0, 'Nhiều giai đoạn xử lý các lệnh khác nhau đồng thời, tăng thông lượng sau khi pipeline đầy.'],
      ['Microprogrammed control tạo tín hiệu điều khiển từ đâu?', ['Các vi lệnh trong bộ nhớ điều khiển', 'Đĩa cứng người dùng', 'Màn hình', 'Cổng mạng'], 0, 'Vi lệnh mã hóa các bước điều khiển để thực hiện lệnh máy.'],
      ['Speedup theo Amdahl với 20% chương trình tuần tự không thể vượt quá bao nhiêu khi tăng vô hạn tài nguyên song song?', ['2 lần', '4 lần', '5 lần', '20 lần'], 2, 'Giới hạn là 1/0,2=5 lần vì phần tuần tự vẫn phải chạy.']
    ],
    PRF193: [
      ['Một chương trình biên dịch thành công nhưng tính sai tổng. Đây là lỗi gì?', ['Lỗi cú pháp', 'Lỗi logic', 'Lỗi liên kết bắt buộc', 'Không có lỗi'], 1, 'Chương trình chạy được nhưng thuật toán hoặc điều kiện cho kết quả sai.'],
      ['Vòng for(int i=0;i<3;i++) chạy thân vòng bao nhiêu lần?', ['2', '3', '4', 'Vô hạn'], 1, 'i nhận các giá trị 0, 1, 2; đến 3 thì điều kiện i<3 sai.'],
      ['Điều kiện if(x>=0) phân loại x=0 vào nhánh nào?', ['Nhánh đúng', 'Nhánh sai', 'Cả hai', 'Không nhánh nào'], 0, 'Dấu >= bao gồm trường hợp bằng 0.'],
      ['Trong chuỗi C, ký tự nào đánh dấu kết thúc?', ['Dấu cách', 'Dấu chấm', 'Ký tự null \\0', 'Xuống dòng'], 2, 'Chuỗi kiểu C phải có byte null kết thúc sau các ký tự nội dung.'],
      ['Con trỏ nullptr biểu thị điều gì?', ['Trỏ tới phần tử đầu', 'Không trỏ tới đối tượng nào', 'Trỏ tới bộ nhớ đã cấp phát', 'Là số nguyên 1'], 1, 'nullptr là giá trị con trỏ rỗng kiểu an toàn trong C++.'],
      ['Lớp BankAccount muốn ngăn sửa số dư tùy ý nên đặt số dư ở đâu?', ['private', 'public', 'global', 'macro'], 0, 'Đóng gói giữ trạng thái nội bộ và cung cấp phương thức kiểm tra hợp lệ.'],
      ['Để sắp xếp std::vector tăng dần, lời gọi nào phù hợp?', ['std::sort(v.begin(),v.end())', 'std::sort(v)', 'v.sort() cho mọi vector', 'delete v'], 0, 'std::sort nhận hai iterator phạm vi nửa mở [begin,end).'],
      ['Hai thread cùng sửa biến count bằng count++ không đồng bộ có nguy cơ gì?', ['Data race', 'Tự động nhân đôi tốc độ', 'Lỗi cú pháp', 'Tự động khóa'], 0, 'Phép tăng không bảo đảm nguyên tử; truy cập ghi chồng chéo thiếu đồng bộ gây data race.']
    ],
    SDI101m: [
      ['Dòng 2 mA chảy trong 3 s chuyển điện lượng bao nhiêu?', ['6 mC', '6 C', '1,5 mC', '0,67 C'], 0, 'Q=It=0,002×3=0,006 C=6 mC.'],
      ['Điện trường được quy ước theo chiều lực tác dụng lên điện tích thử nào?', ['Dương', 'Âm', 'Trung hòa', 'Bất kỳ không cần quy ước'], 0, 'E=F/q dùng điện tích thử dương để xác định chiều trường.'],
      ['Điện tích +1 µC đi từ 5 V đến 2 V có độ biến thiên thế năng là?', ['+3 µJ', '−3 µJ', '+7 µJ', '−7 µJ'], 1, 'ΔU=qΔV=1 µC×(2−5) V=−3 µJ.'],
      ['Điện trở 1 kΩ ở 5 V tiêu thụ công suất bao nhiêu?', ['5 mW', '25 mW', '5 W', '25 W'], 1, 'P=V²/R=25/1000 W=25 mW.'],
      ['Hai điện trở 3 kΩ và 6 kΩ song song có điện trở tương đương?', ['2 kΩ', '3 kΩ', '9 kΩ', '18 kΩ'], 0, '1/R=1/3+1/6 theo đơn vị kΩ, nên R=2 kΩ.'],
      ['Từ thông qua N vòng biến thiên sẽ tạo suất điện động theo định luật nào?', ['Faraday', 'Ohm', 'Coulomb', 'Gauss cho điện'], 0, 'Định luật Faraday: ε=−N dΦ_B/dt.'],
      ['Sóng điện từ 100 MHz trong chân không có bước sóng gần bằng?', ['0,3 m', '3 m', '30 m', '300 m'], 1, 'λ=c/f≈3×10⁸/10⁸=3 m.'],
      ['Trong tinh thể, nhiều mức năng lượng nguyên tử gần nhau tạo thành gì?', ['Dải năng lượng', 'Chỉ một quỹ đạo cổ điển', 'Một proton', 'Không có trạng thái'], 0, 'Sự tương tác giữa rất nhiều nguyên tử tạo các dải trạng thái cho phép.'],
      ['Đại lượng nào liên hệ với xác suất tìm thấy electron trong mô tả hàm sóng?', ['|ψ|²', 'ψ cộng 1', 'Chỉ điện tích hạt nhân', 'Tốc độ ánh sáng'], 0, '|ψ|² là mật độ xác suất sau khi chuẩn hóa hàm sóng.'],
      ['Bán dẫn vùng cấm trực tiếp thường thuận lợi hơn cho linh kiện nào?', ['LED', 'Điện trở dây đồng', 'Tụ gốm', 'Biến áp sắt'], 0, 'Tái hợp bức xạ trong vật liệu vùng cấm trực tiếp thường hiệu quả hơn.'],
      ['Ở cân bằng nhiệt không suy biến, tích n·p bằng?', ['nᵢ²', 'nᵢ', '0', 'n+p'], 0, 'Định luật tác dụng khối lượng cho n·p=nᵢ² tại cùng nhiệt độ.'],
      ['Dòng khuếch tán hạt tải cần yếu tố nào?', ['Gradient nồng độ', 'Luôn phải có B', 'Chỉ điện áp xoay chiều', 'Chỉ nhiệt độ bằng 0'], 0, 'Hạt tải khuếch tán từ nơi mật độ cao sang thấp.'],
      ['Photon 2 eV có bước sóng gần bao nhiêu trong chân không?', ['310 nm', '620 nm', '1240 nm', '2480 nm'], 1, 'λ(nm)≈1240/E(eV)=620 nm.'],
      ['Trong diode silicon, giá trị 0,7 V nên hiểu là gì?', ['Xấp xỉ ở một miền dòng', 'Hằng số tuyệt đối ở mọi dòng', 'Điện áp đánh thủng', 'Luôn là điện áp ngược'], 0, 'Sụt áp thuận phụ thuộc dòng, nhiệt độ và loại diode.'],
      ['Varactor thường khai thác đặc tính nào của tiếp giáp?', ['Điện dung đổi theo điện áp ngược', 'Điện trở luôn bằng 0', 'Phát ánh sáng', 'Ghi dữ liệu lâu dài'], 0, 'Điện áp ngược đổi bề rộng vùng nghèo và điện dung tiếp giáp.'],
      ['Tiếp xúc ohmic mong muốn có đặc tuyến gần dạng nào?', ['Dòng–áp tuyến tính hai chiều', 'Chỉ phát sáng', 'Dòng bằng 0 mọi điện áp', 'Chỉ chỉnh lưu một chiều'], 0, 'Tiếp xúc ohmic có điện trở tiếp xúc thấp và dẫn hai chiều trong miền làm việc.'],
      ['Với JFET kênh n, V_GS âm hơn thường làm dòng kênh thế nào?', ['Giảm', 'Tăng vô hạn', 'Không đổi tuyệt đối', 'Đổi sang quang điện'], 0, 'Phân cực ngược cổng mở rộng vùng nghèo, siết kênh.'],
      ['NPN ở miền khuếch đại thuận có tiếp giáp base–emitter thế nào?', ['Phân cực thuận', 'Phân cực ngược', 'Luôn hở mạch', 'Không có tiếp giáp'], 0, 'Base–emitter thuận tiêm hạt tải; base–collector ngược thu hạt tải.'],
      ['Bộ nhớ nào cần làm tươi định kỳ khi đang hoạt động?', ['DRAM', 'SRAM', 'Flash', 'ROM mặt nạ'], 0, 'Điện tích của ô DRAM rò dần nên phải được làm tươi.'],
      ['Công suất động CMOS xấp xỉ phụ thuộc điện áp nguồn như thế nào?', ['Tỉ lệ V²', 'Tỉ lệ 1/V', 'Không phụ thuộc V', 'Tỉ lệ V³ luôn chính xác'], 0, 'Mô hình P≈αCV²f cho thấy phụ thuộc bình phương điện áp nếu các yếu tố khác giữ nguyên.'],
      ['Chỉ số TOPS đủ để so sánh mọi chip AI không?', ['Không, cần biết độ chính xác và điều kiện đo', 'Có, luôn đầy đủ', 'Chỉ cần xem màu chip', 'Chỉ cần xem số transistor'], 0, 'TOPS phụ thuộc kiểu dữ liệu và điều kiện đo; hiệu năng ứng dụng còn bị giới hạn bởi bộ nhớ.']
    ]
  };
  for (const [code, rows] of Object.entries(additions)) {
    const source = `Câu tự luyện biên soạn theo nội dung ${code}`;
    window.QUIZZES[code].push(...rows.map(([q, o, a, e]) => ({ q, o, a, e, s: source })));
  }
})();
