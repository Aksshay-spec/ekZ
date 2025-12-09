import HomeSliderWrapper from "@/components/home/home-slider/HomeSliderWrapper";
import TrendingProductsWrapper from "@/components/home/trending-products/TrendingProductsWrapper";
import PartnerWrapper from "@/components/home/partner/PartnerWrapper";
import PoliciesWrapper from "@/components/home/policies/PoliciesWrapper";
import ExploreMoreSection from "@/components/home/explore/ExploreMoreSection";
import ExploreStatsWrapper from "@/components/home/explore-stats/ExploreStats";
export default async function Page() {
  return (
    <main>
      <HomeSliderWrapper />
      <TrendingProductsWrapper />
      <PartnerWrapper />
      <ExploreMoreSection />
      <ExploreStatsWrapper />
      <PoliciesWrapper />
    </main>
  );
}
