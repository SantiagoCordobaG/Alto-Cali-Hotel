import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#07111f",
        coal: "#0b0d10",
        champagne: "#d6b777",
        warm: "#efe2cf",
        bone: "#f8f4ec",
        mist: "#b9c4d0"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,0.28)",
        glow: "0 0 60px rgba(214,183,119,0.18)"
      },
      backgroundImage: {
        radialLuxury: "radial-gradient(circle at top right, rgba(214,183,119,0.20), transparent 34%), radial-gradient(circle at bottom left, rgba(36,68,104,0.28), transparent 38%)"
      }
    }
  },
  plugins: []
};
export default config;
