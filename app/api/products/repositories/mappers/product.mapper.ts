// app/api/products/repositories/mappers/product.mapper.ts

import type { Product, ProductCategory } from "../../types/product.types";

export type RawProduct = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  subCategory: string;
  brand: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  images: string[];

  colors?: string[];
  wattages?: string[];
  weights?: string[];

  specifications: Record<string, string | number | boolean | null | undefined>;

  stock: {
    available: boolean;
    quantity: number;
  };

  createdAt: string;
};

/**
 * Normalize specs so Product stays strict
 */
function normalizeSpecifications(
  specs: RawProduct["specifications"],
): Record<string, string | number | boolean> {
  return Object.fromEntries(
    Object.entries(specs).filter(
      ([, value]) => value !== null && value !== undefined,
    ),
  ) as Record<string, string | number | boolean>;
}

/**
 * Raw → Domain mapper
 */
export function mapRawProductToProduct(raw: RawProduct): Product {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    category: raw.category as ProductCategory,
    subCategory: raw.subCategory,
    brand: raw.brand,
    price: raw.price,
    mrp: raw.mrp,
    rating: raw.rating,
    reviewCount: raw.reviewCount,
    images: raw.images,

    colors: raw.colors,
    wattages: raw.wattages,
    weights: raw.weights,

    specifications: normalizeSpecifications(raw.specifications),

    stock: raw.stock,
    createdAt: raw.createdAt,
  };
}
