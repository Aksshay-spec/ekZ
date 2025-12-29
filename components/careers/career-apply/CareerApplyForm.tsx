// components/careers/career-apply/CareerApplyForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ManualCaptcha from "@/components/common/ManualCaptcha";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

/* -------------------- */
/* VALIDATION SCHEMA */
/* -------------------- */
const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  experience: z.string(),
  coverLetter: z.string().min(20),
  resume: z.any(),
});

type FormValues = z.infer<typeof schema>;

export default function CareerApplyForm({ jobSlug }: { jobSlug: string }) {
  const [manualCaptcha, setManualCaptcha] = useState<any>(null);
  const [pendingData, setPendingData] = useState<FormValues | null>(null);

  // ✅ file state ONLY for resume reset & upload
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      coverLetter: "",
      resume: null,
    },
  });

  const { isSubmitting } = form.formState;

  /* -------------------- */
  /* SAFE CAPTCHA EXEC */
  /* -------------------- */
  async function runRecaptcha(): Promise<string | null> {
    if (!window.grecaptcha) return null;

    return new Promise((resolve) => {
      try {
        window.grecaptcha.ready(async () => {
          const timeout = setTimeout(() => resolve(null), 4000);

          try {
            const token = await window.grecaptcha.execute(
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
              { action: "career_apply" }
            );

            clearTimeout(timeout);
            resolve(token || null);
          } catch {
            clearTimeout(timeout);
            resolve(null);
          }
        });
      } catch {
        resolve(null);
      }
    });
  }

  /* -------------------- */
  /* SUBMIT */
  /* -------------------- */
  async function onSubmit(values: FormValues) {
    const token = await runRecaptcha();

    if (!token) {
      return fallbackToManual(values);
    }

    const res = await fetch("/api/captcha/recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const result = await res.json();

    if (!result.success) {
      return fallbackToManual(values);
    }

    await submitForm(values);
  }

  /* -------------------- */
  /* FALLBACK CAPTCHA */
  /* -------------------- */
  async function fallbackToManual(values: FormValues) {
    const captcha = await fetch("/api/captcha/manual").then((r) => r.json());
    setManualCaptcha(captcha);
    setPendingData(values);
  }

  /* -------------------- */
  /* FINAL SUBMIT (FormData) */
  /* -------------------- */
  async function submitForm(values: FormValues) {
    const formData = new FormData();

    formData.append("jobSlug", jobSlug);
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("location", values.location);
    formData.append("experience", values.experience);
    formData.append("coverLetter", values.coverLetter);

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    await fetch("/api/career-applications", {
      method: "POST",
      body: formData,
    });

    // ✅ reset everything properly
    form.reset();
    setResumeFile(null);
    setManualCaptcha(null);
    setPendingData(null);

    alert("Captcha verified and application submitted successfully.");
  }

  /* -------------------- */
  /* MANUAL CAPTCHA VIEW */
  /* -------------------- */
  if (manualCaptcha) {
    return (
      <ManualCaptcha
        challenge={manualCaptcha}
        onSuccess={() => submitForm(pendingData!)}
      />
    );
  }

  /* -------------------- */
  /* FORM UI */
  /* -------------------- */
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="fullName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* ✅ Resume Upload (reset-safe) */}
        <FormField
          name="resume"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  key={resumeFile ? resumeFile.name : "empty"} // forces reset
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setResumeFile(file);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="coverLetter"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          className="bg-redish-pink-500 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
