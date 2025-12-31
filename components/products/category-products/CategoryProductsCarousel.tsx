// components/home/category-products/CategoryProductsCarousel.tsx
"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CategoryProductCard from "./CategoryProductCard";

type Props = {
  products: any[];
};

export default function CategoryProductsCarousel({ products }: Props) {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // ✅ important
    })
  );

  return (
    <Carousel
      className="w-full mt-6"
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
    >
      <CarouselContent className="pl-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center"
          >
            <CategoryProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
