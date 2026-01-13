// app/api/our-news/services/ourNews.service.ts

import type { OurNewsRepository } from "@/app/api/our-news/repositories/interfaces/OurNewsRepository";
import type { NewsItem } from "@/app/api/our-news/types/ourNews.types";

export class OurNewsService {
  constructor(private repo: OurNewsRepository) {}

  async getNews(): Promise<NewsItem[]> {
    const news = await this.repo.getNews();

    // Here you can add any business logic later
    return news;
  }
}
