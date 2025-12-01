import Link from "next/link";
import React from "react";

export type SocialIconProps = {
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

export default function SocialIcon({href, icon, external = false}: SocialIconProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-redish-pink-500 text-xs md:text-lg hover:scale-110 transition-transform"
    >
      {icon}
    </Link>
  );
}
