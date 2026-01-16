"use client";

import { products } from "../data/products";
import { useFilter } from "./FilterContext";

export default function ProductListPage() {
  const { priceFilter, sortType } = useFilter();

  // 가격 필터
  const filteredProducts = products.filter((p) => {
    if (priceFilter === "all") return true;
    if (priceFilter === "under100") return p.price < 100000;
    if (priceFilter === "100to150") return p.price >= 100000 && p.price < 150000;
    if (priceFilter === "150to200") return p.price >= 150000 && p.price < 200000;
    if (priceFilter === "over200") return p.price >= 200000;
    return true;
  });

  // 정렬
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "high") return b.price - a.price;
    if (sortType === "low") return a.price - b.price;
    return 0;
  });

  return (
    <div>
      {sortedProducts.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          {p.name} - {p.price.toLocaleString()}원
        </div>
      ))}
    </div>
  );
}
