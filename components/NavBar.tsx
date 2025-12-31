"use client";
import { useState } from "react";

export default function NavBar() {
  const [hoverOpen, setHoverOpen] = useState(false); // hover로 열린 상태
  const [clickOpen, setClickOpen] = useState(false); // 클릭으로 고정된 상태

  const [openOrchid, setOpenOrchid] = useState(false);
  const [openWreath, setOpenWreath] = useState(false);

  // 하위 메뉴 하나만 열리도록
  const openOnly = (menu: "orchid" | "wreath" | null) => {
    setOpenOrchid(menu === "orchid");
    setOpenWreath(menu === "wreath");
  };

  const menuOpen = hoverOpen || clickOpen;

  return (
    <div style={{ position: "relative" }}>
      {/* 플로팅 헤더 */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#ffffff",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "20px 0",
          borderBottom: "1px solid #ddd",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        <a href="/">홈</a>

        {/* 상품 */}
        <span
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHoverOpen(true)}
          onClick={() => setClickOpen(!clickOpen)} // 클릭 시 고정/해제
        >
          상품
        </span>

        <a href="/care">화분 관리</a>
        <a href="/funeral-supply">일회용 근조용품 제작·공급</a>
        <a href="/about">소개</a>
        <a href="/contact">문의</a>
      </nav>

      {/* 상품 카테고리 전체 박스 */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            width: "100%",
            background: "#ffffff",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
            zIndex: 999,
          }}
          onMouseEnter={() => setHoverOpen(true)}
          onMouseLeave={() => {
            if (!clickOpen) {
              setHoverOpen(false);
              openOnly(null);
            }
          }}
        >
          {/* 1단 카테고리 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => openOnly("orchid")}
            >
              난
            </span>

            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => openOnly("wreath")}
            >
              화환
            </span>

            <a href="/products/bonsai">분재</a>
            <a href="/products/bouquet">꽃다발</a>
            <a href="/products/flower-basket">꽃바구니</a>
            <a href="/products/fruit-basket">과일바구니</a>
            <a href="/products/tree">나무(관엽)</a>
            <a href="/products/cactus">선인장</a>
            <a href="/products/charcoal">숯부착</a>
            <a href="/products/items">소품</a>
            <a href="/products/etc">기타</a>
          </div>

          {/* 난 하위 */}
          {openOrchid && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                paddingTop: "10px",
              }}
            >
              <a href="/products/orchid-east">동양난</a>
              <a href="/products/orchid-west">서양난</a>
            </div>
          )}

          {/* 화환 하위 */}
          {openWreath && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                paddingTop: "10px",
              }}
            >
              <a href="/products/wreath-celebration">축하화환</a>
              <a href="/products/wreath-funeral">근조화환</a>
              <a href="/products/wreath-rice">쌀화환</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}