"use client";

import { Beaker, Handshake, ShieldCheck, Store } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import VendorBenefit from "./VendorBenefit";

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
        variant="secondary"
        className="bg-redish-pink-500 text-white py-5 px-15 mt-10"
      >
        Join Us As Vendor
      </Button>
    </section>
  );
}
