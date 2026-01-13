// app/api/trending-products/repositories/factory/TrendingProductRepositoryFactory.ts

import { TrendingProductJsonRepository } from "../implementations/TrendingProductJsonRepository";
import type { TrendingProductRepository } from "../interfaces/TrendingProductRepository";

export class TrendingProductRepositoryFactory {
  static getInstance(): TrendingProductRepository {
    const useFirebase = process.env.TRENDING_PRODUCT_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new TrendingProductFirebaseRepository();
    }

    return new TrendingProductJsonRepository();
  }
}
