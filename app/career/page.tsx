// app/career/page.tsx

import CareerAccordionSection from "@/components/careers/career-accordion/CareerAccordionSection";
import CareerCardsSection from "@/components/careers/career-cards/CareerCardsSection";
import CareerSearchClient from "@/components/careers/career-search/CareerSearchSection";

export default function CareersPage() {
  return (
    <>
      <CareerSearchClient />
      <CareerCardsSection />
      <CareerAccordionSection />
    </>
  );
}
