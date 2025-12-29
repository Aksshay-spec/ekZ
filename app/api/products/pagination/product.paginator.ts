//app/api/products/pagination/product.paginator.ts
import type { Product } from "../types/product.types";

export type PaginatedResult<T> = {
  items: T[];
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

export class ProductPaginator {
  static paginate(
    items: Product[],
    page = 1,
    limit = 12
  ): PaginatedResult<Product> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      items: items.slice(start, end),
      page,
      limit,
      totalItems,
      totalPages,
    };
  }
}
