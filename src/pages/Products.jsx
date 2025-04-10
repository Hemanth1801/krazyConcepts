
// pages/Products.jsx
import React from 'react';

const products = [
  { id: 1, name: 'Handmade Mug', price: '$15' },
  { id: 2, name: 'Wooden Spoon', price: '$8' },
];

export default function Products() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Product Catalogue</h2>
      <ul className="space-y-4">
        {products.map(p => (
          <li key={p.id} className="p-4 border rounded shadow">
            <div>{p.name}</div>
            <div>{p.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
