// app/api/product-filters/types/product-filter.types.ts
export type ProductFilterMetadata = {
  colors: string[];
  wattages?: string[];
  weights?: string[];

  priceRange: {
    min: number;
    max: number;
  };

  ratings: number[];
};
