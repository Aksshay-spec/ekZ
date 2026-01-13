// /lib/api/filters.ts
import type { ProductCategory } from "@/app/api/products/types/product.types";

type FilterGroup = {
  key: string;
  label: string;
  options: { label: string; value: string }[];
};

export async function getFilterMetadata(
  category: ProductCategory,
): Promise<FilterGroup[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product-filters?category=${category}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch filter metadata");
  }

  const data = await res.json();
  const filters: FilterGroup[] = [];

  if (data.colors?.length) {
    filters.push({
      key: "colors",
      label: "Colors",
      options: data.colors.map((c: string) => ({
        label: c,
        value: c.toLowerCase(),
      })),
    });
  }

  if (data.wattages?.length) {
    filters.push({
      key: "wattages",
      label: "Wattage",
      options: data.wattages.map((w: string) => ({
        label: w,
        value: w.toLowerCase(),
      })),
    });
  }

  if (data.weights?.length) {
    filters.push({
      key: "weights",
      label: "Weight",
      options: data.weights.map((w: string) => ({
        label: w,
        value: w.toLowerCase(),
      })),
    });
  }

  // PRICE → COMMON ACROSS ALL CATEGORIES
  filters.push({
    key: "price",
    label: "Price",
    options: [
      { label: "Under ₹5,000", value: "0-5000" },
      { label: "₹5,000 – ₹20,000", value: "5000-20000" },
      { label: "₹20,000 – ₹50,000", value: "20000-50000" },
      { label: "Above ₹50,000", value: "50000+" },
    ],
  });

  return filters;
}
