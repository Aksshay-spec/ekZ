// components/ui/cards/LinearCard.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

type LinearCardProps = {
  title: string;
  gradient?: string;
  textColor?: string;
  className?: string;
  borderRadius?: string;
  radiusTopLeft?: string;
  radiusTopRight?: string;
  radiusBottomLeft?: string;
  radiusBottomRight?: string;
};

export default function LinearCard({
  title,
  gradient,
  textColor = "#fff",
  className,
  borderRadius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
}: LinearCardProps) {
  // Default gradient (same theme as TimelineCard)
  const defaultGradient =
    "linear-gradient(to right, var(--color-redish-pink-400), var(--color-aqua-green-400))";

  // Flexible radius control (future-proof)
  const computedRadius = {
    borderTopLeftRadius: radiusTopLeft ?? borderRadius ?? "24px",
    borderTopRightRadius: radiusTopRight ?? borderRadius ?? "24px",
    borderBottomLeftRadius: radiusBottomLeft ?? borderRadius ?? "24px",
    borderBottomRightRadius: radiusBottomRight ?? borderRadius ?? "24px",
  };

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center shadow-md transition-all duration-300",
        "text-center text-sm md:text-lg p-6 md:p-10 font-semibold",
        className
      )}
      style={{
        background: gradient ?? defaultGradient,
        color: textColor,
        ...computedRadius,
      }}
    >
      {title}
    </div>
  );
}
