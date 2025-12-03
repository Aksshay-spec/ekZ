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

export default function TrendingProducts({
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
    <section className="bg-white pt-8 pb-20 overflow-hidden text-center">
      <h3 className="mt-8 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
        Trending Products
      </h3>

      <Carousel
        className="w-full mt-6"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="pl-2">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="
                px-3 flex justify-center
                basis-1/2
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
    </section>
  );
}
