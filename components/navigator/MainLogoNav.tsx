import Image from "next/image";
import { NAV_LINKS, IMAGE_PATHS } from "@/constants/links";
import EkjahanLink from "./EkjahanLink";

export default function MainLogoNav() {
  return (
    <nav className="sticky top-0 w-full bg-white/60 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="flex justify-between items-center px-4 h-18 w-full md:w-3xl md:mx-auto">
        <EkjahanLink
          href={NAV_LINKS.HOME}
          className="w-32 md:w-48 mt-0" 
          icon={
            <Image
              src={IMAGE_PATHS.LOGO}
              alt="Ekjahan Enterprises"
              width={200}
              height={50}
              className="h-16 w-auto object-contain transition-all hover:scale-105"
            />
          }
        />

        <EkjahanLink
          label="Partners"
          href={NAV_LINKS.PARTNER}
          icon={
            <Image
              src={IMAGE_PATHS.PARTNER}
              alt="Partnership"
              width={24}
              height={24}
              className="h-6 w-auto object-contain transition-all hover:scale-105 mt-2"
            />
          }
        />
      </div>
    </nav>
  );
}
