"use client";

type PoliciesHeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function PoliciesHeader({
  title = "Our Legal Policies",
  subtitle = "Your Rights, Our Responsibility",
}: PoliciesHeaderProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold font-playfair">{title}</h2>

      <p className="text-lg font-bold font-playfair text-black mt-1 inline-block mx-auto">
        {subtitle}
        <span className="block w-16 h-[4px] bg-yellow-400 rounded-full mt-1 mx-auto"></span>
      </p>
    </div>
  );
}
