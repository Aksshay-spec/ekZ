// components/home/our-journey/TimelineGradientBox.tsx
"use client";

export default function TimelineGradientBox({
  text,
  gradient,
  isLeft,
}: {
  text: string;
  gradient: string;
  isLeft: boolean;
}) {
  return (
    <div
      className={`
        absolute top-0 bottom-0 rounded-3xl shadow-2xl flex items-center 
        ${
          isLeft
            ? "left-14 sm:left-16 right-0 pl-20 sm:pl-24" // FIXED padding
            : "left-0 right-14 sm:right-16 pr-10 pl-2 sm:pr-12" // slightly increased RR padding
        }
        bg-gradient-to-r ${gradient}
      `}
    >
      <p className="text-xs sm:text-2xl md:text-3xl font-semibold text-black text-center">
        {text}
      </p>
    </div>
  );
}
