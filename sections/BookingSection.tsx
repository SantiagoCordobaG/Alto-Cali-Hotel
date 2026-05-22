import { CalendarDays, Users } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { FadeUp } from "@/components/Motion";

export function BookingSection() {
  const fields = ["Entrada", "Salida", "Huéspedes", "Habitación"];
  return (
    <section className="bg-coal py-20">
      <div className="premium-container">
        <FadeUp>
          <div className="glass-panel rounded-[2rem] p-6 lg:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
              {fields.map((field, index) => (
                <label key={field} className="block">
                  <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
                    {index < 2 ? <CalendarDays size={15} /> : <Users size={15} />} {field}
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-night/55 px-4 py-4 text-sm text-bone/60">
                    {field === "Entrada" && "Seleccionar fecha"}
                    {field === "Salida" && "Seleccionar fecha"}
                    {field === "Huéspedes" && "2 adultos"}
                    {field === "Habitación" && "Suite premium"}
                  </div>
                </label>
              ))}
              <ButtonLink href="/reservas">Consultar</ButtonLink>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
