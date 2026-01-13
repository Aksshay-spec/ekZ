//app/api/product-filters/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { ProductFilterRepositoryFactory } from "./repositories/factory/ProductFilterRepositoryFactory";
import { ProductFilterService } from "./services/product-filter.service";

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get("category");

    if (!category) {
      return NextResponse.json(
        { error: "category is required" },
        { status: 400 },
      );
    }

    const repo = ProductFilterRepositoryFactory.getInstance();
    const service = new ProductFilterService(repo);

    const filters = await service.getFilters(category);

    return NextResponse.json(filters);
  } catch (error) {
    console.error("product-filters GET error:", error);
    return NextResponse.json(
      { error: "Failed to load filter metadata" },
      { status: 500 },
    );
  }
}
