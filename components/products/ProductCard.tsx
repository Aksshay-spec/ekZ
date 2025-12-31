// components/products/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

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

  const imageSrc = product.images?.[0]
    ? `/images/products/${product.images[0]}`
    : "/images/products/placeholder.png";

  return (
    <Card className="h-full flex flex-col gap-2 py-4 hover:shadow-md transition">
      <Link href={`/product/${product.slug}`}>
        <CardContent className="px-2 flex-1">
          <div className="relative aspect-square mb-3">
            <Image
              src={imageSrc}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>

          <h3 className="text-sm font-medium line-clamp-2 mb-1">
            {product.title}
          </h3>

          <div className="flex items-center gap-4 text-sm">
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

          <div className="text-xs text-muted-foreground mt-1">
            ⭐ {product.rating}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="flex justify-between px-4 pt-0 mt-auto">
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
