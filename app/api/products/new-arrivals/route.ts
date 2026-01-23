//app/api/products/new-arrivals/route.ts
import { NextResponse } from "next/server";
import { ProductRepositoryFactory } from "../repositories/factory/ProductRepositoryFactory";
import { ProductService } from "../services/product.service";

export async function GET() {
  try {
    const repo = ProductRepositoryFactory.getInstance();
    const service = new ProductService(repo);

    // get all products across categories
    const products = await service.getAllProducts();

    // sort by newest
    const sorted = products.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );

    // Flipkart-style limited strip
    const latest = sorted.slice(0, 10);

    return NextResponse.json(latest);
  } catch (error) {
    console.error("new-arrivals GET error:", error);
    return NextResponse.json(
      { error: "Failed to load new arrivals" },
      { status: 500 }
    );
  }
}
