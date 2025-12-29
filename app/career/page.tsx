// app/career/page.tsx
import CareerSearchClient from "@/components/careers/career-search/CareerSearchSection";
import CareerCardsSection from "@/components/careers/career-cards/CareerCardsSection";
import CareerAccordionSection from "@/components/careers/career-accordion/CareerAccordionSection";

export default function CareersPage() {
  return (
    <>
      <CareerSearchClient />
      <CareerCardsSection />
      <CareerAccordionSection />
    </>
  );
}
