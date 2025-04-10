"use client";

import React, { useEffect, useState } from "react";

type TaxReport = {
  id: number;
  asset: string;
  capitalGain: number;
  taxDue: number;
};

const mockTaxReports: TaxReport[] = [
  { id: 1, asset: "BTC", capitalGain: 15000, taxDue: 3000 },
  { id: 2, asset: "ETH", capitalGain: 5000, taxDue: 1000 },
];

function TaxReportClient() {
  const [reports, setReports] = useState<TaxReport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setReports(mockTaxReports);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Error fetching tax reports:", err);
        setError("Failed to load tax report data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalCapitalGain = reports.reduce((acc, report) => acc + report.capitalGain, 0);
  const totalTaxDue = reports.reduce((acc, report) => acc + report.taxDue, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Tax Report</h1>
        {loading ? (
          <p className="text-gray-500">Loading tax report...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Summary</h2>
              <p className="text-gray-700">
                Total Capital Gain: ${totalCapitalGain.toLocaleString()}
              </p>
              <p className="text-gray-700">
                Total Tax Due: ${totalTaxDue.toLocaleString()}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 border">ID</th>
                    <th className="py-2 px-4 border">Asset</th>
                    <th className="py-2 px-4 border">Capital Gain</th>
                    <th className="py-2 px-4 border">Tax Due</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-t hover:bg-gray-50">
                      <td className="py-2 px-4 border">{report.id}</td>
                      <td className="py-2 px-4 border">{report.asset}</td>
                      <td className="py-2 px-4 border">
                        ${report.capitalGain.toLocaleString()}
                      </td>
                      <td className="py-2 px-4 border">
                        ${report.taxDue.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return <TaxReportClient />;
}
