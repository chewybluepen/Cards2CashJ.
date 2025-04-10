"use client";

import React, { useEffect, useState } from "react";

type PortfolioAsset = {
  name: string;
  symbol: string;
  amount: number;
  priceUsd: number;
  change24h: number; // percentage
};

const mockData: PortfolioAsset[] = [
  { name: "Bitcoin", symbol: "BTC", amount: 0.5, priceUsd: 65000, change24h: 1.5 },
  { name: "Ethereum", symbol: "ETH", amount: 2, priceUsd: 3200, change24h: -0.8 },
  { name: "Solana", symbol: "SOL", amount: 10, priceUsd: 150, change24h: 2.3 },
];

const PerformancePage = () => {
  const [assets, setAssets] = useState<PortfolioAsset[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [totalChange, setTotalChange] = useState<number>(0);

  useEffect(() => {
    // Simulate fetching portfolio data
    setAssets(mockData);

    const value = mockData.reduce((acc, asset) => acc + asset.amount * asset.priceUsd, 0);
    const change = mockData.reduce(
      (acc, asset) => acc + (asset.amount * asset.priceUsd * asset.change24h) / 100,
      0
    );

    setTotalValue(value);
    setTotalChange((change / value) * 100);
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Portfolio Performance</h1>

        <div className="bg-blue-50 p-6 rounded-xl shadow mb-8 text-center">
          <p className="text-lg text-gray-700">Total Portfolio Value</p>
          <p className="text-2xl font-bold text-green-600">${totalValue.toFixed(2)}</p>
          <p className={`text-md font-semibold ${totalChange >= 0 ? "text-green-500" : "text-red-500"}`}>
            {totalChange >= 0 ? "+" : ""}
            {totalChange.toFixed(2)}% (24h)
          </p>
        </div>

        <div className="overflow-x-auto border rounded-xl shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 uppercase">
              <tr>
                <th className="py-3 px-4">Asset</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Price (USD)</th>
                <th className="py-3 px-4">Value</th>
                <th className="py-3 px-4">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{asset.name} ({asset.symbol})</td>
                  <td className="py-3 px-4">{asset.amount}</td>
                  <td className="py-3 px-4">${asset.priceUsd.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    ${(asset.amount * asset.priceUsd).toFixed(2)}
                  </td>
                  <td className={`py-3 px-4 ${asset.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {asset.change24h >= 0 ? "+" : ""}
                    {asset.change24h.toFixed(2)}%
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

export default PerformancePage;
