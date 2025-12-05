import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

type EkjahanLinkProps = {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
} & LinkProps;

function EkjahanLink({ label, href, icon, active = false, className = "" }: EkjahanLinkProps) {
  return (
    <Link
      href={href}
      className="relative flex flex-col items-center justify-end h-full"
    >
      {icon && (
        <LinkIcon icon={icon} active={active} className={className} />
      )}

      {label && (
        <LinkLabel label={label} active={active} className={className} />
      )}

      {active && <LinkActiveBorder />}
    </Link>
  );
}

export default EkjahanLink;

/* -----------------------------------------------------
   ICON COMPONENT (INCLUDES CURVE + CLASSNAME SUPPORT)
------------------------------------------------------ */

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
    <div className="relative flex items-center justify-center">
      {/* Curve Behind Icon */}
      {active && <ActiveCurveBackground />}

      {/* Icon Wrapper */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out flex items-center justify-center z-10",
          active
            ? "bg-redish-pink-500 text-white rounded-full p-4 border-[6px] border-zinc-50 dark:border-black shadow"
            : "text-gray-500 text-xl p-2 mt-2",
          className
        )}
      >
        {icon}
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   LABEL COMPONENT
------------------------------------------------------ */

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
        className
      )}
    >
      {label}
    </span>
  );
}

/* -----------------------------------------------------
   ACTIVE BOTTOM BAR
------------------------------------------------------ */

function LinkActiveBorder({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute bottom-0 h-1 w-full rounded-t-full mt-2 bg-redish-pink-500",
        className
      )}
    ></div>
  );
}

/* -----------------------------------------------------
   CURVE BACKGROUND FOR ACTIVE TAB
------------------------------------------------------ */

function ActiveCurveBackground() {
  return (
    <svg
      className="absolute -top-3 left-1/2 -translate-x-1/2 w-[120px] h-[40px]"
      viewBox="0 0 120 40"
    >
      <path
        d="
          M0 40
          C30 40 40 0 60 0
          C80 0 90 40 120 40
          Z
        "
        fill="#f2f2f2"
      />
    </svg>
  );
}
