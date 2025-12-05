"use client";

import React from "react";
import { BaseCard } from "@/components/ui/cards";
import { Store, RefreshCcw, BarChart3, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* Heading */}
      <h2 className="text-3xl font-bold mt-6" style={{ color: "#1A2A40" }}>
        Distributor Benefits
      </h2>

      {/* BENEFIT ROW 1 */}
      <div className="mt-10 flex flex-row items-center gap-4">
        <BaseCard
          variant="primary"     // pink background
          shade={100}
          size="small"
          className="w-24 h-24 flex items-center justify-center rounded-2xl shadow-md"
        >
          <RefreshCcw size={40} color="var(--color-redish-pink-700)" />
        </BaseCard>

        <p className="text-base font-semibold text-left">
          92% Reorder rate
        </p>
      </div>

      {/* BENEFIT ROW 2 */}
      <div className="mt-8 flex flex-row items-center gap-4">
        <BaseCard
          variant="primary"
          shade={100}
          size="small"
          className="w-24 h-24 flex items-center justify-center rounded-2xl shadow-md"
        >
          <BarChart3 size={40} color="var(--color-redish-pink-700)" />
        </BaseCard>

        <p className="text-base font-semibold text-left leading-tight">
          Digital dashboard & WhatsApp support
        </p>
      </div>

      {/* BENEFIT ROW 3 */}
      <div className="mt-8 flex flex-row items-center gap-4">
        <BaseCard
          variant="primary"
          shade={100}
          size="small"
          className="w-24 h-24 flex items-center justify-center rounded-2xl shadow-md"
        >
          <BadgeDollarSign size={40} color="var(--color-redish-pink-700)" />
        </BaseCard>

        <p className="text-base font-semibold text-left leading-tight">
          Tiered pricing & territory exclusivity
        </p>
      </div>

      {/* CTA BUTTON */}
      <Button
        className="w-full rounded-full py-4 mt-10 font-semibold text-lg"
        style={{
          backgroundColor: "var(--color-aqua-green-300)",
          color: "#000",
        }}
      >
        Join Us As Distributor
      </Button>
    </section>
  );
}
