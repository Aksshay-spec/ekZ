// components/home/testimonial/TestimonialSection.tsx

import { TestimonialRepositoryFactory } from "@/app/api/testimonials/repositories/factory/TestimonialRepositoryFactory";
import { TestimonialService } from "@/app/api/testimonials/services/testimonial.service";
import SectionHeader from "@/components/common/SectionHeader";
import TestimonialCarousel from "./TestimonialCarousel";

export default async function TestimonialSection() {
  const repo = TestimonialRepositoryFactory.getInstance();
  const service = new TestimonialService(repo);

  const testimonials = await service.getTestimonials();

  return (
    <section className="bg-white pt-8 pb-20 overflow-hidden text-center">
      {/* <h3 className="font-bold font-playfair text-3xl font-bold text-black mb-1">
        Every Input Matters
      </h3>

      <p
        className="font-bold font-playfair text-lg font-semibold text-black mb-6 rounded relative 
          after:content-[''] after:block after:w-[40%] after:h-[8px] 
          after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto"
      >
        Vendors & Distributors
      </p> */}
      <SectionHeader
        title="Every Input Matters"
        subtitle="Vendors & Distributors"
        subtitleClassName="font-playfair"
      />

      <TestimonialCarousel testimonials={testimonials} />
    </section>
  );
}
