const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#212529',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
        Generating Portfolio Report...
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '25px',
        }}
      >
        <div
          role="status"
          aria-label="Generating report data"
          style={{
            width: '70px',
            height: '70px',
            background: 'linear-gradient(90deg, #fdcb6e 0%, #dfe4ea 100%)',
            borderRadius: '8px',
            animation: 'slide 2s ease-in-out infinite',
          }}
        ></div>
        <div
          style={{
            width: '100px',
            height: '10px',
            backgroundColor: '#6c757d',
            borderRadius: '5px',
            animation: 'progress 2s ease-in-out infinite',
          }}
        ></div>
      </div>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
        Compiling your crypto insights...
      </p>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-20px);
            opacity: 0.7;
          }
          50% {
            transform: translateX(20px);
            opacity: 1;
          }
          100% {
            transform: translateX(-20px);
            opacity: 0.7;
          }
        }
        @keyframes progress {
          0% {
            width: 60px;
            opacity: 0.5;
          }
          50% {
            width: 100px;
            opacity: 1;
          }
          100% {
            width: 60px;
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
