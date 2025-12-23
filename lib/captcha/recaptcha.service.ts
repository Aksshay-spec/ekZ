//lib/captcha/recaptcha.service.ts
export class RecaptchaService {
  static async verify(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!secret) {
      console.error("❌ Missing RECAPTCHA_SECRET_KEY");
      return { success: false, error: "Server configuration error" };
    }

    try {
      console.log("🔐 Verifying reCAPTCHA v2 token...");

      const res = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${secret}&response=${token}`,
        }
      );

      const data = await res.json();

      console.log("📋 reCAPTCHA response:", {
        success: data.success,
        challenge_ts: data.challenge_ts,
        hostname: data.hostname,
        errorCodes: data["error-codes"],
      });

      if (!data.success) {
        console.error("❌ reCAPTCHA verification failed:", data["error-codes"]);
        return {
          success: false,
          error: "reCAPTCHA verification failed",
          errorCodes: data["error-codes"],
        };
      }

      console.log("✅ reCAPTCHA verification successful");
      return { success: true };
    } catch (error) {
      console.error("❌ reCAPTCHA verification error:", error);
      return {
        success: false,
        error: "Failed to verify reCAPTCHA",
      };
    }
  }
}
