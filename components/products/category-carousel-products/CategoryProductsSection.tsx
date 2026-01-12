// components/products/category-carousel-products/CategoryProductsSection.tsx

import SectionHeader from "@/components/common/SectionHeader";
import CategoryProductsCarousel from "./CategoryProductsCarousel";

import { CategoryRepositoryFactory } from "@/app/api/categories/repositories/factory/CategoryRepositoryFactory";
import { CategoryService } from "@/app/api/categories/services/category.service";

import { ProductRepositoryFactory } from "@/app/api/products/repositories/factory/ProductRepositoryFactory";
import { ProductService } from "@/app/api/products/services/product.service";

export default async function CategoryProductsSection() {
  const categoryRepo = CategoryRepositoryFactory.getInstance();
  const categoryService = new CategoryService(categoryRepo);

  const productRepo = ProductRepositoryFactory.getInstance();
  const productService = new ProductService(productRepo);

  const categories = await categoryService.getActiveCategories();

  const sections = await Promise.all(
    categories.map(async (category) => ({
      category,
      products: await productService.getProductsByCategory(category.key),
    }))
  );

  return (
    <section className="bg-white py-10">
      {sections.map(({ category, products }) => (
        <div key={category.id} className="mb-14">
          <SectionHeader subtitle={category.label} />
          <CategoryProductsCarousel products={products} />
        </div>
      ))}
    </section>
  );
}
