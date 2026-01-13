// app/api/sku-product/route.ts

import { NextResponse } from "next/server";
import { SkuProductRepositoryFactory } from "@/app/api/sku-product/repositories/factory/SkuProductRepositoryFactory";
import { SkuProductService } from "@/app/api/sku-product/services/skuProduct.service";

export async function GET() {
  try {
    const repo = SkuProductRepositoryFactory.getInstance();
    const service = new SkuProductService(repo);

    const skus = await service.getSkus();

    return NextResponse.json(skus);
  } catch (error) {
    console.error("sku-product GET error:", error);
    return NextResponse.json(
      { error: "Failed to load SKU products" },
      { status: 500 },
    );
  }
}
