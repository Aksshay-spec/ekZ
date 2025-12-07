"use client";

import React from "react";
import VendorBenefit from "./VendorBenefit";
import { Handshake, Beaker, ShieldCheck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VendorSection() {
  return (
    <section className="w-full py-12 px-4 text-center">

      <div
        className="mx-auto flex items-center justify-center rounded-full"
        style={{
          width: 180,
          height: 180,
          backgroundColor: "var(--color-redish-pink-100)",
        }}
      >
        <Store size={70} color="var(--color-redish-pink-700)" />
      </div>

      <h2 className="text-3xl font-bold mt-6 text-[#1A2A40]">
        Vendor Benefits
      </h2>

      <div className="mt-10 grid grid-cols-3 gap-6">
        <VendorBenefit
          icon={<Handshake size={40} color="var(--color-aqua-green-700)" />}
          text="87% Vendor Retention"
        />
        <VendorBenefit
          icon={<Beaker size={40} color="var(--color-aqua-green-700)" />}
          text="Co-development & R&D Support"
        />
        <VendorBenefit
          icon={<ShieldCheck size={40} color="var(--color-aqua-green-700)" />}
          text="Zero Product Recall Record"
        />
      </div>

      <Button
        variant="default"
        className="w-full rounded-full py-4 mt-10 bg-[var(--color-redish-pink-300)] text-black hover:bg-[var(--color-redish-pink-400)]"
      >
        Join Us As Vendor
      </Button>
    </section>
  );
}
