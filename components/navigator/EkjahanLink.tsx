import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type EkjahanLinkProps = {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
} & LinkProps;

function EkjahanLink({
  label,
  href,
  icon,
  active = false,
  className = undefined,
}: EkjahanLinkProps) {
  return (
    <Link
      href={href}
      className="relative flex flex-col items-center justify-end h-full"
    >
      {icon && <LinkIcon icon={icon} active={active} className={className} />}
      {label && (
        <LinkLabel label={label} active={active} className={className} />
      )}
      {active && <LinkActiveBorder />}
    </Link>
  );
}

export default EkjahanLink;

function LinkIcon({
  icon,
  active = false,
  className = "",
}: {
  icon: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out flex flex-col items-center justify-center",
        active
          ? "bg-redish-pink-500 text-white rounded-full p-3 sm:p-4 border-6 sm:border-8 border-zinc-50 dark:border-black"
          : "text-gray-500 text-xl h-full mt-2",
        className,
      )}
    >
      {icon}
    </div>
  );
}

function LinkLabel({
  label,
  active = false,
  className = "",
}: {
  label: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-2 text-xs font-medium",
        active ? "text-redish-pink-500" : "text-gray-500",
        className,
      )}
    >
      {label}
    </span>
  );
}

function LinkActiveBorder({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute bottom-0 h-1 w-full rounded-t-full mt-2 bg-redish-pink-500",
        className,
      )}
    ></div>
  );
}
