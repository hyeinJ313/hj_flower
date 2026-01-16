"use client";

export default function OrderButtons() {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => {
          window.location.href = "https://open.kakao.com/o/XXXXXXX"; // 카카오톡 링크
        }}
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        카카오톡으로 주문하기
      </button>

      <a
        href="tel:029433877"
        style={{
          display: "block",
          padding: "12px 20px",
          fontSize: "18px",
          backgroundColor: "#555",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          textAlign: "center",
          width: "100%",
        }}
      >
        전화 주문하기
      </a>
    </div>
  );
}
