//components/products/category-trending-products/CategoryTrendingProductItem.tsx
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/api/products/types/product.types";

export default function CategoryTrendingProductItem({
  product,
}: {
  product: Product;
}) {
  // const imageSrc =
  //   product.images?.length > 0
  //     ? `/images/${product.images[0]}`
  //     : "/images/placeholder.png";
  const imageSrc =
    product.images?.[0] ?? "/images/products/placeholder.png";

  return (
    <Link href={`/products/${product.slug}`}>
      <div
        className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden
                   border-2 border-black border-dashed cursor-pointer
                   hover:scale-105 transition"
      >
        <Image
          src={imageSrc}
          alt={product.title}
          width={112}
          height={112}
          className="object-cover rounded-full"
        />
      </div>
    </Link>
  );
}

