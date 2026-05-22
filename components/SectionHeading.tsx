import { ReactNode } from "react";

export function SectionHeading({ kicker, title, children, center = false }: { kicker: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`section-kicker ${center ? "justify-center" : ""}`}><span className="gold-line" />{kicker}<span className="gold-line" /></div>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-copy mt-6">{children}</p>}
    </div>
  );
}
