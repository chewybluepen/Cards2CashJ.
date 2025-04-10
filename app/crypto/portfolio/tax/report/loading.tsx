"use client";

import React from "react";

export default function TaxReportLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-indigo-600 border-gray-300"></div>
      <p className="mt-4 text-gray-700 text-lg">Generating tax report...</p>
    </div>
  );
}
