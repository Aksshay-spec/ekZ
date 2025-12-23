// components/careers/career-cards/CareerCardsSection.tsx
import CareerCard from "./CareerCard"
import { careerCards } from "./data"

export default function CareerCardsSection() {
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
  )
}
