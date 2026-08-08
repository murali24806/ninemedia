"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ArrowUpRight, BarChart3, Zap, Activity, Award, ShieldCheck, Building2 } from "lucide-react";
import { contact } from "./data";

export default function Hero() {
  const containerRef = useRef(null);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeGrowthTab, setActiveGrowthTab] = useState("campaigns");

  const growthConfig = {
    campaigns: {
      label: "Cumulative Campaigns Delivered",
      value: "300+",
      growth: "+340% Expansion",
      sub: "Across Meta, Google & Video Production",
      peak: "300+ Campaigns",
      dPrimary: "M 20 145 C 50 140, 70 135, 70 135 C 100 128, 120 120, 120 120 C 145 110, 170 100, 170 100 C 195 88, 220 75, 220 75 C 245 65, 270 55, 270 55 C 295 45, 320 35, 320 35 C 345 25, 370 15, 370 15",
      dFill: "M 20 145 C 50 140, 70 135, 70 135 C 100 128, 120 120, 120 120 C 145 110, 170 100, 170 100 C 195 88, 220 75, 220 75 C 245 65, 270 55, 270 55 C 295 45, 320 35, 320 35 C 345 25, 370 15, 370 15 L 370 160 L 20 160 Z",
      years: [
        { yr: "2018", x: 20, y: 145, count: "12" },
        { yr: "2019", x: 70, y: 135, count: "35" },
        { yr: "2020", x: 120, y: 120, count: "70" },
        { yr: "2021", x: 170, y: 100, count: "115" },
        { yr: "2022", x: 220, y: 75, count: "170" },
        { yr: "2023", x: 270, y: 55, count: "220" },
        { yr: "2024", x: 320, y: 35, count: "275" },
        { yr: "2026", x: 370, y: 15, count: "300+" },
      ],
    },
    clients: {
      label: "Empowered Client Brands",
      value: "150+",
      growth: "96.4% Retention",
      sub: "Global & Domestic Brand Partners",
      peak: "150+ Brands",
      dPrimary: "M 20 150 C 60 142, 120 130, 170 108 C 220 82, 270 60, 320 38 C 350 25, 370 18, 370 18",
      dFill: "M 20 150 C 60 142, 120 130, 170 108 C 220 82, 270 60, 320 38 C 350 25, 370 18, 370 18 L 370 160 L 20 160 Z",
      years: [
        { yr: "2018", x: 20, y: 150, count: "8" },
        { yr: "2019", x: 70, y: 142, count: "20" },
        { yr: "2020", x: 120, y: 130, count: "42" },
        { yr: "2021", x: 170, y: 108, count: "68" },
        { yr: "2022", x: 220, y: 82, count: "95" },
        { yr: "2023", x: 270, y: 60, count: "120" },
        { yr: "2024", x: 320, y: 38, count: "140" },
        { yr: "2026", x: 370, y: 18, count: "150+" },
      ],
    },
    experience: {
      label: "Years of Proven Excellence",
      value: "8+ YRS",
      growth: "Since 2018",
      sub: "Proven Track Record in Media & Marketing",
      peak: "8+ Years Growth",
      dPrimary: "M 20 155 C 70 145, 120 132, 170 110 C 220 85, 270 58, 320 32 C 350 20, 370 12, 370 12",
      dFill: "M 20 155 C 70 145, 120 132, 170 110 C 220 85, 270 58, 320 32 C 350 20, 370 12, 370 12 L 370 160 L 20 160 Z",
      years: [
        { yr: "2018", x: 20, y: 155, count: "Yr 1" },
        { yr: "2019", x: 70, y: 145, count: "Yr 2" },
        { yr: "2020", x: 120, y: 132, count: "Yr 3" },
        { yr: "2021", x: 170, y: 110, count: "Yr 4" },
        { yr: "2022", x: 220, y: 85, count: "Yr 5" },
        { yr: "2023", x: 270, y: 58, count: "Yr 6" },
        { yr: "2024", x: 320, y: 32, count: "Yr 7" },
        { yr: "2026", x: 370, y: 12, count: "Yr 8+" },
      ],
    },
  };

  const currentMetric = growthConfig[activeGrowthTab];

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
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-nm-orange text-[10px] xs:text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-inner max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-nm-yellow" />
            <span>Digital Marketing Agency Helping Brands to Selling More</span>
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

        {/* Right Column: 8-Year Company Growth Graph Showcase */}
        <motion.div
          style={{ opacity: opacityGraphic }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center w-full px-1 sm:px-0"
        >
          {/* Multi-layer Ambient Backlight Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-nm-orange/25 via-nm-yellow/20 to-nm-red/25 rounded-3xl blur-3xl opacity-60 transform scale-95 pointer-events-none" />

          {/* Premium Glass Dashboard Card Container */}
          <div className="relative w-full max-w-[500px] rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-[#0B0D17]/95 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden group hover:border-nm-orange/40 transition-all duration-500">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-nm-orange to-transparent opacity-80" />

            {/* Header: Title & 8-Year Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 relative z-10">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-nm-orange to-nm-yellow flex items-center justify-center text-nm-ink shadow-lg shadow-nm-orange/30 shrink-0">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white font-display flex items-center gap-1.5 sm:gap-2">
                    Company Growth
                    <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] font-mono bg-nm-orange/20 text-nm-orange border border-nm-orange/40">
                      2018 — 2026
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono">8-Year Business Scale Journey</div>
                </div>
              </div>

              <div className="text-right hidden xs:block">
                <div className="text-[10px] font-mono text-slate-400">Track Record</div>
                <div className="text-xs sm:text-sm font-bold text-nm-yellow font-display">8+ Yrs Proven</div>
              </div>
            </div>

            {/* Interactive Milestone Switcher Tabs */}
            <div className="grid grid-cols-3 gap-1.5 my-3.5 p-1 bg-white/5 rounded-xl border border-white/10 relative z-10">
              {[
                { key: "campaigns", label: "Campaigns", val: "300+", badge: "+340%" },
                { key: "clients", label: "Clients", val: "150+", badge: "96.4%" },
                { key: "experience", label: "Experience", val: "8+ YRS", badge: "Est. 2018" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveGrowthTab(item.key)}
                  className={`p-2 rounded-lg text-left transition-all ${
                    activeGrowthTab === item.key
                      ? "bg-gradient-to-r from-nm-orange/20 to-nm-yellow/10 border border-nm-orange/40 shadow-inner"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-[8px] text-emerald-400 font-semibold">{item.badge}</span>
                  </div>
                  <div className={`text-xs sm:text-sm font-bold font-display ${activeGrowthTab === item.key ? "text-white" : "text-slate-300"}`}>
                    {item.val}
                  </div>
                </button>
              ))}
            </div>

            {/* Big Growth Stat Summary */}
            <div className="my-1 relative z-10 flex items-baseline justify-between px-1">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{currentMetric.label}</div>
                <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight flex items-center gap-2 mt-0.5">
                  <span>{currentMetric.value}</span>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" /> {currentMetric.growth}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400">Milestone</div>
                <div className="text-xs sm:text-sm font-bold text-nm-yellow font-display">{currentMetric.peak}</div>
              </div>
            </div>

            {/* Clean 8-Year SVG Growth Graph Component (No moving laser lines or pricing) */}
            <div className="relative h-44 sm:h-52 w-full my-3 relative z-10 flex flex-col justify-between overflow-hidden rounded-xl bg-slate-950/40 border border-white/5 p-2">
              
              {/* Horizontal Dashed Grid Lines & Scale Markers */}
              <div className="absolute inset-0 px-2 py-3 flex flex-col justify-between pointer-events-none text-[9px] font-mono text-slate-400 opacity-50">
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-1">
                  <span>300+</span>
                  <span className="text-[8px] text-nm-yellow">Current Peak</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-1">
                  <span>225+</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-1">
                  <span>150+</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-1">
                  <span>75+</span>
                </div>
              </div>

              {/* Clean SVG Canvas */}
              <svg className="w-full h-full overflow-visible relative z-10 pt-4 pb-2" viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  {/* Fill Gradient */}
                  <linearGradient id="growthFillGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#FFB800" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                  </linearGradient>
                  
                  {/* Line Gradient */}
                  <linearGradient id="growthLineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF6B00" />
                    <stop offset="50%" stopColor="#FFB800" />
                    <stop offset="100%" stopColor="#FF2E00" />
                  </linearGradient>

                  {/* Soft Drop Shadow for Stroke Curve */}
                  <filter id="cleanGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Subtle Baseline Reference */}
                <path
                  d="M 20 155 C 100 152, 200 148, 370 145"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  opacity="0.35"
                />

                {/* Smooth Area Gradient Fill */}
                <motion.path
                  key={`fill-${activeGrowthTab}`}
                  d={currentMetric.dFill}
                  fill="url(#growthFillGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Smooth 8-Year Growth Spline Path */}
                <motion.path
                  key={`stroke-${activeGrowthTab}`}
                  d={currentMetric.dPrimary}
                  fill="none"
                  stroke="url(#growthLineGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#cleanGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* 8 Year Milestone Nodes (2018 - 2026) */}
                {currentMetric.years.map((pt, idx) => (
                  <g key={idx}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="4"
                      fill="#0B0D17"
                      stroke={idx === currentMetric.years.length - 1 ? "#FFB800" : "#FF6B00"}
                      strokeWidth="2.5"
                    />
                  </g>
                ))}
              </svg>

              {/* X-Axis 8-Year Labels */}
              <div className="flex justify-between px-1 pt-1 border-t border-white/10 text-[9px] font-mono text-slate-400">
                <span>'18</span>
                <span>'19</span>
                <span>'20</span>
                <span>'21</span>
                <span>'22</span>
                <span>'23</span>
                <span>'24</span>
                <span className="text-nm-yellow font-bold">'26</span>
              </div>

              {/* Floating Badge inside Graph */}
              <div className="absolute top-2 right-4 bg-[#141829]/95 border border-nm-orange/40 shadow-[0_0_20px_rgba(255,107,0,0.25)] px-3 py-1 rounded-lg flex items-center gap-2 z-20">
                <Sparkles className="w-3 h-3 text-nm-yellow" />
                <span className="text-[10px] font-mono font-bold text-white">
                  8+ Years Continuous Growth
                </span>
              </div>
            </div>

            {/* 8-Year Phase Milestones Breakdown */}
            <div className="pt-3 border-t border-white/10 space-y-2 relative z-10">
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>8-Year Evolution Phases</span>
                <span>Scale Milestone</span>
              </div>

              {[
                { phase: "2018-2020: Foundation & Media", status: "Est. Core Services", pct: "100%", width: "100%", gradient: "from-nm-orange/60 to-nm-orange" },
                { phase: "2021-2023: Performance Scaling", status: "300+ Campaigns", pct: "100%", width: "100%", gradient: "from-nm-yellow/70 to-nm-orange" },
                { phase: "2024-2026: Full-Funnel Ecosystem", status: "Market Leader", pct: "Peak", width: "100%", gradient: "from-nm-yellow via-nm-orange to-nm-red" },
              ].map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                    <span>{m.phase}</span>
                    <span className="font-mono text-white font-bold">{m.status}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={statsInView ? { width: m.width } : { width: m.width }}
                      transition={{ duration: 1.2, delay: idx * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${m.gradient}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Milestone Pill 1 - Top Left */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-1 sm:-top-4 sm:-left-3 bg-[#0F1221]/95 border border-white/20 backdrop-blur-xl px-3 py-2 rounded-xl shadow-2xl flex items-center gap-2.5 z-20"
            >
              <div className="w-7 h-7 rounded-lg bg-nm-orange/20 flex items-center justify-center text-nm-orange border border-nm-orange/30 shrink-0">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">Founded 2018</div>
                <div className="text-[9px] text-slate-300 font-mono">8+ Years Experience</div>
              </div>
            </motion.div>

            {/* Floating Milestone Pill 2 - Bottom Right */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-3 bg-[#0F1221]/95 border border-white/20 backdrop-blur-xl px-3 py-2 rounded-xl shadow-2xl flex items-center gap-2.5 z-20"
            >
              <div className="w-7 h-7 rounded-lg bg-nm-yellow/20 flex items-center justify-center text-nm-yellow border border-nm-yellow/30 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">300+ Campaigns</div>
                <div className="text-[9px] text-slate-300 font-mono">150+ Clients</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


