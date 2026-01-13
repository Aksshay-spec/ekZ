//app/career/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { CareerCardsRepositoryFactory } from "@/app/api/career-cards/repositories/factory/CareerCardsRepositoryFactory";
import { CareerCardsService } from "@/app/api/career-cards/services/careerCards.service";
import { Button } from "@/components/ui/button";

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
      {/* ================= HERO ================= */}
      <div className="relative bg-gradient-to-br from-redish-pink-50 via-background to-aqua-green-50 dark:from-redish-pink-950 dark:via-background dark:to-aqua-green-950">
        {/* Decorative blur */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-redish-pink-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-24 h-72 w-72 rounded-full bg-aqua-green-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <span className="inline-flex items-center rounded-full bg-redish-pink-100 px-5 py-1.5 text-sm font-semibold text-redish-pink-700 dark:bg-redish-pink-900 dark:text-redish-pink-200">
            {job.employmentType}
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {job.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {job.location}
            <span className="mx-2 text-border">•</span>
            {job.experience}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Meta cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <JobMeta label="Employment Type" value={job.employmentType} />
          <JobMeta label="Experience Required" value={job.experience} />
          <JobMeta label="Open Positions" value={job.positions.toString()} />
          <JobMeta label="Apply Before" value={job.endDate} />
        </div>

        {/* Sections */}
        <Section title="Job Description">
          <p className="leading-relaxed text-muted-foreground">
            {job.description}
          </p>
        </Section>

        <Section title="Key Responsibilities">
          <List items={job.responsibilities} />
        </Section>

        <Section title="Requirements">
          <List items={job.requirements} />
        </Section>

        <Section title="Qualifications">
          <List items={job.qualifications} />
        </Section>
        <Link href={`/career/${job.slug}/apply`}>
          <Button
            variant="secondary"
            className="bg-redish-pink-500 text-white rounded-full px-10 hover:bg-red-600 mt-10"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </section>
  );
}

/* ================= UI HELPERS ================= */

function JobMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-redish-pink-500 to-aqua-green-500" />
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
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
    <div className="mt-16">
      <h2 className="mb-5 text-2xl font-bold text-foreground">
        <span className="bg-gradient-to-r from-redish-pink-500 to-aqua-green-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        {children}
      </div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 text-muted-foreground">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-redish-pink-500 to-aqua-green-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
