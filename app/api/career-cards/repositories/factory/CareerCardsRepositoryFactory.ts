//app/api/career-cards/repositories/factory/CareerCardsRepositoryFactory.ts

import { CareerCardsJsonRepository } from "../implementations/CareerCardsJsonRepository";
import type { CareerCardsRepository } from "../interfaces/CareerCardsRepository";
// import { CareerCardsFirebaseRepository } from "../implementations/CareerCardsFirebaseRepository"

export class CareerCardsRepositoryFactory {
  static getInstance(): CareerCardsRepository {
    const useFirebase = process.env.CAREER_CARDS_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new CareerCardsFirebaseRepository()
    }

    return new CareerCardsJsonRepository();
  }
}
