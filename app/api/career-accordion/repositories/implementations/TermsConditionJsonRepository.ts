//app/api/career-accordion/repositories/implementations/TermsConditionJsonRepository.ts
import termsConditionData from "@/data/termsConditionData.json";
import type { CareerAccordionItem } from "../../types/careerAccordion.types";
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";

export class TermsConditionJsonRepository
  implements CareerAccordionRepository
{
  async getItems(): Promise<CareerAccordionItem[]> {
    return termsConditionData as CareerAccordionItem[];
  }
}
