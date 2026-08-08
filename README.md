# egypt
# Trò chơi Visual Novel Ai Cập - Hướng dẫn tải lên GitHub và sử dụng

Dự án này là một game Visual Novel chủ đề Ai Cập cổ đại được xây dựng bằng HTML, CSS và JavaScript thuần. Dự án đã được thiết kế sẵn cơ chế tương thích di động (Responsive) và giao diện dự phòng (Fallback) hiển thị đẹp mắt ngay cả khi chưa có các file ảnh thực tế.

---

## 📂 Danh sách các File ảnh cần chuẩn bị

Để game hiển thị đúng hình ảnh bạn thiết kế, hãy lưu các file ảnh của bạn vào **cùng một thư mục** chứa file `index.html` với tên file chính xác như sau:

| Trang hiển thị | Tên file ảnh cần đặt | Mô tả hình ảnh |
| :--- | :--- | :--- |
| **Trang 1 (Trang chủ)** | `backgroundpage1.png` | Ảnh nền của trang chủ (Kim tự tháp, sa mạc...) |
| | `Logo.png` | Ảnh logo chính của trò chơi |
| | `buttonpage1.png` | Nút bấm bắt đầu game |
| **Trang 2 (Nói chuyện)** | `backgroundpage2.png` | Ảnh nền của cảnh đối thoại |
| | `characterimagepage2.png` | Ảnh nhân vật hướng dẫn đứng bên trái |
| | `scriptbackgroundpage2.png` | Nền cho hộp hội thoại kể chuyện ở dưới cùng |
| **Trang 3 (Câu hỏi)** | `backgroundpage3.png` | Ảnh nền của cảnh câu hỏi trắc nghiệm |
| | `characterimagepage3.png` | Ảnh nhân vật hỏi câu đố đứng bên trái |
| | `scriptbackgroundpage3.png` | Nền cho hộp chứa câu hỏi và các đáp án |
| | `answerbackground.png` | Nền cho các ô đáp án lựa chọn (A, B, C, D) |
| **Trang Thắng (Win)** | `backgroundwin.png` | Ảnh nền của cảnh thắng cuộc |
| | `congratsbutton.png` | Nút chúc mừng ở trên cùng (Nhấn vào sẽ bắn pháo giấy) |
| | `treasurechest.png` | Ảnh chiếc rương kho báu mở ra ở giữa |
| | `scriptbackgroundpage4.png` | Nền cho hộp hội thoại chúc mừng thắng cuộc ở dưới |
| **Trang Thua (Lose)** | `backgroundpage5.png` | Ảnh nền của cảnh thua cuộc |
| | `characterlose.png` | Ảnh nhân vật buồn bã/tức giận khi người chơi thua cuộc |
| | `scriptbackgroundpage5.png` | Nền cho hộp hội thoại báo thua cuộc |

*Lưu ý: Bạn nên sử dụng định dạng ảnh `.png` có nền trong suốt cho nhân vật, logo, nút bấm và rương kho báu để giao diện trông đẹp mắt nhất.*

---

## 🚀 Hướng dẫn đưa game lên GitHub Pages

Để chạy game trực tuyến miễn phí và chia sẻ cho bạn bè, hãy làm theo các bước dưới đây:

### Bước 1: Tạo Kho lưu trữ (Repository) mới trên GitHub
1. Truy cập [GitHub](https://github.com) và đăng nhập tài khoản của bạn.
2. Nhấn nút **New** (hoặc dấu cộng `+` ở góc phải rồi chọn **New repository**).
3. Đặt tên cho kho lưu trữ của bạn (ví dụ: `egyptian-visual-novel`).
4. Để chế độ **Public** (Công khai).
5. Không cần tích chọn các mục tạo README hay .gitignore tự động. Bấm **Create repository**.

### Bước 2: Tải code lên GitHub
1. Trong trang repository mới tạo, nhấn vào dòng chữ **"uploading an existing file"** dưới phần chỉ dẫn.
2. Kéo và thả 3 file sau từ máy tính của bạn vào trang web:
   - `index.html`
   - `style.css`
   - `script.js`
   - (Và các file ảnh bạn đã chuẩn bị bên trên).
3. Chờ các file tải lên xong, nhấn **Commit changes** ở dưới cùng.

### Bước 3: Kích hoạt GitHub Pages để chơi game
1. Đi tới tab **Settings** (Cài đặt) của repository đó trên thanh menu ngang.
2. Ở cột bên trái, tìm mục **Pages** (trong phần *Code and automation*).
3. Dưới mục **Build and deployment** -> **Source**, chọn **Deploy from a branch**.
4. Tại mục **Branch**, nhấp vào ô chọn đang để *None*, đổi thành **main** (hoặc `master` tùy theo tên nhánh của bạn) rồi chọn thư mục `/ (root)`.
5. Nhấn nút **Save**.
6. Chờ khoảng 1-2 phút, load lại trang. Bạn sẽ thấy một liên kết hiển thị ở trên đầu trang cài đặt Pages dưới dạng: `https://<tên-tài-khoản-github>.github.io/<tên-repo>/`. Click vào link đó là có thể chơi game ngay lập tức!

---

## 🛠️ Hướng dẫn tự thay đổi câu hỏi trong Code

Nếu bạn muốn thay đổi nội dung 10 câu hỏi hoặc chỉnh sửa đáp án:
1. Mở file `script.js` bằng bất kỳ trình soạn thảo văn bản nào (Notepad, VS Code...).
2. Tìm mảng `const questions = [...]` ở ngay đầu file.
3. Thay thế phần text trong dấu nháy kép `""` cho phù hợp:
   - `question`: Nội dung câu hỏi.
   - `answers`: Sửa lại chữ cho 4 đáp án A, B, C, D tương ứng.
4. Nếu thay đổi đáp án đúng, hãy sửa lại mảng `const correctAnswers = ['A', 'B', 'C', 'C', 'C', 'C', 'D', 'A', 'B', 'A'];` (đổi chữ cái tương ứng với vị trí câu hỏi từ 1 đến 10).
5. Lưu file lại và đẩy lên GitHub là game của bạn sẽ tự động cập nhật!
