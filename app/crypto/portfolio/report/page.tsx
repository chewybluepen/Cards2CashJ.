// app/crypto/portfolio/report/page.tsx

import React from "react";

// Optional: mock data or real data-fetching will go here
const mockReportData = [
  { id: 1, asset: "Bitcoin", quantity: 2.5, value: 150000 },
  { id: 2, asset: "Ethereum", quantity: 10, value: 30000 },
];

export default function PortfolioReportPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portfolio Report</h1>

      <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border">#</th>
            <th className="p-4 border text-left">Asset</th>
            <th className="p-4 border text-right">Quantity</th>
            <th className="p-4 border text-right">Value (USD)</th>
          </tr>
        </thead>
        <tbody>
          {mockReportData.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-4 border text-center">{index + 1}</td>
              <td className="p-4 border">{item.asset}</td>
              <td className="p-4 border text-right">{item.quantity}</td>
              <td className="p-4 border text-right">${item.value.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
