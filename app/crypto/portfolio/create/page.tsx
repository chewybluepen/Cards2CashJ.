"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

export default function PortfolioCreatePage() {
  const [portfolioName, setPortfolioName] = useState("");
  const [description, setDescription] = useState("");
  const [initialInvestment, setInitialInvestment] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!portfolioName.trim()) {
      return "Please provide a portfolio name.";
    }
    if (initialInvestment === "" || isNaN(Number(initialInvestment))) {
      return "Please provide a valid initial investment amount.";
    }
    return "";
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      // Simulate an API call with a 1.5 second delay.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Ideally, you would call your API here to create the portfolio.
      // For example:
      // const response = await fetch('/api/portfolio', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ portfolioName, description, initialInvestment }),
      // });
      // const result = await response.json();
      // if (!response.ok) throw new Error(result.message || 'Failed to create portfolio');

      setSuccess("Portfolio created successfully!");
      // Optionally clear the form or redirect the user.
      setPortfolioName("");
      setDescription("");
      setInitialInvestment("");
    } catch (err: any) {
      setError(err.message || "An error occurred while creating your portfolio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Create Your Crypto Portfolio</h1>
        <p className="mb-6 text-gray-700">
          Use this form to start your own crypto portfolio. Provide a unique name, an optional description, and an initial investment
          amount.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="portfolioName" className="block text-sm font-medium text-gray-700">
              Portfolio Name
            </label>
            <input
              type="text"
              id="portfolioName"
              name="portfolioName"
              value={portfolioName}
              onChange={(e) => setPortfolioName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              placeholder="Enter your portfolio name"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description (optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              rows={3}
              placeholder="Tell us more about your portfolio"
            />
          </div>

          <div>
            <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-700">
              Initial Investment ($)
            </label>
            <input
              type="number"
              id="initialInvestment"
              name="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value === "" ? "" : Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating Portfolio..." : "Create Portfolio"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link href="/crypto/portfolio">
            <a className="text-indigo-600 hover:underline">Back to Portfolio Dashboard</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
