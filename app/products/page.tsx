export const dynamic = "force-dynamic";

import Link from "next/link";
import PolicySection from "@/components/home/policies/PolicySection";
import CategoryProductsSection from "@/components/products/category-carousel-products/CategoryProductsSection";
import CategoryTrendingProductsSection from "@/components/products/category-trending-products/CategoryTrendingProductsSection";
import HomeSliderSection from "@/components/products/home-slider/HomeSliderSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Electric Products",
    slug: "saptaar-electric",
    description: "EV chargers, electrical accessories & smart power",
    badge: "Popular",
  },
  {
    title: "FMCG Products",
    slug: "saptaar-fmcg",
    description: "Daily essentials, food & household items",
    badge: "New",
  },
];

export default function ProductsLandingPage() {
  return (
    <main className="flex flex-col gap-16">
      {/* 🔥 HERO / SLIDER */}
      <HomeSliderSection />

      {/* 🛍 SHOP BY CATEGORY */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Shop by Category</h2>
          <Badge variant="secondary">Browse All</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card
              key={category.slug}
              className="group hover:shadow-lg transition-all"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <Badge>{category.badge}</Badge>
                </div>

                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>

                <Link
                  href={`/products/categories/${category.slug}`}
                  className="mt-2"
                >
                  <Button className="w-fit">Explore {category.title}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🔥 TRENDING PRODUCTS */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Trending Products</h2>
        <CategoryTrendingProductsSection />
      </section>

      {/* ⭐ FEATURED PRODUCTS */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <CategoryProductsSection />
      </section>

      {/* 🛡 TRUST / POLICIES */}
      <PolicySection />
    </main>
  );
}
