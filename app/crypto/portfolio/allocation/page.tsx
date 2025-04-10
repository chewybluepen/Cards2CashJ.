'use client';

import React, { useState, useEffect } from 'react';

interface AllocationData {
  name: string;
  amount: number;
  currency: string;
}

export default function AllocationPage() {
  const [data, setData] = useState<AllocationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/crypto/portfolio/allocation');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError('Error loading data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Portfolio Allocation</h1>
      {loading ? (
        <p>Loading allocation data...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : data.length > 0 ? (
        <ul className="list-disc pl-6">
          {data.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong>: {item.amount} {item.currency}
            </li>
          ))}
        </ul>
      ) : (
        <p>No allocation data available at the moment.</p>
      )}
    </main>
  );
}
