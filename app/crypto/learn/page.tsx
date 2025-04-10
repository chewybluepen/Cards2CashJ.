// app/crypto/learn/page.tsx

"use client";

import React from "react";

const CryptoLearnPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Learn About Cryptocurrency
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What is Cryptocurrency?</h2>
          <p className="text-gray-700 leading-relaxed">
            Cryptocurrency is a digital or virtual form of currency that uses cryptography
            for security. Unlike traditional currencies issued by governments (like USD or EUR),
            cryptocurrencies are decentralized and typically operate on blockchain technology.
            Bitcoin, Ethereum, and Solana are popular examples.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Does It Work?</h2>
          <p className="text-gray-700 leading-relaxed">
            Most cryptocurrencies operate on a blockchain — a decentralized and distributed ledger
            that records all transactions across a network of computers. This system ensures transparency,
            security, and immutability. Transactions are verified by participants in the network,
            often through a process called mining or staking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What Can You Do With Crypto?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Buy and sell goods or services.</li>
            <li>Invest or trade on crypto exchanges.</li>
            <li>Send money globally with low fees.</li>
            <li>Access decentralized finance (DeFi) apps and services.</li>
            <li>Mint, buy, or sell NFTs (non-fungible tokens).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Is It Safe?</h2>
          <p className="text-gray-700 leading-relaxed">
            Crypto can be safe when proper precautions are taken. Use secure wallets, enable two-factor authentication (2FA),
            and avoid sharing your private keys. However, the market is highly volatile, and scams exist, so it's important
            to research before investing.
          </p>
        </section>

        <div className="mt-10 text-center">
          <p className="text-gray-500">Happy learning! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoLearnPage;
