//app/api/products/filters/product.filter.ts
import type { Product } from "../types/product.types";

export class ProductFilter {
  static apply(products: Product[], params: URLSearchParams): Product[] {
    let filtered = [...products];

    const brand = params.get("brand");
    const color = params.get("color");
    const minPrice = params.get("minPrice");
    const maxPrice = params.get("maxPrice");

    if (brand) {
      filtered = filtered.filter((p) => p.brand === brand);
    }

    if (color) {
      filtered = filtered.filter((p) => p.colors?.includes(color));
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }

    return filtered;
  }
}
