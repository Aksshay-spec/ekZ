import ExploreMoreSection from "@/components/home/explore/ExploreMoreSection";
import ExploreStatsSection from "@/components/home/explore-stats/ExploreStatsSection";
import HomeSliderSection from "@/components/home/home-slider/HomeSliderSection";
import OurJourneySection from "@/components/home/our-journey/OurJourneySection";
import OurNewsSection from "@/components/home/our-news/OurNewsSection";
import PartnerSection from "@/components/home/partner/PartnerSection";
import PolicySection from "@/components/home/policies/PolicySection";
import SkuProductsSection from "@/components/home/sku-products/SkuProductsSection";
import TestimonialSection from "@/components/home/testimonial/TestimonialSection";
// import SaptaarSection from "@/components/home/timeline/SaptaarSection";
import TrendingProductsSection from "@/components/home/trending-products/TrendingProductsSection";
import ExploreHeader from "@/components/home/explore/ExploreHeader";

export default async function Page() {
  return (
    <main>
      <HomeSliderSection />
      <TrendingProductsSection />
      <SkuProductsSection />
      <TestimonialSection />
      <OurNewsSection />
      {/* <SaptaarSection /> */}
      <OurJourneySection />
      <PartnerSection />
      <PolicySection />
      <ExploreHeader />
      {/* <ExploreMoreSection /> */}
      <ExploreStatsSection />
    </main>
  );
}
