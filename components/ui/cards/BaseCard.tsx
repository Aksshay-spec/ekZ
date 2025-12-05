import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "small" | "large";

type BaseCardProps = {
  variant?: Variant;
  size?: Size;
  shade?: number;
  className?: string;
  children?: React.ReactNode;
};

// Map variant + shade → CSS variable name
function getCssVar(variant: Variant, shade: number) {
  const family = variant === "primary" ? "redish-pink" : "aqua-green";
  return `--color-${family}-${shade}`; // example: --color-aqua-green-100
}

export default function BaseCard({
  variant = "secondary",
  size = "small",
  shade = 100,
  className,
  children,
}: BaseCardProps) {
  const varName = getCssVar(variant, shade);

  const style: React.CSSProperties = {
    backgroundColor: `var(${varName})`,
    background: `var(${varName})`, // stronger fallback
  };

  const sizeClass =
    size === "large"
      ? "p-8 rounded-2xl shadow-lg"
      : "p-4 rounded-2xl shadow-md";

  return (
    <div
      style={style}
      className={cn(
        "flex flex-col items-center justify-center text-center transition-all",
        sizeClass,
        className
      )}
    >
      {children}
    </div>
  );
}
