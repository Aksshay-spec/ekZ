// app/api/products/filters/product.filter.ts
import type { Product } from "../types/product.types";
export class ProductFilter {
  static apply(products: Product[], params: URLSearchParams): Product[] {
    let filtered = [...products];

    /* ---------------- COLORS ---------------- */
    const colors = params.getAll("colors");
    if (colors.length) {
      filtered = filtered.filter(p =>
        p.colors?.some(c => colors.includes(c.toLowerCase()))
      );
    }

    /* ---------------- WATTAGES ---------------- */
    const wattages = params.getAll("wattages");
    if (wattages.length) {
      filtered = filtered.filter(p =>
        p.wattages?.some(w => wattages.includes(w.toLowerCase()))
      );
    }

    /* ---------------- WEIGHTS ---------------- */
    const weights = params.getAll("weights");
    if (weights.length) {
      filtered = filtered.filter(p =>
        p.weights?.some(w => weights.includes(w.toLowerCase()))
      );
    }

    /* ---------------- PRICE ---------------- */
    const priceRanges = params.getAll("price");
    if (priceRanges.length) {
      filtered = filtered.filter(product =>
        priceRanges.some(range => {
          if (range.includes("+")) {
            const min = Number(range.replace("+", ""));
            return product.price >= min;
          }
          const [min, max] = range.split("-").map(Number);
          return product.price >= min && product.price <= max;
        })
      );
    }

    return filtered;
  }
}
