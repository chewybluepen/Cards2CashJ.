'use client';

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface AllocationData {
  name: string;
  amount: number;
  currency: string;
}

const AllocationPage: NextPage = () => {
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

  const brevity = true; // Sample logic condition
  const is = true; // Another sample condition
  const correct = true; // Yet another condition
  const and = true; // Another one for testing

  const someFunction = () => {
    if (brevity && is) {
      console.log("Brevity and is are true");
    }

    for (let i = 0; i < 1; i++) {
      console.log("Iteration:", i);
    }

    if (correct && and) {
      console.log("Correct and and are true");
    }
  };

  someFunction();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Portfolio Allocation</h1>
      {loading ? (
        <p>Loading allocation data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.length ? (
        <ul>
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
};

export default AllocationPage;
