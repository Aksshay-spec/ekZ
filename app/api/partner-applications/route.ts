//app/api/partner-applications/route.ts
import { NextResponse } from "next/server";
import { PartnerApplicationMailService } from "@/lib/mail/partner-application-mail.service";
import { PartnerApplicationRepositoryFactory } from "./repositories/factory/PartnerApplicationRepositoryFactory";
import { PartnerApplicationService } from "./services/partnerApplication.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const repo = PartnerApplicationRepositoryFactory.getInstance();
    const service = new PartnerApplicationService(repo);

    await service.apply({
      ...body,
      createdAt: new Date().toISOString(),
    });

    await PartnerApplicationMailService.send({
      name: body.name,
      email: body.email,
      phone: body.phone,
      partnerType: body.partnerType,
      remarks: body.remarks,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner apply error:", error);
    return NextResponse.json(
      { error: "Failed to submit partner application" },
      { status: 500 },
    );
  }
}
