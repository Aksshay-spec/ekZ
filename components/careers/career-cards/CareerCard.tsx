// components/careers/career-cards/CareerCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { CareerCardItem } from "./types";
import { Button } from "@/components/ui/button";

type Props = {
  item: CareerCardItem;
};

export default function CareerCard({ item }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>

        <p className="text-sm text-muted-foreground">{item.description}</p>

        {/* <Link
          href={item.applyHref}
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-redish-pink-500
            hover:text-redish-pink-600
          "
        >
          Apply Now →
        </Link> */}

        <Button
          variant="secondary"
          className="bg-redish-pink-500 text-white rounded-full px-10"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}
