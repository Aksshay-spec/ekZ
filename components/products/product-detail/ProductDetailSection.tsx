// components/products/product-detail/ProductDetailSection.tsx
import ProductDetailClient from "./ProductDetailClient";
import ProductInfo from "./ProductInfo";

type Props = {
  product: {
    images: string[];
    [key: string]: any;
  };
};

export default function ProductDetailSection({ product }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT SIDE (Gallery + Zoom) */}
      <ProductDetailClient images={product.images} />

      {/* RIGHT SIDE (Product Info) */}
      <div>
        <ProductInfo product={product} />
      </div>
    </div>
  );
}
