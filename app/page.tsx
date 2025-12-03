import HomeSliderWrapper from "@/components/home/home-slider/HomeSliderWrapper";
import TrendingProductsWrapper from "@/components/home/trending-products/TrendingProductsWrapper";

export default async function Page() {
  return (
    <main>
      <HomeSliderWrapper />
      <TrendingProductsWrapper />
    </main>
  );
}
