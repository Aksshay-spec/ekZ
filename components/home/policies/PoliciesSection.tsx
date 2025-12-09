import React from "react";
import PolicyCard from "./PolicyCard";
import { ShieldCheck, BadgeCheck, Lock, Scale } from "lucide-react";
import PoliciesHeader from "./PoliciesHeader";

export default function PoliciesCardContainer() {
  return (
    <section className="w-full py-12 px-4 text-center">

      {/* Reusable Header */}
      <PoliciesHeader />

      {/* PERFECT GRID FOR ALL DEVICES */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <PolicyCard
          href="/policies/warranty-electrical"
          title="Warranty terms for electrical products"
          icon={<ShieldCheck size={60} color="var(--color-redish-pink-700)" />}
          circleVariant="secondary"
        />

        <PolicyCard
          href="/policies/quality-fmcg"
          title="Quality assurance for FMCG"
          icon={<BadgeCheck size={60} color="var(--color-redish-pink-700)" />}
          circleVariant="primary"
        />

        <PolicyCard
          href="/policies/privacy"
          title="Privacy & data protection summary"
          icon={<Lock size={60} color="var(--color-redish-pink-700)" />}
          circleVariant="primary"
        />

        <PolicyCard
          href="/policies/vendor-code"
          title="Vendor code of conduct"
          icon={<Scale size={60} color="var(--color-redish-pink-700)" />}
          circleVariant="secondary"
        />
      </div>
    </section>
  );
}
