// components/home/category-products/CategoryProductCard.tsx

import CarouselProductCard from "@/components/products/category-carousel-products/CarouselProductCard";

type Props = {
  product: any;
};

export default function CategoryProductCard({ product }: Props) {
  return (
    <div className="w-[180px] sm:w-[200px] md:w-[220px]">
      <CarouselProductCard product={product} />
    </div>
  );
}
