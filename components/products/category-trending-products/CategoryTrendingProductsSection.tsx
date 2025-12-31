//components/home/category-trending-products/CategoryTrendingProductsSection.tsx
import { ProductRepositoryFactory } from "@/app/api/products/repositories/factory/ProductRepositoryFactory";
import { ProductService } from "@/app/api/products/services/product.service";

import CategoryTrendingProductsCarousel from "./CategoryTrendingProductsCarousel";
import SectionHeader from "@/components/common/SectionHeader";

export default async function CategoryTrendingProductsSection() {
  const repo = ProductRepositoryFactory.getInstance();
  const service = new ProductService(repo);

  const products = await service.getAllProducts();

  const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

  return (
    <section className="bg-white pt-8 pb-20 overflow-hidden text-center">
      <SectionHeader subtitle="Explore Categories" />
      <CategoryTrendingProductsCarousel products={shuffledProducts} />
    </section>
  );
}
