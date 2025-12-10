"use client";

import PartnerHeader from "./PartnerHeader";
import VendorSection from "./VendorSection";
import DistributorSection from "./DistributorSection";
import SectionHeader from "@/components/common/SectionHeader";

export default function PartnerSection() {
  return (
    <section className="w-full py-10">
      {/* Center Heading for Both Sections */}
      {/* <PartnerHeader /> */}
      <SectionHeader
        title="Partner With Us"
        subtitle="Vendors & Distributors"
        subtitleClassName="font-playfair"
      />

      {/* Desktop: two columns; Mobile: stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-16">
        {/* LEFT: Vendor */}
        <VendorSection />

        {/* RIGHT: Distributor */}
        <DistributorSection />
      </div>
    </section>
  );
}
