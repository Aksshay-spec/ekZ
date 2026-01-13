// app/api/trending-products/repositories/implementations/TrendingProductJsonRepository.ts

import type { TrendingProduct } from "@/app/api/trending-products/types/trendingProduct.types";
import trendingData from "@/data/trendingProductData.json";
import type { TrendingProductRepository } from "../interfaces/TrendingProductRepository";

export class TrendingProductJsonRepository
  implements TrendingProductRepository
{
  async getProducts(): Promise<TrendingProduct[]> {
    return trendingData as TrendingProduct[];
  }
}
