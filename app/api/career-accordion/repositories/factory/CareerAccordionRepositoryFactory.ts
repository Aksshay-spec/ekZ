//app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory.ts

import { CareerAccordionJsonRepository } from "../implementations/CareerAccordionJsonRepository";
import { TermsConditionJsonRepository } from "../implementations/TermsConditionJsonRepository";
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";

export class CareerAccordionRepositoryFactory {
  static getInstance(
    context: "career" | "termscondition" = "career"
  ): CareerAccordionRepository {
    switch (context) {
      case "termscondition":
        return new TermsConditionJsonRepository();

      case "career":
      default:
        return new CareerAccordionJsonRepository();
    }
  }
}
