// app/components/home/home-slider/CarouselIndicators.tsx
"use client";

import React from "react";

type Props = {
  count: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export default function CarouselIndicators({
  count,
  selectedIndex,
  onSelect,
}: Props) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={`h-1 w-6 rounded-full transition-all ${
            i === selectedIndex ? "bg-gray-300" : "bg-gray-500/50"
          }`}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
