import React from 'react';

export default function Bomb() {
  // Chỉ ném lỗi khi component được render
  throw new Error('Boom! Component crashed.');
  //return <div>I will never render because I explode first.</div>;
}