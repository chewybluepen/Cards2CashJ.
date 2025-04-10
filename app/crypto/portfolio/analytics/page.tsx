// app/crypto/portfolio/analytics/page.tsx

"use client";

import React from "react";

type PortfolioAsset = {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  price: number; // Current price in USD
};

const portfolio: PortfolioAsset[] = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", amount: 0.5, price: 70000 },
  { id: "eth", name: "Ethereum", symbol: "ETH", amount: 2, price: 3500 },
  { id: "ada", name: "Cardano", symbol: "ADA", amount: 500, price: 0.6 },
];

const getTotalValue = () => {
  return portfolio.reduce((acc, asset) => acc + asset.amount * asset.price, 0);
};

const PortfolioAnalyticsPage = () => {
  const totalValue = getTotalValue();

  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Portfolio Analytics
        </h1>

        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700">Total Portfolio Value</p>
          <p className="text-4xl font-bold text-green-600">
            ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full text-left text-gray-700">
            <thead className="bg-gray-100 uppercase text-sm">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Symbol</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Price (USD)</th>
                <th className="py-3 px-4">Value</th>
                <th className="py-3 px-4">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((asset) => {
                const value = asset.amount * asset.price;
                const percent = (value / totalValue) * 100;
                return (
                  <tr key={asset.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{asset.name}</td>
                    <td className="py-3 px-4">{asset.symbol}</td>
                    <td className="py-3 px-4">{asset.amount}</td>
                    <td className="py-3 px-4">${asset.price.toLocaleString()}</td>
                    <td className="py-3 px-4">${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    <td className="py-3 px-4">{percent.toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalyticsPage;
