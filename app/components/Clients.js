"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function Clients() {
  const clientLogos = [
    { name: "Hatrick Sports", src: "/clients/hatrick.png", invertOnDark: true },
    { name: "SUN International", src: "/clients/sun_international.png" },
    { name: "Vignan", src: "/clients/vignan.png" },
    { name: "TrustLogics", src: "/clients/trustlogics.png", invertOnDark: true },
    { name: "Silver Oaks", src: "/clients/silver_oaks.png" },
    { name: "The Park Hotels", src: "/clients/the_park.png", invertOnDark: true },
    { name: "Somaa", src: "/clients/somaa.png" },
    { name: "Brew House Café", src: "/clients/brew_house.png" },
    { name: "Nine Media", src: "/clients/swirl_icon.png" },
  ];

  // Tripling the array for seamless infinite scrolling
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="bg-[#0D0E15] py-20 overflow-hidden border-t border-b border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[200px] sm:h-[300px] bg-nm-orange/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-3 shadow-inner">
          <Building2 className="w-3.5 h-3.5 text-nm-yellow" />
          Brand Ecosystem
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white">
          Trusted by <span className="text-gradient">150+ Leading Industry Brands</span>
        </h2>
        <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
          Partnering with market leaders across education, hospitality, sports, and lifestyle.
        </p>
      </div>

      {/* Infinite Marquee Track (Left to Right Animation) */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] relative z-10">
        <motion.div
          animate={{ x: ["0%", "-33.33333%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-5 sm:gap-7 py-4 whitespace-nowrap min-w-max will-change-transform transform-gpu"
        >
          {marqueeLogos.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="h-20 sm:h-24 px-6 sm:px-8 py-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-nm-orange/60 hover:bg-white/[0.08] sm:backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-lg sm:shadow-xl hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]"
            >
              <img
                src={client.src}
                alt={client.name}
                className={`h-9 sm:h-11 max-w-[130px] sm:max-w-[160px] w-auto object-contain transition-all duration-300 group-hover:scale-110 ${
                  client.invertOnDark
                    ? "filter invert brightness-200 group-hover:brightness-100"
                    : "filter brightness-95 group-hover:brightness-110"
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
