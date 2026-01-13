// components/products/category-carousel-products/CarouselProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {
  product: {
    id: string;
    slug: string;
    title: string;
    price: number;
    mrp: number;
    rating: number;
    images: string[];
    category: string;
    stock: {
      available: boolean;
    };
  };
};

export default function CarouselProductCard({ product }: Props) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : null;

  // const imageSrc = product.images?.[0]
  //   ? `/images/products/${product.images[0]}`
  //   : "/images/products/placeholder.png";

  // const imageSrc = product.images?.[0] ?? "/images/products/placeholder.png";

  const CLOUDINARY_BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE;

  const imagePublicId = product.images?.[0] ?? null;

  const imageSrc = imagePublicId
    ? `${CLOUDINARY_BASE}/${imagePublicId}`
    : "/images/products/placeholder.png";

  return (
    <Card className="hover:shadow-md transition rounded-2xl">
      <Link href={`/products/${product.slug}`}>
        <CardContent className="p-3">
          <div className="relative aspect-square mb-2 bg-gray-50 rounded-xl">
            <Image
              src={imageSrc}
              alt={product.title}
              fill
              className="object-contain p-2"
            />
          </div>

          <h3 className="text-sm font-semibold line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs text-muted-foreground mb-1">
            category: {product.category}
          </p>

          <p className="text-xs text-muted-foreground line-clamp-2">
            Description: product short description
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
