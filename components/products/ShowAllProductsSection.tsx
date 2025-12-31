//components/products/ShowAllProductsSection.tsx
import SortDropdown from "@/components/products/sort-dropdown";
import MobileFiltersWrapper from "@/components/products/MobileFiltersWrapper";
import FiltersPanel from "@/components/products/FiltersPanel";
import InfiniteProductGrid from "@/components/products/InfiniteProductGrid";

import type { ProductCategory } from "@/app/api/products/types/product.types";
import type { getFilterMetadata } from "@/lib/api/filters";

type Filters = Awaited<ReturnType<typeof getFilterMetadata>>;

type Props = {
  slug: string;
  category: ProductCategory;
  products: {
    items: any[];
    totalPages: number;
  };
  filters: Filters;
  searchKey: string;
};

export default function ShowAllProductsSection({
  slug,
  category,
  products,
  filters,
  searchKey,
}: Props) {
  return (
    <section className="container pt-6 pb-40 mx-auto">
      {/* =========================
          DESKTOP HEADER (unchanged)
         ========================= */}
      <div className="hidden md:flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold capitalize">
          {slug.replace("-", " ")}
        </h1>
        <SortDropdown />
      </div>

      {/* =========================
          MOBILE HEADER (NEW)
         ========================= */}
      <div className="md:hidden mb-4">
        <h1 className="text-xl text-center font-semibold capitalize mb-4">
          {slug.replace("-", " ")}
        </h1>
        <div className="flex md:hidden items-center justify-between">
          <MobileFiltersWrapper filters={filters} />
          <SortDropdown />
        </div>
      </div>

      {/* =========================
          MAIN CONTENT
         ========================= */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 mt-6">
        {/* Desktop Filters */}
        <aside className="hidden md:block">
          <FiltersPanel filters={filters} />
        </aside>

        {/* Products */}
        <InfiniteProductGrid
          key={searchKey}
          initialItems={products.items}
          category={category}
          totalPages={products.totalPages}
        />
      </div>
    </section>
  );
}
