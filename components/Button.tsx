import Link from "next/link";
import { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const classes =
    variant === "primary"
      ? "bg-champagne text-night hover:bg-bone"
      : "border border-white/15 bg-white/5 text-bone hover:border-champagne/60 hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition duration-300 ${classes}`}
    >
      {children}
    </Link>
  );
}
