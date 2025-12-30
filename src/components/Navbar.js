import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // Dùng class "sidebar" để nhận style menu dọc màu đen từ App.css
    <nav className="sidebar">
      <h2 style={{ color: 'white', marginBottom: '30px', paddingLeft: '10px', borderBottom: '1px solid #374151', paddingBottom: '10px' }}>
        Lab 5 Dashboard
      </h2>
      
      <div className="nav-links">
        {/* NavLink nhận vào hàm className để kiểm tra trạng thái isActive */}
        
        <NavLink 
          to="/" 
          end // "end" để đảm bảo Home chỉ sáng khi ở đúng trang chủ, không sáng lây sang trang con
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Home
        </NavLink>

        <NavLink 
          to="/part1" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Part 1 (State)
        </NavLink>

        <NavLink 
          to="/part2" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Part 2 (Perf)
        </NavLink>

        <NavLink 
          to="/part3" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Part 3 (Patterns)
        </NavLink>

        <NavLink 
          to="/part4" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Part 4 (Testing)
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;