// app/api/testimonials/route.ts

import { NextResponse } from "next/server";
import { TestimonialRepositoryFactory } from "@/app/api/testimonials/repositories/factory/TestimonialRepositoryFactory";
import { TestimonialService } from "@/app/api/testimonials/services/testimonial.service";

export async function GET() {
  try {
    const repo = TestimonialRepositoryFactory.getInstance();
    const service = new TestimonialService(repo);

    const testimonials = await service.getTestimonials();

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("testimonials GET error:", error);
    return NextResponse.json(
      { error: "Failed to load testimonials" },
      { status: 500 }
    );
  }
}
