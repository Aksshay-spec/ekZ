import ExploreMoreSection from "@/components/home/explore/ExploreMoreSection";
import ExploreStatsWrapper from "@/components/home/explore-stats/ExploreStats";
import HomeSliderSection from "@/components/home/home-slider/HomeSliderSection";
import OurJourneySection from "@/components/home/our-journey/OurJourneySection";
import OurNewsSection from "@/components/home/our-news/OurNewsSection";
import PartnerSection from "@/components/home/partner/PartnerSection";
import PolicySection from "@/components/home/policies/PolicySection";
import SkuProductsSection from "@/components/home/sku-products/SkuProductsSection";
import TestimonialSection from "@/components/home/testimonial/TestimonialSection";
// import SaptaarSection from "@/components/home/timeline/SaptaarSection";
import TrendingProductsSection from "@/components/home/trending-products/TrendingProductsSection";

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
      <ExploreMoreSection />
      <ExploreStatsWrapper />
    </main>
  );
}
