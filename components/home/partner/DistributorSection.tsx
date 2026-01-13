"use client";

import { BadgeDollarSign, BarChart3, RefreshCcw, Store } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import BenefitRow from "./BenefitRow";

export default function DistributorSection() {
  return (
    <section className="w-full py-12 px-4 text-center">
      {/* Top Big Icon Circle */}
      <div
        className="mx-auto flex items-center justify-center rounded-full"
        style={{
          width: 180,
          height: 180,
          backgroundColor: "var(--color-aqua-green-100)",
        }}
      >
        <Store size={80} color="var(--color-redish-pink-700)" />
      </div>

      <h2 className="text-3xl font-bold mt-6 text-[#1A2A40]">
        Distributor Benefits
      </h2>

      <div className="mt-10 flex flex-col gap-8">
        <BenefitRow
          icon={<RefreshCcw size={40} color="var(--color-redish-pink-700)" />}
          text="92% Reorder rate"
        />
        <BenefitRow
          icon={<BarChart3 size={40} color="var(--color-redish-pink-700)" />}
          text="Digital dashboard & WhatsApp support"
        />
        <BenefitRow
          icon={
            <BadgeDollarSign size={40} color="var(--color-redish-pink-700)" />
          }
          text="Tiered pricing & territory exclusivity"
        />
      </div>

      <Button
        variant="secondary"
        className="bg-aqua-green-500 text-black py-5 px-15 mt-10"
      >
        Join Us As Distributor
      </Button>
    </section>
  );
}
