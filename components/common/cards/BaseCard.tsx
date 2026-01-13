import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "custom";
type Size = "small" | "large";
type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type BaseCardProps = {
  variant?: Variant;
  size?: Size;
  shade?: Shade;
  customColor?: string;
  customTextColor?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function BaseCard({
  variant = "secondary",
  size = "small",
  shade = 300,
  customColor,
  customTextColor,
  className,
  children,
}: BaseCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    // REMOVE inherited background
    ref.current.style.setProperty("background", "none", "important");
    ref.current.style.setProperty(
      "background-color",
      "transparent",
      "important",
    );

    // Apply custom color
    if (variant === "custom") {
      ref.current.style.setProperty(
        "background-color",
        customColor ?? "#e5e5e5",
        "important",
      );
      ref.current.style.setProperty(
        "color",
        customTextColor ?? "#1a1a1a",
        "important",
      );
    } else {
      const family = variant === "primary" ? "redish-pink" : "aqua-green";
      const cssVar = `var(--color-${family}-${shade})`;

      ref.current.style.setProperty("background-color", cssVar, "important");
    }
  }, [variant, shade, customColor, customTextColor]);

  const sizeClass =
    size === "large"
      ? "p-8 rounded-2xl shadow-lg"
      : "p-4 rounded-2xl shadow-md";

  return (
    <div
      ref={ref}
      className={cn("transition-all rounded-2xl", sizeClass, className)}
    >
      {children}
    </div>
  );
}
