// app/api/our-journey/services/ourJourney.service.ts

import type { JourneyItem } from "@/app/api/our-journey/types/journey.types";
import type { OurJourneyRepository } from "@/app/api/our-journey/repositories/interfaces/OurJourneyRepository";

export class OurJourneyService {
  constructor(private repo: OurJourneyRepository) {}

  async getJourney(): Promise<JourneyItem[]> {
    const timeline = await this.repo.getJourney();

    // Ensure types & normalization
    return timeline.map((item) => ({
      ...item,
      year: String(item.year),
      text: String(item.text),
      position: item.position === "right" ? "right" : "left",
      colors: String(item.colors),
    }));
  }
}
