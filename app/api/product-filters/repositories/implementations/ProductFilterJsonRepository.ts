//app/api/product-filters/repositories/implementations/ProductFilterJsonRepository.ts
import electricData from "@/data/electric.json";
import fmcgData from "@/data/fmcg.json";

import type { ProductFilterRepository } from "../interfaces/ProductFilterRepository";
import type { ProductFilterMetadata } from "../../types/product-filter.types";
import type { Product } from "@/app/api/products/types/product.types";

export class ProductFilterJsonRepository implements ProductFilterRepository {
  async getFiltersByCategory(category: string): Promise<ProductFilterMetadata> {
    const products =
      category === "SAPTAAR_ELECTRIC"
        ? (electricData as Product[])
        : (fmcgData as Product[]);

    const brands = new Set<string>();
    const colors = new Set<string>();
    let minPrice = Infinity;
    let maxPrice = 0;

    products.forEach((p) => {
      brands.add(p.brand);

      p.colors?.forEach((c) => colors.add(c));

      minPrice = Math.min(minPrice, p.price);
      maxPrice = Math.max(maxPrice, p.price);
    });

    return {
      brands: Array.from(brands).sort(),
      colors: Array.from(colors).sort(),
      priceRange: {
        min: minPrice === Infinity ? 0 : minPrice,
        max: maxPrice,
      },
      ratings: [5, 4, 3, 2, 1],
    };
  }
}
