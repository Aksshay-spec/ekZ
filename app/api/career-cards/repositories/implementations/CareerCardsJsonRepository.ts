//app/api/career-cards/repositories/implementations/CareerCardsJsonRepository.ts
import careerCardData from "@/data/careerCardData.json"
import type { CareerCardItem } from "@/app/api/career-cards/types/careerCards.types"
import type { CareerCardsRepository } from "../interfaces/CareerCardsRepository"

export class CareerCardsJsonRepository implements CareerCardsRepository {
  async getCareerCards(): Promise<CareerCardItem[]> {
    return careerCardData as CareerCardItem[]
  }

  async getCareerCardBySlug(slug: string): Promise<CareerCardItem | null> {
    const cards = careerCardData as CareerCardItem[]
    return cards.find(card => card.slug === slug) ?? null
  }
}

