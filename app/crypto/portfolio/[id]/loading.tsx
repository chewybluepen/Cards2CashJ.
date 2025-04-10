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
        backgroundColor: '#f1f3f5',
        color: '#353b48',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '35px' }}>
        Loading Your Portfolio...
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div
          role="status"
          aria-label="Loading portfolio data"
          style={{
            width: '50px',
            height: '50px',
            background: 'conic-gradient(#00cec9 0% 25%, #dfe6e9 25% 100%)',
            borderRadius: '50%',
            animation: 'spin 1.2s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '50px',
            height: '50px',
            background: 'conic-gradient(#0984e3 0% 33%, #dfe6e9 33% 100%)',
            borderRadius: '50%',
            animation: 'spin 1.4s linear infinite reverse',
          }}
        ></div>
        <div
          style={{
            width: '50px',
            height: '50px',
            background: 'conic-gradient(#d63031 0% 50%, #dfe6e9 50% 100%)',
            borderRadius: '50%',
            animation: 'spin 1.6s linear infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.75 }}>
        Gathering your crypto assets...
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
      `}</style>
    </div>
  );
};

export default Loading;
