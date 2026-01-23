import React from "react";
import type { Slide } from "@/app/api/home-slider/types/homeSlider.types";
import { Button } from "@/components/ui/button";
import CarouselIndicators from "./CarouselIndicators";
import { cloudinaryUrl } from "@/lib/cloudinary";

type Props = {
  slide: Slide;
  index: number;
  count: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export default function SlideItem({
  slide,
  index,
  count,
  selectedIndex,
  onSelect,
}: Props) {
  // --- Safe guards ---
  // const imageSrc = slide?.image
  //   ? `/images/${slide.image}`
  //   : "/images/placeholder.png";

  const imageSrc = cloudinaryUrl(slide.image);

  const title = slide?.title ?? "";

  const hasHeading = Array.isArray(slide?.heading) && slide.heading.length > 0;

  const heading1 = hasHeading ? slide.heading[0] : "";
  const heading2 =
    hasHeading && slide.heading.length > 1 ? slide.heading[1] : "";

  const description = slide?.description ?? "";

  return (
    <div className="relative w-full h-96 sm:h-screen md:min-h-screen">
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-10 sm:pb-20">
        {title && (
          <h2 className="text-yellow-400 text-base underline underline-offset-8 sm:text-xl font-semibold mb-2">
            {title}
          </h2>
        )}

        {hasHeading && (
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
            {heading1}
            {heading2 && (
              <>
                <br />
                {heading2}
              </>
            )}
          </h1>
        )}

        {description && (
          <p className="text-white max-w-2xl text-sm sm:text-base md:text-lg mb-6">
            {description}
          </p>
        )}

        <Button
          variant="secondary"
          className="bg-redish-pink-500 text-white rounded-full"
        >
          Join Us Today
        </Button>

        <div className="mt-6"></div>
      </div>
    </div>
  );
}
