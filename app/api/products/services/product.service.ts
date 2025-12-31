//app/api/products/services/product.service.ts
import type { ProductCategory } from "../types/product.types";
import { PRODUCT_CATEGORIES } from "../types/product.types";
import type { ProductRepository } from "../repositories/interfaces/ProductRepository";
import { ProductFilter } from "../filters/product.filter";
import { ProductSorter } from "../sorters/product.sorter";
import { ProductPaginator } from "../pagination/product.paginator";

export class ProductService {
  constructor(private repo: ProductRepository) {}

  async getProductList(category: ProductCategory, params: URLSearchParams) {
    const sort = params.get("sort") ?? undefined;
    const page = Number(params.get("page") ?? 1);
    const limit = Number(params.get("limit") ?? 12);

    let products = await this.repo.getProductsByCategory(category);

    products = ProductFilter.apply(products, params);
    products = ProductSorter.apply(products, sort);

    return ProductPaginator.paginate(products, page, limit);
  }

  async getProductDetail(slug: string) {
    return this.repo.getProductBySlug(slug);
  }

  async getProductsByCategory(category: ProductCategory) {
    return this.repo.getProductsByCategory(category);
  }

  /* ✅ FIXED */
  async getAllProducts() {
    const productGroups = await Promise.all(
      PRODUCT_CATEGORIES.map((category) =>
        this.repo.getProductsByCategory(category)
      )
    );

    return productGroups.flat();
  }
}
