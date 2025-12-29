//app/api/products/sorters/product.sorter.ts
import type { Product } from "../types/product.types";

export type ProductSortKey =
  | "price_asc"
  | "price_desc"
  | "rating_desc"
  | "newest";

export class ProductSorter {
  static apply(
    products: Product[],
    sort?: ProductSortKey
  ): Product[] {
    if (!sort) return products;

    const sorted = [...products];

    switch (sort) {
      case "price_asc":
        return sorted.sort((a, b) => a.price - b.price);

      case "price_desc":
        return sorted.sort((a, b) => b.price - a.price);

      case "rating_desc":
        return sorted.sort((a, b) => b.rating - a.rating);

      case "newest":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );

      default:
        return products;
    }
  }
}
