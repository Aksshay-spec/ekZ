//app/api/products/types/product.types.ts
export type ProductCategory = "SAPTAAR_ELECTRIC" | "FMCG";

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
