"use client";

import ExploreHeader from "./ExploreHeader";

export default function ExploreMoreSection() {
  return (
    <section className="w-full py-16 px-4 text-center">

      {/* Reusable Explore Header */}
      <ExploreHeader />

      {/* Blue Placeholder Box */}
      <div className="w-full bg-blue-600 h-[450px] sm:h-[500px] mt-10 rounded-2xl flex flex-col items-center justify-center text-white text-xl">
        <p className="font-semibold">Sub Section 1</p>
        <p className="mt-3 text-lg opacity-90">
          Place holder for category and product
        </p>
      </div>

    </section>
  );
}
