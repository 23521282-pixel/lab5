import React from 'react';

// Sử dụng React.memo để ngăn render lại không cần thiết (Bài 2.1)
const ListItem = React.memo(({ item, onDelete }) => {
  // console.log(`Rendering item ${item.id}`); // Bật dòng này nếu muốn soi log render

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '5px', 
      borderBottom: '1px solid #eee' 
    }}>
      <span>Item {item.id}: {item.content}</span>
      <button 
        onClick={() => onDelete(item.id)}
        style={{ background: '#ff4d4f', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
});

export default ListItem;