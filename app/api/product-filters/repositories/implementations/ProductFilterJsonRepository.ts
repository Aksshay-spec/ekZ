// app/api/product-filters/repositories/implementations/ProductFilterJsonRepository.ts
import electricData from "@/data/electric.json";
import fmcgData from "@/data/fmcg.json";
import type { ProductFilterMetadata } from "../../types/product-filter.types";
import type { ProductFilterRepository } from "../interfaces/ProductFilterRepository";

export class ProductFilterJsonRepository implements ProductFilterRepository {
  async getFiltersByCategory(category: string): Promise<ProductFilterMetadata> {
    const products = category === "SAPTAAR_ELECTRIC" ? electricData : fmcgData;

    const colors = new Set<string>();
    const wattages = new Set<string>();
    const weights = new Set<string>();

    let minPrice = Infinity;
    let maxPrice = 0;

    products.forEach((p: any) => {
      if (p.colors) p.colors.forEach((c: string) => colors.add(c));
      if (p.wattages) p.wattages.forEach((w: string) => wattages.add(w));
      if (p.weights) p.weights.forEach((w: string) => weights.add(w));

      minPrice = Math.min(minPrice, p.price);
      maxPrice = Math.max(maxPrice, p.price);
    });

    return {
      colors: category === "SAPTAAR_ELECTRIC" ? Array.from(colors).sort() : [],

      wattages:
        category === "SAPTAAR_ELECTRIC" ? Array.from(wattages).sort() : [],

      weights: category === "FMCG" ? Array.from(weights).sort() : [],

      priceRange: {
        min: minPrice === Infinity ? 0 : minPrice,
        max: maxPrice,
      },

      ratings: [5, 4, 3, 2, 1],
    };
  }
}
