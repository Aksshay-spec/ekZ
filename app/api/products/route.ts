//app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ProductRepositoryFactory } from "./repositories/factory/ProductRepositoryFactory";
import { ProductService } from "./services/product.service";

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get("category");

    if (!category) {
      return NextResponse.json(
        { error: "category is required" },
        { status: 400 }
      );
    }

    const repo = ProductRepositoryFactory.getInstance();
    const service = new ProductService(repo);

    const result = await service.getProductList(
      category as any,
      req.nextUrl.searchParams
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("products GET error:", error);
    return NextResponse.json(
      { error: "Failed to load products" },
      { status: 500 }
    );
  }
}
