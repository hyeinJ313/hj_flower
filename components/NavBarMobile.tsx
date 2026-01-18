"use client";

import { useState } from "react";

export default function NavBarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 2000 }}>
      {/* 상단 바 */}
      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="/" style={{ fontSize: "20px", fontWeight: "600" }}>꽃집</a>

        <button
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* 메뉴 Drawer */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid #ddd",
            padding: "20px",
          }}
        >
          <a href="/products" style={{ display: "block", marginBottom: "10px" }}>상품</a>
          <a href="/care" style={{ display: "block", marginBottom: "10px" }}>화분 관리</a>
          <a href="/funeral-supply" style={{ display: "block", marginBottom: "10px" }}>근조용품</a>
          <a href="/about" style={{ display: "block", marginBottom: "10px" }}>소개</a>
          <a href="/contact" style={{ display: "block", marginBottom: "10px" }}>문의</a>

          <hr style={{ margin: "15px 0" }} />

          <div style={{ fontWeight: "600", marginBottom: "10px" }}>카테고리</div>
          <a href="/products/orchid-east" style={{ display: "block" }}>동양난</a>
          <a href="/products/orchid-west" style={{ display: "block" }}>서양난</a>
          <a href="/products/wreath-celebration" style={{ display: "block" }}>축하화환</a>
          <a href="/products/wreath-funeral" style={{ display: "block" }}>근조화환</a>
          <a href="/products/wreath-rice" style={{ display: "block" }}>쌀화환</a>
          <a href="/products/bonsai" style={{ display: "block" }}>분재</a>
          <a href="/products/bouquet" style={{ display: "block" }}>꽃다발</a>
          <a href="/products/flower-basket" style={{ display: "block" }}>꽃바구니</a>
          <a href="/products/fruit-basket" style={{ display: "block" }}>과일바구니</a>
          <a href="/products/tree" style={{ display: "block" }}>관엽/나무</a>
        </div>
      )}
    </div>
  );
}