import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/sections/BookingSection";
import { rooms } from "@/data/site";

export const metadata: Metadata = { title: "Reservas" };

export default function ReservasPage() {
  return (
    <main>
      <PageHero kicker="Reservas" title="Consulta disponibilidad con una UI premium." image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=2200&q=90">
        Sistema visual de reservas listo para conectar después con WhatsApp, email, CRM o motor de reservas real.
      </PageHero>
      <BookingSection />
      <section className="bg-night pb-24">
        <div className="premium-container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <div key={room.slug} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
              <img src={room.image} alt={room.title} className="h-48 w-full rounded-[1.5rem] object-cover" />
              <h2 className="mt-5 font-serif text-3xl text-bone">{room.title}</h2>
              <p className="mt-2 text-sm text-champagne">{room.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
