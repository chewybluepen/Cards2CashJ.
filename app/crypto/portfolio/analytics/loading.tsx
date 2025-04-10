const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        color: '#1e293b',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
        Loading Portfolio Analytics...
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '25px',
        }}
      >
        <div
          role="status"
          aria-label="Loading analytics data"
          style={{
            width: '50px',
            height: '50px',
            background: 'conic-gradient(#8b5cf6 0% 60%, #e2e8f0 60% 100%)',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#10b981',
            borderRadius: '8px',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Analyzing your crypto performance...
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
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
