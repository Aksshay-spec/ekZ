// components/careers/career-search/CareerSearchSection.tsx
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";

import type { FC } from "react";
import type { UseFormReturn } from "react-hook-form";

type CareerSearchFormValues = {
  query: string;
};

type CareerSearchBarProps = {
  form: UseFormReturn<CareerSearchFormValues>;
  totalJobs: number;
};

export const CareerSearchBar: FC<CareerSearchBarProps> = ({
  form,
  totalJobs,
}) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/career.jpg')",
        }}
      />

      {/* Black Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/50
          to-black/10
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-20 pb-16 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Work With Purpose.
        </h1>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Grow With <span className="text-redish-pink-500">Ekjahan</span>.
        </h2>

        {/* Search */}
        <div className="mt-10 flex justify-center">
          <Form {...form}>
            <form className="relative w-full max-w-2xl">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Search job roles, departments..."
                          className="
                            h-14 rounded-full border-2 border-black
                            bg-background
                            px-6 pr-14 text-base
                            focus-visible:ring-2
                            focus-visible:ring-redish-pink-400
                          "
                        />

                        {/* Search Icon */}
                        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black">
                          <Search className="h-5 w-5" />
                        </span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        {/* Job count */}
        <p className="mt-6 text-sm font-medium text-redish-pink-500">
          {totalJobs} job opportunity is available
        </p>
      </div>
    </section>
  );
};
