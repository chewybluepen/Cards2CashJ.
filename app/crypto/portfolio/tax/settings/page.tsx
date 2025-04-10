"use client";

import React, { useState } from "react";

const TaxSettingsPage = () => {
  // State variables for tax settings
  const [autoCalculate, setAutoCalculate] = useState<boolean>(true);
  const [includeUnconfirmed, setIncludeUnconfirmed] = useState<boolean>(false);
  const [taxRate, setTaxRate] = useState<number>(20);
  const [currency, setCurrency] = useState<string>("USD");

  const handleSave = () => {
    // Simulate saving settings (replace with actual save logic/API call)
    alert(`Settings saved:
Auto Calculate: ${autoCalculate ? "Enabled" : "Disabled"}
Include Unconfirmed: ${includeUnconfirmed ? "Included" : "Excluded"}
Tax Rate: ${taxRate}%
Reporting Currency: ${currency}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Tax Settings</h1>
        
        {/* Auto Calculate Taxes */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Auto Calculate Taxes</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={autoCalculate}
              onChange={() => setAutoCalculate((prev) => !prev)}
              className="mr-2"
            />
            <span>{autoCalculate ? "Enabled" : "Disabled"}</span>
          </div>
        </div>

        {/* Include Unconfirmed Transactions */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Include Unconfirmed Transactions</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeUnconfirmed}
              onChange={() => setIncludeUnconfirmed((prev) => !prev)}
              className="mr-2"
            />
            <span>{includeUnconfirmed ? "Included" : "Excluded"}</span>
          </div>
        </div>

        {/* Tax Rate Input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Tax Rate (%)</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Reporting Currency */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Reporting Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add additional currencies as needed */}
          </select>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxSettingsPage;
