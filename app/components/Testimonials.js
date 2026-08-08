"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, contact } from "./data";
import { Star, Quote, Award, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const autoPlayTimer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoPlayTimer);
  }, [emblaApi, isPaused]);

  return (
    <section id="testimonials" className="bg-[#08090D] py-24 md:py-36 relative border-t border-white/5 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nm-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-4 shadow-inner">
              <Award className="w-3.5 h-3.5" />
              Verified Client Feedback
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              What Brand Leaders <span className="text-gradient">Say About Us</span>
            </h2>
          </div>

          {/* Slider Navigation Arrows & Dots */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    selectedIndex === idx
                      ? "w-8 bg-nm-gradient shadow-lg shadow-nm-orange/30"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-nm-gradient hover:text-nm-ink hover:border-transparent transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-nm-gradient hover:text-nm-ink hover:border-transparent transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <div
          className="embla overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="embla__container flex -ml-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.brand}
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-6"
              >
                <div className="rounded-3xl p-8 md:p-10 bg-[#141724]/90 border border-white/10 hover:border-nm-orange/50 transition-all duration-500 h-full flex flex-col justify-between shadow-2xl relative group hover:-translate-y-1">
                  <div className="absolute top-6 right-6 text-white/10 group-hover:text-nm-orange/20 transition-colors">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1.5 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-nm-yellow text-nm-yellow" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-200 text-base md:text-lg leading-relaxed font-normal mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Client Info Footer */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-black text-white text-lg group-hover:text-nm-yellow transition-colors">
                        {t.brand}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {t.name} &middot; {t.role}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20saw%20your%20testimonial%20from%20${encodeURIComponent(t.brand)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-nm-yellow hover:bg-nm-gradient hover:text-nm-ink hover:border-transparent transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Verified
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
