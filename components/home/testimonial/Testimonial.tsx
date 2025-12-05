"use client";

import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";
import TestimonialItem from "./TestimonialItem";

export default function Testimonial({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative py-16 text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-black mb-1">
        Every Input Matters
      </h2>
      <p className="text-lg font-semibold text-gray-700 mb-6">
        Vendors &amp; Distributors
      </p>

      <div className="h-1 w-32 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

      <div className="relative flex justify-center items-center sm:px-4 md:px-8">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full max-w-5xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
            {testimonials.map((item, index) => {
              const indexDiff =
                (index - current + testimonials.length) % testimonials.length;

              let scale = 1;
              let opacity = 1;
              let zIndex = 10;

              if (indexDiff === 0) {
                scale = 1;
                opacity = 1;
                zIndex = 30;
              } else if (
                indexDiff === 1 ||
                indexDiff === testimonials.length - 1
              ) {
                scale = 0.9;
                opacity = 0.6;
                zIndex = 20;
              } else {
                scale = 0.8;
                opacity = 0;
                zIndex = 0;
              }

              return (
                <CarouselItem
                  key={item.id}
                  className="pl-1 sm:pl-2 md:pl-4 basis-[75%] sm:basis-[75%] md:basis-[60%] flex justify-center"
                >
                  <div
                    className="transition-all duration-700 ease-in-out"
                    style={{
                      transform: `scale(${scale})`,
                      opacity,
                      zIndex,
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
    </section>
  );
}
