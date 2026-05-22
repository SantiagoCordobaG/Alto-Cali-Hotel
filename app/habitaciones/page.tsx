import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { rooms } from "@/data/site";

export const metadata: Metadata = { title: "Habitaciones" };

export default function HabitacionesPage() {
  return (
    <main>
      <PageHero kicker="Habitaciones" title="Descanso boutique con carácter premium." image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2200&q=90">
        Habitaciones diseñadas para ofrecer privacidad, confort, diseño contemporáneo y una experiencia de descanso superior.
      </PageHero>
      <section className="bg-night py-24">
        <div className="premium-container grid gap-8">
          {rooms.map((room, index) => (
            <article id={room.slug} key={room.slug} className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] lg:grid-cols-2">
              <img src={room.image} alt={room.title} className={`h-full min-h-[380px] w-full object-cover ${index % 2 ? "lg:order-2" : ""}`} />
              <div className="p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">{room.price}</span>
                <h2 className="mt-5 font-serif text-5xl text-bone">{room.title}</h2>
                <p className="mt-5 text-lg leading-8 text-mist">{room.description}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {room.amenities.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-night/50 px-4 py-3 text-sm text-bone/70">{item}</div>)}
                </div>
                <a href="/reservas" className="mt-8 inline-flex rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-night transition hover:bg-bone">Reservar esta habitación</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
