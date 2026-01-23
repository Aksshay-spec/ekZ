// components/products/product-detail/ProductGallery.tsx
"use client";

import Image from "next/image";
import { useRef } from "react";
import { cloudinaryUrl } from "@/lib/cloudinary";

type Props = {
  images: string[];
  activeImage: string;
  setActiveImage: (img: string) => void;
  onHover: (pos: { x: number; y: number } | null) => void;
};

export default function ProductGallery({
  images,
  activeImage,
  setActiveImage,
  onHover,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    onHover({ x, y });
  };

  const activeSrc = cloudinaryUrl(activeImage);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img) => {
          const src = cloudinaryUrl(img);

          return (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              className={`border rounded p-1 ${
                activeSrc === src ? "border-blue-500" : "border-gray-200"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={60}
                height={60}
                className="object-contain"
              />
            </button>
          );
        })}
      </div>

      {/* Main Image */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => onHover(null)}
        className="relative w-[450px] h-[450px] border rounded overflow-hidden cursor-crosshair"
      >
        <Image
          src={activeSrc}
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
