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
        backgroundColor: "#fcfcfc",
        color: "#2d3436",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Loading Transaction History...
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "18px",
          marginBottom: "20px",
        }}
      >
        <div
          role="status"
          aria-label="Loading transaction data"
          style={{
            width: "45px",
            height: "45px",
            border: "5px solid #dfe6e9",
            borderTop: "5px solid #00cec9",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: "45px",
            height: "45px",
            border: "5px solid #dfe6e9",
            borderTop: "5px solid #6c5ce7",
            borderRadius: "50%",
            animation: "spin 1.3s linear infinite reverse",
          }}
        ></div>
      </div>
      <p style={{ fontSize: "1rem", opacity: 0.75 }}>
        Fetching your crypto transactions...
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
