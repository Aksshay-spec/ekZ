import type { HeroSectionSliderRepository } from "../interfaces/HeroSectionSliderRepository";
import { HeroSectionSliderJsonRepository } from "../implementations/HeroSectionSliderJsonRepository";

export class HeroSectionSliderFactory {
  static getInstance(): HeroSectionSliderRepository {
    // Change this condition in future
    const useFirebase = process.env.HOME_SLIDER_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new HeroSectionSliderFirebaseRepository();
    }

    return new HeroSectionSliderJsonRepository();
  }
}
