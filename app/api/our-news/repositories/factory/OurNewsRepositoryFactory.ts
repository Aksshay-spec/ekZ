// app/api/our-news/repositories/factory/OurNewsRepositoryFactory.ts

import type { OurNewsRepository } from "../interfaces/OurNewsRepository";
import { OurNewsJsonRepository } from "../implementations/OurNewsJsonRepository";
// import { OurNewsFirebaseRepository } from "../implementations/OurNewsFirebaseRepository";

export class OurNewsRepositoryFactory {
  static getInstance(): OurNewsRepository {
    const useFirebase = process.env.OUR_NEWS_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new OurNewsFirebaseRepository();
    }

    return new OurNewsJsonRepository();
  }
}
