//app/api/captcha/recaptcha/route.ts
import { NextRequest, NextResponse } from "next/server";
import { RecaptchaService } from "@/lib/captcha/recaptcha.service";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing captcha token" },
        { status: 400 }
      );
    }

    const result = await RecaptchaService.verify(token);

    return NextResponse.json(result);
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);

    return NextResponse.json(
      { success: false, error: "Internal captcha error" },
      { status: 500 }
    );
  }
}
