// lib/cloudinary.ts
export const cloudinaryUrl = (path?: string) => {
  if (!path) return "/images/products/placeholder.png";

  const base = process.env.NEXT_PUBLIC_CLOUDINARY_BASE!;
  const publicId = path.replace(/\.(png|jpg|jpeg|webp)$/i, "");

  return `${base}/${publicId}`;
};
