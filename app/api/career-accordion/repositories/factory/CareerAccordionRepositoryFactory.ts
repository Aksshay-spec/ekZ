//app/api/career-accordion/repositories/factory/CareerAccordionRepositoryFactory.ts

import { CareerAccordionJsonRepository } from "../implementations/CareerAccordionJsonRepository";
import { TermsConditionJsonRepository } from "../implementations/TermsConditionJsonRepository";
import { PartnerAccordionJsonRepository } from "../implementations/PartnerAccordionJsonRepository";
import type { CareerAccordionRepository } from "../interfaces/CareerAccordionRepository";

export class CareerAccordionRepositoryFactory {
  static getInstance(
    context: "career" | "termscondition" | "partneraccordion" = "career",
  ): CareerAccordionRepository {
    switch (context) {
      case "termscondition":
        return new TermsConditionJsonRepository();

      case "partneraccordion":
        return new PartnerAccordionJsonRepository();

      case "career":
      default:
        return new CareerAccordionJsonRepository();
    }
  }
}
