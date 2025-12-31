// /lib/api/filters.ts
import type { ProductCategory } from "@/app/api/products/types/product.types";
import electricProducts from "@/data/electric.json";

type FilterGroup = {
  key: string;
  label: string;
  options: { label: string; value: string }[];
};

// ---------- helpers ----------
function getUniqueValues<T extends string>(
  items: string[][]
): T[] {
  return Array.from(new Set(items.flat())) as T[];
}

function getPriceRanges(prices: number[]) {
  return [
    { label: "Under ₹5,000", min: 0, max: 5000 },
    { label: "₹5,000 – ₹20,000", min: 5000, max: 20000 },
    { label: "₹20,000 – ₹50,000", min: 20000, max: 50000 },
    { label: "Above ₹50,000", min: 50000, max: Infinity }
  ].filter(range =>
    prices.some(price => price >= range.min && price < range.max)
  );
}

// ---------- main ----------
export async function getFilterMetadata(
  category: ProductCategory
): Promise<FilterGroup[]> {
  // later you can switch by category
  const products = electricProducts;

  /* ---------------- COLORS (VISIBLE) ---------------- */
  const colors = getUniqueValues(
    products.map(p => p.colors)
  );

  const colorFilter: FilterGroup = {
    key: "colors",
    label: "Colors",
    options: colors.map(color => ({
      label: color,
      value: color.toLowerCase()
    }))
  };

  /* ---------------- PRICE (VISIBLE) ---------------- */
  const prices = products.map(p => p.price);

  const priceFilter: FilterGroup = {
    key: "price",
    label: "Price",
    options: getPriceRanges(prices).map(range => ({
      label: range.label,
      value:
        range.max === Infinity
          ? `${range.min}+`
          : `${range.min}-${range.max}`
    }))
  };


  // ⛔ Do NOT return brandFilter yet
  return [colorFilter, priceFilter];
}
