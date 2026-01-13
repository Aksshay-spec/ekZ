// app/api/sku-product/repositories/implementations/SkuProductJsonRepository.ts

import type { Sku } from "@/app/api/sku-product/types/skuProduct.types";
import productData from "@/data/skuProductData.json";
import type { SkuProductRepository } from "../interfaces/SkuProductRepository";

export class SkuProductJsonRepository implements SkuProductRepository {
  async getSkus(): Promise<Sku[]> {
    return productData as Sku[];
  }
}
