"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { portfolioItems, contact } from "./data";
import { ArrowUpRight, FolderKanban, TrendingUp, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// Transparent client logo mappings
const portfolioLogos = {
  "SUN International": { src: "/clients/sun_international.png", invertOnDark: false },
  "Hatrick": { src: "/clients/hatrick.png", invertOnDark: true },
  "Bake House": { src: "/clients/brew_house.png", invertOnDark: false },
  "The Cloud Overseas": { src: "/clients/the_park.png", invertOnDark: true },
  "Somaa": { src: "/clients/somaa.png", invertOnDark: false },
  "TrustLogics": { src: "/clients/trustlogics.png", invertOnDark: true },
  "Vignan's School": { src: "/clients/vignan.png", invertOnDark: false },
  "Nine Media": { src: "/clients/swirl_icon.png", invertOnDark: false },
};

// Performance impact metrics for portfolio cards
const portfolioMetrics = {
  "SUN International": { metric: "+340% Enquiries", highlight: "Full Admissions Funnel" },
  "Hatrick": { metric: "No.1 Brand Position", highlight: "AP & TG Regional Campaign" },
  "Bake House": { metric: "+180% Repeat Orders", highlight: "Festive D2C Promotion" },
  "The Cloud Overseas": { metric: "-42% Cost Per Lead", highlight: "Multi-Country Ad Campaign" },
  "Somaa": { metric: "Sold Out Event", highlight: "Nightlife & Music Promo" },
  "TrustLogics": { metric: "+2.5M Impression Reach", highlight: "Brand Identity Revamp" },
  "Vignan's School": { metric: "+220% Parent Leads", highlight: "Admissions Marketing" },
  "Nine Media": { metric: "Award-Winning UI", highlight: "Agency Showcase" },
};

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [isPaused, setIsPaused] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  // Auto-slide timer (every 3.2 seconds)
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3200);
    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="portfolio" className="bg-[#08090D] py-24 md:py-36 overflow-hidden border-t border-white/5 relative">
      {/* Ambient Lighting Orbs */}
      <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-nm-gradient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-4 shadow-inner">
            <FolderKanban className="w-3.5 h-3.5" />
            Selected Portfolio
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
                A Sample of What We&rsquo;ve <br />
                <span className="text-gradient">Shipped &amp; Scaled.</span>
              </h2>
              <p className="mt-3 text-slate-400 text-sm max-w-lg">
                Explore real brand transformations, high-ROAS marketing campaigns, and visual identity projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
                {categories.map((cat) => {
                  const isActive = filter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`relative px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActive ? "text-nm-ink" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePortfolioTab"
                          className="absolute inset-0 bg-nm-gradient rounded-full shadow-lg shadow-nm-orange/30 -z-10"
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                      )}
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-nm-orange/60 hover:bg-white/10 text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-nm-orange/60 hover:bg-white/10 text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Auto-Sliding Embla Carousel Track */}
        <div
          ref={emblaRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6 sm:gap-7 will-change-transform transform-gpu">
            {filteredItems.map((item) => {
              const impact = portfolioMetrics[item.client] || {
                metric: "Proven Impact",
                highlight: "Integrated Campaign",
              };
              const logoData = portfolioLogos[item.client];

              return (
                <div
                  key={item.client}
                  className="flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0"
                >
                  <a
                    href={`https://wa.me/${contact.phoneRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20see%20case%20details%20for%20${encodeURIComponent(
                      item.client
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-3xl overflow-hidden border border-white/10 bg-[#0F111A] hover:border-nm-orange shadow-2xl hover:shadow-[0_0_50px_rgba(255,107,0,0.25)] transition-all duration-500 flex flex-col justify-between relative hover:-translate-y-2 h-full"
                  >
                    {/* Card Visual Header */}
                    <div className="min-h-[220px] bg-gradient-to-br from-[#181B2A] via-[#0E1019] to-[#08090D] p-7 flex flex-col justify-between relative overflow-hidden group-hover:from-[#20253B] transition-all duration-500">
                      {/* Glowing Accent Ring Background */}
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-nm-orange/15 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-nm-orange/30 transition-all duration-500" />

                      {/* Top Row Pills */}
                      <div className="flex justify-between items-center relative z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-nm-yellow border border-white/10 backdrop-blur-md">
                          {item.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-nm-gradient group-hover:text-nm-ink group-hover:border-transparent group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Middle Client Logo & Title Section */}
                      <div className="relative z-10 mt-5">
                        {/* Animated Transparent Logo Image */}
                        {logoData && (
                          <div className="mb-4 h-14 flex items-center">
                            <img
                              src={logoData.src}
                              alt={item.client}
                              className={`max-h-12 max-w-[180px] w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${
                                logoData.invertOnDark
                                  ? "filter invert brightness-200 group-hover:brightness-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                                  : "filter brightness-100 drop-shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                              }`}
                            />
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-nm-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {impact.metric}
                        </div>
                        <h3 className="font-display font-black text-2xl md:text-3xl text-white group-hover:text-nm-yellow transition-colors leading-tight">
                          {item.client}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-1">{item.tag}</p>
                      </div>
                    </div>

                    {/* Card Footer Details */}
                    <div className="p-6 border-t border-white/5 bg-[#141724]/60 backdrop-blur-md flex items-center justify-between relative z-10">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">Deliverable</span>
                        <span className="text-xs font-semibold text-slate-200 mt-0.5 block">{impact.highlight}</span>
                      </div>
                      <span className="text-xs font-bold text-nm-orange flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        View Results <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
