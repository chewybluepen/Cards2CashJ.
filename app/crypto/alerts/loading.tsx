"use client";

import React from "react";

export default function AlertsLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      {/* Animated spinner (using Tailwind CSS classes) */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      {/* Loading message */}
      <p className="mt-4 text-lg font-medium text-gray-700">
        Loading alerts, please wait...
      </p>
    </div>
  );
}
