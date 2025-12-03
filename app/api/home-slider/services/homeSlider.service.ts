import type { Slide } from "@/app/api/home-slider/types/homeSlider.types";
import type { HeroSectionSliderRepository } from "@/app/api/home-slider/repositories/interfaces/HeroSectionSliderRepository";

export class HomeSliderService {
  constructor(private repo: HeroSectionSliderRepository) {}

  async getSlides(): Promise<Slide[]> {
    const slides = await this.repo.getSlides();

    return slides.map((s) => ({
      ...s,
      heading:
        Array.isArray(s.heading) && s.heading.length >= 2
          ? [String(s.heading[0]), String(s.heading[1])]
          : [String(s.title), ""],
    }));
  }
}
