"use client";

import React from "react";
import Link from "next/link";
import BaseCard from "@/components/ui/cards/BaseCard";
import CircleIcon from "@/components/ui/CircleIcon";

export default function PolicyCard({
  href,
  title,
  icon,
  circleVariant = "secondary",
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  circleVariant?: "primary" | "secondary" | "custom";
}) {
  return (
    <Link href={href} className="block h-full">
      <BaseCard
        variant="custom"
        customColor="#f5f5f5"
        size="large"
        className="
          h-full 
          flex flex-col
          items-center 
          justify-start
          p-6
          rounded-2xl
        "
      >
        {/* Icon */}
        <CircleIcon variant={circleVariant} size={120} className="mb-4">
          {icon}
        </CircleIcon>

        {/* Title grows to balance spacing */}
        <h3 className="text-base font-semibold text-center text-gray-900 px-2 leading-tight flex-grow flex items-center justify-center">
          {title}
        </h3>
      </BaseCard>
    </Link>
  );
}
