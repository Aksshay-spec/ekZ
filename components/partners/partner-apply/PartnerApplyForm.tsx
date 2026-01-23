//components/partners/partner-apply/PartnerApplyForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ManualCaptcha from "@/components/common/ManualCaptcha";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

/* -------------------- */
/* VALIDATION SCHEMA */
/* -------------------- */
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  address: z.string().min(10),
  distributor: z.string(),
  partnerType: z.string(),
});

type FormValues = z.infer<typeof schema>;

export default function PartnerApplyForm() {
  const [manualCaptcha, setManualCaptcha] = useState<any>(null);
  const [pendingData, setPendingData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      distributor: "",
      partnerType: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function runRecaptcha(): Promise<string | null> {
    if (!window.grecaptcha) return null;

    return new Promise((resolve) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            { action: "partner_apply" },
          );
          resolve(token || null);
        } catch {
          resolve(null);
        }
      });
    });
  }

  async function onSubmit(values: FormValues) {
    const token = await runRecaptcha();

    if (!token) return fallbackToManual(values);

    const res = await fetch("/api/captcha/recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const result = await res.json();

    if (!result.success) return fallbackToManual(values);

    await submitForm(values);
  }

  async function fallbackToManual(values: FormValues) {
    const captcha = await fetch("/api/captcha/manual").then((r) => r.json());
    setManualCaptcha(captcha);
    setPendingData(values);
  }

  async function submitForm(values: FormValues) {
    await fetch("/api/partner-applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    form.reset();
    setManualCaptcha(null);
    setPendingData(null);

    alert("Application submitted successfully.");
  }

  if (manualCaptcha) {
    return (
      <ManualCaptcha
        challenge={manualCaptcha}
        onSuccess={() => submitForm(pendingData!)}
      />
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">Partner With Us</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="distributor"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Distributor</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select distributor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full">
                    <SelectItem value="option-1">Option 1</SelectItem>
                    <SelectItem value="option-2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            name="partnerType"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Partner Type</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select partner type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full">
                    <SelectItem value="option-1">Option 1</SelectItem>
                    <SelectItem value="option-2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
