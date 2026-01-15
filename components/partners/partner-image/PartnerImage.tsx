//components/partners/partner-image/PartnerImage.tsx

import Image from "next/image";

export default function PartnerImage() {
  return (
    <>
      {/* 🔹 Banner Image */}
      <div className="mb-8 w-full overflow-hidden">
        <Image
          src="/images/tc.jpg"
          alt="Terms and Conditions"
          width={1200}
          height={600}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </>
  );
}
