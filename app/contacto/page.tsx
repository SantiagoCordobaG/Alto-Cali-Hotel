import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <main>
      <PageHero kicker="Contacto" title="Hablemos de tu próxima estadía." image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2200&q=90">
        Reserva, consulta disponibilidad o solicita una experiencia personalizada para tu visita a Cali.
      </PageHero>
      <section className="bg-night py-24">
        <div className="premium-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {[{ icon: Phone, text: siteConfig.phone }, { icon: Mail, text: siteConfig.email }, { icon: MapPin, text: siteConfig.address }].map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 text-bone/75">
                <Icon className="mb-4 text-champagne" />{text}
              </div>
            ))}
          </div>
          <form className="glass-panel grid gap-5 rounded-[2rem] p-6 lg:p-8">
            <input className="rounded-2xl border border-white/10 bg-night/60 px-5 py-4 outline-none transition focus:border-champagne" placeholder="Nombre completo" />
            <input className="rounded-2xl border border-white/10 bg-night/60 px-5 py-4 outline-none transition focus:border-champagne" placeholder="Correo electrónico" />
            <input className="rounded-2xl border border-white/10 bg-night/60 px-5 py-4 outline-none transition focus:border-champagne" placeholder="Teléfono" />
            <textarea className="min-h-40 rounded-2xl border border-white/10 bg-night/60 px-5 py-4 outline-none transition focus:border-champagne" placeholder="Mensaje" />
            <button className="rounded-full bg-champagne px-6 py-4 text-sm font-semibold text-night transition hover:bg-bone">Enviar mensaje</button>
          </form>
        </div>
      </section>
    </main>
  );
}
