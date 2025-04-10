"use client";

import React from "react";

const TaxHelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Crypto Tax Help</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Understanding Crypto Taxes</h2>
          <p className="text-gray-700 leading-relaxed">
            Cryptocurrencies are subject to taxation in many jurisdictions. This means that any gains, losses, or income
            derived from crypto transactions may be taxable. It's important to understand your local regulations and
            consult a tax professional for personalized advice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Reporting Your Crypto Transactions</h2>
          <p className="text-gray-700 leading-relaxed">
            Keep thorough records of all your crypto transactions, including purchases, sales, exchanges, and any crypto
            income. Using a portfolio tracker or tax software can help automate the record-keeping and calculation of your
            taxable gains or losses.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Useful Resources</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <a
                href="https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                IRS Guidance on Virtual Currency Transactions
              </a>
            </li>
            <li>
              <a
                href="https://www.cointracker.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                CoinTracker – Crypto Tax Tools
              </a>
            </li>
            <li>
              <a
                href="https://www.taxjar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                TaxJar – Cryptocurrency Tax Reporting
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Need More Help?</h2>
          <p className="text-gray-700">
            If you have more specific questions or need personalized advice, consider consulting a certified tax professional
            experienced with cryptocurrency tax matters.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TaxHelpPage;
