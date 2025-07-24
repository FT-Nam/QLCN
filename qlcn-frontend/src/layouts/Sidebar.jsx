import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/hoc-vien">Hồ sơ cai nghiện</NavLink></li>
          <li><NavLink to="/dieu-tri">Điều trị</NavLink></li>
          <li><NavLink to="/tien-luu-ky">Tiền lưu ký</NavLink></li>
          <li><NavLink to="/quan-trang">Quân trang</NavLink></li>
          <li><NavLink to="/giao-duc">Giáo dục tư vấn</NavLink></li>
          <li><NavLink to="/lao-dong">Lao động trị liệu</NavLink></li>
          <li><NavLink to="/tham-gap">Thăm gặp</NavLink></li>
          <li><NavLink to="/tai-khoan">Tài khoản</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 