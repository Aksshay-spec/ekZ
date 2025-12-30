// lib/mappers/category.mapper.ts

import type { ProductCategory } from "@/app/api/products/types/product.types";

const CATEGORY_SLUG_MAP: Record<string, ProductCategory> = {
  "saptaar-electric": "SAPTAAR_ELECTRIC",
  fmcg: "FMCG",
};

export function mapSlugToCategory(
  slug: string | string[] | undefined
): ProductCategory {
  if (!slug) {
    throw new Error("Category slug is missing");
  }

  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

  const category = CATEGORY_SLUG_MAP[normalizedSlug];

  if (!category) {
    throw new Error(`Invalid category slug: ${normalizedSlug}`);
  }

  return category;
}
