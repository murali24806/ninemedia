"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPackages, contact } from "./data";
import { CheckCircle2, ArrowRight, DollarSign } from "lucide-react";

export default function PricingCalculator() {
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to Growth

  return (
    <section id="pricing" className="bg-[#08090D] py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            Transparent Investment
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Plans Built for <span className="text-gradient">Accelerated Growth</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            Select a package suited for your operational scale. We also curate custom monthly growth retainers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPackage(idx)}
              className={`relative rounded-3xl p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                selectedPackage === idx 
                  ? "bg-[#141724] border-2 border-nm-orange shadow-[0_0_40px_rgba(255,107,0,0.2)] lg:scale-105 z-10" 
                  : "bg-[#0F111A] border border-white/10 hover:border-white/20 hover:bg-[#141724]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nm-gradient text-nm-ink font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="font-display font-black text-4xl text-white">{pkg.price}</span>
                  <span className="text-sm text-slate-400 font-medium ml-1">
                    {pkg.period}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-3.5 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${selectedPackage === idx ? "text-nm-orange" : "text-slate-500"}`} />
                      <span className="text-xs font-medium text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedPackage === idx 
                    ? "bg-nm-gradient text-nm-ink shadow-lg shadow-nm-orange/30 hover:scale-102" 
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {pkg.price === "Custom" ? "Request Custom Quote" : "Get Started Now"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
