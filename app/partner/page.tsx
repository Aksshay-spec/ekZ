//app/partner/page.tsx
import PartnerApplyForm from "@/components/partners/partner-apply/PartnerApplyForm";
import PartnerImage from "@/components/partners/partner-image/PartnerImage";

export default function PartnerPage() {
  return (
    <>
      <PartnerImage />
      <PartnerApplyForm />
    </>
  );
}
