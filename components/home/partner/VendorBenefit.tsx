import type React from "react";
import { BaseCard } from "@/components/common/cards";

export default function VendorBenefit({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <BaseCard
        variant="secondary"
        shade={300}
        size="small"
        className="w-24 h-24 flex items-center justify-center"
      >
        {icon}
      </BaseCard>

      <p className="text-sm font-semibold mt-2 leading-tight">{text}</p>
    </div>
  );
}
