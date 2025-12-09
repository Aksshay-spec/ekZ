import HomeSliderWrapper from "@/components/home/home-slider/HomeSliderWrapper";

import OurNewsSection from "@/components/home/our-news/OurNewsSection";
import PartnerSection from "@/components/home/partner/PartnerSection";
import PolicySection from "@/components/home/policies/PolicySection";

import SkuProductsSection from "@/components/home/sku-products/SkuProductsSection";
import TestimonialWrapper from "@/components/home/testimonial/TestimonialWrapper";
import SaptaarSection from "@/components/home/timeline/SaptaarSection";
import TrendingProductsSection from "@/components/home/trending-products/TrendingProductsSection";

export default async function Page() {
  return (
    <main>
      <HomeSliderWrapper />
      <TrendingProductsSection />
      <SkuProductsSection />
      <TestimonialWrapper />
      <OurNewsSection />
      <SaptaarSection />
      <PartnerSection />
      <PolicySection />

    </main>
  );
}
