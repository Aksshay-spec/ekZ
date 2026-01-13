// app/api/products/repositories/implementations/ProductJsonRepository.ts

// app/api/products/repositories/implementations/ProductJsonRepository.ts

import electricJson from "@/data/electric.json";
import fmcgJson from "@/data/fmcg.json";

import type { Product, ProductCategory } from "../../types/product.types";
import type { ProductRepository } from "../interfaces/ProductRepository";
import {
  mapRawProductToProduct,
  type RawProduct,
} from "../mappers/product.mapper";

/**
 * 🔒 Explicitly type JSON data to avoid union widening issues
 */
const electricData = electricJson as unknown as RawProduct[];
const fmcgData = fmcgJson as unknown as RawProduct[];

export class ProductJsonRepository implements ProductRepository {
  async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
    if (category === "SAPTAAR_ELECTRIC") {
      return electricData.map(mapRawProductToProduct);
    }

    if (category === "FMCG") {
      return fmcgData.map(mapRawProductToProduct);
    }

    return [];
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const allProducts = [...electricData, ...fmcgData].map(
      mapRawProductToProduct,
    );

    return allProducts.find((p) => p.slug === slug) ?? null;
  }
}
