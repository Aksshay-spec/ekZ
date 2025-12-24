//app/api/career-cards/services/careerCards.service.ts
import type { CareerCardItem } from "@/app/api/career-cards/types/careerCards.types";
import type { CareerCardsRepository } from "@/app/api/career-cards/repositories/interfaces/CareerCardsRepository";

export class CareerCardsService {
  constructor(private repo: CareerCardsRepository) {}

  async getCareerCards() {
    return this.repo.getCareerCards()
  }

  async getCareerCardBySlug(slug: string) {
    return this.repo.getCareerCardBySlug(slug)
  }
}

