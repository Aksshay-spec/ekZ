//components/partners/partner-process/PartnerProcess.tsx

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, PhoneCall } from "lucide-react";

export default function PartnerProcess() {
  return (
    <div className="flex h-full flex-col">
      {/* <h2 className="mb-8 text-3xl font-bold text-slate-900">
        How the Partner Process Works
      </h2> */}

      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="flex flex-col border border-aqua-green-200">
          <CardContent className="flex flex-1 flex-col gap-4 p-8 items-center text-center md:text-left md:items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-redish-pink-100 text-redish-pink-600">
              <FileText size={22} />
            </div>
            <h3 className="text-lg font-semibold">Fill the form</h3>
            <p className="text-sm text-slate-600">
              Submit your partner or distributor application by filling out the
              required details accurately.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col border border-aqua-green-200">
          <CardContent className="flex flex-1 flex-col gap-4 p-8 items-center text-center md:text-left md:items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-redish-pink-100 text-redish-pink-600">
              <Search size={22} />
            </div>
            <h3 className="text-lg font-semibold">
              We will review the detail
            </h3>
            <p className="text-sm text-slate-600">
              Our team carefully reviews your submitted information to ensure it
              aligns with our partnership criteria.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col border border-aqua-green-200">
          <CardContent className="flex flex-1 flex-col gap-4 p-8 items-center text-center md:text-left md:items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-redish-pink-100 text-redish-pink-600">
              <PhoneCall size={22} />
            </div>
            <h3 className="text-lg font-semibold">We will contact you</h3>
            <p className="text-sm text-slate-600">
              Once the review is complete, our team will contact you to discuss
              next steps.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
