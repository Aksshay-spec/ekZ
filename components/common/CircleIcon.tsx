import type React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "custom";

export default function CircleIcon({
  children,
  variant = "secondary",
  size = 120,
  customColor,
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: number;
  customColor?: string;
  className?: string;
}) {
  const getColor = () => {
    if (variant === "custom") return customColor ?? "#e5e5e5";
    if (variant === "primary") return "var(--color-redish-pink-500)";
    if (variant === "secondary") return "var(--color-aqua-green-500)";
    return "var(--color-aqua-green-300)";
  };

  return (
    <div
      className={cn("flex items-center justify-center rounded-full", className)}
      style={{
        width: size,
        height: size,
        backgroundColor: getColor(),
      }}
    >
      {children}
    </div>
  );
}
