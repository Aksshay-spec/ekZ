// components/home/our-journey/OurJourneyTimelines.tsx
"use client";

import TimelineList from "./TimelineList";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index";
import type { TimelineItemType } from "@/app/api/our-journey/types/journey.types";
import styles from "./OurJourneyTimelines.module.css";
export default function OurJourneyTimelines({
  timelineItems,
}: {
  timelineItems: TimelineItemType[];
}) {
  return (
    <div className="relative bg-black  px-6 sm:px-10 lg:px-12 text-center w-full overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(from_var(--foreground)_l_c_h/0.12)_0%,transparent_70%)]" />
        <div className={`absolute inset-0 ${styles.shootingStarsBg}`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <TimelineList data={timelineItems} />
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
    </div>
  );
}
