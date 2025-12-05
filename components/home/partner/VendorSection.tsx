"use client";

import React from "react";
import { BaseCard } from "@/components/ui/cards";
import { Handshake, Beaker, ShieldCheck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VendorSection() {
  return (
    <section className="w-full py-6 px-4 text-center">

      {/* Big Pink Circle */}
      <div
        className="mx-auto flex items-center justify-center rounded-full"
        style={{
          width: 160,
          height: 160,
          backgroundColor: "var(--color-redish-pink-200)",
        }}
      >
        <Store size={70} color="var(--color-redish-pink-700)" />
      </div>

      <h3 className="text-2xl font-bold mt-4">Vendor Benefits</h3>

      {/* Row of 3 Cards */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* card 1 */}
        <div className="flex flex-col items-center">
          <BaseCard
            variant="secondary"
            shade={100}
            size="small"
            className="w-24 h-24 rounded-2xl shadow-md flex items-center justify-center"
          >
            <Handshake size={40} color="var(--color-aqua-green-700)" />
          </BaseCard>
          <p className="text-xs font-semibold mt-2 leading-tight text-center">
            87% Vendor Retention
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center">
          <BaseCard
            variant="secondary"
            shade={100}
            size="small"
            className="w-24 h-24 rounded-2xl shadow-md flex items-center justify-center"
          >
            <Beaker size={40} color="var(--color-aqua-green-700)" />
          </BaseCard>
          <p className="text-xs font-semibold mt-2 leading-tight text-center">
            Co-development & R&D Support
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col items-center">
          <BaseCard
            variant="secondary"
            shade={100}
            size="small"
            className="w-24 h-24 rounded-2xl shadow-md flex items-center justify-center"
          >
            <ShieldCheck size={40} color="var(--color-aqua-green-700)" />
          </BaseCard>
          <p className="text-xs font-semibold mt-2 leading-tight text-center">
            Zero Product Recall Record
          </p>
        </div>
      </div>

      <Button className="bg-redish-pink-500 text-white rounded-full px-8 py-3 mt-10">
        Join Us As Vendor
      </Button>
    </section>
  );
}
