import HomeSliderWrapper from "@/components/home/home-slider/HomeSliderWrapper";
import TrendingProductsWrapper from "@/components/home/trending-products/TrendingProductsWrapper";
import PartnerWrapper from "@/components/home/partner/PartnerWrapper";

export default async function Page() {
  return (
    <main>
      <HomeSliderWrapper />
      <PartnerWrapper />
      <TrendingProductsWrapper />
    </main>
  );
}
