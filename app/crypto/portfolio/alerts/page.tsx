"use client";

import React, { useState, useEffect } from "react";

type Alert = {
  id: number;
  message: string;
  date: string;
};

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    // Simulate fetching alerts from an API
    setTimeout(() => {
      setAlerts([
        { id: 1, message: "Bitcoin price dropped 5% in the last 24 hours.", date: "2025-04-09" },
        { id: 2, message: "Ethereum hit a new all-time high!", date: "2025-04-08" },
        { id: 3, message: "Your portfolio's performance is up 3% today.", date: "2025-04-07" }
      ]);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Portfolio Alerts</h1>
      <p className="mb-6">Stay updated with real-time alerts about your portfolio.</p>
      {alerts.length === 0 ? (
        <p>Loading alerts...</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li key={alert.id} className="p-4 bg-white shadow rounded-md">
              <p className="text-gray-800">{alert.message}</p>
              <p className="text-sm text-gray-500">{alert.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
