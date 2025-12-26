//components/careers/career-apply/CareerApplyForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      coverLetter: "",
      resume: null, // 👈 important
    },
  });

  //   async function onSubmit(values: FormValues) {
  //     const resumeFile = values.resume[0];

  //     // Later: upload resume to S3/Firebase
  //     const resumeUrl = resumeFile.name;

  //     await fetch("/api/career-applications", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         jobSlug,
  //         ...values,
  //         resumeUrl,
  //       }),
  //     });
  //   }

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormValues) {
    console.log("FORM SUBMITTED", values);

    const resumeFile = values.resume?.[0];
    if (!resumeFile) {
      console.error("No resume selected");
      return;
    }

    const res = await fetch("/api/career-applications", {
      method: "POST",
      body: JSON.stringify({
        jobSlug,
        ...values,
        resumeUrl: resumeFile.name,
      }),
    });
    if (!res.ok) {
      console.error("Submission failed");
      return;
    }

    // ✅ RESET FORM WHEN SUBMIT
    form.reset();
  }

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
              <FormMessage />
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

        <FormField
          name="resume"
          control={form.control}
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Upload Resume</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => onChange(e.target.files)}
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
                <Textarea rows={6} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-redish-pink-500 text-white rounded-full px-10 cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
