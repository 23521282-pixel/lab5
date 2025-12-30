import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Kiểm tra rỗng
    if (!email || !password) {
      alert('Vui lòng nhập đầy đủ Email và Password!');
      return;
    }

    // 2. Kiểm tra định dạng Email bằng Regex
    // (Yêu cầu phải có ký tự @ và dấu chấm .)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert('Email không hợp lệ! (Ví dụ: abc@gmail.com)');
      return;
    }

    // Giả lập API call
    setTimeout(() => {
        setMessage('Welcome back, ' + email);
    }, 500);
  };

  return (
    // THAY ĐỔI UI: Dùng class "card" thay vì style inline cũ
    // Thêm style riêng để căn giữa form login cho đẹp
    <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3>Ex 4.1: Login Form</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com" 
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </div>
        
        {/* Nút bấm sẽ tự động nhận style từ CSS toàn cục */}
        <button type="submit">Submit</button>
      </form>

      {/* Thông báo thành công */}
      {message && (
        <p style={{ 
          color: 'green', 
          marginTop: '15px', 
          fontWeight: '600', 
          padding: '10px', 
          background: '#d1fae5', 
          borderRadius: '6px' 
        }}>
          {message}
        </p>
      )}
    </div>
  );
}