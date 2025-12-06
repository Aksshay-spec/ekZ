// components/home/our-journey/TimelineYearCircle.tsx
"use client";

export default function TimelineYearCircle({
  year,
  color,
}: {
  year: string;
  color: string;
}) {
  return (
    <div
      className={`
        w-28 h-28 sm:w-32 sm:h-32 rounded-full
        flex items-center justify-center
        shadow-2xl relative overflow-hidden
        ${color}
      `}
    >
      {/* Glossy highlight */}
      <div className="absolute top-1 left-1 right-1 h-6 rounded-full bg-white/30 blur-md" />

      {/* Soft white glow */}
      <div className="absolute inset-0 rounded-full bg-white/10" />

      <span className="text-4xl sm:text-5xl font-extrabold text-white relative z-10">
        {year}
      </span>
    </div>
  );
}
