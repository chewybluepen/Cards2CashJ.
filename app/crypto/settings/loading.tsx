"use client";

import React from "react";

export default function SettingsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Animated Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-t-indigo-600 border-gray-200"></div>
        {/* Loading Message */}
        <p className="mt-4 text-lg text-gray-700 font-medium">
          Loading settings...
        </p>
      </div>
    </div>
  );
}
