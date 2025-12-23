// components/careers/career-search/CareerSearchClient.tsx
"use client";

import { useForm } from "react-hook-form";
import { CareerSearchSection } from "./CareerSearchSection";

type CareerSearchFormValues = {
  query: string;
};

export default function CareerSearchClient() {
  const form = useForm<CareerSearchFormValues>({
    defaultValues: {
      query: "",
    },
  });

  return <CareerSearchSection form={form} totalJobs={88} />;
}
