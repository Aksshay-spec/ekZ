// app/api/testimonials/services/testimonial.service.ts

import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";
import type { TestimonialRepository } from "@/app/api/testimonials/repositories/interfaces/TestimonialRepository";

export class TestimonialService {
  constructor(private repo: TestimonialRepository) {}

  async getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await this.repo.getTestimonials();

    return testimonials.map((t) => ({
      ...t,
      text: t.text ? String(t.text) : "No testimonial provided.",
      name: t.name ? String(t.name) : "Anonymous",
      rating: Number(t.rating) > 0 ? Number(t.rating) : 5,
      image: t.image || "default-user.png",
    }));
  }
}
