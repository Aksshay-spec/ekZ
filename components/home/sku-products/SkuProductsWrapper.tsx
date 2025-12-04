import { SkuProductRepositoryFactory } from "@/app/api/sku-product/repositories/factory/SkuProductRepositoryFactory";
import { SkuProductService } from "@/app/api/sku-product/services/skuProduct.service";
import SkuProducts from "./SkuProducts";

export default async function SkuProductsWrapper() {
  const repo = SkuProductRepositoryFactory.getInstance();
  const service = new SkuProductService(repo);

  const items = await service.getProducts();

  return <SkuProducts items={items} />;
}
