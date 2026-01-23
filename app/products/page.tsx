export const dynamic = "force-dynamic";

import Link from "next/link";

import HomeSliderSection from "@/components/products/home-slider/HomeSliderSection";
import CategoryTrendingProductsSection from "@/components/products/category-trending-products/CategoryTrendingProductsSection";
import CategoryProductsSection from "@/components/products/category-carousel-products/CategoryProductsSection";
import PolicySection from "@/components/home/policies/PolicySection";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* --------------------------------
   Server-side data fetching
-------------------------------- */

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

async function getNewArrivals() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/new-arrivals`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch new arrivals");
  }

  return res.json();
}

/* --------------------------------
   Page Component
-------------------------------- */

export default async function ProductsLandingPage() {
  const [categories, newArrivals] = await Promise.all([
    getCategories(),
    getNewArrivals(),
  ]);

  return (
    <main className="flex flex-col gap-20 bg-white">

      {/* 🔥 HERO SLIDER */}
      <HomeSliderSection />

      {/* 🛍 SHOP BY CATEGORY (Flipkart style) */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Shop by Category
          </h2>
          <Badge className="bg-[--color-redish-pink-100] text-[--color-redish-pink-700]">
            Browse All
          </Badge>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category: any) => (
            <Link
              key={category.id}
              href={`/products/categories/${category.slug}`}
            >
              <Card
                className={cn(
                  "group cursor-pointer transition-all",
                  "hover:shadow-lg",
                  "hover:border-[--color-redish-pink-300]"
                )}
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-redish-pink-50)",
                    }}
                  >
                    <span className="text-2xl font-bold text-[--color-redish-pink-600]">
                      {category.label.charAt(0)}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm">
                    {category.label}
                  </h3>

                  {category.description && (
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 🆕 NEW ARRIVALS */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-aqua-green-50)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              New Arrivals
            </h2>

            <Link href="/products">
              <Button
                variant="outline"
                className="border-[--color-aqua-green-400] text-[--color-aqua-green-700]"
              >
                View All
              </Button>
            </Link>
          </div>

          <CategoryProductsSection products={newArrivals} />
        </div>
      </section>

      {/* 🔥 TRENDING */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Trending Products
          </h2>
          <Badge className="bg-[--color-aqua-green-100] text-[--color-aqua-green-800]">
            Hot 🔥
          </Badge>
        </div>

        <CategoryTrendingProductsSection />
      </section>

      {/* ⭐ FEATURED COLLECTIONS */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Collections
        </h2>

        <CategoryProductsSection />
      </section>

      {/* 🛡 POLICIES */}
      <PolicySection />
    </main>
  );
}
