// app/api/testimonials/repositories/factory/TestimonialRepositoryFactory.ts

import { TestimonialJsonRepository } from "../implementations/TestimonialJsonRepository";
import type { TestimonialRepository } from "../interfaces/TestimonialRepository";

export class TestimonialRepositoryFactory {
  static getInstance(): TestimonialRepository {
    const useFirebase = process.env.TESTIMONIAL_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new TestimonialFirebaseRepository();
    }

    return new TestimonialJsonRepository();
  }
}
