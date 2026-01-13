// app/api/home-slider/repositories/implementations/ProductHeroSliderJsonRepository.ts

import type { Slide } from "@/app/api/home-slider/types/homeSlider.types";
import sliderData from "@/data/productHeroSliderData.json";
import type { HeroSectionSliderRepository } from "../interfaces/HeroSectionSliderRepository";

export class ProductHeroSliderJsonRepository
  implements HeroSectionSliderRepository
{
  async getSlides(): Promise<Slide[]> {
    return sliderData as Slide[];
  }
}
