//app/api/career-accordion/services/careerAccordion.service.ts
import type { CareerAccordionRepository } from "../repositories/interfaces/CareerAccordionRepository";
import type { CareerAccordionItem } from "../types/careerAccordion.types";

export class CareerAccordionService {
  constructor(private repo: CareerAccordionRepository) {}

  async getItems(): Promise<CareerAccordionItem[]> {
    const items = await this.repo.getItems();
    return items;
  }
}
