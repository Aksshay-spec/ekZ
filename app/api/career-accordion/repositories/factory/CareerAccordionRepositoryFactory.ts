//app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory.ts
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";
import { CareerAccordionJsonRepository } from "../implementations/CareerAccordionJsonRepository";

export class CareerAccordionRepositoryFactory {
  static getInstance(): CareerAccordionRepository {
    // Future-ready (Firebase, DB, CMS)
    return new CareerAccordionJsonRepository();
  }
}
