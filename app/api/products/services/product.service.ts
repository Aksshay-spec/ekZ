//app/api/products/services/product.service.ts
import type { ProductCategory } from "../types/product.types";
import type { ProductRepository } from "../repositories/interfaces/ProductRepository";
import { ProductFilter } from "../filters/product.filter";
import { ProductSorter } from "../sorters/product.sorter";
import { ProductPaginator } from "../pagination/product.paginator";

export class ProductService {
  constructor(private repo: ProductRepository) {}

  async getProductList(category: ProductCategory, params: URLSearchParams) {
    const sort = params.get("sort") as any;
    const page = Number(params.get("page") ?? 1);
    const limit = Number(params.get("limit") ?? 12);

    // 1️⃣ Fetch
    let products = await this.repo.getProductsByCategory(category);

    // 2️⃣ Filter
    products = ProductFilter.apply(products, params);

    // 3️⃣ Sort
    products = ProductSorter.apply(products, sort);

    // 4️⃣ Paginate
    return ProductPaginator.paginate(products, page, limit);
  }

  async getProductDetail(slug: string) {
    return this.repo.getProductBySlug(slug);
  }
}
