// app/api/sku-product/repositories/implementations/SkuProductJsonRepository.ts

import productData from "@/data/skuProductData.json";
import type { SkuProduct } from "@/app/api/sku-product/types/skuProduct.types";
import type { SkuProductRepository } from "../interfaces/SkuProductRepository";

export class SkuProductJsonRepository implements SkuProductRepository {
  async getProducts(): Promise<SkuProduct[]> {
    return productData as SkuProduct[];
  }
}
