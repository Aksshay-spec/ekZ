//app/api/warranty/submit/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { WarrantyMailService } from "@/lib/mail/warranty-mail.service";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    console.log("📧 Attempting to send warranty email...", data);

    // Validate data
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email
    await WarrantyMailService.send(data);

    console.log("✅ Email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error submitting warranty:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    );
  }
}
