import React, { useState, createContext, useContext } from 'react';

// 1. Tạo Context để chia sẻ state
const TabsContext = createContext();

// 2. Component Cha (Giữ state)
export default function Tabs({ children, defaultIndex = 0 }) {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
      <div className="tabs-container">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// 3. Các Component Con
const TabList = ({ children }) => {
  return <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>{children}</div>;
};

const Tab = ({ index, children }) => {
  const { activeTabIndex, setActiveTabIndex } = useContext(TabsContext);
  const isActive = activeTabIndex === index;

  return (
    <button
      onClick={() => setActiveTabIndex(index)}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        background: isActive ? '#007bff' : 'transparent',
        color: isActive ? 'white' : 'black',
        fontWeight: isActive ? 'bold' : 'normal',
      }}
    >
      {children}
    </button>
  );
};

const Panel = ({ index, children }) => {
  const { activeTabIndex } = useContext(TabsContext);
  
  // Chỉ render nếu index khớp với tab đang active
  if (activeTabIndex !== index) return null;

  return <div style={{ padding: '20px', background: '#f9f9f9' }}>{children}</div>;
};

// 4. Gán Component con vào Cha (Pattern Compound Component)
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;