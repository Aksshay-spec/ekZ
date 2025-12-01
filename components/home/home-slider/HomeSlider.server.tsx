// app/components/home/home-slider/HomeSlider.server.tsx
import type { Slide } from "@/src/types/homeSlider.types";
import { fetchSlides } from "@/src/services/homeSlider.service";
import HomeSliderClient from "./HomeSlider.client";

export default async function HomeSliderServer() {
  const slides: Slide[] = await fetchSlides();

  return <HomeSliderClient slides={slides} />;
}
