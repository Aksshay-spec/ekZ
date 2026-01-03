//app/product/[slug]/page.tsx
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product-detail/ProductGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ IMPORTANT FIX: unwrap params
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT - IMAGE GALLERY (STICKY) */}
        <div className="lg:sticky lg:top-24 h-fit">
          <ProductGallery images={product.images} />
        </div>

        {/* RIGHT - PRODUCT DETAILS */}
        <ProductInfo product={product} />
      </div>
    </section>
  );
}
