// app/api/captcha/recaptcha/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { RecaptchaService } from "@/lib/captcha/recaptcha.service";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const result = await RecaptchaService.verify(token);

  return NextResponse.json(result);
}
