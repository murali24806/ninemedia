"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { caseStudies, contact } from "./data";
import { ChevronLeft, ChevronRight, TrendingUp, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide timer (every 3.5 seconds)
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="case-studies" className="bg-[#0D0E15] py-24 md:py-32 overflow-hidden border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-yellow text-xs font-mono tracking-widest uppercase mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Proven Impact
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
              Real Challenges. <span className="text-gradient">Measurable Growth.</span>
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-nm-gradient hover:text-nm-ink hover:border-transparent transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-nm-gradient hover:text-nm-ink hover:border-transparent transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="embla overflow-hidden" 
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="embla__container flex -ml-6 will-change-transform transform-gpu">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6"
              >
                <div className="rounded-3xl border border-white/10 bg-[#141724]/90 p-8 hover:border-nm-orange/40 transition-all duration-300 h-full flex flex-col justify-between shadow-2xl group">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-nm-yellow transition-colors">
                        {cs.client}
                      </h3>
                      <span className="font-mono text-[10px] font-bold text-nm-orange uppercase tracking-wider px-3 py-1 bg-nm-orange/10 rounded-full border border-nm-orange/20">
                        {cs.sector}
                      </span>
                    </div>

                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                          The Challenge
                        </dt>
                        <dd className="text-slate-300 leading-relaxed font-normal">
                          {cs.challenge}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                          Nine Media Strategy
                        </dt>
                        <dd className="text-slate-300 leading-relaxed font-normal">
                          {cs.approach}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 bg-gradient-to-r from-nm-orange/10 via-transparent to-transparent -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-nm-yellow mb-1">
                      <CheckCircle className="w-4 h-4" />
                      Key Result Delivered
                    </div>
                    <div className="text-white font-bold leading-relaxed text-base">
                      {cs.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
