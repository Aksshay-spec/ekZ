// app/api/our-journey/repositories/implementations/OurJourneyJsonRepository.ts

import type { JourneyItem } from "@/app/api/our-journey/types/journey.types";
import journeyData from "@/data/journeyData.json";
import type { OurJourneyRepository } from "../interfaces/OurJourneyRepository";

export class OurJourneyJsonRepository implements OurJourneyRepository {
  async getJourney(): Promise<JourneyItem[]> {
    return journeyData as JourneyItem[];
  }
}
