// app/api/our-journey/repositories/factory/OurJourneyRepositoryFactory.ts

import type { OurJourneyRepository } from "../interfaces/OurJourneyRepository";
import { OurJourneyJsonRepository } from "../implementations/OurJourneyJsonRepository";
// import { OurJourneyFirebaseRepository } from "../implementations/OurJourneyFirebaseRepository";

export class OurJourneyRepositoryFactory {
  static getInstance(): OurJourneyRepository {
    const useFirebase = process.env.OUR_JOURNEY_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new OurJourneyFirebaseRepository();
    }

    return new OurJourneyJsonRepository();
  }
}
