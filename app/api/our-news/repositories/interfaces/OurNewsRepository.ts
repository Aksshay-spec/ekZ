// app/api/our-news/repositories/interfaces/OurNewsRepository.ts

import type { NewsItem } from "@/app/api/our-news/types/ourNews.types";

export interface OurNewsRepository {
  getNews(): Promise<NewsItem[]>;
}
