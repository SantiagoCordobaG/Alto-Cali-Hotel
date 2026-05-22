import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { gallery } from "@/data/site";

export const metadata: Metadata = { title: "Galería" };

export default function GaleriaPage() {
  return (
    <main>
      <PageHero kicker="Galería" title="Una mirada cinematográfica al hotel." image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=90">
        Imágenes amplias, atmósferas cálidas y detalles premium para mostrar el carácter visual de Alto Cali.
      </PageHero>
      <section className="bg-night py-24">
        <div className="premium-container columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((image, index) => (
            <img key={image} src={image} alt={`Galería Alto Cali ${index + 1}`} className="mb-6 w-full break-inside-avoid rounded-[2rem] border border-white/10 object-cover shadow-premium" />
          ))}
        </div>
      </section>
    </main>
  );
}
