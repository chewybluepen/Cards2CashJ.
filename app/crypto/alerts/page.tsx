"use client";

import React, { useState, useEffect } from "react";

interface Alert {
  id: number;
  name: string;
  threshold: number;
  active: boolean;
}

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 1, name: "Bitcoin", threshold: 50000, active: true },
    { id: 2, name: "Ethereum", threshold: 3500, active: false },
  ]);
  const [newName, setNewName] = useState("");
  const [newThreshold, setNewThreshold] = useState<number | "">("");
  const [status, setStatus] = useState("");

  // Clear the status message after 3 seconds whenever it is updated
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleAddAlert = () => {
    if (!newName.trim() || newThreshold === "") {
      setStatus("Please provide both asset name and threshold.");
      return;
    }

    const newAlert: Alert = {
      id: Date.now(),
      name: newName.trim(),
      threshold: Number(newThreshold),
      active: true,
    };

    setAlerts((prev) => [...prev, newAlert]);
    setNewName("");
    setNewThreshold("");
    setStatus("Alert added!");
  };

  const toggleAlert = (id: number) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, active: !alert.active } : alert
      )
    );
  };

  const deleteAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    setStatus("Alert deleted.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Crypto Alerts</h1>
        <p className="text-gray-600 mb-6">
          Manage your price alert notifications here.
        </p>

        {/* Add New Alert */}
        <div className="mb-6 space-y-3">
          <h2 className="text-xl font-semibold">Add New Alert</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              placeholder="Asset Name (e.g. Bitcoin)"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Threshold Price"
              value={newThreshold}
              onChange={(e) =>
                setNewThreshold(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full rounded border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleAddAlert}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Add Alert
            </button>
          </div>
          {status && <p className="text-sm text-green-600">{status}</p>}
        </div>

        {/* Existing Alerts */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Your Alerts</h2>
          {alerts.length === 0 ? (
            <p className="text-gray-500">No alerts set.</p>
          ) : (
            <ul className="space-y-4">
              {alerts.map((alert) => (
                <li
                  key={alert.id}
                  className="flex items-center justify-between border p-3 rounded"
                >
                  <div>
                    <p className="font-medium">
                      {alert.name} — ${alert.threshold.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Status:{" "}
                      <span className={alert.active ? "text-green-600" : "text-red-600"}>
                        {alert.active ? "Active" : "Disabled"}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAlert(alert.id)}
                      className="text-sm px-3 py-1 rounded border hover:bg-gray-100 transition"
                    >
                      {alert.active ? "Disable" : "Enable"}
                    </button>
                    <button
                      onClick={() => deleteAlert(alert.id)}
                      className="text-sm px-3 py-1 rounded border text-red-600 hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
