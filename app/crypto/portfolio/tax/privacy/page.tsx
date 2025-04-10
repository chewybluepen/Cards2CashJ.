"use client";

import React from "react";

const TaxPrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Tax Data Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Your privacy is important to us. This Tax Data Privacy Policy outlines how we collect, use, and protect your tax-related data in our crypto portfolio application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect information necessary to provide our tax calculation and export services. This includes data related to your crypto transactions, holdings, and other tax-relevant information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Usage</h2>
          <p className="text-gray-700 leading-relaxed">
            The data we collect is used exclusively to generate accurate tax reports and insights for your portfolio. We do not share your data with third parties without your explicit consent, except as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We employ industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Your data is securely stored and is only accessible to authorized personnel.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete your personal data at any time. If you have any questions about our privacy practices or wish to exercise your rights, please contact our support team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this privacy policy, please reach out to us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              support@example.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TaxPrivacyPage;
