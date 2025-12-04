// app/api/sku-product/repositories/interfaces/SkuProductRepository.ts

import type { SkuProduct } from "@/app/api/sku-product/types/skuProduct.types";

export interface SkuProductRepository {
  getProducts(): Promise<SkuProduct[]>;
}
