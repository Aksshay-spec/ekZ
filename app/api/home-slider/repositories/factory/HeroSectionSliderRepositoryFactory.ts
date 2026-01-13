//app/api/home-slider/repositories/factory/HeroSectionSliderRepositoryFactory.ts

import { HeroSectionSliderJsonRepository } from "../implementations/HeroSectionSliderJsonRepository";
import { ProductHeroSliderJsonRepository } from "../implementations/ProductHeroSliderJsonRepository";
import type { HeroSectionSliderRepository } from "../interfaces/HeroSectionSliderRepository";

export class HeroSectionSliderFactory {
  static getInstance(
    context: "home" | "product" = "home",
  ): HeroSectionSliderRepository {
    switch (context) {
      case "product":
        return new ProductHeroSliderJsonRepository();

      case "home":
      default:
        return new HeroSectionSliderJsonRepository();
    }
  }
}
