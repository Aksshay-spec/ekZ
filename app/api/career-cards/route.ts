//app/api/career-cards/route.ts
import { NextResponse } from "next/server";
import { CareerCardsRepositoryFactory } from "@/app/api/career-cards/repositories/factory/CareerCardsRepositoryFactory";
import { CareerCardsService } from "@/app/api/career-cards/services/careerCards.service";

export async function GET() {
  try {
    const repo = CareerCardsRepositoryFactory.getInstance();
    const service = new CareerCardsService(repo);

    const cards = await service.getCareerCards();

    return NextResponse.json(cards);
  } catch (error) {
    console.error("career-cards GET error:", error);

    return NextResponse.json(
      { error: "Failed to load career cards" },
      { status: 500 }
    );
  }
}
