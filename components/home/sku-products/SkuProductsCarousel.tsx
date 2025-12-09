// components/home/sku-products/SkuProductsCarousel.tsx
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
import type { Sku } from "@/app/api/sku-product/types/skuProduct.types";

/**
 * Frontend decides styling (color/size). Backend only provides icon name.
 * Example color mapping below — extend as necessary.
 */
const iconClassMap: Record<string, string> = {
  FaBolt: "text-yellow-500 text-3xl",
  FaShoppingBasket: "text-red-500 text-3xl",
  FaHome: "text-green-600 text-3xl",
  FaUtensils: "text-orange-500 text-3xl",
  FaLightbulb: "text-yellow-400 text-3xl",
  FaHeart: "text-pink-500 text-3xl",
  FaBoxOpen: "text-gray-700 text-3xl",
};

export default function SkuProductsCarousel({ items }: { items: Sku[] }) {
  const [icons, setIcons] = useState<Record<number, React.ReactNode | null>>({});
  const [iconClasses, setIconClasses] = useState<Record<number, string>>({});
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  useEffect(() => {
    let mounted = true;

    async function loadIcons() {
      const loaded = await Promise.all(
        items.map(async (item) => {
          const IconComponent = await getDynamicIcon(item.icon);
          const node = IconComponent ? <IconComponent /> : null; // fallback handled by getDynamicIcon
          const cls = iconClassMap[item.icon] || "text-gray-700 text-3xl";
          return { id: item.id, icon: node, cls };
        })
      );

      if (!mounted) return;

      const map: Record<number, React.ReactNode | null> = {};
      const clsMap: Record<number, string> = {};
      loaded.forEach(({ id, icon, cls }) => {
        map[id] = icon;
        clsMap[id] = cls;
      });
      setIcons(map);
      setIconClasses(clsMap);
    }

    loadIcons();

    return () => {
      mounted = false;
    };
  }, [items]);

  return (
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
              icon={icons[item.id] ?? null}
              iconClass={iconClasses[item.id] ?? "text-gray-700 text-3xl"}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
