import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill, RiFacebookCircleLine  } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import TopSocialBar from "./TopSocialBar";
import MainLogoNav from "./MainLogoNav";
import {SOCIAL_LINKS} from "@/constants/links"

export default function Header() {
  // SOCIAL LINKS
  const socialLinks = [
    { 
      icon: <IoIosCall />, href: SOCIAL_LINKS.CALL, external: true 
    },
    { 
      icon: <FaXTwitter />, href: SOCIAL_LINKS.TWITTER, external: true 
    },
    { 
      icon: <FaInstagram />, href: SOCIAL_LINKS.INSTAGRAM, external: true 
    },
    { 
      icon: <RiFacebookCircleLine />, href: SOCIAL_LINKS.FACEBOOK, external: true 
    },
    { 
      icon: <FiYoutube />, href: SOCIAL_LINKS.YOUTUBE, external: true 
    },
    { 
      icon: <ImWhatsapp />, href: SOCIAL_LINKS.WHATSAPP, external: true 
    },
    { 
      icon: <RiCustomerService2Fill />, href: SOCIAL_LINKS.SUPPORT, external: false 
    },
  ];

  return (
    <>
      {/* 🟧 TOP SOCIAL MEDIA SECTION */}
      <TopSocialBar socialLinks={socialLinks} />

      {/* 🟧 MAIN LOGO NAVIGATION */}
      <MainLogoNav />
    </>
  );
}
