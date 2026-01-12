//components/products/product-detail/ProductDetailSection.tsx
import ProductGallery from "@/components/products/product-detail/ProductGallery";
import ProductInfo from "@/components/products/product-detail/ProductInfo";

type Props = {
  product: {
    images: string[];
    // add other product fields if you want stricter typing
    [key: string]: any;
  };
};

export default function ProductDetailSection({ product }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT - IMAGE GALLERY (STICKY) */}
      <div className="lg:sticky lg:top-24 h-fit">
        <ProductGallery images={product.images} />
      </div>

      {/* RIGHT - PRODUCT DETAILS */}
      <ProductInfo product={product} />
    </div>
  );
}
