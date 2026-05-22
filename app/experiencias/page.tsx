import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ExperiencesSection } from "@/sections/ExperiencesSection";

export const metadata: Metadata = { title: "Experiencias" };

export default function ExperienciasPage() {
  return (
    <main>
      <PageHero kicker="Experiencias" title="Hospitalidad, ciudad y momentos memorables." image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2200&q=90">
        Vive Cali desde una perspectiva más íntima: gastronomía, cultura, rooftop, descanso y planes seleccionados.
      </PageHero>
      <ExperiencesSection />
    </main>
  );
}
