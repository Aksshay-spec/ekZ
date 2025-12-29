// components/careers/career-search/CareerSearchClient.tsx
"use client";

import { useForm } from "react-hook-form";
import { CareerSearchBar } from "./CareerSearchBar";

type CareerSearchFormValues = {
  query: string;
};

export default function CareerSearchSection() {
  const form = useForm<CareerSearchFormValues>({
    defaultValues: {
      query: "",
    },
  });

  return <CareerSearchBar form={form} totalJobs={88} />;
}
