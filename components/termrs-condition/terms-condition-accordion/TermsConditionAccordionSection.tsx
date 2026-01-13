//components/terms-condition/terms-condition-accordion/TermsConditionAccordionSection.tsx
import { CareerAccordionRepositoryFactory } from "@/app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory";
import { CareerAccordionService } from "@/app/api/career-accordion/services/careerAccordion.service";

import CareerAccordion from "./TermsConditionAccordion";

export default async function TermsConditionAccordionSection() {
  const repo = CareerAccordionRepositoryFactory.getInstance("termscondition");
  const service = new CareerAccordionService(repo);

  const items = await service.getItems();

  return <CareerAccordion items={items} />;
}
