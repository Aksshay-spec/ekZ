// components/home/our-news/OurNewsCarousel.tsx
"use client";

import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { NewsItem } from "@/app/api/our-news/types/ourNews.types";
import NewsItemCard from "./NewsItemCard";

export default function OurNewsCarousel({ news }: { news: NewsItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  return (
    <div className="relative mt-10 flex items-center justify-center">
      <div className="w-full sm:w-[70%]">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselPrevious
            className="
              absolute left-2 sm:left-10 
              top-1/2 -translate-y-1/2 
              bg-white border border-gray-300
              w-10 h-10 rounded-full 
              flex items-center justify-center 
              shadow-md hover:bg-gray-50 
              transition-colors z-10 text-black
            "
          >
            <IoIosArrowBack size={22} />
          </CarouselPrevious>

          <CarouselContent>
            {news.map((item) => (
              <CarouselItem key={item.id}>
                <NewsItemCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext
            className="
              absolute right-2 sm:right-10 
              top-1/2 -translate-y-1/2 
              bg-white border border-gray-300
              w-10 h-10 rounded-full 
              flex items-center justify-center 
              shadow-md hover:bg-gray-50 
              transition-colors z-10 text-black
            "
          >
            <IoIosArrowForward size={22} />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
