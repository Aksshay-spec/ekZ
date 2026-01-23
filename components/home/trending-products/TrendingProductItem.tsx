//components/home/trending-products/TrendingProductItem.tsx
import Image from "next/image";
import type { TrendingProduct } from "@/app/api/trending-products/types/trendingProduct.types";
import { cloudinaryUrl } from "@/lib/cloudinary";

export default function TrendingProductItem({
  product,
}: {
  product: TrendingProduct;
}) {
  // const imageSrc = product?.image
  //   ? `/images/${product.image}`
  //   : "/images/placeholder.png";

  const imageSrc = cloudinaryUrl(product.image);

  return (
    <div
      className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden 
                 border-2 border-black border-dashed"
    >
      <Image
        src={imageSrc}
        alt={`Product ${product.id}`}
        width={112}
        height={112}
        className="object-cover rounded-full"
      />
    </div>
  );
}
