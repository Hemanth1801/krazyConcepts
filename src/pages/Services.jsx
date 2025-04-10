// pages/Services.jsx
import React from 'react';

const services = [
  { id: 1, name: 'Custom Events booths', description: 'Event booths according to your requirements with some of our Krazy-ness.' },
  { id: 2, name: 'Custom Orders', description: 'Request something personalized with a touch of Krazy.' },
];

export default function Services() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Service Catalogue</h2>
      <ul className="space-y-4">
        {services.map(s => (
          <li key={s.id} className="p-4 border rounded shadow">
            <div className="font-bold">{s.name}</div>
            <div>{s.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
