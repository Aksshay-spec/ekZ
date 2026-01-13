// components/careers/career-cards/CareerCardsSection.tsx

import { CareerCardsRepositoryFactory } from "@/app/api/career-cards/repositories/factory/CareerCardsRepositoryFactory";
import { CareerCardsService } from "@/app/api/career-cards/services/careerCards.service";
import type { CareerCardItem } from "@/app/api/career-cards/types/careerCards.types";
import CareerCard from "./CareerCard";

export default async function CareerCardsSection() {
  // --- SSR / SSG ---
  const repo = CareerCardsRepositoryFactory.getInstance();
  const service = new CareerCardsService(repo);

  const careerCards: CareerCardItem[] = await service.getCareerCards();

  return (
    <section className="mt-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Explore Career Opportunities
          </h2>
          <p className="mt-3 text-muted-foreground">
            Find a role that matches your skills and passion
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {careerCards.map((item) => (
            <CareerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
