//app/api/categories/repositories/interfaces/CategoryRepository.ts
import type { Category } from "../../types/category.types";

export interface CategoryRepository {
  getAllCategories(): Promise<Category[]>;
}
