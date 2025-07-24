import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/hoc-vien">Hồ sơ cai nghiện</NavLink></li>
          <li><NavLink to="/dieu-tri">Giáo dục tư vấn</NavLink></li>
          <li><NavLink to="/tien-luu-ky">Cán bộ nhân viên</NavLink></li>
          <li><NavLink to="/quan-trang">Tài sản</NavLink></li>
          <li><NavLink to="/giao-duc">Buồng phòng</NavLink></li>
          <li><NavLink to="/lao-dong">Vật tư y tế</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 