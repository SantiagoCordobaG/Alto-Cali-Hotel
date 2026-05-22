import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LocationSection } from "@/sections/LocationSection";

export const metadata: Metadata = { title: "Ubicación" };

export default function UbicacionPage() {
  return (
    <main>
      <PageHero kicker="Ubicación" title="Cali cerca, calma dentro." image="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2200&q=90">
        Una base elegante para moverte por la ciudad y volver a un entorno cómodo, seguro y premium.
      </PageHero>
      <LocationSection />
    </main>
  );
}
