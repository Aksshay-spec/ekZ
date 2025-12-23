"use client";

import React from "react";
import { cn } from "@/lib/utils";
import BaseCard from "@/components/common/cards/BaseCard";

type IconBg = "redish-pink" | "aqua-green";

type HorizontalCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: IconBg;
  shade?: number;
  className?: string;
};

export default function HorizontalCard({
  icon,
  title,
  description,
  iconBg = "redish-pink",
  shade = 300,
  className,
}: HorizontalCardProps) {
  return (
    <div
      className={cn(
        "w-full flex items-center gap-6 p-0 rounded-2xl shadow-md bg-gray-100",
        "transition-all duration-300",
        className
      )}
    >
      {/* ICON BOX USING BASECARD */}
      <BaseCard
        variant="custom"
        customColor={`var(--color-${iconBg}-${shade})`}
        customTextColor="#fff"
        size="large"
        className="!p-0 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-3xl"
      >
        {icon}
      </BaseCard>

      {/* TEXT BLOCK */}
      {/* TEXT BLOCK */}
      <div className="flex-1">
        {/* TITLE */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-700 mt-3">{description}</p>
      </div>
    </div>
  );
}
