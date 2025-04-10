"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("en");
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setStatus(null);

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    // Simulate success
    setStatus("Settings saved successfully!");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Crypto Settings</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-6"
        >
          {/* Notifications */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Enable Notifications
            </label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>

          {/* Privacy Mode */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Privacy Mode
            </label>
            <input
              type="checkbox"
              checked={privacyMode}
              onChange={() => setPrivacyMode(!privacyMode)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="BTC">BTC - Bitcoin</option>
              <option value="ETH">ETH - Ethereum</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Settings"}
            </button>
          </div>

          {/* Status Message */}
          {status && (
            <div className="mt-4 text-green-600 text-sm font-medium">{status}</div>
          )}
        </form>
      </div>
    </div>
  );
}
