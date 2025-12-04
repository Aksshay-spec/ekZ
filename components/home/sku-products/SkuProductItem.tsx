"use client";

import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  count: string;
  title: string;
  icon: JSX.Element | null;
};

export default function SkuProductItem({ count, title, icon }: Props) {
  return (
    <div className="bg-blue-100 text-black rounded-lg shadow p-4 w-[150px] sm:w-[180px] relative mr-2">
      <div className="flex items-center gap-2 justify-center mt-2">
        <span>{icon}</span>

        <h2 className="text-3xl font-bold">{count}</h2>
      </div>

      <p className="text-sm font-semibold mt-1">{title}</p>
    </div>
  );
}
