import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import './App.css'; // QUAN TRỌNG: Import file CSS đã update để có layout 2 cột

// --- Import động (Lazy Loading) ---
const Part1 = lazy(() => import('./components/Part1'));
const Part2 = lazy(() => import('./components/Part2'));
const Part3 = lazy(() => import('./components/Part3'));
const Part4 = lazy(() => import('./components/Part4'));

function App() {
  return (
    <Router>
      {/* Wrapper chính dùng Flexbox (được định nghĩa trong .app-layout của CSS) */}
      <div className="app-layout">
        
        {/* Cột 1: Menu Dọc (Sidebar) */}
        <Navbar />
        
        {/* Cột 2: Khu vực hiển thị nội dung chính */}
        <div className="main-content">
          <Suspense fallback={<Loading />}> 
            <Routes>
              
              {/* --- TRANG CHỦ --- */}
              {/* Sử dụng class "centered-page" để căn giữa hoàn hảo */}
              <Route 
                path="/" 
                element={
                  <div className="centered-page">
                    <h1 style={{ fontSize: '2.5rem', color: '#2563eb', marginBottom: '10px' }}>
                      Welcome to Lab 5: React Advanced
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '600px' }}>
                      Select an exercise from the sidebar to start exploring.
                    </p>
                  </div>
                } 
              />

              {/* --- CÁC BÀI TẬP --- */}
              {/* Nội dung các Part sẽ tự động được căn giữa nhờ class .main-content */}
              <Route path="/part1" element={<Part1 />} />
              <Route path="/part2" element={<Part2 />} />
              <Route path="/part3" element={<Part3 />} />
              <Route path="/part4" element={<Part4 />} />
            
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;