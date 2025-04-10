const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f2f4f7',
        color: '#333945',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
        Loading Portfolio Settings...
      </h1>
      <div
        style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          marginBottom: '25px',
        }}
      >
        <div
          role="status"
          aria-label="Loading settings data"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '80px',
            height: '80px',
            border: '8px solid #e3e7eb',
            borderRadius: '50%',
            animation: 'spin 1.6s linear infinite',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            backgroundColor: '#6b7280',
            borderRadius: '50%',
            animation: 'pulse 1.6s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Configuring your portfolio options...
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
            transform: scale(1.2);
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
