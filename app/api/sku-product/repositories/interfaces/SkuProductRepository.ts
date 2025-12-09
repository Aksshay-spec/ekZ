// app/api/sku-product/repositories/interfaces/SkuProductRepository.ts

import type { Sku } from "@/app/api/sku-product/types/skuProduct.types";

export interface SkuProductRepository {
  getSkus(): Promise<Sku[]>;
}
