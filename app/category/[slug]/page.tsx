// app/category/[slug]/page.tsx

import { notFound } from "next/navigation";

import { getProducts } from "@/lib/api/products";
import { getFilterMetadata } from "@/lib/api/filters";
import { mapSlugToCategory } from "@/lib/mappers/category.mapper";

import SortDropdown from "@/components/products/sort-dropdown";
import MobileFiltersWrapper from "@/components/products/MobileFiltersWrapper";
import FiltersPanel from "@/components/products/FiltersPanel";
import ProductGrid from "@/components/products/ProductGrid";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CategoryPage(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  let category;

  try {
    category = mapSlugToCategory(params.slug);
  } catch {
    notFound(); // ✅ proper 404
  }

  const [products, filters] = await Promise.all([
    getProducts({
      category,
      searchParams,
    }),
    getFilterMetadata(category),
  ]);

  return (
    <section className="container py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold capitalize">
          {params.slug.replace("-", " ")}
        </h1>
        <SortDropdown />
      </div>

      {/* Mobile Filters */}
      <MobileFiltersWrapper filters={filters} />

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 mt-6">
        {/* Desktop Filters */}
        <aside className="hidden md:block">
          <FiltersPanel filters={filters} />
        </aside>

        {/* Products */}
        <ProductGrid products={products.items} />
      </div>
    </section>
  );
}
