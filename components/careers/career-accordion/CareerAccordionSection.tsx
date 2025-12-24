// components/careers/career-accordion/CareerAccordionSection.tsx
import SectionHeader from "@/components/common/SectionHeader"
import CareerAccordionClient from "./CareerAccordionClient"

export default function CareerAccordionSection() {
  return (
    <section className="mt-24 mb-20 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Build more than a career. Build impact."
        />

        <CareerAccordionClient />
      </div>
    </section>
  )
}
