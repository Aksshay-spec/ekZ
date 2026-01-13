// app/api/our-news/repositories/implementations/OurNewsJsonRepository.ts

import type { NewsItem } from "@/app/api/our-news/types/ourNews.types";
import newsData from "@/data/newsData.json";
import type { OurNewsRepository } from "../interfaces/OurNewsRepository";

export class OurNewsJsonRepository implements OurNewsRepository {
  async getNews(): Promise<NewsItem[]> {
    return newsData as NewsItem[];
  }
}
