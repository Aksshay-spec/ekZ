// app/api/sku-product/repositories/factory/SkuProductRepositoryFactory.ts

import type { SkuProductRepository } from "../interfaces/SkuProductRepository";
import { SkuProductJsonRepository } from "../implementations/SkuProductJsonRepository";


export class SkuProductRepositoryFactory {
  static getInstance(): SkuProductRepository {
    const useFirebase = process.env.SKU_PRODUCT_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new SkuProductFirebaseRepository();
    }

    return new SkuProductJsonRepository();
  }
}
