//lib/api/categories.ts

export async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
    { cache: "force-cache" }, // categories rarely change
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
