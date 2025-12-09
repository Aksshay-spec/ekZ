import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";

export default function TestimonialItem({ item }: { item: Testimonial }) {
  const safeName = item?.name || "Anonymous";
  const safeText = item?.text || "No testimonial provided.";
  const safeRating = Number(item?.rating) > 0 ? Number(item.rating) : 5;

  const safeImage = item?.image
    ? `/images/${item.image}`
    : "/images/default-user.png";

  const bgColor = item?.bg || "bg-[#A5F3FC]"; // Aqua-green similar to screenshot

  return (
    <Card className="border-none shadow-md rounded-3xl p-0">
      <CardContent
        className={`${bgColor} p-6 rounded-3xl w-56 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-96 h-70 md:h-auto mx-auto`}
      >
        {/* Profile Image */}
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
          <Image
            src={safeImage}
            alt={safeName}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        <p className="text-gray-800 text-base md:text-lg lg:text-xl mb-3 leading-relaxed">
          {safeText}
        </p>

        <p className="text-black font-semibold italic text-sm md:text-base lg:text-lg mb-3">
          — {safeName}
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center text-yellow-500">
          {Array.from({ length: safeRating }).map((_, i) => (
            <FaStar key={i} className="text-xl md:text-2xl lg:text-3xl" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
