"use client";

import { products } from "../data/products";
import { useFilter } from "./FilterContext";
import Link from "next/link";

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedProducts.map((p) => (
        <Link href={`/products/${p.id}`} key={p.id}>
          <div className="p-4 border rounded bg-white shadow-sm text-center hover:shadow-md transition cursor-pointer">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <div className="font-semibold">{p.name}</div>
            <div className="text-gray-600">{p.price.toLocaleString()}원</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
