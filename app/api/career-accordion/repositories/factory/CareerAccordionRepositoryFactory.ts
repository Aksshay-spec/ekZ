//app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory.ts

import { CareerAccordionJsonRepository } from "../implementations/CareerAccordionJsonRepository";
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";

export class CareerAccordionRepositoryFactory {
  static getInstance(): CareerAccordionRepository {
    // Future-ready (Firebase, DB, CMS)
    return new CareerAccordionJsonRepository();
  }
}
