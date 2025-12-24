//app/career/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CareerCardsService } from "@/app/api/career-cards/services/careerCards.service";
import { CareerCardsRepositoryFactory } from "@/app/api/career-cards/repositories/factory/CareerCardsRepositoryFactory";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const repo = CareerCardsRepositoryFactory.getInstance();
  const service = new CareerCardsService(repo);
  const cards = await service.getCareerCards();

  return cards.map((card) => ({
    slug: card.slug,
  }));
}

export default async function CareerDetailsPage({ params }: PageProps) {
  // ✅ IMPORTANT: unwrap params
  const { slug } = await params;

  const repo = CareerCardsRepositoryFactory.getInstance();
  const service = new CareerCardsService(repo);

  const job = await service.getCareerCardBySlug(slug);

  if (!job) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-bold text-foreground">{job.title}</h1>
      <p className="mt-2 text-muted-foreground">{job.location}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <JobMeta label="Employment Type" value={job.employmentType} />
        <JobMeta label="Experience" value={job.experience} />
        <JobMeta label="Positions" value={job.positions.toString()} />
        <JobMeta label="Last Date" value={job.endDate} />
      </div>

      <Section title="Job Description">
        <p className="text-muted-foreground">{job.description}</p>
      </Section>

      <Section title="Responsibilities">
        <List items={job.responsibilities} />
      </Section>

      <Section title="Requirements">
        <List items={job.requirements} />
      </Section>

      <Section title="Qualifications">
        <List items={job.qualifications} />
      </Section>
    </section>
  );
}

/* ---------------- UI Helpers ---------------- */

function JobMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h2 className="mb-3 text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
