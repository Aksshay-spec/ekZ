import { HomeSliderService } from "@/app/api/home-slider/services/homeSlider.service";
import { HeroSectionSliderFactory } from "@/app/api/home-slider/repositories/factory/HeroSectionSliderRepositoryFactory";

import HomeSlider from "./HomeSlider";

export default async function HomeSliderWrapper() {
  const repo = HeroSectionSliderFactory.getInstance();
  const service = new HomeSliderService(repo);

  const slides = await service.getSlides();

  return <HomeSlider slides={slides} />;
}
