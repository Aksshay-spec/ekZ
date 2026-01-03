// components/products/sort-dropdown.tsx
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SORT_OPTIONS = [
  { label: "Popularity", value: "popularity" },
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name: A–Z", value: "name_asc" },
  { label: "Name: Z–A", value: "name_desc" },
]

export default function SortDropdown() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentSort = searchParams.get("sort") ?? "popularity"

  function handleSortChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    params.set("page", "1") // reset pagination on sort change

    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">
        Sort By
      </span>

      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {SORT_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
