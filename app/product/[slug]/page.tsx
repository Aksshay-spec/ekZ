//app/product/[slug]/page.tsx
export default async function ProductDetailPage({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.slug}`,
    { cache: "force-cache" }
  );

  if (!res.ok) throw new Error("Product not found");

  const product = await res.json();

  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold">{product.title}</h1>

      <img
        src={product.images[0]}
        className="max-w-md my-6"
      />

      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(product.specifications, null, 2)}
      </pre>
    </section>
  );
}
