const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        color: '#1f2937',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
        Loading Tax Help...
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
          aria-label="Loading tax help content"
          style={{
            width: '50px',
            height: '50px',
            border: '5px solid #e5e7eb',
            borderLeft: '5px solid #10b981',
            borderRadius: '50%',
            animation: 'spin 1.2s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: '#4b5563',
            borderRadius: '50%',
            animation: 'bounce 1.2s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Fetching your tax assistance...
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
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
