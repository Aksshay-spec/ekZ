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
  const { slug } = await params;

  const repo = CareerCardsRepositoryFactory.getInstance();
  const service = new CareerCardsService(repo);

  const job = await service.getCareerCardBySlug(slug);
  if (!job) notFound();

  return (
    <section className="relative overflow-hidden">
      {/* ---------- HERO ---------- */}
      <div className="bg-gradient-to-br from-redish-pink-50 via-background to-aqua-green-50 dark:from-redish-pink-950 dark:to-aqua-green-950">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <span className="inline-block rounded-full bg-redish-pink-100 px-4 py-1 text-sm font-medium text-redish-pink-700 dark:bg-redish-pink-900 dark:text-redish-pink-200">
            {job.employmentType}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-redish-pink-500 sm:text-5xl">
            {job.title}
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {job.location} · {job.experience}
          </p>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Meta Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <JobMeta label="Employment Type" value={job.employmentType} />
          <JobMeta label="Experience" value={job.experience} />
          <JobMeta label="Open Positions" value={job.positions.toString()} />
          <JobMeta label="Last Date" value={job.endDate} />
        </div>

        {/* Sections */}
        <Section title="Job Description">
          <p className="leading-relaxed text-muted-foreground">
            {job.description}
          </p>
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
      </div>
    </section>
  );
}

/* ---------------- UI Helpers ---------------- */

function JobMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
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
    <div className="mt-14">
      <h2 className="mb-4 text-2xl font-semibold text-foreground">{title}</h2>
      <div className="rounded-2xl border border-border bg-card p-6">
        {children}
      </div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-aqua-green-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
