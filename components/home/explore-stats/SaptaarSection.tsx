//components/home/explore-stats/SaptaarSection.tsx
"use client";

import {
  Badge,
  Boxes,
  FireExtinguisher,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import HorizontalCard from "@/components/common/cards/HorizontalCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function SaptaarSection() {
  return (
    <div className="text-center flex flex-col">
      <SectionHeader
        title="Saptaar Electric"
        subtitle="Powering Every Connection"
      />

      {/* IMAGE CONTAINER — SAME HEIGHT */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl">
        <Image
          src="/images/2.png"
          alt="Saptaar Electric Products"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-10 mt-10">
        <HorizontalCard
          icon={<Boxes size={60} />}
          title="150+"
          description="Modular SKUs (Switches, Sockets, MCBs, Regulators)"
          iconBg="redish-pink"
          shade={400}
        />

        <HorizontalCard
          icon={<Lightbulb size={60} />}
          title="1,200+"
          description="Used in 1,200+ housing projects"
          iconBg="aqua-green"
          shade={400}
        />

        <HorizontalCard
          icon={<Badge size={60} />}
          title="12-Year"
          description="Warranty Coverage"
          iconBg="redish-pink"
          shade={400}
        />

        <HorizontalCard
          icon={<FireExtinguisher size={60} />}
          title="Smart+"
          description="Fire-Safety & Smart Home Compatible"
          iconBg="aqua-green"
          shade={400}
        />
      </div>
    </div>
  );
}

