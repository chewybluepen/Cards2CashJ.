// app/crypto/converter/page.tsx

"use client";

import React, { useState } from "react";

const CryptoConverterPage = () => {
  const [cryptoAmount, setCryptoAmount] = useState<number>(0);
  const [cryptoPrice, setCryptoPrice] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const handleConvert = () => {
    if (!isNaN(cryptoAmount) && !isNaN(cryptoPrice)) {
      setConvertedValue(cryptoAmount * cryptoPrice);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Crypto Converter</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Crypto Amount</label>
          <input
            type="number"
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter amount (e.g., 0.1)"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price per Coin (USD)</label>
          <input
            type="number"
            value={cryptoPrice}
            onChange={(e) => setCryptoPrice(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-xl"
            placeholder="Enter price (e.g., 35000)"
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {convertedValue !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">
              Converted Value: ${convertedValue.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoConverterPage;
