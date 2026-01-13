import type React from "react";
import { BaseCard } from "@/components/common/cards";

export default function BenefitRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 w-full">
      <BaseCard
        variant="primary"
        shade={300}
        size="small"
        className="w-24 h-24 flex items-center justify-center"
      >
        {icon}
      </BaseCard>

      <p className="text-base font-semibold text-left leading-snug flex-1">
        {text}
      </p>
    </div>
  );
}
