// app/crypto/transactions/page.tsx

"use client";

import React from "react";

type Transaction = {
  id: string;
  type: "Buy" | "Sell";
  crypto: string;
  amount: number;
  price: number;
  date: string;
};

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "Buy",
    crypto: "Bitcoin",
    amount: 0.05,
    price: 65000,
    date: "April 9, 2025",
  },
  {
    id: "2",
    type: "Sell",
    crypto: "Ethereum",
    amount: 1.2,
    price: 3400,
    date: "April 8, 2025",
  },
  {
    id: "3",
    type: "Buy",
    crypto: "Solana",
    amount: 10,
    price: 130,
    date: "April 7, 2025",
  },
];

const CryptoTransactionsPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Transaction History
        </h1>

        <div className="overflow-x-auto shadow-md rounded-xl">
          <table className="min-w-full text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Crypto</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Price (USD)</th>
                <th className="py-3 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx) => (
                <tr key={tx.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{tx.date}</td>
                  <td className={`py-3 px-4 font-medium ${tx.type === "Buy" ? "text-green-600" : "text-red-600"}`}>
                    {tx.type}
                  </td>
                  <td className="py-3 px-4">{tx.crypto}</td>
                  <td className="py-3 px-4">{tx.amount}</td>
                  <td className="py-3 px-4">${tx.price.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    ${(tx.amount * tx.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoTransactionsPage;
