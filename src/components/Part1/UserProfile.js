import React, { useReducer } from 'react';

// 1. Định nghĩa trạng thái khởi tạo
const initialState = {
  status: 'idle', // Các trạng thái: 'idle' | 'loading' | 'resolved' | 'rejected'
  data: null,
  error: null,
};

// 2. Reducer function xử lý chuyển đổi state
function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, status: 'loading', error: null };
      
    case 'FETCH_SUCCESS':
      // Challenge: Chỉ cho phép thành công nếu đang loading
      if (state.status === 'loading') {
        return { ...state, status: 'resolved', data: action.payload };
      }
      return state; // Bỏ qua nếu không phải đang loading (ví dụ user đã cancel)

    case 'FETCH_FAILURE':
      // Challenge: Chỉ báo lỗi nếu đang loading
      if (state.status === 'loading') {
        return { ...state, status: 'rejected', error: action.payload };
      }
      return state;

    default:
      return state;
  }
}

export default function UserProfile() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchUserData = () => {
    dispatch({ type: 'FETCH_INIT' });

    // Giả lập gọi API (ngẫu nhiên thành công hoặc thất bại)
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% cơ hội thành công

      if (isSuccess) {
        dispatch({ 
          type: 'FETCH_SUCCESS', 
          payload: { name: 'Tran Quoc Dai', email: 'dai@example.com' } 
        });
      } else {
        dispatch({ 
          type: 'FETCH_FAILURE', 
          payload: 'Server connection error!' 
        });
      }
    }, 1500); // Đợi 1.5 giây
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      <h3>Exercise 1.1: The Fetch Machine (useReducer)</h3>
      
      <div style={{ marginBottom: '10px' }}>
        Status: <strong>{state.status}</strong>
      </div>

      {state.status === 'loading' && <p>Loading data...</p>}
      
      {state.status === 'resolved' && (
        <div>
          <p>User: {state.data.name}</p>
          <p>Email: {state.data.data}</p>
        </div>
      )}

      {state.status === 'rejected' && (
        <p style={{ color: 'red' }}>Error: {state.error}</p>
      )}

      <button onClick={fetchUserData} disabled={state.status === 'loading'}>
        Fetch User Profile
      </button>
    </div>
  );
}