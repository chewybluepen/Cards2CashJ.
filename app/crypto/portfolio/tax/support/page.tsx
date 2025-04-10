import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';

// A functional component for the tax support page
const TaxSupport = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data (e.g., tax support data or portfolio info)
    const fetchData = async () => {
      try {
        const response = await fetch('/api/tax-support'); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching tax support data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render a loading state if data is not available
  if (loading) {
    return <div>Loading tax support information...</div>;
  }

  // Render the data once it's fetched
  return (
    <div>
      <Head>
        <title>Tax Support | Crypto Portfolio</title>
        <meta name="description" content="Tax support page for your crypto portfolio" />
      </Head>
      
      <h1>Tax Support</h1>
      <div>
        <h2>Your Crypto Portfolio Tax Information</h2>
        {/* Display tax-related data */}
        {data && data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.amount} {item.currency}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tax data available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default TaxSupport;
