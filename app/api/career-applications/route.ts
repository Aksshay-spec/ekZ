//app/api/career-applications/route.ts
import { NextResponse } from "next/server";
import { CareerApplicationService } from "./services/careerApplication.service";
import { CareerApplicationRepositoryFactory } from "./repositories/factory/CareerApplicationRepositoryFactory";
import { CareerApplicationMailService } from "@/lib/mail/career-application-mail.service";
import fs from "fs/promises";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const resume = formData.get("resume") as File | null;

    let resumeUrl = "";

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      const fileName = `${Date.now()}-${resume.name}`;
      const uploadDir = "public/uploads/resumes";

      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(`${uploadDir}/${fileName}`, buffer);

      resumeUrl = `/uploads/resumes/${fileName}`;
    }

    // ✅ recreate body (like req.json())
    const body = {
      jobSlug: formData.get("jobSlug"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      experience: formData.get("experience"),
      coverLetter: formData.get("coverLetter"),
      resumeUrl,
    };

    const repo = CareerApplicationRepositoryFactory.getInstance();
    const service = new CareerApplicationService(repo);

    await service.apply({
      ...(body as any),
      createdAt: new Date().toISOString(),
    });

    await CareerApplicationMailService.send({
      fullName: body.fullName as string,
      email: body.email as string,
      phone: body.phone as string,
      jobSlug: body.jobSlug as string,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
