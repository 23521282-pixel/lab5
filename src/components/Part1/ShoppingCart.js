import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, selectCartTax } from '../../store/cartSlice';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  
  // Lấy dữ liệu từ store
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  
  // Lấy dữ liệu từ Selector (Bài Challenge)
  const tax = useSelector(selectCartTax); 

  // Sản phẩm mẫu để test
  const PRODUCT = { id: 1, name: 'Laptop', price: 1000 };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h3>Exercise 1.2: Shopping Cart (Redux Toolkit)</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Product List</h4>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span>{PRODUCT.name} (${PRODUCT.price})</span>
          <button onClick={() => dispatch(addItem(PRODUCT))}>Add to Cart</button>
        </div>
      </div>

      <div style={{ background: '#f9f9f9', padding: '10px' }}>
        <h4>Your Cart</h4>
        {cartItems.length === 0 ? <p>Cart is empty</p> : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        
        <hr />
        <p>Subtotal: ${totalAmount}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <p><strong>Total: ${(totalAmount + tax).toFixed(2)}</strong></p>
        
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
}