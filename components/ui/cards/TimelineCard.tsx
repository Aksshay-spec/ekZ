"use client";

import React from "react";
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
  /** Optional title to pass directly instead of cardProps.title */
  title?: string;
  /** Props passed to the internal LinearCard */
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
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full overflow-visible",
        align === "right" ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      {/* Half-overlapping Circle */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-20",
          align === "right"
            ? "right-0 translate-x-1/2"
            : "left-0 -translate-x-1/2",
          circleClassName
        )}
      >
        <CircleIcon
          variant={circleVariant}
          customColor={customCircleColor}
          size={110}
          className="shadow-lg flex items-center justify-center"
        >
          {circleContent}
        </CircleIcon>
      </div>

      {/* Rectangular Card (LinearCard) */}
      <LinearCard
        {...cardProps}
        title={title ?? cardProps.title ?? ""} // ✅ ensures 'title' is never missing
        className={cn(
          "flex-1 relative",
          align === "right" ? "pr-[70px]" : "pl-[70px]",
          contentClassName,
          cardProps?.className
        )}
      />
    </div>
  );
}
