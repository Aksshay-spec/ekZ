//app/partner/page.tsx
import PartnerCardsDetail from "@/components/partners/partner-detail-cards/PartnerCardsDetail";
import PartnerImage from "@/components/partners/partner-image/PartnerImage";
import PartnerProcessSection from "@/components/partners/partner-process/PartnerProcessSection";
import PartnerAccordionSection from "@/components/partners/partners-accordion/PartnerAccordionSection";

export default function PartnerPage() {
  return (
    <>
      <PartnerImage />
      <PartnerCardsDetail />
      <PartnerAccordionSection />
      <PartnerProcessSection />
    </>
  );
}
