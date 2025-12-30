//app/category/[slug]/page.tsx
import { getProducts } from "@/lib/api/products";
import { getFilterMetadata } from "@/lib/api/filters";
import ProductGrid from "@/components/products/ProductGrid";
import FiltersSidebar from "@/components/products/FiltersSidebar";
import SortDropdown from "@/components/products/SortDropdown";

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

const CATEGORY_MAP: Record<string, "SAPTAAR_ELECTRIC" | "FMCG"> = {
  "saptaar-electric": "SAPTAAR_ELECTRIC",
  fmcg: "FMCG",
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const category = CATEGORY_MAP[params.slug];

  const [products, filters] = await Promise.all([
    getProducts({ category, searchParams }),
    getFilterMetadata(category),
  ]);

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex items-start gap-6">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-64">
          <FiltersSidebar filters={filters} />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">
              {category === "SAPTAAR_ELECTRIC"
                ? "SAPTAAR Electricals"
                : "FMCG"}
            </h1>

            <SortDropdown />
          </div>

          <ProductGrid products={products.items} />

          {/* Pagination */}
        </div>
      </div>
    </section>
  );
}
