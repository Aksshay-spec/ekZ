// components/home/our-journey/OurJourney.tsx
"use client";

import { useEffect, useState } from "react";
import TimelineList from "./TimelineList";
import type {
  Star,
  TimelineItemType,
} from "@/app/api/our-journey/types/journey.types";

export default function OurJourney({
  timelineItems,
}: {
  timelineItems: TimelineItemType[];
}) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const arr: Star[] = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    setStars(arr);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden px-4 py-8 sm:py-12">
      {/* Background Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent -rotate-45"
            style={{
              top: `${i * 10}%`,
              left: "-50%",
              width: "200%",
            }}
          />
        ))}
      </div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationName: "floatAround, pulse",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            OUR JOURNEY
          </h1>
          <div className="w-48 sm:w-64 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full" />
        </div>

        <TimelineList data={timelineItems} />
      </div>
    </div>
  );
}
