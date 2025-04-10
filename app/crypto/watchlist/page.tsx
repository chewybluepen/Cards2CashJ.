// app/crypto/watchlist/page.tsx

"use client";

import React from "react";

type WatchlistItem = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
};

const mockWatchlist: WatchlistItem[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    price: 70200,
    change24h: 1.8,
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    price: 3600,
    change24h: -0.5,
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    price: 140,
    change24h: 2.3,
  },
];

const CryptoWatchlistPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Your Crypto Watchlist
        </h1>

        {mockWatchlist.length === 0 ? (
          <p className="text-center text-gray-500">You haven’t added any cryptocurrencies yet.</p>
        ) : (
          <div className="overflow-x-auto shadow-md rounded-xl">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4">Price (USD)</th>
                  <th className="py-3 px-4">24h Change</th>
                </tr>
              </thead>
              <tbody>
                {mockWatchlist.map((coin) => (
                  <tr key={coin.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{coin.name}</td>
                    <td className="py-3 px-4">{coin.symbol}</td>
                    <td className="py-3 px-4">${coin.price.toLocaleString()}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        coin.change24h >= 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {coin.change24h >= 0 ? "+" : ""}
                      {coin.change24h}%
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
};

export default CryptoWatchlistPage;
