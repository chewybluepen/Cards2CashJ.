// app/crypto/news/page.tsx

"use client";

import React from "react";

const mockNews = [
  {
    title: "Bitcoin Hits $70K Amid Institutional Interest",
    summary:
      "Bitcoin reaches a new all-time high as institutional investors continue to enter the market. Experts predict continued bullish momentum.",
    date: "April 9, 2025",
  },
  {
    title: "Ethereum Upgrade Reduces Gas Fees Significantly",
    summary:
      "Ethereum's latest upgrade promises lower transaction fees and improved scalability, making it more attractive for developers and users.",
    date: "April 8, 2025",
  },
  {
    title: "Solana Surges After Major DeFi Integration",
    summary:
      "Solana's price surged 15% following the integration of a major DeFi platform, increasing usage and liquidity on the network.",
    date: "April 7, 2025",
  },
];

const CryptoNewsPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Latest Crypto News 📰
        </h1>

        <div className="space-y-6">
          {mockNews.map((news, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-1">{news.date}</p>
              <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
              <p className="text-gray-700 mt-2">{news.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoNewsPage;
