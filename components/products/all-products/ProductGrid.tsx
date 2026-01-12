// components/products/all-products/ProductGrid.tsx

import ProductCard from "./ProductCard";

type Props = {
  products: any[];
};

export default function ProductGrid({ products }: Props) {
  if (!products.length) {
    return (
      <div className="text-center text-muted-foreground">
        No products found
      </div>
    );
  }

  return (
<div
  className="
    grid gap-4
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    items-start
  "
>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
