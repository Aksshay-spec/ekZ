// components/home/testimonial/TestimonialCarousel.tsx
"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialItem from "./TestimonialItem";

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
    }),
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="relative flex justify-center items-center px-2 sm:px-6 mt-10">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((item, index) => {
            const indexDiff =
              (index - current + testimonials.length) % testimonials.length;

            return (
              <CarouselItem
                key={item.id}
                className="[@media(max-width:375px)]:basis-[75%]
                  basis-[62%] sm:basis-[60%] md:basis-[45%] lg:basis-[40%]
                  flex justify-center px-4"
              >
                <div
                  className="transition-all duration-700 ease-in-out origin-center"
                  style={{
                    transform:
                      indexDiff === 0 ? "scale(1)" : "scale(1) translateY(5px)",
                    opacity: 1,
                  }}
                >
                  <TestimonialItem item={item} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
