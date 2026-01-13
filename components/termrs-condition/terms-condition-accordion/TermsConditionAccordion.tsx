// components/terms-condition/terms-condition-accordion/TermsConditionAccordion.tsx

import Image from "next/image";
import type { CareerAccordionItem } from "@/app/api/career-accordion/types/careerAccordion.types";
import SectionHeader from "@/components/common/SectionHeader";
import TermsConditionAccordionClient from "./TermsConditionAccordionClient";

export default function TermsConditionAccordion({
  items,
}: {
  items: CareerAccordionItem[];
}) {
  return (
    <section className="mt-0 mb-20 ">
        {/* 🔹 Banner Image */}
        <div className="mb-8 w-full overflow-hidden">
          <Image
            src="/images/tc.jpg"
            alt="Terms and Conditions"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <SectionHeader
          title="Term and Condition"
          subtitle="Guidelines for using our website and services"
        />


        {/* Accordion */}
        <TermsConditionAccordionClient items={items} />
      </div>
    </section>
  );
}
