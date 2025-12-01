import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

export default function FooterMenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-col items-center justify-center relative">
        <div className="text-gray-500 text-xl mb-1 mt-1">
          <FaBars />
        </div>
        <span className="text-xs font-medium text-gray-500">
          Menu
        </span>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Select an option</DrawerDescription>
        </DrawerHeader>

        <div className="p-4 space-y-4">
          <Link href="/profile" className="block text-gray-700 text-base">
            Profile
          </Link>
          <Link href="/settings" className="block text-gray-700 text-base">
            Settings
          </Link>
          <Link href="/help" className="block text-gray-700 text-base">
            Help
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
