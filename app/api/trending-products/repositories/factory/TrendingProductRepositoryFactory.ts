// app/api/trending-products/repositories/factory/TrendingProductRepositoryFactory.ts

import type { TrendingProductRepository } from "../interfaces/TrendingProductRepository";
import { TrendingProductJsonRepository } from "../implementations/TrendingProductJsonRepository";
// import { TrendingProductFirebaseRepository } from "../implementations/TrendingProductFirebaseRepository";

export class TrendingProductRepositoryFactory {
  static getInstance(): TrendingProductRepository {
    const useFirebase = process.env.TRENDING_PRODUCT_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new TrendingProductFirebaseRepository();
    }

    return new TrendingProductJsonRepository();
  }
}
