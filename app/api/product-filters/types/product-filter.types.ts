//app/api/product-filters/types/product-filter.types.ts
export type ProductFilterMetadata = {
  brands: string[];
  colors: string[];
  priceRange: {
    min: number;
    max: number;
  };
  ratings: number[];
};
