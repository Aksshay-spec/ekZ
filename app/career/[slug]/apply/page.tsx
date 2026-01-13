//app/career/[slug]/apply/page.tsx
import { notFound } from "next/navigation";
import { CareerCardsRepositoryFactory } from "@/app/api/career-cards/repositories/factory/CareerCardsRepositoryFactory";
import { CareerCardsService } from "@/app/api/career-cards/services/careerCards.service";
import CareerApplyForm from "@/components/careers/career-apply/CareerApplyForm";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ApplyPage({ params }: Props) {
  const { slug } = await params;

  const repo = CareerCardsRepositoryFactory.getInstance();
  const service = new CareerCardsService(repo);

  const job = await service.getCareerCardBySlug(slug);
  if (!job) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">Apply for {job.title}</h1>
      <p className="text-muted-foreground mb-10">
        {job.location} • {job.employmentType}
      </p>

      <CareerApplyForm jobSlug={slug} />
    </section>
  );
}
