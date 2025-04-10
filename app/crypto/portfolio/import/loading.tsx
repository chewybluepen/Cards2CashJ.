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
        backgroundColor: '#f7f9fc',
        color: '#3c4043',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
        Importing Your Portfolio...
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
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#4285f4',
            borderRadius: '50%',
            animation: 'move 1.5s ease-in-out infinite',
          }}
        ></div>
        <div
          role="status"
          aria-label="Importing portfolio data"
          style={{
            width: '60px',
            height: '60px',
            border: '6px solid #dfe4ea',
            borderTop: '6px solid #34c759',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
          }}
        ></div>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#4285f4',
            borderRadius: '50%',
            animation: 'move 1.5s ease-in-out infinite reverse',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Transferring your crypto data...
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
        @keyframes move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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
