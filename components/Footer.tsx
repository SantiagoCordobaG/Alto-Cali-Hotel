import Link from "next/link";
import { Share2, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-coal py-14">
      <div className="premium-container grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-mist">Una experiencia boutique premium para descansar, celebrar y descubrir Cali con elegancia.</p>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-champagne">Links</h3>
          <div className="grid gap-3">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-bone/70 transition hover:text-champagne">{link.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-champagne">Contacto</h3>
          <div className="grid gap-4 text-sm text-bone/70">
            <span className="flex gap-3"><Phone size={17} className="text-champagne" />{siteConfig.phone}</span>
            <span className="flex gap-3"><Mail size={17} className="text-champagne" />{siteConfig.email}</span>
            <span className="flex gap-3"><MapPin size={17} className="text-champagne" />{siteConfig.address}</span>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-champagne">Social</h3>
          <div className="flex gap-3">
            {siteConfig.socials.map((item) => (
              <a key={item} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-champagne hover:text-champagne" aria-label={item}>
                <Share2 size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="premium-container mt-12 border-t border-white/10 pt-6 text-xs text-bone/45">© 2026 Alto Cali Hotel Boutique. Demo premium creada para presentación comercial.</div>
    </footer>
  );
}
