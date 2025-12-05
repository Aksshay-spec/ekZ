// app/api/testimonials/repositories/factory/TestimonialRepositoryFactory.ts

import type { TestimonialRepository } from "../interfaces/TestimonialRepository";
import { TestimonialJsonRepository } from "../implementations/TestimonialJsonRepository";
// import { TestimonialFirebaseRepository } from "../implementations/TestimonialFirebaseRepository";

export class TestimonialRepositoryFactory {
  static getInstance(): TestimonialRepository {
    const useFirebase = process.env.TESTIMONIAL_USE_FIREBASE === "true";

    if (useFirebase) {
      // return new TestimonialFirebaseRepository();
    }

    return new TestimonialJsonRepository();
  }
}
