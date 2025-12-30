//app/api/categories/repositories/implementations/CategoryJsonRepository.ts
import type { Category } from "../../types/category.types";
import type { CategoryRepository } from "../interfaces/CategoryRepository";

const categoryData: Category[] = [
  {
    id: "cat-001",
    key: "SAPTAAR_ELECTRIC",
    label: "Saptaar Electric",
    slug: "saptaar-electric",
    description: "Electrical & EV infrastructure products",
    icon: "/icons/electric.svg",
    order: 1,
    active: true,
  },
  {
    id: "cat-002",
    key: "FMCG",
    label: "FMCG",
    slug: "fmcg",
    description: "Fast Moving Consumer Goods",
    icon: "/icons/fmcg.svg",
    order: 2,
    active: true,
  },
];

export class CategoryJsonRepository implements CategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    return categoryData
      .filter((c) => c.active)
      .sort((a, b) => a.order - b.order);
  }
}
