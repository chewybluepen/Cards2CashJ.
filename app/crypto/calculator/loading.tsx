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
        backgroundColor: "#eef2f3",
        color: "#34495e",
      }}
    >
      <h1 style={{ fontSize: "2.3rem", marginBottom: "30px" }}>
        Loading Crypto Calculator...
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <div
          role="status"
          aria-label="Loading calculator data"
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #dcdde1",
            borderBottom: "5px solid #8e44ad",
            borderRadius: "50%",
            animation: "spin 1s ease-in-out infinite",
          }}
        ></div>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>=</span>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #dcdde1",
            borderBottom: "5px solid #16a085",
            borderRadius: "50%",
            animation: "spin 1s ease-in-out infinite reverse",
          }}
        ></div>
      </div>
      <p style={{ fontSize: "1.1rem", opacity: 0.7 }}>
        Calculating your crypto stats...
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
