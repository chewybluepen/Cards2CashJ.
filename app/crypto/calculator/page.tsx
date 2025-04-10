// app/crypto/calculator/page.tsx

"use client";

import React, { useState } from "react";

export default function CryptoCalculatorPage() {
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [cryptoPrice, setCryptoPrice] = useState(0);
  const [fiatValue, setFiatValue] = useState(0);

  const calculateFiatValue = () => {
    setFiatValue(cryptoAmount * cryptoPrice);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Crypto Calculator</h1>
        
        <div className="mb-4">
          <label className="block mb-1 font-medium">Crypto Amount</label>
          <input
            type="number"
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter amount (e.g., 0.5)"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price per Coin (USD)</label>
          <input
            type="number"
            value={cryptoPrice}
            onChange={(e) => setCryptoPrice(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter current price (e.g., 30000)"
          />
        </div>

        <button
          onClick={calculateFiatValue}
          className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Calculate
        </button>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Total Value: ${fiatValue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
