"use client";

import Link from "next/link";
import { products } from "../../data/products";
import { useFilter } from "../FilterContext";

export default function OrchidEastPage() {
  const { priceFilter, sortType } = useFilter();

  // 1) 카테고리 필터
  const categoryProducts = products.filter(
    (p) => p.category === "orchid-east"
  );

  // 2) 가격 필터
  const filteredProducts = categoryProducts.filter((p) => {
    if (priceFilter === "all") return true;
    if (priceFilter === "under100") return p.price < 100000;
    if (priceFilter === "100to150") return p.price >= 100000 && p.price < 150000;
    if (priceFilter === "150to200") return p.price >= 150000 && p.price < 200000;
    if (priceFilter === "over200") return p.price >= 200000;
    return true;
  });

  // 3) 정렬
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "high") return b.price - a.price;
    if (sortType === "low") return a.price - b.price;
    return 0;
  });

  // 4) 카드 UI 렌더링
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {sortedProducts.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              background: "#fff",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "18px" }}>{p.name}</h3>
            <p style={{ color: "#444", fontSize: "16px" }}>
              {p.price.toLocaleString()}원
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

