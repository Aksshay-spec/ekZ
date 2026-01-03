// app/category/[slug]/page.tsx

export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";

import { getProducts } from "@/lib/api/products";
import { getFilterMetadata } from "@/lib/api/filters";
import { mapSlugToCategory } from "@/lib/mappers/category.mapper";

import HomeSliderSection from "@/components/products/home-slider/HomeSliderSection";
import CategoryProductsSection from "@/components/products/category-carousel-products/CategoryProductsSection";
import CategoryTrendingProductsSection from "@/components/products/category-trending-products/CategoryTrendingProductsSection";
import ShowAllProductsSection from "@/components/products/all-products/ShowAllProductsSection";
import PolicySection from "@/components/home/policies/PolicySection";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  // ✅ MUST unwrap promises
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  let category;
  try {
    category = mapSlugToCategory(slug);
  } catch {
    notFound();
  }

  const [products, filters] = await Promise.all([
    getProducts({
      category,
      searchParams: resolvedSearchParams, // 👈 IMPORTANT
    }),
    getFilterMetadata(category),
  ]);

  return (
    <>
      <HomeSliderSection />

      <ShowAllProductsSection
        slug={slug}
        category={category}
        products={products}
        filters={filters}
        searchKey={JSON.stringify(resolvedSearchParams)}
      />

      <CategoryTrendingProductsSection />
      <CategoryProductsSection />
      <PolicySection />
    </>
  );
}
