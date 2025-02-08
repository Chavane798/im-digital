"use client";

import { useState, useEffect } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:1337/api/im-digitals');
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p className="text-xl font-semibold text-gray-600">Carregando...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">I'm Digital</h1>
      {data.map((item) => (
        <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-4">{item.descicao}</p>
          <p className="text-gray-500">
            <strong className="font-semibold text-gray-700">Publicado em:</strong>{' '}
            {new Date(item.publishedAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
