// app/api/trending-products/repositories/interfaces/TrendingProductRepository.ts

import type { TrendingProduct } from "@/app/api/trending-products/types/trendingProduct.types";

export interface TrendingProductRepository {
  getProducts(): Promise<TrendingProduct[]>;
}
