//app/api/product-filters/repositories/factory/ProductFilterRepositoryFactory.ts
import type { ProductFilterRepository } from "../interfaces/ProductFilterRepository";
import { ProductFilterJsonRepository } from "../implementations/ProductFilterJsonRepository";
// import { ProductFilterDbRepository } from "../implementations/ProductFilterDbRepository";

export class ProductFilterRepositoryFactory {
  static getInstance(): ProductFilterRepository {
    const useDb = process.env.PRODUCT_FILTER_USE_DB === "true";

    if (useDb) {
      // return new ProductFilterDbRepository();
    }

    return new ProductFilterJsonRepository();
  }
}
