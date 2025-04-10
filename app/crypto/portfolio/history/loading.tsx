const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f6fa',
        color: '#2c2f3f',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
        Loading Portfolio History...
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '25px',
        }}
      >
        <div
          role="status"
          aria-label="Loading history data"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#e17055',
            borderRadius: '4px',
            animation: 'tick 1.2s ease-in-out infinite',
          }}
        ></div>
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#74b9ff',
            borderRadius: '4px',
            animation: 'tick 1.2s ease-in-out infinite 0.2s',
          }}
        ></div>
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#55efc4',
            borderRadius: '4px',
            animation: 'tick 1.2s ease-in-out infinite 0.4s',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Retrieving your past crypto records...
      </p>
      <style jsx>{`
        @keyframes tick {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
