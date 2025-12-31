//app/api/products/types/product.types.ts
export const PRODUCT_CATEGORIES = ["SAPTAAR_ELECTRIC", "FMCG"] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export type Product = {
  id: string;
  slug: string;

  title: string;
  description: string;

  category: ProductCategory;
  subCategory: string;

  brand: string;

  price: number;
  mrp: number;

  rating: number;
  reviewCount: number;

  images: string[];
  colors?: string[];

  specifications: Record<string, string | number | boolean>;

  stock: {
    available: boolean;
    quantity: number;
  };

  createdAt: string;
};
