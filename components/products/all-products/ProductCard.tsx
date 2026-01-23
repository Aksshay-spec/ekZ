// components/products/all-products/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../../ui/button";
import { cloudinaryUrl } from "@/lib/cloudinary";

type Props = {
  product: {
    id: string;
    slug: string;
    title: string;
    price: number;
    mrp: number;
    rating: number;
    images: string[];
    stock: {
      available: boolean;
    };
  };
};

export default function ProductCard({ product }: Props) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : null;
//1st
  // const CLOUDINARY_BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE;

  // const imagePublicId = product.images?.[0] ?? null;

  // const imageSrc = imagePublicId
  //   ? `${CLOUDINARY_BASE}/${imagePublicId}`
  //   : "/images/products/placeholder.png";

  //2nd
  // const imageSrc = product.images?.[0] ?? "/images/products/placeholder.png";
  //3rd
  const imageSrc = cloudinaryUrl(product.images?.[0]);

  return (
    <Card className="flex flex-col hover:shadow-md transition">
      <Link href={`/products/${product.slug}`} className="flex flex-1 flex-col">
        <CardContent className="flex flex-1 flex-col px-3 pt-4">
          {/* Image */}
          <div className="relative aspect-square mb-3">
            <Image
              src={imageSrc}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>

          {/* Title (fixed height) */}
          <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem] mb-2">
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">₹{product.price}</span>

            {discount && (
              <>
                <span className="line-through text-muted-foreground">
                  ₹{product.mrp}
                </span>
                <Badge variant="secondary">{discount}% off</Badge>
              </>
            )}
          </div>

          {/* Rating */}
          <div className="text-xs text-muted-foreground mt-1">
            ⭐ {product.rating}
          </div>
        </CardContent>
      </Link>

      {/* Footer pinned to bottom */}
      <CardFooter className="mt-auto flex justify-between px-4 pb-4">
        <Button
          variant="secondary"
          className="bg-aqua-green-500 text-black rounded-full hover:bg-aqua-green-400"
        >
          View More
        </Button>

        {product.stock.available && (
          <Button
            variant="secondary"
            className="bg-redish-pink-500 text-white rounded-full hover:bg-redish-pink-400"
          >
            
            In Stock
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
