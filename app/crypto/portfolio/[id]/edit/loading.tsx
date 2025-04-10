const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        color: '#374151',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
        Loading Portfolio Editor...
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '25px',
        }}
      >
        <div
          role="status"
          aria-label="Loading portfolio edit data"
          style={{
            width: '50px',
            height: '50px',
            border: '6px solid #d1d5db',
            borderRight: '6px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1.4s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#f97316',
            borderRadius: '4px',
            animation: 'rotate 1.4s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Preparing your portfolio for editing...
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
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
