// components/careers/career-accordion/CareerAccordionSection.tsx
import SectionHeader from "@/components/common/SectionHeader";
import CareerAccordionClient from "./CareerAccordionClient";
import { careerAccordionItems } from "./data";

export default function CareerAccordionSection() {
  return (
    <section className="mt-24 mb-20 px-4">
      <div className="mx-auto max-w-3xl">
        {/* <div className="mb-10 text-center">
          <h2 className="mt-2 text-3xl font-serif font-bold text-foreground">
            Why Choose Us
          </h2>

          <p className="mt-2 text-muted-foreground">
            Build more than a career. Build impact.
          </p>

          
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
        </div> */}

        <SectionHeader
          title="Why Choose Us"
          subtitle="Build more than a career. Build impact."
        />

        {/* Accordion */}
        <CareerAccordionClient items={careerAccordionItems} />
      </div>
    </section>
  );
}
