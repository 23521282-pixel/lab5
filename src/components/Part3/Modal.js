import React from 'react';
import ReactDOM from 'react-dom';

// Component Modal sử dụng Portal
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Render thẳng vào body thay vì cây DOM hiện tại
  return ReactDOM.createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)', // Mờ nền
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={onClose} // Đóng khi click ra ngoài
    >
      <div 
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          minWidth: '300px'
        }}
        onClick={(e) => e.stopPropagation()} // Ngăn click bên trong đóng modal
      >
        {children}
        <div style={{ marginTop: '10px', textAlign: 'right' }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.body // Điểm đích (Target) của Portal [cite: 102]
  );
};

export default Modal;