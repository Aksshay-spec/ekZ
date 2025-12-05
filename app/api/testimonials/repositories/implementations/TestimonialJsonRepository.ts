// app/api/testimonials/repositories/implementations/TestimonialJsonRepository.ts

import testimonialData from "@/data/testimonialData.json";
import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";
import type { TestimonialRepository } from "../interfaces/TestimonialRepository";

export class TestimonialJsonRepository implements TestimonialRepository {
  async getTestimonials(): Promise<Testimonial[]> {
    return testimonialData as Testimonial[];
  }
}
