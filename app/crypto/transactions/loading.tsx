"use client";

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9fbfc',
        color: '#2d3436',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
        Loading Transactions...
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '25px',
        }}
      >
        <div
          role="status"
          aria-label="Loading transaction data"
          style={{
            width: '60px',
            height: '60px',
            border: '6px dashed #b2bec3',
            borderTop: '6px solid #d63031',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '40px',
            height: '4px',
            backgroundColor: '#636e72',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Retrieving your crypto activity...
      </p>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
