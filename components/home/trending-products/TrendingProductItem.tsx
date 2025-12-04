import Image from "next/image";
import type { TrendingProduct } from "@/app/api/trending-products/types/trendingProduct.types";

type Props = {
  product: TrendingProduct;
};

export default function TrendingProductItem({ product }: Props) {
  const imageSrc = product?.image
    ? `/images/${product.image}`
    : "/images/placeholder.png";

  return (
    <div className="w-28 h-28  rounded-full flex items-center justify-center overflow-hidden">
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
