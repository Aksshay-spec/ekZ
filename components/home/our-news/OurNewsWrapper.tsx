// components/home/our-news/OurNewsWrapper.tsx

import { OurNewsRepositoryFactory } from "@/app/api/our-news/repositories/factory/OurNewsRepositoryFactory";
import { OurNewsService } from "@/app/api/our-news/services/ourNews.service";

import OurNews from "./OurNews";

export default async function OurNewsWrapper() {
  const repo = OurNewsRepositoryFactory.getInstance();
  const service = new OurNewsService(repo);

  // SSR Fetch
  const news = await service.getNews();

  return <OurNews news={news} />;
}
