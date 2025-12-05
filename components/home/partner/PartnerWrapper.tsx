"use client";

import PartnerHeader from "./PartnerHeader";
import VendorSection from "./VendorSection";
import DistributorSection from "./DistributorSection";

export default function PartnerWrapper() {
  return (
    <section className="w-full py-10">

      {/* Center Heading for Both Sections */}
      <PartnerHeader />

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
