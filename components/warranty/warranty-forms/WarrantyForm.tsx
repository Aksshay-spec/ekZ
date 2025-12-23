//components/warranty/warranty-forms/WarrantyForm.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import ManualCaptcha from "./ManualCaptcha";

/* -------------------- */
/* ZOD SCHEMA */
/* -------------------- */
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

type WarrantyFormValues = z.infer<typeof schema>;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

/* -------------------- */
/* COMPONENT */
/* -------------------- */
export default function WarrantyForm() {
  const [manualCaptcha, setManualCaptcha] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const recaptchaRef = useRef<any>(null);
  const captchaContainerRef = useRef<HTMLDivElement>(null);

  const form = useForm<WarrantyFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      terms: false,
    },
  });

  // Check if reCAPTCHA v2 is loaded
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50;

    const checkRecaptcha = () => {
      if (attempts >= maxAttempts) {
        console.warn("⚠️ reCAPTCHA failed to load after 5 seconds");
        setCaptchaReady(false);
        return;
      }

      if (window.grecaptcha && window.grecaptcha.render) {
        console.log("✅ reCAPTCHA v2 is ready");
        setCaptchaReady(true);
      } else {
        attempts++;
        setTimeout(checkRecaptcha, 100);
      }
    };

    setTimeout(checkRecaptcha, 500);
  }, []);

  // Render reCAPTCHA when form is validated and ready to show
  useEffect(() => {
    if (showCaptcha && captchaReady && captchaContainerRef.current && !recaptchaRef.current) {
      try {
        recaptchaRef.current = window.grecaptcha.render(captchaContainerRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          theme: 'light',
          size: 'normal',
        });
        console.log("✅ reCAPTCHA widget rendered");
      } catch (error) {
        console.error("❌ Failed to render reCAPTCHA:", error);
      }
    }
  }, [showCaptcha, captchaReady]);

  async function onSubmit(values: WarrantyFormValues) {
    // First validate the form
    const isValid = await form.trigger();
    if (!isValid) {
      return;
    }

    // Check if reCAPTCHA is available
    if (!captchaReady || !window.grecaptcha) {
      console.warn("⚠️ reCAPTCHA not available, showing manual captcha");
      const captcha = await fetch("/api/captcha/manual").then((r) => r.json());
      setManualCaptcha(captcha);
      return;
    }

    // Show the reCAPTCHA widget
    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }

    // Get the reCAPTCHA response
    const token = window.grecaptcha.getResponse(recaptchaRef.current);

    if (!token) {
      alert("⚠️ Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("🔐 Verifying reCAPTCHA token...");

      // Verify the token on the server
      const res = await fetch("/api/captcha/recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const result = await res.json();

      if (!result.success) {
        console.warn("⚠️ reCAPTCHA verification failed");
        alert("❌ reCAPTCHA verification failed. Please try again.");
        
        // Reset reCAPTCHA
        if (recaptchaRef.current !== null) {
          window.grecaptcha.reset(recaptchaRef.current);
        }
        setIsSubmitting(false);
        return;
      }

      console.log("✅ reCAPTCHA verified successfully");

      // Submit the form
      await submitForm(values);
    } catch (error) {
      console.error("❌ Form submission error:", error);
      alert("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  }

  async function submitForm(values: WarrantyFormValues) {
    try {
      console.log("📤 Submitting form data:", values);

      const response = await fetch("/api/warranty/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("❌ Server error:", errorData);
        throw new Error(errorData.error || "Failed to submit warranty request");
      }

      const result = await response.json();

      if (result.success) {
        alert("✅ Warranty request submitted successfully! You will receive a confirmation email shortly.");
        form.reset();
        setShowCaptcha(false);
        setManualCaptcha(null);
        
        // Reset reCAPTCHA
        if (recaptchaRef.current !== null) {
          window.grecaptcha.reset(recaptchaRef.current);
        }
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert(
        `❌ Failed to submit warranty request: ${
          error instanceof Error ? error.message : "Unknown error"
        }. Please try again.`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleBack = () => {
    setShowCaptcha(false);
    if (recaptchaRef.current !== null) {
      window.grecaptcha.reset(recaptchaRef.current);
    }
  };

  return manualCaptcha ? (
    <div className="max-w-md mx-auto">
      <ManualCaptcha
        challenge={manualCaptcha}
        onSuccess={async () => {
          setManualCaptcha(null);
          await submitForm(form.getValues());
        }}
      />
    </div>
  ) : (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} disabled={showCaptcha} />
                </FormControl>
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone" {...field} disabled={showCaptcha} />
                </FormControl>
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} disabled={showCaptcha} />
                </FormControl>
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            name="terms"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    disabled={showCaptcha}
                  />
                  <span className="text-sm">
                    I accept Terms & Warranty Policy
                  </span>
                </div>
                {form.formState.errors.terms && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.terms.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* reCAPTCHA v2 Widget */}
          {showCaptcha && (
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-gray-50">
                <p className="text-sm text-gray-600 mb-3">
                  Please complete the security verification:
                </p>
                <div ref={captchaContainerRef} className="flex justify-center"></div>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            {showCaptcha && (
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                disabled={isSubmitting}
                className="flex-1"
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting || (showCaptcha && !captchaReady)}
              className="bg-redish-pink-500 text-white hover:bg-redish-pink-600 flex-1"
            >
              {isSubmitting
                ? "Submitting..."
                : showCaptcha
                ? "Submit Warranty"
                : "Continue"}
            </Button>
          </div>

          {!captchaReady && (
            <p className="text-xs text-gray-500 text-center mt-2">
              🔒 Loading security verification...
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}