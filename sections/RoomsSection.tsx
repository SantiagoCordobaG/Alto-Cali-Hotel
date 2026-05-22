import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { rooms } from "@/data/site";

export function RoomsSection() {
  return (
    <section id="habitaciones" className="bg-night py-24 sm:py-32">
      <div className="premium-container">
        <FadeUp>
          <SectionHeading kicker="Habitaciones" title="Espacios diseñados para descansar con estilo.">
            Cada habitación combina texturas cálidas, iluminación cinematográfica y comodidades premium para viajes de placer o negocios.
          </SectionHeading>
        </FadeUp>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <StaggerItem key={room.slug} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-premium">
              <div className="relative h-72 overflow-hidden">
                <img src={room.image} alt={room.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-night/65 px-4 py-2 text-xs font-semibold text-champagne backdrop-blur-xl">{room.price}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-1 flex-col">
                  <h3 className="min-h-[3.5rem] font-serif text-3xl text-bone">{room.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-mist">{room.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {room.amenities.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-bone/60">{item}</span>)}
                </div>
                <Link href={`/habitaciones#${room.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-champagne transition group-hover:gap-3">
                  Ver detalles <ArrowUpRight size={16} />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
