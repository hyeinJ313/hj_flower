"use client";
import { useState } from "react";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");

  return (
    <div style={{ display: "flex", marginTop: "100px" }}>
      {/* 왼쪽 사이드바 */}
      <aside
        style={{
          width: "250px",
          padding: "20px",
          borderRight: "1px solid #ddd",
          height: "100vh",
          position: "sticky",
          top: "80px",
        }}
      >
        {/* 검색 */}
        <input
          type="text"
          placeholder="상품 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        {/* 카테고리 */}
        <h3 style={{ marginBottom: "10px" }}>카테고리</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><a href="/products/orchid-east">동양난</a></li>
          <li><a href="/products/orchid-west">서양난</a></li>
          <li><a href="/products/wreath-celebration">축하화환</a></li>
          <li><a href="/products/wreath-funeral">근조화환</a></li>
          <li><a href="/products/wreath-rice">쌀화환</a></li>
          <li><a href="/products/bonsai">분재</a></li>
          <li><a href="/products/bouquet">꽃다발</a></li>
          <li><a href="/products/flower-basket">꽃바구니</a></li>
          <li><a href="/products/fruit-basket">과일바구니</a></li>
          <li><a href="/products/tree">나무(관엽)</a></li>
          <li><a href="/products/cactus">선인장</a></li>
          <li><a href="/products/charcoal">숯부착</a></li>
          <li><a href="/products/items">소품</a></li>
          <li><a href="/products/etc">기타</a></li>
        </ul>

        {/* 추천 카테고리 */}
        <h3 style={{ marginTop: "30px", marginBottom: "10px" }}>추천 상품</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><a href="/products?tag=promotion">승진/영전 축하</a></li>
          <li><a href="/products?tag=birthday">생일 축하</a></li>
          <li><a href="/products?tag=opening">개업 축하</a></li>
          <li><a href="/products?tag=condolence">근조/조문</a></li>
        </ul>
      </aside>

      {/* 오른쪽 콘텐츠 */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}