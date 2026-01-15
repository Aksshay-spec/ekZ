//lib/mail/partner-application-mail.service.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export class PartnerApplicationMailService {
  static async send(data: {
    name: string;
    email: string;
    phone: string;
    distributor: string;
    partnerType: string;
  }) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    return resend.emails.send({
      from: "Partners <onboarding@resend.dev>",
      to: ["umidphp.akshay@gmail.com"],
      subject: "New Partner Application",
      html: `
        <h2>New Partner Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Distributor:</strong> ${data.distributor}</p>
        <p><strong>Partner Type:</strong> ${data.partnerType}</p>
      `,
    });
  }
}
