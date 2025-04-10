"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import SubmitButton from "@/components/submit-button";
import { uploadTaxTransactions } from "@/app/actions/tax-actions";
import { toast } from "react-hot-toast";

export default function TaxImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const { pending } = useFormStatus();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("taxFile", file);

    const result = await uploadTaxTransactions(formData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success(result.success || "File uploaded successfully!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Import Tax Transactions</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="taxFile" className="block text-gray-700 text-sm font-bold mb-2">
            Select CSV File:
          </label>
          <input
            type="file"
            id="taxFile"
            name="taxFile"
            accept=".csv"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <SubmitButton
          pending={pending}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </SubmitButton>
      </form>
    </div>
  );
}
