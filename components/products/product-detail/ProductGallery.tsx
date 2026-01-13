// components/products/product-detail/ProductGallery.tsx
"use client";

import Image from "next/image";
import { useRef } from "react";

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

  // ✅ Normalize image path for Next/Image
  const getImageSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    onHover({ x, y });
  };

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img) => {
          const src = getImageSrc(img);

          return (
            <button
              key={img}
              onClick={() => setActiveImage(src)}
              className={`border rounded p-1 ${
                activeImage === src ? "border-blue-500" : ""
              }`}
            >
              <Image src={src} alt="" width={60} height={60} />
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
          src={getImageSrc(activeImage)}
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
