"use client";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold font-playfair">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg sm:text-xl font-bold font-playfair text-black mt-1 inline-block mx-auto">
          {subtitle}

          {/* Small underline */}
          <span className="block w-16 h-[4px] bg-yellow-400 rounded-full mt-1 mx-auto"></span>
        </p>
      )}
    </div>
  );
}
