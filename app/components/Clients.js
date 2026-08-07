"use client";

import { motion } from "framer-motion";
import { clients } from "./data";
import { Building2 } from "lucide-react";

export default function Clients() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="bg-[#0D0E15] py-20 overflow-hidden border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-3">
          <Building2 className="w-3.5 h-3.5" />
          Brand Ecosystem
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white">
          Trusted by <span className="text-gradient">150+ Leading Industry Brands</span>
        </h2>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-4 py-3 whitespace-nowrap min-w-max"
        >
          {duplicatedClients.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="px-6 py-3.5 rounded-2xl bg-[#141724]/90 border border-white/10 hover:border-nm-orange/50 hover:bg-[#1A1E2E] transition-all flex items-center gap-3 cursor-default group"
            >
              <span className="w-2 h-2 rounded-full bg-nm-orange group-hover:scale-150 transition-transform" />
              <span className="font-display font-bold text-sm text-slate-200 group-hover:text-white transition-colors">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
