// lib/api/products.ts

import type { ProductCategory } from "@/app/api/products/types/product.types";

export type PaginatedProducts<T> = {
  items: T[];
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

export async function getProducts(params: {
  category: ProductCategory;
  searchParams: Record<string, string | string[] | undefined>;
}): Promise<PaginatedProducts<any>> {
  const qs = new URLSearchParams();

  for (const [key, value] of Object.entries(params.searchParams)) {
    if (typeof value === "string") {
      qs.set(key, value);
    }
  }

  qs.set("category", params.category);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?${qs.toString()}`,
    { cache: "no-store" },
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}
