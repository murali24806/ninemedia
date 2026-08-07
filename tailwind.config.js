/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./app/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nm: {
          bg: "#08090D",
          surface: "#0F111A",
          card: "#141724",
          border: "#23283B",
          yellow: "#FFB800",
          orange: "#FF6B00",
          amber: "#FF8C00",
          red: "#FF3800",
          glow: "rgba(255, 107, 0, 0.25)",
          text: "#F1F5F9",
          muted: "#94A3B8",
          ink: "#08090D",
        },
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "nm-gradient": "linear-gradient(135deg, #FFB800 0%, #FF6B00 50%, #FF3800 100%)",
        "nm-gradient-glow": "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(8,9,13,0) 70%)",
        "nm-gradient-card": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
