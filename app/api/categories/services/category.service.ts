//app/api/categories/services/category.service.ts
import type { Category } from "../types/category.types";
import type { CategoryRepository } from "../repositories/interfaces/CategoryRepository";

export class CategoryService {
  constructor(private repo: CategoryRepository) {}

  async getCategories(): Promise<Category[]> {
    return this.repo.getAllCategories();
  }
}
