"use client";

import React, { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import SkuProductItem from "./SkuProductItem";
import { getDynamicIcon } from "@/utils/getDynamicIcon";
import type { SkuProduct } from "@/app/api/sku-product/types/skuProduct.types";

export default function SkuProducts({ items }: { items: SkuProduct[] }) {
  const [icons, setIcons] = useState<Record<number, JSX.Element | null>>({});
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  useEffect(() => {
    async function loadIcons() {
      const promises = items.map(async (item) => {
        const IconComponent = await getDynamicIcon(item.icon);

        return {
          id: item.id,
          icon: IconComponent ? <IconComponent className={item.class} /> : null,
        };
      });

      const loaded = await Promise.all(promises);

      const map: Record<number, React.ReactNode> = {};
      loaded.forEach((i) => (map[i.id] = i.icon));

      setIcons(map);
    }

    loadIcons();
  }, [items]);

  return (
    <section className="bg-white py-8 text-center">
      <h3
        className="mt-12 inline-block text-black px-3 py-1 font-semibold rounded relative
        after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400
        after:mt-1 after:rounded-full after:mx-auto"
      >
        Every Count Tells Our Story
      </h3>

      <Carousel
        className="w-full mt-10"
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="pl-2">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center"
            >
              <SkuProductItem
                id={item.id}
                title={item.title}
                count={item.count}
                icon={icons[item.id]}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
