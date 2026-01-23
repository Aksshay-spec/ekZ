//components/home/explore-stats/FmcgSection.tsx
"use client";

import { Boxes, PackageCheck, Undo2, Warehouse } from "lucide-react";
import Image from "next/image";
import CircleIcon from "@/components/common/CircleIcon";
import SectionHeader from "@/components/common/SectionHeader";

export default function FmcgSection() {
  return (
    <div className="text-center flex flex-col">
      <SectionHeader
        title="Ekjahan FMCG"
        subtitle="Powering Every Connection"
      />

      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl">
        <Image
          src="/images/3.png"
          alt="Ekjahan FMCG Products"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-10 mt-10 md:mt-40">
        <div className="flex flex-col items-center">
          <CircleIcon variant="primary" size={140}>
            <PackageCheck size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">40+</h3>
          <p className="text-lg opacity-85 mt-1">
            Flours, Beverages, Staples, Snacks
          </p>
        </div>

        <div className="flex flex-col items-center">
          <CircleIcon variant="primary" size={140}>
            <Warehouse size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">2.5M+</h3>
          <p className="text-lg opacity-85 mt-1">Packs Distributed</p>
        </div>

        <div className="flex flex-col items-center">
          <CircleIcon variant="primary" size={140}>
            <Boxes size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">5,000+</h3>
          <p className="text-lg opacity-85 mt-1">Retail Shelves Stocked</p>
        </div>

        <div className="flex flex-col items-center">
          <CircleIcon variant="primary" size={140}>
            <Undo2 size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">ZERO</h3>
          <p className="text-lg opacity-85 mt-1">Product Recalls</p>
        </div>
      </div>
    </div>
  );
}
