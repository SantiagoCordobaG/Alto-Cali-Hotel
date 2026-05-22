import { ReactNode } from "react";

export function PageHero({ kicker, title, children, image }: { kicker: string; title: string; children: ReactNode; image: string }) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden bg-night pt-32">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/60 to-night" />
      <div className="premium-container relative z-10 flex min-h-[42vh] items-end pb-16">
        <div className="max-w-4xl">
          <div className="section-kicker"><span className="gold-line" />{kicker}</div>
          <h1 className="font-serif text-5xl leading-tight text-bone sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/75">{children}</p>
        </div>
      </div>
    </section>
  );
}
