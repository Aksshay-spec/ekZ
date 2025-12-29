//app/api/products/repositories/interfaces/ProductRepository.ts
import type { Product, ProductCategory } from "../../types/product.types";

export interface ProductRepository {
  getProductsByCategory(category: ProductCategory): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
}
