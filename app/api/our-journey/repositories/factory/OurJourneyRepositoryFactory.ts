// app/api/our-journey/repositories/factory/OurJourneyRepositoryFactory.ts

import { OurJourneyJsonRepository } from "../implementations/OurJourneyJsonRepository";
import type { OurJourneyRepository } from "../interfaces/OurJourneyRepository";

export class OurJourneyRepositoryFactory {
  static getInstance(): OurJourneyRepository {
    const useFirebase = process.env.OUR_JOURNEY_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new OurJourneyFirebaseRepository();
    }

    return new OurJourneyJsonRepository();
  }
}
