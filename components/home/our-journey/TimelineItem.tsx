// components/home/our-journey/TimelineItem.tsx
"use client";

import TimelineYearCircle from "./TimelineYearCircle";
import TimelineGradientBox from "./TimelineGradientBox";
import type { TimelineItemType } from "@/app/api/our-journey/types/journey.types";

export default function TimelineItem({ item }: { item: TimelineItemType }) {
  const isLeft = item.position === "left";

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl h-28 sm:h-32 relative">
        {/* Gradient Box */}
        <TimelineGradientBox item={item} isLeft={isLeft} />

        {/* Year Circle */}
        <TimelineYearCircle year={item.year} isLeft={isLeft} />
      </div>
    </div>
  );
}
