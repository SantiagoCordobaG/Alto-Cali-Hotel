"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-night/45 backdrop-blur-2xl">
      <nav className="premium-container flex h-20 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-bone/75 transition hover:text-champagne">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/reservas">Reservar ahora</ButtonLink>
        </div>
        <button
          aria-label="Abrir menú"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-night/95 px-5 py-5 lg:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-bone/80 hover:bg-white/5">
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/reservas">Reservar ahora</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
