import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Alto Cali Hotel Boutique">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-champagne/40 bg-champagne/10 text-sm font-semibold tracking-widest text-champagne shadow-glow transition group-hover:bg-champagne group-hover:text-night">
        AC
      </span>
      <span className="hidden leading-none sm:block">
        <span className="block font-serif text-lg tracking-wide text-bone">Alto Cali</span>
        <span className="block text-[10px] uppercase tracking-[0.34em] text-champagne/80">Hotel Boutique</span>
      </span>
    </Link>
  );
}
