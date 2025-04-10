'use client';

import React, { useState, useEffect } from 'react';

const TaxSupport = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/tax-support'); // Replace with real endpoint
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error('Error loading tax support data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Tax Support</h1>
      {loading ? (
        <p>Loading tax information...</p>
      ) : data?.length ? (
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong>: {item.amount} {item.currency}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tax information available at the moment.</p>
      )}
    </main>
  );
};

export default TaxSupport;
