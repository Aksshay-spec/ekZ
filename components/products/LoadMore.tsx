// components/products/LoadMore.tsx

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function LoadMore({ currentPage, totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (currentPage >= totalPages) return null;

  function handleLoadMore() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(currentPage + 1));
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-center">
      <Button variant="outline" onClick={handleLoadMore}>
        Load More
      </Button>
    </div>
  );
}
