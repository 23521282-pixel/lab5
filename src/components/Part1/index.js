import React from 'react';
import UserProfile from './UserProfile';
import ShoppingCart from './ShoppingCart';

export default function Part1() {
  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        Part 1: Complex State Management
      </h2>
      
      {/* Bài 1.1: The Fetch Machine */}
      <UserProfile />
      
      {/* Bài 1.2: The Global Store */}
      <ShoppingCart />
    </div>
  );
}