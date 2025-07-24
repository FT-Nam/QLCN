import React from 'react';

export default function HuongDanSuDung() {
  return (
    <div>
      <h2 style={{ color: '#111', fontSize: 28, fontWeight: 700, marginBottom: 18, marginTop: 0 }}>Hướng dẫn sử dụng</h2>
      <ol style={{ marginLeft: 18, marginBottom: 12, color: '#222', fontSize: 15 }}>
        <li><b>Đăng nhập hệ thống:</b> Sử dụng tài khoản và mật khẩu được cấp để truy cập. Nếu quên mật khẩu, sử dụng chức năng "Quên mật khẩu" hoặc liên hệ quản trị viên.</li>
        <li><b>Tra cứu học viên/cán bộ:</b> Vào mục <b>Tra cứu nhanh</b>, nhập từ khóa (họ tên, mã học viên,...) để tìm kiếm thông tin nhanh chóng.</li>
        <li><b>Quản lý hồ sơ học viên:</b> Vào <b>Hồ sơ học viên</b>, thực hiện thêm mới, chỉnh sửa, xóa hồ sơ. Có thể xuất file Excel/PDF danh sách học viên.</li>
        <li><b>Quản lý điều trị:</b> Vào <b>Điều trị</b>, thêm mới, chỉnh sửa, xem chi tiết quá trình điều trị, xuất file, xem biểu đồ tiến trình điều trị.</li>
        <li><b>Quản lý giáo dục, lao động trị liệu:</b> Vào <b>Giáo dục/Tư vấn</b> hoặc <b>Lao động trị liệu</b> để quản lý lớp học, điểm danh, đánh giá, phân công công việc, ghi nhận kết quả.</li>
        <li><b>Thăm gặp:</b> Vào <b>Thăm gặp</b> để đăng ký lịch, xác minh, duyệt lịch thăm, xuất danh sách thăm gặp.</li>
        <li><b>In biểu mẫu:</b> Vào <b>In biểu mẫu</b>, chọn loại giấy tờ, nhập thông tin cần thiết, xem trước và in hoặc xuất PDF.</li>
        <li><b>Báo cáo, thống kê:</b> Vào <b>Báo cáo</b> để xem các báo cáo tổng hợp, xuất file thống kê theo từng nghiệp vụ.</li>
        <li><b>Quản lý tài khoản:</b> Vào <b>Tài khoản</b> để đổi mật khẩu, cập nhật thông tin cá nhân.</li>
      </ol>
      <div style={{ color: '#444', fontSize: 15, marginTop: 8, fontStyle: 'italic' }}>
        <b>Lưu ý:</b>
        <ul style={{ marginLeft: 18, marginTop: 4, marginBottom: 4 }}>
          <li>Đảm bảo bảo mật tài khoản, không chia sẻ mật khẩu cho người khác.</li>
          <li>Thường xuyên sao lưu dữ liệu quan trọng.</li>
          <li>Liên hệ hỗ trợ kỹ thuật khi gặp sự cố: 1900 9999 - support@bocongan.gov.vn</li>
        </ul>
      </div>
    </div>
  );
} 