"use client";

import React, { useState, useEffect } from "react";

// Reusable Spinner component for loading feedback
function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  );
}

// Define the allocation data interface
interface AllocationData {
  id?: string; // Optional if the API does not supply one; fallback to name will be used
  name: string;
  amount: number;
  currency: string;
}

export default function AllocationPage() {
  const [data, setData] = useState<AllocationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Define a function to fetch allocation data
  const fetchData = async () => {
    try {
      const res = await fetch("/api/crypto/portfolio/allocation");
      if (!res.ok) {
        throw new Error("Failed to fetch allocation data");
      }
      const result: AllocationData[] = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      setError("Error loading allocation data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Portfolio Allocation</h1>
      {loading ? (
        <div>
          <Spinner />
          <p className="mt-4 text-center text-lg text-gray-600">
            Loading allocation data...
          </p>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : data.length > 0 ? (
        <ul className="list-disc pl-6 space-y-2">
          {data.map((item, index) => (
            <li key={item.id || item.name || index}>
              <strong>{item.name}</strong>: {item.amount.toLocaleString()} {item.currency}
            </li>
          ))}
        </ul>
      ) : (
        <p>No allocation data available at the moment.</p>
      )}
    </main>
  );
}
