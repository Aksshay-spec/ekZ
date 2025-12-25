//app/api/career-applications/route.ts
import { NextResponse } from "next/server";
import { CareerApplicationService } from "./services/careerApplication.service";
import { CareerApplicationRepositoryFactory } from "./repositories/factory/CareerApplicationRepositoryFactory";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const repo = CareerApplicationRepositoryFactory.getInstance();
    const service = new CareerApplicationService(repo);

    await service.apply({
      ...body,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
