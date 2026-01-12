//app/api/career-accordion/repositories/interfaces/CareerAccordionRepository.ts
import type { CareerAccordionItem } from "../../types/careerAccordion.types";

export interface CareerAccordionRepository {
  getItems(): Promise<CareerAccordionItem[]>;
}
