// /lib/api/filters.ts
import type { ProductCategory } from "@/app/api/products/types/product.types";

type FilterGroup = {
  key: string;
  label: string;
  options: { label: string; value: string }[];
};

export async function getFilterMetadata(
  category: ProductCategory
): Promise<FilterGroup[]> {
  // Example – replace with real logic / DB later
  return [
    {
      key: "brand",
      label: "Brand",
      options: [
        { label: "Philips", value: "philips" },
        { label: "Havells", value: "havells" },
      ],
    },
    {
      key: "price",
      label: "Price",
      options: [
        { label: "Under ₹1000", value: "0-1000" },
        { label: "₹1000 – ₹5000", value: "1000-5000" },
      ],
    },
  ];
}
