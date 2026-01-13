//components/products/category-trending-products/CategoryTrendingProductItem.tsx
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/api/products/types/product.types";
import { cloudinaryUrl } from "@/lib/cloudinary";

export default function CategoryTrendingProductItem({
  product,
}: {
  product: Product;
}) {
  // const imageSrc = product.images?.[0] ?? "/images/products/placeholder.png";

  // const CLOUDINARY_BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE;

  // const imagePublicId = product.images?.[0] ?? null;

  // const imageSrc = imagePublicId
  //   ? `${CLOUDINARY_BASE}/${imagePublicId}`
  //   : "/images/products/placeholder.png";

  const imageSrc = cloudinaryUrl(product.images?.[0]);

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
