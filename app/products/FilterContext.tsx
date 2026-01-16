"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  priceFilter: string;
  setPriceFilter: (v: string) => void;
  sortType: string;
  setSortType: (v: string) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortType, setSortType] = useState("name");

  return (
    <FilterContext.Provider
      value={{ priceFilter, setPriceFilter, sortType, setSortType }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilter는 FilterProvider 안에서만 사용해야 합니다.");
  }
  return ctx;
}
