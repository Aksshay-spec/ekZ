// components/home/trending-products/TrendingProductsSection.tsx

import { TrendingProductRepositoryFactory } from "@/app/api/trending-products/repositories/factory/TrendingProductRepositoryFactory";
import { TrendingProductService } from "@/app/api/trending-products/services/trendingProduct.service";
import TrendingProductsCarousel from "./TrendingProductsCarousel";
import SectionHeader from "@/components/common/SectionHeader";

export default async function TrendingProductsSection() {
  const repo = TrendingProductRepositoryFactory.getInstance();
  const service = new TrendingProductService(repo);

  const products = await service.getProducts();

  return (
    <section className="bg-white pt-8 pb-20 overflow-hidden text-center">
      {/* <h3 className="mt-8 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
        Trending Products
      </h3> */}
            <SectionHeader
              subtitle="Trending Products"
              subtitleClassName=""
            />

      <TrendingProductsCarousel products={products} />
    </section>
  );
}
