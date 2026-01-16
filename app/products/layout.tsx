"use client";

import { FilterProvider, useFilter } from "./FilterContext";

function FilterBars() {
  const { priceFilter, setPriceFilter, sortType, setSortType } = useFilter();

  return (
    <>
      {/* 가격 필터 바 */}
      <div
        style={{
          position: "sticky",
          top: "80px",
          zIndex: 30,
          background: "white",
          padding: "12px 0",
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {[
          { key: "all", label: "전체" },
          { key: "under100", label: "10만원 이하" },
          { key: "100to150", label: "10–15만원" },
          { key: "150to200", label: "15–20만원" },
          { key: "over200", label: "20만원 이상" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setPriceFilter(item.key)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border:
                priceFilter === item.key
                  ? "2px solid #4CAF50"
                  : "1px solid #ccc",
              background: priceFilter === item.key ? "#E8F5E9" : "white",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 이름/가격 정렬 바 */}
      <div
        style={{
          position: "sticky",
          top: "130px",
          zIndex: 29,
          background: "white",
          padding: "12px 0",
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {[
          { key: "name", label: "이름순" },
          { key: "high", label: "높은 가격순" },
          { key: "low", label: "낮은 가격순" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSortType(item.key)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border:
                sortType === item.key
                  ? "2px solid #2196F3"
                  : "1px solid #ccc",
              background: sortType === item.key ? "#E3F2FD" : "white",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <FilterProvider>
      <div style={{ display: "flex", marginTop: "100px" }}>
        {/* 왼쪽 카테고리 */}
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
          <h3 style={{ marginBottom: "10px" }}>카테고리</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li><a href="/products/orchid-east">동양난</a></li>
            <li><a href="/products/orchid-west">서양난</a></li>
            <li><a href="/products/wreath-celebration">축하화환</a></li>
            <li><a href="/products/wreath-funeral">근조화환</a></li>
            <li><a href="/products/wreath-rice">쌀화환</a></li>
            <li><a href="/products/tree">관엽/나무</a></li>
            <li><a href="/products/bonsai">분재</a></li>
            <li><a href="/products/bouquet">꽃다발</a></li>
            <li><a href="/products/flower-basket">꽃바구니</a></li>
            <li><a href="/products/fruit-basket">과일바구니</a></li>
          </ul>
        </aside>

        {/* 오른쪽 콘텐츠 */}
        <main style={{ flex: 1, padding: "20px", position: "relative" }}>
          <FilterBars />
          {children}
        </main>
      </div>
    </FilterProvider>
  );
}

