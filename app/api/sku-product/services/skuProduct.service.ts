// app/api/sku-product/services/skuProduct.service.ts

import type { SkuProduct } from "@/app/api/sku-product/types/skuProduct.types";
import type { SkuProductRepository } from "@/app/api/sku-product/repositories/interfaces/SkuProductRepository";

export class SkuProductService {
  constructor(private repo: SkuProductRepository) {}

  async getProducts(): Promise<SkuProduct[]> {
    const products = await this.repo.getProducts();

    return products.map((p) => ({
      ...p,
      count: String(p.count),
      title: String(p.title),
      icon: String(p.icon),
      class: String(p.class),
    }));
  }
}
