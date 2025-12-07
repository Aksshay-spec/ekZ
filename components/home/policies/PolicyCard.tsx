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
    <Link href={href} className="block">
      <BaseCard
        variant="custom"
        customColor="#f5f5f5"
        size="large"
        className="aspect-square flex flex-col items-center justify-center p-4"
      >
        <CircleIcon variant={circleVariant} size={120} className="mb-4">
          {icon}
        </CircleIcon>

        <h3 className="text-base font-semibold text-center text-gray-900 px-2 leading-tight">
          {title}
        </h3>
      </BaseCard>
    </Link>
  );
}
