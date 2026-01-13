//app/api/categories/route.ts
import { NextResponse } from "next/server";
import { CategoryRepositoryFactory } from "./repositories/factory/CategoryRepositoryFactory";
import { CategoryService } from "./services/category.service";

export async function GET() {
  try {
    const repo = CategoryRepositoryFactory.getInstance();
    const service = new CategoryService(repo);

    const categories = await service.getCategories();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("categories GET error:", error);
    return NextResponse.json(
      { error: "Failed to load categories" },
      { status: 500 },
    );
  }
}
