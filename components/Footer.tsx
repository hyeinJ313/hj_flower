export default function Footer() {
  return (
    <footer
      style={{
        padding: "30px 0",
        textAlign: "center",
        color: "#555",
        fontSize: "14px",
        borderTop: "1px solid #ddd",
        marginTop: "40px",
        lineHeight: "1.8",
      }}
    >
      <div>📞 전화번호: 010-1234-5678</div>
      <div>💬 카카오톡: hjflower</div>
      <div>💳 계좌번호: 국민은행 123456-01-123456</div>
      <div>🧾 사업자등록번호: 123-45-67890</div>
      <div style={{ marginTop: "10px", color: "#888" }}>
        © 2025 HJ Flower. All rights reserved.
      </div>
    </footer>
  );
}