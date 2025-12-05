import HomeSliderWrapper from "@/components/home/home-slider/HomeSliderWrapper";
import SkuProductsWrapper from "@/components/home/sku-products/SkuProductsWrapper";
import TestimonialWrapper from "@/components/home/testimonial/TestimonialWrapper";
import TrendingProductsWrapper from "@/components/home/trending-products/TrendingProductsWrapper";

export default async function Page() {
  return (
    <main>
      <HomeSliderWrapper />
      <TrendingProductsWrapper />
      <SkuProductsWrapper />
      <TestimonialWrapper />
    </main>
  );
}
