

// pages/Login.jsx
import React from 'react';

export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
