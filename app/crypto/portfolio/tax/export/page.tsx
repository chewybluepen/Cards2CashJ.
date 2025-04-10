"use client";

import React from "react";

type TaxRecord = {
  id: number;
  asset: string;
  purchaseDate: string;
  saleDate: string;
  purchasePrice: number;
  salePrice: number;
};

const mockTaxData: TaxRecord[] = [
  {
    id: 1,
    asset: "BTC",
    purchaseDate: "2024-01-15",
    saleDate: "2024-12-01",
    purchasePrice: 30000,
    salePrice: 60000,
  },
  {
    id: 2,
    asset: "ETH",
    purchaseDate: "2024-02-10",
    saleDate: "2024-11-20",
    purchasePrice: 2000,
    salePrice: 4000,
  },
];

const exportToCSV = (data: TaxRecord[]) => {
  // Create CSV header and rows
  const header = "ID,Asset,Purchase Date,Sale Date,Purchase Price,Sale Price\n";
  const rows = data.map(
    (record) =>
      `${record.id},${record.asset},${record.purchaseDate},${record.saleDate},${record.purchasePrice},${record.salePrice}`
  );
  const csvContent = header + rows.join("\n");

  // Create a blob from CSV content and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "tax_export.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const TaxExportPage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Tax Export</h1>
      <p className="mb-6 text-lg">
        Export your portfolio's tax data in CSV format.
      </p>
      <button
        onClick={() => exportToCSV(mockTaxData)}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Export CSV
      </button>

      <div className="mt-8 w-full max-w-3xl overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Asset</th>
              <th className="py-2 px-4 border">Purchase Date</th>
              <th className="py-2 px-4 border">Sale Date</th>
              <th className="py-2 px-4 border">Purchase Price</th>
              <th className="py-2 px-4 border">Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {mockTaxData.map((record) => (
              <tr key={record.id} className="border-t">
                <td className="py-2 px-4 border">{record.id}</td>
                <td className="py-2 px-4 border">{record.asset}</td>
                <td className="py-2 px-4 border">{record.purchaseDate}</td>
                <td className="py-2 px-4 border">{record.saleDate}</td>
                <td className="py-2 px-4 border">
                  ${record.purchasePrice.toLocaleString()}
                </td>
                <td className="py-2 px-4 border">
                  ${record.salePrice.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxExportPage;
