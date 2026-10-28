import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  showArrow?: boolean;
};

const variants = {
  dark: "bg-forest text-white hover:bg-ink",
  light: "bg-cream text-forest hover:bg-white",
  outline: "border border-forest/20 text-forest hover:border-forest hover:bg-forest/5",
};

export function Button({
  href,
  children,
  variant = "dark",
  showArrow = true,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
