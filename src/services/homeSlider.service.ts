// src/services/homeSlider.service.ts

import { getAllSlides } from "@/src/repositories/homeSlider.repository";
import type { Slide } from "../types/homeSlider.types";

/**
 * Service: business logic and transformations live here.
 * Keeps route handlers and UI decoupled from raw data shape changes.
 */

export async function fetchSlides(): Promise<Slide[]> {
  const slides = await getAllSlides();

  // Example of a business rule: ensure headings are exactly two items.
  // Enforce shape early rather than scattered across UI.
  return slides.map((s) => ({
    ...s,
    heading:
      Array.isArray(s.heading) && s.heading.length >= 2
        ? [String(s.heading[0]), String(s.heading[1])]
        : [String(s.title), ""],
  }));
}
