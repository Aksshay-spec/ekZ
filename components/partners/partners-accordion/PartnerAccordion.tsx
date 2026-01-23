// components/terms-condition/terms-condition-accordion/TermsConditionAccordion.tsx
import type { CareerAccordionItem } from "@/app/api/career-accordion/types/careerAccordion.types";
import SectionHeader from "@/components/common/SectionHeader";
import PartnerAccordionClient from "./PartnerAccordionClient";

export default function PartnerAccordion({
  items,
}: {
  items: CareerAccordionItem[];
}) {
  return (
    <section className="pt-10 mb-10 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <SectionHeader
          title="Business With Ekjahan"
          subtitle="Reliable partnership and support"
        />

        {/* Accordion */}
        <PartnerAccordionClient items={items} />
      </div>
    </section>
  );
}
