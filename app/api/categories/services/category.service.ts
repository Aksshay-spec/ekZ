//app/api/categories/services/category.service.ts

import type { CategoryRepository } from "../repositories/interfaces/CategoryRepository";
import type { Category } from "../types/category.types";

export class CategoryService {
  constructor(private repo: CategoryRepository) {}

  async getCategories(): Promise<Category[]> {
    return this.repo.getAllCategories();
  }

  async getActiveCategories(): Promise<Category[]> {
    return this.getCategories();
  }
}
