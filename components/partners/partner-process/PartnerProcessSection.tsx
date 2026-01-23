//components/partners/partner-process/PartnerProcessSection.tsx

import PartnerProcess from "./PartnerProcess";
import PartnerApplyForm from "./PartnerApplyForm";
import SectionHeader from "@/components/common/SectionHeader";

export default function PartnerProcessSection() {
  return (
    <section className="mx-auto  px-6 pt-10 pb-20">
      <SectionHeader
        title="Grow Your Business With Us"
        subtitle="Our Partner Onboarding Process"
      />
      <div className="grid  grid-cols-1 gap-16 lg:grid-cols-2">
        <PartnerProcess />

        <div className="h-full rounded-2xl border border-aqua-green-200 bg-white p-10">
          <PartnerApplyForm />
        </div>
      </div>
    </section>
  );
}
