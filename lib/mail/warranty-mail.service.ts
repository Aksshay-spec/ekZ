//lib/mail/warranty-mail.service.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export class WarrantyMailService {
  static async send(data: any) {
    try {
      // Check if API key exists
      if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not configured");
      }

      console.log("📧 Sending email via Resend...");

      const result = await resend.emails.send({
        from: "Warranty <onboarding@resend.dev>",
        to: ["umidphp.akshay@gmail.com"],
        subject: "New Warranty Extension Request",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
              New Warranty Request
            </h2>
            <div style="margin: 20px 0; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This email was sent from the warranty extension form.
            </p>
          </div>
        `,
      });

      console.log("✅ Resend response:", result);

      if (result.error) {
        throw new Error(`Resend API error: ${result.error.message}`);
      }

      return result;
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      throw error;
    }
  }
}
