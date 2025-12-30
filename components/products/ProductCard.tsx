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
    <Card className="hover:shadow-md transition">
      <Link href={`/product/${product.slug}`}>
        <CardContent className="p-4">
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

          <div className="text-xs text-muted-foreground mt-1">
            ⭐ {product.rating}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 flex justify-between pt-0">
        <Button
          variant="secondary"
          className="bg-aqua-green-500 text-black rounded-full hover:bg-aqua-green-400"
        >
          View More
        </Button>
        {product.stock.available && (
          //   <span className="text-xs text-red-500">Out of stock</span>
          <Button
            variant="secondary"
            className="bg-redish-pink-500 disable text-white rounded-full hover:bg-redish-pink-400"
          >
            In Stock
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
