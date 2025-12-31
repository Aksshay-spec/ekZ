// app/api/categories/repositories/implementations/CategoryJsonRepository.ts

import categoryData from "@/data/categoryData.json";
import type { Category } from "../../types/category.types";
import type { CategoryRepository } from "../interfaces/CategoryRepository";

export class CategoryJsonRepository implements CategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    return (categoryData as Category[])
      .filter((c) => c.active)
      .sort((a, b) => a.order - b.order);
  }
}
