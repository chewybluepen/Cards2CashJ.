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
        backgroundColor: "#f5f5f5",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Loading Learn Content...
      </h1>
      <div
        role="status"
        aria-label="Loading educational content"
        style={{
          border: "8px solid #e0e0e0",
          borderTop: "8px solid #1a73e8",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          animation: "spin 1.5s linear infinite",
        }}
      ></div>
      <p style={{ marginTop: "20px", fontSize: "1rem", opacity: 0.8 }}>
        Fetching your crypto knowledge...
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
