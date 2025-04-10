'use client';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f1f5f9',
        color: '#334155',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
        Preparing Portfolio Share...
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
          aria-label="Preparing shareable portfolio data"
          style={{
            width: '50px',
            height: '50px',
            border: '6px solid #e2e8f0',
            borderTop: '6px solid #0ea5e9',
            borderRadius: '50%',
            animation: 'spin 1.3s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#f59e0b',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            animation: 'share 1.3s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Getting your portfolio ready to share...
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
        @keyframes share {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2) rotate(15deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
