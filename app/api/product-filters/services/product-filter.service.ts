//app/api/product-filters/services/product-filter.service.ts
import type { ProductFilterRepository } from "../repositories/interfaces/ProductFilterRepository";
import type { ProductFilterMetadata } from "../types/product-filter.types";

export class ProductFilterService {
  constructor(private repo: ProductFilterRepository) {}

  async getFilters(category: string): Promise<ProductFilterMetadata> {
    return this.repo.getFiltersByCategory(category);
  }
}
