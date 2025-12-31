// app/api/products/filters/product.filter.ts
import type { Product } from "../types/product.types";

export class ProductFilter {
  static apply(products: Product[], params: URLSearchParams): Product[] {
    let filtered = [...products];

    /* ---------------- COLORS ---------------- */
    const colors = params.getAll("colors");

    if (colors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors?.some((color) => colors.includes(color.toLowerCase()))
      );
    }

    /* ---------------- PRICE ---------------- */
    const priceRanges = params.getAll("price");

    if (priceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        return priceRanges.some((range) => {
          // e.g. "50000+"
          if (range.includes("+")) {
            const min = Number(range.replace("+", ""));
            return product.price >= min;
          }

          // e.g. "5000-20000"
          const [min, max] = range.split("-").map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

    return filtered;
  }
}
