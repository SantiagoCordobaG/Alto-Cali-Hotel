import { BookingSection } from "@/sections/BookingSection";
import { ExperiencesSection } from "@/sections/ExperiencesSection";
import { Hero } from "@/sections/Hero";
import { LocationSection } from "@/sections/LocationSection";
import { RoomsSection } from "@/sections/RoomsSection";
import { ServicesSection } from "@/sections/ServicesSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RoomsSection />
      <ServicesSection />
      <ExperiencesSection />
      <BookingSection />
      <LocationSection />
    </main>
  );
}
