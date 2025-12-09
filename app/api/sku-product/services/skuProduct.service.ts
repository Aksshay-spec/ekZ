// app/api/sku-product/services/skuProduct.service.ts

import type { Sku } from "@/app/api/sku-product/types/skuProduct.types";
import type { SkuProductRepository } from "@/app/api/sku-product/repositories/interfaces/SkuProductRepository";

export class SkuProductService {
  constructor(private repo: SkuProductRepository) {}

  async getSkus(): Promise<Sku[]> {
    const products = await this.repo.getSkus();

    return products.map((p) => ({
      ...p,
      count: String(p.count),
      title: String(p.title),
      icon: String(p.icon),
    }));
  }
}
