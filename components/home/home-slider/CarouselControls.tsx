"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type Props = {
  emblaApi: UseEmblaCarouselType | undefined | null;
};

export default function CarouselControls({ emblaApi }: Props) {
  const canScrollPrev =
    !!emblaApi && emblaApi.canScrollPrev && emblaApi.canScrollPrev();
  const canScrollNext =
    !!emblaApi && emblaApi.canScrollNext && emblaApi.canScrollNext();

  return (
    <>
      {/* Left Arrow */}
      <Button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          border-2 border-aqua-green-500 text-aqua-green-500
          w-10 h-10 rounded-full
          flex items-center justify-center
          bg-transparent
          text-3xl font-light
          p-0
          hover:scale-105 transition
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        <span className="block leading-none -mt-0.5">‹</span>
      </Button>

      {/* Right Arrow */}
      <Button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        aria-label="Next slide"
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          border-2 border-aqua-green-500 text-aqua-green-500
          w-10 h-10 rounded-full
          flex items-center justify-center
          bg-transparent
          text-3xl font-light
          p-0
          hover:scale-105 transition
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        <span className="block leading-none -mt-0.5">›</span>
      </Button>
    </>
  );
}
