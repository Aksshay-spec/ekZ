// app/components/home/home-slider/HomeSlider.client.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import SlideItem from "./SlideItem";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import type { Slide } from "@/src/types/homeSlider.types";

type Props = {
  slides: Slide[];
};

export default function HomeSliderClient({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" } as any,
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const embla = emblaApi;
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Keep embla events in sync
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla]);

  const scrollTo = useCallback(
    (index: number) => {
      embla?.scrollTo(index);
    },
    [embla]
  );

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      aria-label="Homepage slider"
    >
      <div ref={emblaRef} className="overflow-hidden" data-testid="embla-root">
        <div className="flex -ml-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
            >
              <SlideItem slide={slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls (arrows) */}
      <CarouselControls emblaApi={embla} />

      {/* Indicators (dots) */}
      <CarouselIndicators
        count={slides.length}
        selectedIndex={selectedIndex}
        onSelect={scrollTo}
      />
    </section>
  );
}
