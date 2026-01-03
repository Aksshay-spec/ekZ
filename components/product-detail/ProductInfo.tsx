//components/product-detail/ProductInfo.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductInfo({ product }: any) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">{product.title}</h1>

      <div className="flex items-center gap-2">
        <Badge>{product.rating} ★</Badge>
        <span className="text-sm text-gray-500">
          ({product.reviewCount} reviews)
        </span>
      </div>

      <div className="flex items-end gap-4">
        <span className="text-3xl font-bold text-green-600">
          ₹{product.price}
        </span>
        <span className="line-through text-gray-400">
          ₹{product.mrp}
        </span>
      </div>

      <div className="text-sm text-gray-600">
        Category: {product.subCategory}
      </div>

      <Button size="lg" className="w-full">
        Add to Cart
      </Button>

      <Button size="lg" variant="outline" className="w-full">
        Buy Now
      </Button>

      {/* Specifications */}
      <div className="mt-6">
        <h2 className="font-semibold mb-2">Specifications</h2>
        <ul className="text-sm space-y-1">
          {Object.entries(product.specifications).map(([key, value]) => (
            <li key={key}>
              <span className="font-medium">{key}:</span> {String(value)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
