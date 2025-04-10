"use client";

import React, { useState, useEffect } from "react";

interface Transaction {
  id: number;
  date: string;
  asset: string;
  type: "Buy" | "Sell";
  amount: number;
  unit: string;
}

export default function PortfolioHistoryPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Simulate fetch from an API or local database
    const mockData: Transaction[] = [
      {
        id: 1,
        date: "2025-04-01",
        asset: "Bitcoin",
        type: "Buy",
        amount: 0.5,
        unit: "BTC",
      },
      {
        id: 2,
        date: "2025-03-25",
        asset: "Ethereum",
        type: "Sell",
        amount: 3,
        unit: "ETH",
      },
      {
        id: 3,
        date: "2025-02-14",
        asset: "Solana",
        type: "Buy",
        amount: 150,
        unit: "SOL",
      },
    ];

    setTransactions(mockData);
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolio History</h1>

        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100 text-sm text-gray-700">
                <tr>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Asset</th>
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="text-sm text-gray-800">
                    <td className="px-4 py-2 border">{tx.date}</td>
                    <td className="px-4 py-2 border">{tx.asset}</td>
                    <td className="px-4 py-2 border">{tx.type}</td>
                    <td className="px-4 py-2 border">
                      {tx.amount} {tx.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
