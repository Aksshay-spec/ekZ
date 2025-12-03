// app/api/home-slider/repositories/interfaces/HeroSectionSliderRepository.ts

import type { Slide } from "@/app/api/home-slider/types/homeSlider.types";

export interface HeroSectionSliderRepository {
  getSlides(): Promise<Slide[]>;
}
