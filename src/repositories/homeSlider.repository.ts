// src/repositories/homeSlider.repository.ts

import sliderData from "@/data/homeSliderData.json";
import type { Slide } from "../types/homeSlider.types";

/**
 * Repository: responsible for data access.
 * Currently reads from static JSON, but can be swapped to DB or CMS.
 */

export async function getAllSlides(): Promise<Slide[]> {
  // In future you can replace this with DB call or fetch from external CMS.
  // Keeping it async to keep the interface consistent.
  return sliderData as unknown as Slide[];
}
