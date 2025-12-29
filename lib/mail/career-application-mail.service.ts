//lib/mail/career-application-mail.service.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export class CareerApplicationMailService {
  static async send(data: {
    fullName: string;
    email: string;
    phone?: string;
    jobSlug: string;
  }) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    return resend.emails.send({
      from: "Careers <onboarding@resend.dev>",
      to: ["umidphp.akshay@gmail.com"],
      subject: `New Job Application – ${data.jobSlug}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone ?? "-"}</p>
        <p><strong>Job:</strong> ${data.jobSlug}</p>
      `,
    });
  }
}
