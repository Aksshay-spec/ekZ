//components/products/product-detail/ProductGallery.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [bgPos, setBgPos] = useState("50% 50%");
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setBgPos(`${x}% ${y}%`);
  };

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className={`border rounded p-1 ${
              activeImage === img ? "border-blue-500" : ""
            }`}
          >
            <Image src={img} alt="" width={60} height={60} />
          </button>
        ))}
      </div>

      {/* Main Image / Magnifier */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setBgPos("50% 50%");
        }}
        className="relative w-[450px] h-[450px] border rounded overflow-hidden cursor-zoom-in"
        style={{
          backgroundImage: isHovering ? `url(${activeImage})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200%",
          backgroundPosition: bgPos,
        }}
      >
        {/* Show normal image ONLY when not hovering */}
        {!isHovering && (
          <Image
            src={activeImage}
            alt=""
            fill
            className="object-contain"
            priority
          />
        )}
      </div>
    </div>
  );
}
