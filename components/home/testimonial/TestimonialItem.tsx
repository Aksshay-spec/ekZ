"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/app/api/testimonials/types/testimonial.types";

export default function TestimonialItem({ item }: { item: Testimonial }) {
  const safeName = item?.name || "Anonymous";
  const safeText = item?.text || "No testimonial provided.";
  const safeRating = Number(item?.rating) > 0 ? item.rating : 5;
  const safeImage = item?.image
    ? `/images/${item.image}`
    : "/images/default-user.png";

  return (
    <Card className="border-none shadow-md rounded-2xl p-0">
      <CardContent
        className={`${
          item.bg || "bg-aqua-green-200"
        } p-6 rounded-2xl w-64 sm:w-72 md:w-80 mx-auto`}
      >
        {/* Image circle */}
        <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
          <Image
            src={safeImage}
            alt={safeName}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        <p className="text-gray-800 text-sm mb-3">{safeText}</p>
        <p className="text-black font-semibold italic mb-2">— {safeName}</p>

        <div className="flex justify-center text-yellow-500">
          {[...Array(safeRating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
