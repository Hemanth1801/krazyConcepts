// pages/Checkout.jsx
import React from 'react';

export default function Checkout() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <input type="text" placeholder="Name" className="border p-2 w-full mb-4" />
      <input type="text" placeholder="Address" className="border p-2 w-full mb-4" />
      <input type="text" placeholder="Card Info" className="border p-2 w-full mb-4" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Pay Now</button>
    </div>
  );
}