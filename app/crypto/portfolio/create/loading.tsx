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
        backgroundColor: '#f4f6f8',
        color: '#2f3542',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
        Creating Your Portfolio...
      </h1>
      <div
        style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          marginBottom: '30px',
        }}
      >
        <div
          role="status"
          aria-label="Creating portfolio"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '80px',
            height: '80px',
            border: '6px solid #ced6e0',
            borderRadius: '50%',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '60px',
            height: '60px',
            backgroundColor: '#00b894',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Building your crypto collection...
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
            border-color: #ced6e0;
          }
          50% {
            border-color: #a4b0be;
          }
          100% {
            border-color: #ced6e0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
