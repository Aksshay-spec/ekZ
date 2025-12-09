//components/home/trending-products/TrendingProductsCarousel.tsx
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TrendingProductItem from "./TrendingProductItem";
import type { TrendingProduct } from "@/app/api/trending-products/types/trendingProduct.types";

export default function TrendingProductsCarousel({
  products,
}: {
  products: TrendingProduct[];
}) {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
    })
  );

  return (
    <Carousel
      className="w-full mt-6"
      opts={{ align: "center", loop: true }}
      plugins={[plugin.current]}
    >
      {/* padding-left + padding-right ensures partial items visible */}
      <CarouselContent className="-ml-4 pl-0 pr-0 -mr-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="
              px-1 flex justify-center 
              basis-[23%]       /* 👉 3 products fully visible on mobile */
              sm:basis-1/3 
              md:basis-1/4 
              lg:basis-1/5
            "
          >
            <TrendingProductItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
