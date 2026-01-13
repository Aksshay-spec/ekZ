// app/api/our-journey/route.ts

import { NextResponse } from "next/server";
import { OurJourneyRepositoryFactory } from "@/app/api/our-journey/repositories/factory/OurJourneyRepositoryFactory";
import { OurJourneyService } from "@/app/api/our-journey/services/ourJourney.service";

export async function GET() {
  try {
    const repo = OurJourneyRepositoryFactory.getInstance();
    const service = new OurJourneyService(repo);

    const timeline = await service.getJourney();

    return NextResponse.json(timeline);
  } catch (error) {
    console.error("our-journey GET error:", error);
    return NextResponse.json(
      { error: "Failed to load journey timeline" },
      { status: 500 },
    );
  }
}
