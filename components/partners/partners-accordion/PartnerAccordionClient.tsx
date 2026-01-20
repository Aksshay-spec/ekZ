//components/terms-condition/terms-condition-accordion/TermsConditionAccordionClient.tsx

import type { CareerAccordionItem } from "@/app/api/career-accordion/types/careerAccordion.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  items: CareerAccordionItem[];
};

export default function PartnerAccordionClient({ items }: Props) {
  const defaultValue = items[0]?.id;
  return (
    <Accordion
      type="single"
      defaultValue={defaultValue}
      className="w-full space-y-2"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-b border-border"
        >
          <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
            {item.title}
          </AccordionTrigger>

          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
