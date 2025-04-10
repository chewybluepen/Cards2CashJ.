const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
        color: '#2c3e50',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
        Comparing Cryptocurrencies...
      </h1>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div
          role="status"
          aria-label="Loading comparison data"
          style={{
            border: '6px solid #bdc3c7',
            borderTop: '6px solid #e74c3c',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <div
          style={{
            border: '6px solid #bdc3c7',
            borderTop: '6px solid #2ecc71',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1.2s linear infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>
        Crunching the numbers for you...
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
