//app/api/home-slider/repositories/factory/HeroSectionSliderRepositoryFactory.ts
import type { HeroSectionSliderRepository } from "../interfaces/HeroSectionSliderRepository";
import { HeroSectionSliderJsonRepository } from "../implementations/HeroSectionSliderJsonRepository";
import { ProductHeroSliderJsonRepository } from "../implementations/ProductHeroSliderJsonRepository";

export class HeroSectionSliderFactory {
  static getInstance(
    context: "home" | "product" = "home"
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
