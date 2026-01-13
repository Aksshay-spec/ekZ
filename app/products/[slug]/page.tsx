//app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import ProductDetailSection from "@/components/products/product-detail/ProductDetailSection";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <section className="container mx-auto px-4 py-6">
      <ProductDetailSection product={product} />
    </section>
  );
}
