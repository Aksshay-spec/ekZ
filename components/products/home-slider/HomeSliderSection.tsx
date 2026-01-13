import { HeroSectionSliderFactory } from "@/app/api/home-slider/repositories/factory/HeroSectionSliderRepositoryFactory";
import { HomeSliderService } from "@/app/api/home-slider/services/homeSlider.service";

import HomeSlider from "./HomeSlider";

export default async function HomeSliderSection() {
  const repo = HeroSectionSliderFactory.getInstance("product");
  const service = new HomeSliderService(repo);

  const slides = await service.getSlides();

  return <HomeSlider slides={slides} />;
}
