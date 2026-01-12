//app/api/career-accordion/repositories/implementations/CareerAccordionJsonRepository.ts
import accordionData from "@/data/careerAccordionData.json";
import type { CareerAccordionItem } from "../../types/careerAccordion.types";
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";

export class CareerAccordionJsonRepository
  implements CareerAccordionRepository
{
  async getItems(): Promise<CareerAccordionItem[]> {
    return accordionData as CareerAccordionItem[];
  }
}
