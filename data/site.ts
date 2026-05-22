import { BedDouble, Car, Clock, Coffee, Dumbbell, Headphones, KeyRound, MapPin, Palmtree, Sparkles, Utensils, Waves, Wifi } from "lucide-react";

export const siteConfig = {
  name: "Alto Cali Hotel Boutique",
  description: "Hotel boutique premium en Cali, Colombia. Elegancia, confort y vistas inolvidables.",
  url: "https://alto-cali.vercel.app",
  address: "Cl 73 # 3-76, Jorge Eliecer Gaitan, Cali, Valle del Cauca",
  phone: "+57 300 000 0000",
  email: "reservas@altocali.com",
  socials: ["Instagram", "Facebook", "TikTok"]
};

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Galería", href: "/galeria" },
  { label: "Ubicación", href: "/ubicacion" },
  { label: "Contacto", href: "/contacto" }
];

export const homeAnchors = [
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Ubicación", href: "#ubicacion" }
];

export const rooms = [
  {
    title: "Habitación estándar",
    slug: "estandar",
    price: "Desde $290.000 COP",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    description: "Un refugio elegante para viajes ejecutivos o escapadas cortas, con acabados cálidos y descanso superior.",
    amenities: ["Queen bed", "Smart TV", "WiFi premium", "Baño privado"]
  },
  {
    title: "Superior",
    slug: "superior",
    price: "Desde $360.000 COP",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    description: "Más amplitud, mejor iluminación y detalles boutique pensados para una estadía memorable en Cali.",
    amenities: ["King bed", "Zona lounge", "Café de cortesía", "Vista ciudad"]
  },
  {
    title: "Deluxe",
    slug: "deluxe",
    price: "Desde $480.000 COP",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    description: "Diseño cinematográfico, baño premium y una atmósfera perfecta para desconectar con estilo.",
    amenities: ["King premium", "Minibar", "Amenities luxury", "Workspace"]
  },
  {
    title: "Suite premium",
    slug: "suite-premium",
    price: "Desde $690.000 COP",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
    description: "La experiencia más exclusiva del hotel: sala privada, vistas privilegiadas y servicio personalizado.",
    amenities: ["Sala privada", "Bañera", "Vista panorámica", "Concierge"]
  }
];

export const services = [
  { title: "Piscina", description: "Ambiente fresco, íntimo y perfecto para cerrar el día.", icon: Waves },
  { title: "WiFi", description: "Conectividad estable para trabajo, streaming y reuniones.", icon: Wifi },
  { title: "Gimnasio", description: "Rutina activa con equipos esenciales y espacio moderno.", icon: Dumbbell },
  { title: "Desayuno", description: "Sabores locales, café colombiano y presentación boutique.", icon: Coffee },
  { title: "Parqueadero", description: "Acceso cómodo y seguro para huéspedes.", icon: Car },
  { title: "Atención 24/7", description: "Equipo atento para ayudarte en cada momento.", icon: Headphones },
  { title: "Check-in", description: "Proceso ágil, elegante y sin fricción.", icon: KeyRound },
  { title: "Reservas", description: "Gestión flexible para viajes personales o corporativos.", icon: Clock }
];

export const experiences = [
  {
    title: "Rooftop entre luces de Cali",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
    description: "Cócteles, conversación y una vista nocturna diseñada para recordar."
  },
  {
    title: "Piscina boutique",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1200&q=85",
    description: "Un espacio íntimo con iluminación cálida, calma y diseño contemporáneo."
  },
  {
    title: "Cali gastronómica",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    description: "Restaurante de autor con ingredientes locales y servicio premium."
  },
  {
    title: "Ciudad, salsa y cultura",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85",
    description: "Experiencias curadas para descubrir el alma vibrante de Cali."
  }
];

export const gallery = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=900&q=85"
];

export const highlights = [ //Esto hay que quitarlo
  { label: "Suites", value: "24" },
  { label: "Servicio", value: "24/7" },
  { label: "Rating", value: "4.9" },
  { label: "Cali", value: "360°" }
];
