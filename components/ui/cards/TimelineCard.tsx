"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CircleIcon from "@/components/ui/CircleIcon";
import LinearCard from "@/components/ui/cards/LinearCard";

type TimelineCardProps = {
  align?: "left" | "right";
  circleContent?: React.ReactNode;
  circleVariant?: "primary" | "secondary" | "custom";
  customCircleColor?: string;
  className?: string;
  circleClassName?: string;
  contentClassName?: string;
  title?: string;
  cardProps?: Partial<React.ComponentProps<typeof LinearCard>>;
};

export default function TimelineCard({
  align = "left",
  circleContent,
  circleVariant = "primary",
  customCircleColor,
  className,
  circleClassName,
  contentClassName,
  title,
  cardProps = {},
}: TimelineCardProps) {
  // Responsive circle size (explicit numeric prop to override CircleIcon default)
  // mobileDiameter = 80 (matches mobile card height 80px)
  // desktopDiameter = 110 (your existing desktop size)
  const [circleDiameter, setCircleDiameter] = useState<number>(110);

  useEffect(() => {
    // determine breakpoint threshold for md (Tailwind default md = 768px)
    const mdBreakpoint = 768;

    function updateSize() {
      const w = window.innerWidth;
      setCircleDiameter(w < mdBreakpoint ? 80 : 110);
    }

    // initial set (client-only)
    updateSize();

    // update on resize
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full overflow-visible",
        align === "right" ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      {/* CIRCLE */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-20",
          align === "right"
            ? "right-0 md:translate-x-1/2 translate-x-1/2"
            : "left-0 md:-translate-x-1/2 -translate-x-1/2",
          circleClassName
        )}
        aria-hidden
      >
        <CircleIcon
          variant={circleVariant}
          customColor={customCircleColor}
          // PASS explicit numeric size to override CircleIcon default (120)
          size={circleDiameter}
          className={cn(
            "shadow-lg flex items-center justify-center",
            // classes kept for safety/consistency; inline style from `size` will win
            "md:w-[110px] md:h-[110px] w-[80px] h-[80px]"
          )}
        >
          {circleContent}
        </CircleIcon>
      </div>

      {/* CARD */}
      <LinearCard
        {...cardProps}
        title={title ?? cardProps.title ?? ""}
        className={cn(
          "flex-1 relative",
          "md:h-auto h-[80px] flex items-center",
          align === "right" ? "md:pr-[70px] pr-[60px]" : "md:pl-[70px] pl-[60px]",
          contentClassName,
          cardProps?.className
        )}
      />
    </div>
  );
}
