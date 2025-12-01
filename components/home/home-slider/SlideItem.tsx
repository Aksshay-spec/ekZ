// app/components/home/home-slider/SlideItem.tsx
import React from "react";
import type { Slide } from "@/src/types/homeSlider.types";
import { Button } from "@/components/ui/button";

type Props = {
  slide: Slide;
};

export default function SlideItem({ slide }: Props) {
  return (
    <div className="relative w-full h-96 sm:h-[30rem] md:h-[40rem]">
      <img
        src={`/images/${slide.image}`}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-10 sm:pb-20">
        <h2 className="text-yellow-400 text-base underline underline-offset-8 sm:text-xl font-semibold mb-2">
          {slide.title}
        </h2>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
          {slide.heading[0]} <br /> {slide.heading[1]}
        </h1>

        <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6">
          {slide.description}
        </p>

        <Button variant="roundedFull">Join Us Today</Button>
      </div>
    </div>
  );
}
