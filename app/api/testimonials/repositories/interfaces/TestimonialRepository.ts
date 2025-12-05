// app/api/testimonials/repositories/interfaces/TestimonialRepository.ts

import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";

export interface TestimonialRepository {
  getTestimonials(): Promise<Testimonial[]>;
}
