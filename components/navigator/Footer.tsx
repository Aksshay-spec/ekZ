"use client";

import { usePathname } from "next/navigation";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import { FOOTER_LINKS } from "@/constants/links";
import EkjahanLink from "./EkjahanLink";
import FooterMenuDrawer from "./FooterMenuDrawer";

function Footer() {
  const pathname = usePathname();

  // Footer menu items → Converted into an array
  const menuItems = [
    {
      label: "Home",
      path: FOOTER_LINKS.HOME,
      icon: <FaHome />,
    },
    {
      label: "Warranty",
      path: FOOTER_LINKS.WARRANTY,
      icon: <RiShieldCheckFill />,
    },
    {
      label: "Career",
      path: FOOTER_LINKS.CAREER,
      icon: <FaBriefcase />,
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/60 backdrop-blur-md shadow-t-md border-t border-gray-200 z-50">
      <div className="flex justify-between items-center px-6 h-14 w-full md:w-3xl md:mx-auto">
        {/* Loop through items instead of repeating manually */}
        {menuItems.map((item) => (
          <EkjahanLink
            key={item.path}
            label={item.label}
            href={item.path}
            icon={item.icon}
            active={pathname === item.path}
          />
        ))}

        {/* Drawer menu component */}
        <FooterMenuDrawer />
      </div>
    </footer>
  );
}

export default Footer;
