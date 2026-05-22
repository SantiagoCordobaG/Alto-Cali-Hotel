import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/sections/ServicesSection";

export const metadata: Metadata = { title: "Servicios" };

export default function ServiciosPage() {
  return (
    <main>
      <PageHero kicker="Servicios" title="Detalles que elevan cada momento." image="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=2200&q=90">
        Amenities esenciales, espacios modernos y atención constante para que la experiencia se sienta fluida desde la llegada.
      </PageHero>
      <ServicesSection />
    </main>
  );
}
