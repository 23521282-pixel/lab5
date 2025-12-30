import React, { useState } from 'react';
import Tabs from './Tabs';
import Modal from './Modal';

export default function Part3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Test Event Bubbling: Click trong Modal (vốn nằm ở body) vẫn kích hoạt hàm này
  const handleParentClick = () => {
    console.log('Parent Div Clicked! (Event Bubbling worked)'); // [cite: 103]
  };

  return (
    <div>
      <h2>Part 3: Advanced Design Patterns</h2>

      {/* --- Bài 3.1: Compound Tabs --- */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Ex 3.1: Compound Tabs</h3>
        {/* Người dùng có thể tùy ý sắp xếp cấu trúc */}
        <Tabs defaultIndex={0}>
          <Tabs.List>
            <Tabs.Tab index={0}>React</Tabs.Tab>
            <Tabs.Tab index={1}>Redux</Tabs.Tab>
            <Tabs.Tab index={2}>Vue (Why not?)</Tabs.Tab>
          </Tabs.List>
          
          <div style={{ borderTop: '2px solid blue' }}></div> {/* Chèn nội dung tùy ý vào giữa */}
          
          <Tabs.Panel index={0}>
            <p>React is a JavaScript library for building user interfaces.</p>
          </Tabs.Panel>
          <Tabs.Panel index={1}>
            <p>Redux is a predictable state container for JS apps.</p>
          </Tabs.Panel>
          <Tabs.Panel index={2}>
            <p>Vue is approachable, versatile and performant.</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <hr />

      {/* --- Bài 3.2: Portals --- */}
      <div onClick={handleParentClick} style={{ padding: '20px', background: '#eee' }}>
        <h3>Ex 3.2: Modal with Portals</h3>
        <p>Open Console to see Event Bubbling logs when clicking inside the Modal.</p>
        
        {/* Giả lập container bị hạn chế hiển thị */}
        <div style={{ 
          height: '100px', 
          overflow: 'hidden', // Thẻ này sẽ cắt cụt nội dung con tràn ra ngoài
          border: '2px dashed red',
          padding: '10px'
        }}>
          <p>This box has <code>overflow: hidden</code>.</p>
          <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
          
          {/* Modal được render ở đây nhưng dùng Portal nên thoát khỏi overflow: hidden */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>Hello from Portal!</h2>
            <p>I am rendered in <code>document.body</code>.</p>
            <button>Click me to test Bubbling</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}