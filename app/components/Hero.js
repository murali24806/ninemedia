"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ArrowUpRight, BarChart3, Zap, Activity } from "lucide-react";
import { contact } from "./data";

export default function Hero() {
  const containerRef = useRef(null);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityGraphic = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleWords = ["Brands", "that", "sell", "more", "are", "built,", "not", "bought."];

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative overflow-hidden bg-[#08090D] pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-32 min-h-[90vh] flex items-center"
    >
      {/* Dynamic Background Glow & Ambient Elements */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        {/* Main Ambient Radial Lights */}
        <div className="absolute top-[10%] left-[10%] w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-nm-orange/15 rounded-full blur-[100px] sm:blur-[140px] animate-pulse-slow" />
        <div className="absolute top-[40%] right-[5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-nm-yellow/10 rounded-full blur-[90px] sm:blur-[130px]" />
        
        {/* Subtle Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: `32px 32px`
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-nm-orange text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-inner max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-nm-yellow" />
            <span className="truncate">Digital Marketing Agency</span>
          </div>

          {/* Dynamic Animated Title */}
          <h1 className="font-display font-black text-white text-[2.2rem] xs:text-[2.7rem] sm:text-[3.8rem] lg:text-[4.4rem] leading-[1.08] tracking-tight">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em] sm:mr-[0.25em]">
                {i === 2 || i === 3 ? (
                  <span className="text-gradient drop-shadow-[0_0_25px_rgba(255,107,0,0.4)]">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )}
                {i === 3 && <br className="hidden sm:block" />}
              </span>
            ))}
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 sm:mt-8 max-w-xl text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Nine Media empowers brands to achieve maximum revenue and visibility since 2018. 
            We integrate strategic brand identity, high-conversion digital marketing, and video production into one accountable partner.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap gap-3.5 sm:gap-4 items-stretch xs:items-center">
            <a
              href="#contact"
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-nm-gradient text-nm-ink font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] hover:scale-105 transition-all text-center"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-nm-orange/50 transition-all text-center justify-center flex"
            >
              Quick Consultation
            </a>
          </div>

          {/* Feature Highlights Bar with Animated Stats & Increasing Bar */}
          <div ref={statsRef} className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-2.5 sm:gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-nm-orange/40 transition-colors"
            >
              <div className="flex items-center justify-between text-nm-orange mb-1">
                <div className="font-display font-black text-xl xs:text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-0.5">
                  {statsInView ? <CountUp end={8} duration={2.5} /> : "0"}
                  <span className="text-nm-orange text-lg sm:text-xl font-bold">+</span>
                </div>
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-nm-orange shrink-0 hidden xs:block" />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 truncate">Proven Excellence</div>
              <div className="text-[9px] text-slate-400 font-mono hidden sm:block">8+ Years Experience</div>
              {/* Animated rising progress line */}
              <motion.div 
                initial={{ width: "0%" }}
                animate={statsInView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-nm-orange to-nm-yellow"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-nm-yellow/40 transition-colors"
            >
              <div className="flex items-center justify-between text-nm-yellow mb-1">
                <div className="font-display font-black text-xl xs:text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-0.5">
                  {statsInView ? <CountUp end={300} duration={2.5} /> : "0"}
                  <span className="text-nm-yellow text-lg sm:text-xl font-bold">+</span>
                </div>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-nm-yellow shrink-0 hidden xs:block" />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 truncate">Successful Campaigns</div>
              <div className="text-[9px] text-slate-400 font-mono hidden sm:block">300+ Delivered</div>
              {/* Animated rising progress line */}
              <motion.div 
                initial={{ width: "0%" }}
                animate={statsInView ? { width: "100%" } : {}}
                transition={{ duration: 1.8, delay: 0.35 }}
                className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-nm-yellow to-nm-orange"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-nm-red/40 transition-colors"
            >
              <div className="flex items-center justify-between text-nm-red mb-1">
                <div className="font-display font-black text-xl xs:text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-0.5">
                  {statsInView ? <CountUp end={150} duration={2.5} /> : "0"}
                  <span className="text-nm-red text-lg sm:text-xl font-bold">+</span>
                </div>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-nm-red shrink-0 hidden xs:block" />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 truncate">Trusted Clients</div>
              <div className="text-[9px] text-slate-400 font-mono hidden sm:block">150+ Empowered</div>
              {/* Animated rising progress line */}
              <motion.div 
                initial={{ width: "0%" }}
                animate={statsInView ? { width: "100%" } : {}}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-nm-red via-nm-orange to-nm-yellow"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column Animated Graph Showcase */}
        <motion.div
          style={{ opacity: opacityGraphic }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center w-full px-2 sm:px-0"
        >
          {/* Ambient Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-nm-orange/25 via-nm-yellow/25 to-nm-red/25 rounded-3xl blur-2xl sm:blur-3xl opacity-70 transform scale-95" />

          {/* Glass Card Container */}
          <div className="relative w-full max-w-[480px] rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#131625]/95 via-[#0E101D]/98 to-[#080912] border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden group hover:border-nm-orange/50 transition-all duration-500">
            
            {/* Spinning Gradient Border Highlight */}
            <div className="absolute inset-[-1px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-nm-yellow via-nm-orange to-nm-red opacity-20 blur-sm group-hover:opacity-50 transition-opacity pointer-events-none" />

            {/* Header of Graph Card */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5 sm:pb-4 relative z-10">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-nm-orange to-nm-yellow flex items-center justify-center text-nm-ink shadow-lg shadow-nm-orange/25 shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white font-display flex items-center gap-1.5 sm:gap-2">
                    Growth Engine
                    <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
                      LIVE ANALYTICS
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Real-time Performance Scale</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Target</div>
                <div className="text-xs sm:text-sm font-bold text-nm-yellow font-display">+340% YoY</div>
              </div>
            </div>

            {/* Big Stat Summary inside Graph */}
            <div className="my-4 sm:my-5 relative z-10 flex items-baseline justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">Total Campaign Reach</div>
                <div className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight mt-0.5 sm:mt-1 flex items-center gap-2">
                  <span>300+</span>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-0.5 sm:gap-1">
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> +284%
                  </span>
                </div>
              </div>
              <div className="hidden xs:block text-right">
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Avg Client ROI</div>
                <div className="text-base sm:text-lg font-bold text-gradient font-display">4.85x Return</div>
              </div>
            </div>

            {/* SVG Animated Growth Curve Line Chart Container */}
            <div className="relative h-36 sm:h-48 w-full my-2 relative z-10 flex flex-col justify-end overflow-hidden rounded-xl">
              {/* Background Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-dashed border-white/40 w-full" />
                <div className="border-b border-dashed border-white/40 w-full" />
                <div className="border-b border-dashed border-white/40 w-full" />
                <div className="border-b border-dashed border-white/40 w-full" />
              </div>

              {/* Vertical Laser Scanner Beam moving across graph */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-nm-yellow via-nm-orange to-transparent opacity-75 z-20 pointer-events-none shadow-[0_0_10px_#FF6B00]"
                animate={{ left: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* SVG Container for Curve */}
              <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#FFB800" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF6B00" />
                    <stop offset="50%" stopColor="#FFB800" />
                    <stop offset="100%" stopColor="#FF2E00" />
                  </linearGradient>
                </defs>

                {/* Pulsing Area Under Curve */}
                <motion.path
                  d="M 0 140 C 60 130, 90 100, 140 95 C 190 90, 230 50, 280 40 C 330 30, 370 15, 400 10 L 400 160 L 0 160 Z"
                  fill="url(#curveGradient)"
                  animate={{ opacity: [0.4, 0.75, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Dynamic Stroke Path */}
                <motion.path
                  d="M 0 140 C 60 130, 90 100, 140 95 C 190 90, 230 50, 280 40 C 330 30, 370 15, 400 10"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                {/* Laser Traveling Dot on Path */}
                <motion.circle
                  r="7"
                  fill="#FFB800"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="drop-shadow-[0_0_12px_rgba(255,184,0,1)]"
                  animate={{
                    cx: [0, 60, 140, 280, 400],
                    cy: [140, 130, 95, 40, 10]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Static Glowing Data Points along Path */}
                {[
                  { cx: 0, cy: 140, label: "Q1" },
                  { cx: 140, cy: 95, label: "Q2" },
                  { cx: 280, cy: 40, label: "Q3" },
                  { cx: 400, cy: 10, label: "Q4" },
                ].map((pt, idx) => (
                  <g key={idx}>
                    <motion.circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r="5"
                      fill="#FF6B00"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    />
                  </g>
                ))}
              </svg>

              {/* Floating Peak Tooltip Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-1 sm:top-2 right-1 sm:right-6 bg-[#181B29]/95 border border-nm-orange/50 shadow-[0_0_25px_rgba(255,107,0,0.35)] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl flex items-center gap-1.5 sm:gap-2 z-20"
              >
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-nm-yellow" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white">Peak Growth: 150+ Clients</span>
              </motion.div>
            </div>

            {/* Animated Equalizer Bar Chart Rows below */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-6 gap-1.5 sm:gap-2 items-end h-12 sm:h-14 relative z-10">
              {[
                { month: "Jan", minH: "20%", maxH: "45%", color: "from-nm-orange/40 to-nm-orange" },
                { month: "Mar", minH: "30%", maxH: "60%", color: "from-nm-orange/50 to-nm-orange" },
                { month: "May", minH: "40%", maxH: "75%", color: "from-nm-yellow/60 to-nm-orange" },
                { month: "Jul", minH: "50%", maxH: "85%", color: "from-nm-yellow to-nm-orange" },
                { month: "Sep", minH: "65%", maxH: "94%", color: "from-nm-yellow to-nm-red" },
                { month: "Dec", minH: "80%", maxH: "100%", color: "from-nm-yellow via-nm-orange to-nm-red" },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-1 sm:gap-1.5 h-full justify-end group/bar cursor-pointer">
                  <motion.div
                    animate={{ height: [bar.minH, bar.maxH, bar.minH] }}
                    transition={{ duration: 2.2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-full rounded-t-md sm:rounded-t-lg bg-gradient-to-t ${bar.color} group-hover/bar:brightness-125 transition-all shadow-md`}
                  />
                  <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 group-hover/bar:text-white">{bar.month}</span>
                </div>
              ))}
            </div>

            {/* Floating Metric Pill 1 - Top Left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-1 sm:-top-4 sm:-left-4 bg-[#0F111A]/95 border border-white/20 backdrop-blur-xl px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-nm-orange/20 flex items-center justify-center text-nm-orange border border-nm-orange/30 shrink-0">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-white">ROI Driven</div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono">Growth Animated</div>
              </div>
            </motion.div>

            {/* Floating Metric Pill 2 - Bottom Right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-4 bg-[#0F111A]/95 border border-white/20 backdrop-blur-xl px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-nm-yellow/20 flex items-center justify-center text-nm-yellow border border-nm-yellow/30 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-white">300+ Campaigns</div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 font-mono">150+ Clients</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

