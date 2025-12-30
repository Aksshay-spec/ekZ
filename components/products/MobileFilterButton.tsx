// components/products/MobileFilterButton.tsx

"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};

export default function MobileFilterButton({ onClick }: Props) {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 md:hidden"
      onClick={onClick}
    >
      <SlidersHorizontal size={18} />
      Filters
    </Button>
  );
}
