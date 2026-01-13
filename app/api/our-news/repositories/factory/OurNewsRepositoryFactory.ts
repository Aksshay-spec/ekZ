// app/api/our-news/repositories/factory/OurNewsRepositoryFactory.ts

import { OurNewsJsonRepository } from "../implementations/OurNewsJsonRepository";
import type { OurNewsRepository } from "../interfaces/OurNewsRepository";

export class OurNewsRepositoryFactory {
  static getInstance(): OurNewsRepository {
    const useFirebase = process.env.OUR_NEWS_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new OurNewsFirebaseRepository();
    }

    return new OurNewsJsonRepository();
  }
}
