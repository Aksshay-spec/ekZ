// components/home/our-journey/OurJourneySection.tsx

import { OurJourneyRepositoryFactory } from "@/app/api/our-journey/repositories/factory/OurJourneyRepositoryFactory";
import { OurJourneyService } from "@/app/api/our-journey/services/ourJourney.service";
import SectionHeader from "@/components/common/SectionHeader";
import OurJourneyTimelines from "./OurJourneyTimelines";

export default async function OurJourneySection() {
  const repo = OurJourneyRepositoryFactory.getInstance();
  const service = new OurJourneyService(repo);

  const timelineItems = await service.getJourney();

  return (
    <section className="bg-black pt-8 pb-8 overflow-hidden text-center relative">
      {/* <h1
        className="font-bold font-playfair text-4xl md:text-6xl font-bold text-white mb-4 rounded relative 
          after:content-[''] after:block after:w-32 after:h-2 
          after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto"
      >
        OUR JOURNEY
      </h1> */}
      <SectionHeader className="text-white" title="OUR JOURNEY" />

      <div>
        <OurJourneyTimelines timelineItems={timelineItems} />
      </div>
    </section>
  );
}
