// app/api/home-slider/route.ts
import { NextResponse } from "next/server";
import { fetchSlides } from "@/src/services/homeSlider.service";

/**
 * API route handler (server)
 * Thin controller — delegates to service layer.
 */
export async function GET() {
  try {
    const slides = await fetchSlides();
    return NextResponse.json(slides);
  } catch (error) {
    console.error("home-slider GET error:", error);
    return NextResponse.json(
      { error: "Failed to load slides" },
      { status: 500 }
    );
  }
}
