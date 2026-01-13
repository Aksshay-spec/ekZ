// components/products/product-detail/ProductDetailClient.tsx
"use client";

import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductZoomView from "./ProductZoomView";

type Props = {
  images: string[];
};

export default function ProductDetailClient({ images }: Props) {
  const [activeImage, setActiveImage] = useState(
    images[0].startsWith("/") ? images[0] : `/${images[0]}`,
  );

  const [zoomPos, setZoomPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div className="lg:sticky lg:top-24 h-fit">
      <div className="flex gap-6">
        <ProductGallery
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          onHover={setZoomPos}
        />

        <div className="hidden lg:block">
          <ProductZoomView image={activeImage} position={zoomPos} />
        </div>
      </div>
    </div>
  );
}
