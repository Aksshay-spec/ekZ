//app/api/career-cards/repositories/interfaces/CareerCardsRepository.ts
import type { CareerCardItem } from "@/app/api/career-cards/types/careerCards.types"

export interface CareerCardsRepository {
  getCareerCards(): Promise<CareerCardItem[]>
  getCareerCardBySlug(slug: string): Promise<CareerCardItem | null>
}

