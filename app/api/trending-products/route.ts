// app/api/trending-products/route.ts

import { NextResponse } from "next/server";
import { TrendingProductRepositoryFactory } from "@/app/api/trending-products/repositories/factory/TrendingProductRepositoryFactory";
import { TrendingProductService } from "@/app/api/trending-products/services/trendingProduct.service";

export async function GET() {
  try {
    const repo = TrendingProductRepositoryFactory.getInstance();
    const service = new TrendingProductService(repo);

    const products = await service.getProducts();

    return NextResponse.json(products);
  } catch (error) {
    console.error("trending-products GET error:", error);
    return NextResponse.json(
      { error: "Failed to load trending products" },
      { status: 500 }
    );
  }
}
