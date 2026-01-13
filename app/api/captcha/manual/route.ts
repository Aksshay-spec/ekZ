//app/api/captcha/manual/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { ManualCaptchaService } from "@/lib/captcha/manual-captcha.service";

export async function GET() {
  return NextResponse.json(ManualCaptchaService.generate());
}

export async function POST(req: NextRequest) {
  const { challengeId, answer } = await req.json();
  const success = ManualCaptchaService.verify(challengeId, answer);

  return NextResponse.json({ success });
}
