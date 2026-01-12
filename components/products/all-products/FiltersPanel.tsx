// components/products/all-products/FiltersPanel.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

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
  filters: FilterGroup[];
};

export default function FiltersPanel({ filters }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  function toggleFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    const existing = params.getAll(key);

    // toggle multi-select
    if (existing.includes(value)) {
      const updated = existing.filter((v) => v !== value);
      params.delete(key);
      updated.forEach((v) => params.append(key, v));
    } else {
      params.append(key, value);
    }

    // reset pagination on filter change
    params.delete("page");

    // ✅ App Router–safe navigation
    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Filters</h2>
      <Separator />

      <Accordion type="multiple" defaultValue={filters.map((f) => f.key)}>
        {filters.map((group) => (
          <AccordionItem key={group.key} value={group.key}>
            <AccordionTrigger>{group.label}</AccordionTrigger>

            <AccordionContent className="space-y-2">
              {group.options.map((opt) => {
                const checked = searchParams
                  .getAll(group.key)
                  .includes(opt.value);

                return (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() =>
                        toggleFilter(group.key, opt.value)
                      }
                    />
                    <span className="text-sm">{opt.label}</span>
                  </label>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
