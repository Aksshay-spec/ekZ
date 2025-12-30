// components/products/MobileFiltersWrapper.tsx

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import FiltersPanel from "./FiltersPanel";

type Props = {
  filters: any[];
};

export default function MobileFiltersWrapper({ filters }: Props) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Filters</Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-80">
          <FiltersPanel filters={filters} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
