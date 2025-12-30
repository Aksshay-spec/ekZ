//app/api/categories/types/category.types.ts
export type Category = {
  id: string;
  key: "SAPTAAR_ELECTRIC" | "FMCG";
  label: string;
  slug: string;

  description?: string;
  icon?: string;

  order: number;
  active: boolean;
};
