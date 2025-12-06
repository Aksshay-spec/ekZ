// app/api/our-news/route.ts

import { NextResponse } from "next/server";
import { OurNewsRepositoryFactory } from "@/app/api/our-news/repositories/factory/OurNewsRepositoryFactory";
import { OurNewsService } from "@/app/api/our-news/services/ourNews.service";

export async function GET() {
  try {
    const repo = OurNewsRepositoryFactory.getInstance();
    const service = new OurNewsService(repo);

    const news = await service.getNews();

    return NextResponse.json(news);
  } catch (error) {
    console.error("our-news GET error:", error);
    return NextResponse.json({ error: "Failed to load news" }, { status: 500 });
  }
}
