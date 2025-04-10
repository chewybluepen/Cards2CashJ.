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
        color: '#1f2a44',
      }}
    >
      <h1 style={{ fontSize: '2.2rem', marginBottom: '25px' }}>
        Loading Crypto Converter...
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
          aria-label="Loading conversion data"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            border: '8px solid #dfe4ea',
            borderTop: '8px solid #3867d6',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            animation: 'spin 1.8s linear infinite',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            border: '6px solid #dfe4ea',
            borderTop: '6px solid #f7b731',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite reverse',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.75 }}>
        Fetching the latest exchange rates...
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
