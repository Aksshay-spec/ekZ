//components/careers/career-accordion/CareerAccordion.tsx

import type { CareerAccordionItem } from "@/app/api/career-accordion/types/careerAccordion.types";
import SectionHeader from "@/components/common/SectionHeader";
import CareerAccordionClient from "./CareerAccordionClient";

export default function CareerAccordion({
  items,
}: {
  items: CareerAccordionItem[];
}) {
  return (
    <section className="mt-24 mb-20 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Build more than a career. Build impact."
        />

        <CareerAccordionClient items={items} />
      </div>
    </section>
  );
}
