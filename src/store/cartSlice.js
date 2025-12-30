import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],      // Danh sách sản phẩm
  totalAmount: 0, // Tổng tiền chưa thuế
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        // Nếu chưa có, thêm mới với quantity = 1
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        // Nếu có rồi, tăng số lượng
        existingItem.quantity++;
      }
      // Cập nhật tổng tiền
      state.totalAmount += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalAmount -= existingItem.price; // Trừ tiền
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    }
  },
});

// --- Challenge: Memoized Selector ---
// Tính thuế 10% (chỉ tính lại khi totalAmount thay đổi)
export const selectCartTax = createSelector(
  (state) => state.cart.totalAmount,
  (totalAmount) => totalAmount * 0.1
);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;