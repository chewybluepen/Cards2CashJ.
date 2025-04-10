"use client";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        color: "#2c3e50",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "25px" }}>
        Analyzing Portfolio Performance...
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <div
          role="status"
          aria-label="Loading portfolio data"
          style={{
            width: "50px",
            height: "50px",
            border: "6px solid #ecf0f1",
            borderTop: "6px solid #3498db",
            borderRadius: "50%",
            animation: "spin 1s ease-in-out infinite",
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "6px solid #ecf0f1",
            borderTop: "6px solid #f39c12",
            borderRadius: "50%",
            animation: "spin 1.2s ease-in-out infinite reverse",
          }}
        ></div>
      </div>
      <p style={{ fontSize: "1rem", opacity: 0.75 }}>
        Calculating trends and metrics from your crypto portfolio...
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
