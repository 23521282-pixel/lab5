import React, { useState, useMemo, useCallback } from 'react';
import ListItem from './ListItem';

// Hàm tạo danh sách giả 10,000 item
const generateItems = () => {
  console.log('Generating 10,000 items...');
  const items = [];
  for (let i = 0; i < 10000; i++) {
    items.push({ id: i, content: `Content for item ${i}` });
  }
  return items;
};

export default function Dashboard() {
  const [items, setItems] = useState(generateItems);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [filter, setFilter] = useState('');

  // --- Bài 2.1: useMemo ---
  // Chỉ tính toán lại danh sách khi 'items' hoặc 'filter' thay đổi
  // Không tính lại khi 'isDarkTheme' thay đổi -> Giảm lag
  const filteredItems = useMemo(() => {
    console.log('Sorting/Filtering list...');
    return items.filter(item => item.content.includes(filter));
  }, [items, filter]); 

  // --- Bài 2.2: useCallback ---
  // Giữ nguyên tham chiếu của hàm handleDelete giữa các lần render
  // Giúp React.memo ở ListItem hoạt động đúng
  const handleDelete = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  // Style cho theme
  const themeStyle = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#000',
    padding: '20px',
    minHeight: '500px'
  };

  return (
    <div style={themeStyle}>
      <h3>Exercise 2.1 & 2.2: Performance Engineering</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Toggle Theme (Current: {isDarkTheme ? 'Dark' : 'Light'})
        </button>
        <input 
          type="text" 
          placeholder="Filter items..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>

      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        {filteredItems.map(item => (
          <ListItem 
            key={item.id} 
            item={item} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}