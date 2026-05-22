"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Star } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { highlights, homeAnchors } from "@/data/site";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-night pt-20">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/35 via-night/55 to-night" />
      <div className="absolute inset-0 bg-radialLuxury" />

      <div className="premium-container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <Star size={16} className="fill-champagne text-champagne" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-bone/80">Boutique luxury stay · Cali</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.1 }} className="font-serif text-6xl font-semibold leading-[0.92] text-bone sm:text-7xl lg:text-8xl">
            Elegancia, confort y vistas inolvidables.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.25 }} className="mt-7 max-w-2xl text-lg leading-8 text-bone/78 sm:text-xl">
            Tu mejor elección en el corazón de Cali. Una experiencia boutique diseñada para viajeros que buscan calma, diseño y servicio excepcional.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.38 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/reservas">Reservar ahora</ButtonLink>
            {/* <ButtonLink href="#habitaciones" variant="ghost">Explorar habitaciones</ButtonLink> */}
          </motion.div>
        </div>
      </div>

      {/* <div className="premium-container relative z-10 -mt-32 pb-10">
        <div className="glass-panel grid gap-5 rounded-[2rem] p-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-night/35 p-5">
              <div className="font-serif text-4xl text-champagne">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-bone/55">{item.label}</div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-4 text-xs uppercase tracking-[0.28em] text-bone/55 lg:flex">
        Scroll <ArrowDown size={16} />
      </div>
      <div className="absolute bottom-8 left-8 z-10 hidden items-center gap-2 text-sm text-bone/70 lg:flex"><MapPin size={16} className="text-champagne" />Cali, Colombia</div>
      <div className="absolute left-1/2 top-24 z-10 hidden -translate-x-1/2 gap-5 rounded-full border border-white/10 bg-night/35 px-5 py-3 backdrop-blur-xl xl:flex">
        {homeAnchors.map((anchor) => <a key={anchor.href} href={anchor.href} className="text-xs uppercase tracking-[0.18em] text-bone/65 hover:text-champagne">{anchor.label}</a>)}
      </div>
    </section>
  );
}
