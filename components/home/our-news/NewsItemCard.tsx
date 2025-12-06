import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import type { NewsItem } from "@/app/api/our-news/types/ourNews.types";

type Props = {
  item: NewsItem;
};

export default function NewsItemCard({ item }: Props) {
  const [imgError, setImgError] = useState(false);

  const hasImage = item?.image && item.image.trim() !== "";
  const imageSrc = hasImage ? `/images/${item.image}` : "";

  return (
    <div className="px-6 flex justify-center">
      <div className="border-none shadow-lg rounded-3xl overflow-hidden w-[90%] sm:w-[80%]">
        <div className="bg-redish-pink-400 rounded-3xl px-6 py-4 text-center h-56 flex flex-col items-center justify-center">
          <div className="w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center overflow-hidden">
            {hasImage && !imgError ? (
              <Image
                src={imageSrc}
                width={90}
                height={90}
                alt={item.title}
                className="object-cover w-full h-full rounded-full"
                onError={() => setImgError(true)} // fallback when image missing
              />
            ) : (
              <FaUsers size={40} className="text-white" />
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-black px-4 text-center line-clamp-2">
            {item.title}
          </h3>

          <p className="text-white italic mt-1 text-sm sm:text-base line-clamp-1">
            — {item.publication}
          </p>
        </div>
      </div>
    </div>
  );
}
