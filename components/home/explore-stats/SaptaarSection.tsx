"use client";

import SectionHeader from "@/components/common/SectionHeader";
import CircleIcon from "@/components/ui/CircleIcon";
import { Plug, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function SaptaarSection() {
  return (
    <div className="text-center">

      {/* IMPORTED HEADER — VALUES PASSED HERE */}
      <SectionHeader
        title="Saptaar Electric"
        subtitle="Powering Every Connection"
      />

      {/* STATS */}
      <div className="grid grid-cols-1 gap-10 mt-8">

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="secondary" size={140}>
            <Plug size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">150+</h3>
          <p className="text-lg opacity-85 mt-1">Modular Switch & Socket SKUs</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="secondary" size={140}>
            <Zap size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">1.2M+</h3>
          <p className="text-lg opacity-85 mt-1">Electrical Units Delivered</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="secondary" size={140}>
            <ShieldCheck size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">12-Year</h3>
          <p className="text-lg opacity-85 mt-1">Warranty Coverage</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="secondary" size={140}>
            <Cpu size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">Smart+</h3>
          <p className="text-lg opacity-85 mt-1">Smart Home Compatible</p>
        </div>

      </div>
    </div>
  );
}
