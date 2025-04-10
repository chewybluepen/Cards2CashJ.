"use client";

import React, { useState } from "react";

type PortfolioEntry = {
  name: string;
  symbol: string;
  amount: number;
};

const ImportPortfolioPage = () => {
  const [portfolio, setPortfolio] = useState<PortfolioEntry[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;
      const rows = text.trim().split("\n");
      const entries: PortfolioEntry[] = [];

      try {
        for (let i = 1; i < rows.length; i++) {
          const [name, symbol, amount] = rows[i].split(",");
          entries.push({
            name: name.trim(),
            symbol: symbol.trim(),
            amount: parseFloat(amount),
          });
        }
        setPortfolio(entries);
        setUploadError(null);
      } catch (err) {
        setUploadError("Invalid CSV format. Make sure the file has name,symbol,amount on each line.");
        setPortfolio([]);
      }
    };

    reader.onerror = () => {
      setUploadError("Failed to read the file.");
    };

    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-white md:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Import Your Portfolio</h1>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="block w-full mb-6 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        {uploadError && <p className="text-red-500 mb-4">{uploadError}</p>}

        {portfolio.length > 0 && (
          <div className="overflow-x-auto border rounded-xl shadow-md">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100 uppercase">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((entry, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{entry.name}</td>
                    <td className="py-3 px-4">{entry.symbol}</td>
                    <td className="py-3 px-4">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          CSV format should be: <code>name,symbol,amount</code><br />
          Example:
          <pre className="mt-2 bg-gray-100 p-2 rounded-md">
            Bitcoin,BTC,0.5
            <br />
            Ethereum,ETH,2
            <br />
            Cardano,ADA,300
          </pre>
        </p>
      </div>
    </div>
  );
};

export default ImportPortfolioPage;
