"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import SlideItem from "./SlideItem";
import type { Slide } from "@/app/api/home-slider/types/homeSlider.types";
import CarouselIndicators from "./CarouselIndicators";

export default function HomeSlider({ slides }: { slides: Slide[] }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [embla, setEmbla] = React.useState<any>(null);

  React.useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    onSelect();

    return () => embla.off("select", onSelect);
  }, [embla]);

  const handleSelect = (index: number) => {
    embla?.scrollTo(index);
  };

  return (
    <section className="relative w-full">
      <Carousel
        opts={{ loop: true }}
        setApi={setEmbla}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <SlideItem
                slide={slide}
                index={index}
                count={slides.length}
                selectedIndex={selectedIndex}
                onSelect={handleSelect}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicators
          count={slides.length}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />
        <CarouselPrevious
          className="
    left-2 top-1/2 -translate-y-1/2 
    bg-transparent backdrop-blur-sm border-2 border-aqua-green-500
    text-aqua-green-500 
    shadow-md 
    hover:bg-white/30 
    transition
  "
        />

        <CarouselNext
          className="
    right-2 top-1/2 -translate-y-1/2 
    bg-transparent backdrop-blur-sm border-2 border-aqua-green-500
    text-aqua-green-500 
    shadow-md 
    hover:bg-white/30 
    transition
  "
        />
      </Carousel>
    </section>
  );
}
