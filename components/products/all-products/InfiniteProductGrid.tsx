// components/products/all-products/InfiniteProductGrid.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "./ProductGrid";

type Props = {
  initialItems: any[];
  category: string;
  totalPages: number;
};

export default function InfiniteProductGrid({
  initialItems,
  category,
  totalPages,
}: Props) {
  const searchParams = useSearchParams();

  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  async function loadNextPage() {
    if (loading) return;
    if (page >= totalPages) return;

    setLoading(true);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page + 1));
    params.set("limit", "12");

    const res = await fetch(
      `/api/products?category=${category}&${params.toString()}`
    );

    const data = await res.json();

    setItems((prev) => [...prev, ...data.items]);
    setPage((prev) => prev + 1);
    setLoading(false);
  }

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadNextPage();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [observerRef.current, page, totalPages]);

  return (
    <>
      <ProductGrid products={items} />

      {/* Sentinel */}
      {page < totalPages && (
        <div
          ref={observerRef}
          className="h-10 flex items-center justify-center text-sm text-muted-foreground"
        >
          {loading ? "Loading more products..." : "Scroll to load more"}
        </div>
      )}
    </>
  );
}
