// components/home/our-news/OurNews.tsx
"use client";

import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

import type { NewsItem } from "@/app/api/our-news/types/ourNews.types";
import NewsItemCard from "./NewsItemCard";

export default function OurNews({ news }: { news: NewsItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="w-full bg-white py-10 px-3">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Our related News
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-black -mt-1">
          Your Trust our Guarantee
        </h2>
        <div className="w-40 h-2 bg-yellow-400 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Carousel */}
      <div className="relative mt-8 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:left-10 bg-white border border-gray-300
          w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 hover:bg-gray-50 transition-colors"
        >
          <IoIosArrowBack size={22} />
        </button>

        {/* Carousel Wrapper */}
        <div className="w-full sm:w-[70%]">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id}>
                  <NewsItemCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:right-10 bg-white border border-gray-300
          w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 hover:bg-gray-50 transition-colors"
        >
          <IoIosArrowForward size={22} />
        </button>
      </div>
    </div>
  );
}
