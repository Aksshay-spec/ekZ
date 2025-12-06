// app/api/our-journey/repositories/interfaces/OurJourneyRepository.ts

import type { JourneyItem } from "@/app/api/our-journey/types/journey.types";

export interface OurJourneyRepository {
  getJourney(): Promise<JourneyItem[]>;
}
