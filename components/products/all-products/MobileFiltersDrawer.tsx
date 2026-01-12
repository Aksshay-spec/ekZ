// components/products/all-products/MobileFiltersDrawer.tsx

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type FilterOption = {
  label: string;
  value: string;
};

type FilterGroup = {
  key: string;
  label: string;
  options: FilterOption[];
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterGroup[];
  selected: Record<string, string[]>;
  onApply: (next: Record<string, string[]>) => void;
};

export default function MobileFiltersDrawer({
  open,
  onOpenChange,
  filters,
  selected,
  onApply,
}: Props) {
  const nextSelected = structuredClone(selected);

  function toggle(key: string, value: string) {
    nextSelected[key] ??= [];
    nextSelected[key].includes(value)
      ? (nextSelected[key] = nextSelected[key].filter(v => v !== value))
      : nextSelected[key].push(value);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <Separator className="my-4" />

        <Accordion type="multiple" className="space-y-2">
          {filters.map(group => (
            <AccordionItem key={group.key} value={group.key}>
              <AccordionTrigger>{group.label}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {group.options.map(opt => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Checkbox
                        checked={selected[group.key]?.includes(opt.value)}
                        onCheckedChange={() =>
                          toggle(group.key, opt.value)
                        }
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="sticky bottom-0 bg-background pt-4">
          <Button
            className="w-full"
            onClick={() => {
              onApply(nextSelected);
              onOpenChange(false);
            }}
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
