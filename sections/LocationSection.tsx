import { ArrowUpRight, MapPin } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export function LocationSection() {
  return (
    <section id="ubicacion" className="bg-night py-24 sm:py-32">
      <div className="premium-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <FadeUp>
          <SectionHeading kicker="Ubicación" title="En Cali, cerca de todo lo importante.">
            Una ubicación estratégica para negocios, descanso, gastronomía y experiencias culturales.
          </SectionHeading>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-champagne text-night"><MapPin size={22} /></span>
              <div>
                <h3 className="font-serif text-2xl text-bone">Dirección del hotel</h3>
                <p className="mt-2 text-sm leading-7 text-mist">{siteConfig.address}</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Cl+73+%23+3-76,+Jorge+Eliecer+Gaitan,+Cali,+Valle+del+Cauca" target="_blank" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-champagne" rel="noreferrer">
                  Cómo llegar <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#09111f] shadow-premium">
            <iframe
              title="Ubicación de Alto Cali Hotel Boutique"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5007562493456!2d-76.48613491504993!3d3.4706493420941276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7c2ee088f05%3A0xe79646f91c4ca227!2sCl%2073%20%23%203-76%2C%20Jorge%20Eliecer%20Gaitan%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1779459510457!5m2!1ses-419!2sco"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
