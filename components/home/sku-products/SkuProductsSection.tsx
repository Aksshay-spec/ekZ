// components/home/sku-products/SkuProductsSection.tsx
import { SkuProductRepositoryFactory } from "@/app/api/sku-product/repositories/factory/SkuProductRepositoryFactory";
import { SkuProductService } from "@/app/api/sku-product/services/skuProduct.service";
import SectionHeader from "@/components/common/SectionHeader";
import SkuProductsCarousel from "./SkuProductsCarousel";

export default async function SkuProductsSection() {
  const repo = SkuProductRepositoryFactory.getInstance();
  const service = new SkuProductService(repo);

  const items = await service.getSkus();

  return (
    <section className="bg-white py-8 text-center">
      {/* <h3
        className="mt-12 inline-block text-black px-3 py-1 font-semibold rounded relative
        after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400
        after:mt-1 after:rounded-full after:mx-auto"
      >
        Every Count Tells Our Story
      </h3> */}
      <SectionHeader
        subtitle="Every Count Tells Our Story"
        subtitleClassName=""
      />

      <SkuProductsCarousel items={items} />
    </section>
  );
}
