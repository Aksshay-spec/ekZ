// app/api/home-slider/repositories/implementations/HeroSectionSliderJsonRepository.ts

import sliderData from "@/data/homeSliderData.json";
import type { Slide } from "@/app/api/home-slider/types/homeSlider.types";
import type { HeroSectionSliderRepository } from "../interfaces/HeroSectionSliderRepository";

export class HeroSectionSliderJsonRepository
  implements HeroSectionSliderRepository
{
  async getSlides(): Promise<Slide[]> {
    return sliderData as Slide[];
  }
}
