// app/api/products/[slug]/route.ts
import { NextResponse } from "next/server";
import { ProductRepositoryFactory } from "../repositories/factory/ProductRepositoryFactory";
import { ProductService } from "../services/product.service";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    // ✅ FIX: unwrap params (Next.js 14 requirement)
    const { slug } = await params;

    const repo = ProductRepositoryFactory.getInstance();
    const service = new ProductService(repo);

    const product = await service.getProductDetail(slug);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("product detail GET error:", error);
    return NextResponse.json(
      { error: "Failed to load product" },
      { status: 500 },
    );
  }
}
