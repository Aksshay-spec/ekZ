"use client";

import SectionHeader from "@/components/common/SectionHeader";
import CircleIcon from "@/components/ui/CircleIcon";
import { PackageCheck, Warehouse, Boxes, Undo2 } from "lucide-react";

export default function FmcgSection() {
  return (
    <div className="text-center">

      {/* IMPORTED HEADER */}
      <SectionHeader
        title="Ekjahan FMCG"
        subtitle="Powering Every Connection"
      />

      {/* STATS — ALWAYS 2 CIRCLES PER ROW */}
      <div className="grid grid-cols-2 gap-10 mt-8">

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="primary" size={140}>
            <PackageCheck size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">40+</h3>
          <p className="text-lg opacity-85 mt-1">
            Flours, Beverages, Staples, Snacks
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="primary" size={140}>
            <Warehouse size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">2.5M+</h3>
          <p className="text-lg opacity-85 mt-1">Packs Distributed</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <CircleIcon variant="primary" size={140}>
            <Boxes size={60} color="white" />
          </CircleIcon>
          <h3 className="text-4xl font-bold mt-4">5,000+</h3>
          <p className="text-lg opacity-85 mt-1">Retail Shelves Stocked</p>
        </div>

        <div className="flex flex-col items-center text-center">
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
