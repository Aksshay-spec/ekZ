//app/api/career-accordion/repositories/implementations/TermsConditionJsonRepository.ts
import partnerAccordionData from "@/data/PartnerAccordionData.json";
import type { CareerAccordionItem } from "../../types/careerAccordion.types";
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";

export class PartnerAccordionJsonRepository
  implements CareerAccordionRepository
{
  async getItems(): Promise<CareerAccordionItem[]> {
    return partnerAccordionData as CareerAccordionItem[];
  }
}
