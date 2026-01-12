//components/products/category-trending-products/CategoryTrendingProductsCarousel.tsx
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import CategoryTrendingProductItem from "./CategoryTrendingProductItem";
import type { Product } from "@/app/api/products/types/product.types";

export default function CategoryTrendingProductsCarousel({
  products,
}: {
  products: Product[];
}) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // ✅ pause on hover, resume on mouse out
    })
  );

  return (
    <Carousel
      className="w-full mt-6"
      opts={{ align: "center", loop: true }}
      plugins={[autoplay.current]}
    >
      <CarouselContent className="-ml-4 -mr-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="
              px-1 flex justify-center
              basis-[23%]
              sm:basis-1/3
              md:basis-1/4
              lg:basis-1/5
            "
          >
            <CategoryTrendingProductItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
