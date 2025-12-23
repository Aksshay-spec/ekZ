// components/careers/career-accordion/CareerAccordionClient.tsx
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import type { CareerAccordionItem } from "./types"

type Props = {
  items: CareerAccordionItem[]
}

export default function CareerAccordionClient({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-b border-border"
        >
          <AccordionTrigger
            className="
              text-left text-base font-medium
              text-foreground
              hover:no-underline
            "
          >
            {item.title}
          </AccordionTrigger>

          <AccordionContent
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
