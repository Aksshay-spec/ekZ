// components/careers/career-accordion/CareerAccordionClient.tsx
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CareerAccordionClient() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      <AccordionItem value="why-us" className="border-b border-border">
        <AccordionTrigger
          className="
            text-left text-base font-medium
            text-foreground
            hover:no-underline
          "
        >
          Why Choose Us
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
          At Ekjahan Enterprises, we believe people are our strongest power
          source. When you join us, you become part of a fast-growing Indian
          enterprise shaping everyday living across electricals and FMCG.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="culture" className="border-b border-border">
        <AccordionTrigger
          className="
            text-left text-base font-medium
            text-foreground
            hover:no-underline
          "
        >
          Work Culture
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
          We foster a collaborative, inclusive, and growth-driven culture where
          innovation, ownership, and continuous learning are encouraged.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="growth" className="border-b border-border">
        <AccordionTrigger
          className="
            text-left text-base font-medium
            text-foreground
            hover:no-underline
          "
        >
          Growth & Opportunities
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
          From skill development to leadership roles, we provide opportunities
          that help you grow professionally while making a real-world impact.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
