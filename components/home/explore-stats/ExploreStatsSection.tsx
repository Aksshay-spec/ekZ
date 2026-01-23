//components/home/explore-stats/ExploreStatsSection.tsx
"use client";

import FmcgSection from "./FmcgSection";
import SaptaarSection from "./SaptaarSection";

export default function ExploreStatsSection() {
  return (
    <section className="w-full py-16 px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side – FMCG */}
        <FmcgSection />

        {/* Right Side – Saptaar Electric */}
        <SaptaarSection />
      </div>
    </section>
  );
}
