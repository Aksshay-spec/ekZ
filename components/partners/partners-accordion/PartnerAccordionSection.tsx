//components/terms-condition/terms-condition-accordion/TermsConditionAccordionSection.tsx
import { CareerAccordionRepositoryFactory } from "@/app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory";
import { CareerAccordionService } from "@/app/api/career-accordion/services/careerAccordion.service";
import PartnerAccordion from "./PartnerAccordion";

export default async function PartnerAccordionSection() {
  const repo = CareerAccordionRepositoryFactory.getInstance("partneraccordion");
  const service = new CareerAccordionService(repo);

  const items = await service.getItems();

  return <PartnerAccordion items={items} />;
}
