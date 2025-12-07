import HomeSliderWrapper from "@/components/home/home-slider/HomeSliderWrapper";
import TrendingProductsWrapper from "@/components/home/trending-products/TrendingProductsWrapper";
import PartnerWrapper from "@/components/home/partner/PartnerWrapper";
import PoliciesWrapper from "@/components/home/policies/PoliciesWrapper";
import SaptaarWrapper from "@/components/home/saptaar-electric/SaptaarWrapper"; 

export default async function Page() {
  return (
    <main>
      <HomeSliderWrapper />
      <TrendingProductsWrapper />
      <PartnerWrapper />
      <SaptaarWrapper /> 
      <PoliciesWrapper />
    </main>
  );
}
