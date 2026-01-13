// components/careers/career-cards/CareerCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { CareerCardItem } from "@/app/api/career-cards/types/careerCards.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {
  item: CareerCardItem;
};

export default function CareerCard({ item }: Props) {
  return (
    <Card
      className="
        group overflow-hidden
        rounded-2xl
        border border-border
        bg-background
        shadow-sm
        transition
        hover:shadow-md
        p-0
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      {/* Content */}
      <CardContent className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>

        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          variant="secondary"
          className="bg-redish-pink-500 text-white rounded-full px-10 hover:bg-red-600 cursor-pointer"
        >
          <Link href={`/career/${item.slug}/apply`}>Apply Now</Link>
        </Button>
        <Button
          variant="secondary"
          className="bg-redish-pink-500 text-white rounded-full px-10 hover:bg-red-600 cursor-pointer"
        >
          <Link href={`/career/${item.slug}`}>Explore More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
