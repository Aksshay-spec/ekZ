//app/api/categories/repositories/factory/CategoryRepositoryFactory.ts

import { CategoryJsonRepository } from "../implementations/CategoryJsonRepository";
import type { CategoryRepository } from "../interfaces/CategoryRepository";
// import { CategoryDbRepository } from "../implementations/CategoryDbRepository";

export class CategoryRepositoryFactory {
  static getInstance(): CategoryRepository {
    const useDb = process.env.CATEGORIES_USE_DB === "true";

    if (useDb) {
      // return new CategoryDbRepository();
    }

    return new CategoryJsonRepository();
  }
}
