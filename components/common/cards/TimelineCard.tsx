"use client";

import type React from "react";
import { useEffect, useState } from "react";
import CircleIcon from "@/components/common/CircleIcon";
import LinearCard from "@/components/common/cards/LinearCard";
import { cn } from "@/lib/utils";

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
  const [circleDiameter, setCircleDiameter] = useState<number>(110);

  useEffect(() => {
    const mdBreakpoint = 768;

    function updateSize() {
      const w = window.innerWidth;
      setCircleDiameter(w < mdBreakpoint ? 80 : 110);
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Calculate half of circle diameter for offset
  const circleRadius = circleDiameter / 2;

  return (
    <div
      className={cn("relative flex items-center w-full", className)}
      style={{
        // Add padding to create space for the circle on the appropriate side
        paddingLeft: align === "left" ? `${circleRadius}px` : "0",
        paddingRight: align === "right" ? `${circleRadius}px` : "0",
      }}
    >
      {/* CIRCLE - positioned at the edge of the padding */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-20",
          circleClassName,
        )}
        style={{
          left: align === "left" ? "0" : "auto",
          right: align === "right" ? "0" : "auto",
        }}
        aria-hidden
      >
        <CircleIcon
          variant={circleVariant}
          customColor={customCircleColor}
          size={circleDiameter}
          className="shadow-lg flex items-center justify-center"
        >
          {circleContent}
        </CircleIcon>
      </div>

      {/* CARD - now centered within the available space */}
      <LinearCard
        {...cardProps}
        title={title ?? cardProps.title ?? ""}
        className={cn(
          "w-full relative",
          "md:h-auto h-[80px] flex items-center",
          // Add padding inside the card to prevent text from going under the circle
          // AND align text to opposite side
          align === "right"
            ? "pl-6 md:pl-10 text-left justify-start"
            : "pr-6 md:pr-10 text-right justify-end",
          contentClassName,
          cardProps?.className,
        )}
      />
    </div>
  );
}
