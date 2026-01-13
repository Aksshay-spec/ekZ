// components/home/our-news/OurNewsSection.tsx

import { OurNewsRepositoryFactory } from "@/app/api/our-news/repositories/factory/OurNewsRepositoryFactory";
import { OurNewsService } from "@/app/api/our-news/services/ourNews.service";
import SectionHeader from "@/components/common/SectionHeader";
import OurNewsCarousel from "./OurNewsCarousel";

export default async function OurNewsSection() {
  const repo = OurNewsRepositoryFactory.getInstance();
  const service = new OurNewsService(repo);

  const news = await service.getNews();

  return (
    <section className="bg-white pt-8 pb-20 overflow-hidden text-center">
      {/* <h3
        className="
          mt-8 inline-block text-black px-3 py-1 
          font-bold font-playfair text-3xl sm:text-4xl
          
        "
      >
        Our related News
      </h3>

      <h4
        className="font-playfair text-lg sm:text-xl font-bold text-black mt-2 rounded relative 
          after:content-[''] after:block after:w-[40%] after:h-[8px] 
          after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto"
      >
        Your Trust our Guarantee
      </h4> */}

      <SectionHeader
        title="Our related News"
        subtitle="Your Trust our Guarantee"
        subtitleClassName="font-playfair"
      />

      <OurNewsCarousel news={news} />
    </section>
  );
}
