"use client";

import {
  Badge,
  Boxes,
  Cpu,
  FireExtinguisher,
  Lightbulb,
  Plug,
  ShieldCheck,
  Zap,
} from "lucide-react";
import CircleIcon from "@/components/common/CircleIcon";
import HorizontalCard from "@/components/common/cards/HorizontalCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function SaptaarSection() {
  return (
    <div className="text-center">
      {/* IMPORTED HEADER — VALUES PASSED HERE */}
      <SectionHeader
        title="Saptaar Electric"
        subtitle="Powering Every Connection"
      />

      {/* Background Image */}
      <img
        src="/images/2.png"
        alt="About Background"
        className=" w-full h-full object-cover"
      />

      {/* STATS */}
      <div className="grid grid-cols-1 gap-10 mt-8">
        <HorizontalCard
          icon={<Boxes size={60} />}
          title="150+"
          description="Modular SKUs (Switches, Sockets, MCBs, Regulators)"
          iconBg="redish-pink"
          shade={400}
        />

        <HorizontalCard
          icon={<Lightbulb size={60} />}
          title="1,200+s"
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
