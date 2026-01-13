//app/api/products/repositories/factory/ProductRepositoryFactory.ts

import { ProductJsonRepository } from "../implementations/ProductJsonRepository";
import type { ProductRepository } from "../interfaces/ProductRepository";
// import { ProductFirebaseRepository } from "../implementations/ProductFirebaseRepository";

export class ProductRepositoryFactory {
  static getInstance(): ProductRepository {
    const useFirebase = process.env.PRODUCTS_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new ProductFirebaseRepository();
    }

    return new ProductJsonRepository();
  }
}
