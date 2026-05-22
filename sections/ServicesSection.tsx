import { FadeUp } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-coal py-24 sm:py-32">
      <div className="absolute inset-0 bg-radialLuxury opacity-80" />
      <div className="premium-container relative">
        <FadeUp>
          <SectionHeading center kicker="Servicios" title="Amenidades premium, sin ruido innecesario.">
            Todo lo esencial para que la estadía se sienta fluida, cómoda y cuidadosamente atendida.
          </SectionHeading>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-14">
          <div className="services-marquee overflow-hidden">
            <div className="services-marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-stretch gap-5 pr-5" aria-hidden={copy === 1}>
                  {services.map(({ title, description, icon: Icon }) => (
                    <div key={`${copy}-${title}`} className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[17.5rem] xl:w-[18.5rem]">
                      <div className="group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/40 hover:bg-white/[0.08]">
                        <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-champagne/10 text-champagne transition group-hover:bg-champagne group-hover:text-night">
                          <Icon size={24} />
                        </div>
                        <h3 className="font-serif text-2xl text-bone">{title}</h3>
                        <p className="mt-3 text-sm leading-7 text-mist">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
