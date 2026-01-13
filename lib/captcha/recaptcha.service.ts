// lib/captcha/recaptcha.service.ts
export class RecaptchaService {
  static async verify(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY!;

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await res.json();

    return {
      success: data.success === true && data.score >= 0.5,
      score: data.score,
      action: data.action,
    };
  }
}
