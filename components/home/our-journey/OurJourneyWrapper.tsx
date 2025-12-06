// components/home/our-journey/OurJourneyWrapper.tsx
import { OurJourneyRepositoryFactory } from "@/app/api/our-journey/repositories/factory/OurJourneyRepositoryFactory";
import { OurJourneyService } from "@/app/api/our-journey/services/ourJourney.service";
import OurJourney from "./OurJourney";

export default async function OurJourneyWrapper() {
  const repo = OurJourneyRepositoryFactory.getInstance();
  const service = new OurJourneyService(repo);

  const timelineItems = await service.getJourney();

  // Pass timeline items (SSG/SSR: server component)
  return <OurJourney timelineItems={timelineItems} />;
}
