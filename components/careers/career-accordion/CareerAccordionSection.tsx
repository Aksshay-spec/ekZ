//components/careers/career-accordion/CareerAccordionSection.tsx
import { CareerAccordionRepositoryFactory } from "@/app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory";
import { CareerAccordionService } from "@/app/api/career-accordion/services/careerAccordion.service";

import CareerAccordion from "./CareerAccordion";

export default async function CareerAccordionWrapper() {
  const repo = CareerAccordionRepositoryFactory.getInstance();
  const service = new CareerAccordionService(repo);

  const items = await service.getItems();

  return <CareerAccordion items={items} />;
}
