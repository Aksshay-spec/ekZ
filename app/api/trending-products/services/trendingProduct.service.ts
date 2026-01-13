// app/api/trending-products/services/trendingProduct.service.ts

import type { TrendingProductRepository } from "@/app/api/trending-products/repositories/interfaces/TrendingProductRepository";
import type { TrendingProduct } from "@/app/api/trending-products/types/trendingProduct.types";

export class TrendingProductService {
  constructor(private repo: TrendingProductRepository) {}

  async getProducts(): Promise<TrendingProduct[]> {
    const products = await this.repo.getProducts();

    // Future business logic can be applied here
    return products;
  }
}
