//app/api/career-accordion/route.ts
import { NextResponse } from "next/server";
import { CareerAccordionRepositoryFactory } from "./repositories/factory/CareerAccordionRepositoryFactory";
import { CareerAccordionService } from "./services/careerAccordion.service";

export async function GET() {
  try {
    const repo = CareerAccordionRepositoryFactory.getInstance();
    const service = new CareerAccordionService(repo);

    const items = await service.getItems();

    return NextResponse.json(items);
  } catch (error) {
    console.error("career-accordion GET error:", error);
    return NextResponse.json(
      { error: "Failed to load accordion data" },
      { status: 500 },
    );
  }
}
