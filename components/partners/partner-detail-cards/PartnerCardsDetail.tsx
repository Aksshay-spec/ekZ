//components/partners/partner-detail-cards/PartnerCardsDetail.tsx

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaHandshake, FaTruckMoving } from "react-icons/fa";
import SectionHeader from "@/components/common/SectionHeader";

export default function PartnerCardsDetail() {
  return (
    <section className="w-full min-h-screen bg-redish-pink-50 py-16">
      <SectionHeader
        title="Let’s Build Together"
        subtitle="Collaborate, grow, and succeed"
      />
      <div className=" flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partner Card */}
            <Card className="overflow-hidden border-redish-pink-200 bg-white shadow-md py-0">
              <CardHeader className="p-0">
                <div className="h-56 w-full bg-redish-pink-100 flex items-center justify-center">
                  {/* <FaHandshake className="text-redish-pink-600 text-6xl" /> */}

                  <div className="relative w-full h-full">
                    <Image
                      src="/images/partners.jpg"
                      alt="Partner"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-redish-pink-700">
                  Become Our Partner
                </h2>

                <p className="text-redish-pink-900 leading-relaxed">
                  Join hands with Ekjahan as a trusted partner and expand your
                  business reach. As a partner, you get access to our platform,
                  operational support, and long-term growth opportunities built
                  on trust and transparency.
                </p>
              </CardContent>
            </Card>

            {/* Distributor Card */}
            <Card className="overflow-hidden border-aqua-green-200 bg-white shadow-md py-0">
              <CardHeader className="p-0">
                <div className="h-56 w-full bg-aqua-green-100 flex items-center justify-center">
                  {/* <FaTruckMoving className="text-aqua-green-600 text-6xl" /> */}

                  <div className="relative w-full h-full">
                    <Image
                      src="/images/distributor.jpg"
                      alt="Distributor"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-aqua-green-700">
                  Become Our Distributor
                </h2>

                <p className="text-aqua-green-900 leading-relaxed">
                  Work as an authorized distributor with Ekjahan and manage
                  product distribution in your region. We empower distributors
                  with reliable supply chains, competitive margins, and
                  technology-driven operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
