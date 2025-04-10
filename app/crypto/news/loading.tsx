const Loading = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Loading News...</h1>
      <div
        role="status"
        aria-label="Loading"
        style={{
          border: '16px solid #f3f3f3',
          borderTop: '16px solid #3498db',
          borderRadius: '50%',
          width: '120px',
          height: '120px',
          animation: 'spin 2s linear infinite',
          margin: '20px auto',
        }}
      ></div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
