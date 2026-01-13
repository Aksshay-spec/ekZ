import { NextResponse } from "next/server";
import { HeroSectionSliderFactory } from "@/app/api/home-slider/repositories/factory/HeroSectionSliderRepositoryFactory";
import { HomeSliderService } from "@/app/api/home-slider/services/homeSlider.service";

export async function GET() {
  try {
    // Construct repository (factory is allowed here)
    const repo = HeroSectionSliderFactory.getInstance();

    // Create service with DI
    const service = new HomeSliderService(repo);

    // Call service logic
    const slides = await service.getSlides();

    return NextResponse.json(slides);
  } catch (error) {
    console.error("home-slider GET error:", error);
    return NextResponse.json(
      { error: "Failed to load slides" },
      { status: 500 },
    );
  }
}
