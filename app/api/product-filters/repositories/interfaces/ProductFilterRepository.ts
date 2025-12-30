//app/api/product-filters/repositories/interfaces/ProductFilterRepository.ts
import type { ProductFilterMetadata } from "../../types/product-filter.types";

export interface ProductFilterRepository {
  getFiltersByCategory(category: string): Promise<ProductFilterMetadata>;
}
