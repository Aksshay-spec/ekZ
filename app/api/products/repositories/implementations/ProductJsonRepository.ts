//app/api/products/repositories/implementations/ProductJsonRepository.ts
import electricData from "@/data/electric.json";
import fmcgData from "@/data/fmcg.json";

import type { Product, ProductCategory } from "../../types/product.types";
import type { ProductRepository } from "../interfaces/ProductRepository";

export class ProductJsonRepository implements ProductRepository {
  async getProductsByCategory(
    category: ProductCategory
  ): Promise<Product[]> {
    if (category === "SAPTAAR_ELECTRIC") {
      return electricData as Product[];
    }

    if (category === "FMCG") {
      return fmcgData as Product[];
    }

    return [];
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const allProducts = [
      ...(electricData as Product[]),
      ...(fmcgData as Product[]),
    ];

    return allProducts.find((p) => p.slug === slug) ?? null;
  }
}
