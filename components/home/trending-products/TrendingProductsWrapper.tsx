import { TrendingProductRepositoryFactory } from "@/app/api/trending-products/repositories/factory/TrendingProductRepositoryFactory";
import { TrendingProductService } from "@/app/api/trending-products/services/trendingProduct.service";
import TrendingProducts from "./TrendingProducts";

export default async function TrendingProductsWrapper() {
  const repo = TrendingProductRepositoryFactory.getInstance();
  const service = new TrendingProductService(repo);

  const products = await service.getProducts();

  return <TrendingProducts products={products} />;
}
