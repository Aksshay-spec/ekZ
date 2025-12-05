import { TestimonialRepositoryFactory } from "@/app/api/testimonials/repositories/factory/TestimonialRepositoryFactory";
import { TestimonialService } from "@/app/api/testimonials/services/testimonial.service";
import Testimonial from "./Testimonial";

export default async function TestimonialWrapper() {
  const repo = TestimonialRepositoryFactory.getInstance();
  const service = new TestimonialService(repo);

  const testimonials = await service.getTestimonials();

  return <Testimonial testimonials={testimonials} />;
}
