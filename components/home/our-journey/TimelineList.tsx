// components/home/our-journey/TimelineList.tsx
"use client";

import TimelineYearCircle from "./TimelineYearCircle";
import TimelineGradientBox from "./TimelineGradientBox";

interface TimelineItem {
  year: string;
  text: string;
  position: "left" | "right";
  colors: string; // gradient
}

export default function TimelineList({ data }: { data: TimelineItem[] }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {data.map((item, index) => {
        const isLeft = item.position === "left";

        return (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-2xl h-28 sm:h-32 relative">

              {/* Gradient Box */}
              <TimelineGradientBox
                text={item.text}
                gradient={item.colors}
                isLeft={isLeft}
              />

              {/* Year Circle */}
              <div className={`${isLeft ? "absolute left-0" : "absolute right-0"} top-0`}>
                <TimelineYearCircle
                  year={item.year}
                  color={isLeft ? "bg-redish-pink-500" : "bg-aqua-green-500"}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
