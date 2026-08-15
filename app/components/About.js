"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Zap, Target, Award, Rocket, Sparkles, CheckCircle2, BarChart3, Palette, ArrowRight, Brain } from "lucide-react";
import { contact } from "./data";
import { ContainerScroll } from "./ContainerScrollAnimation";

export default function About() {
  const containerRef = useRef(null);
  const [transparentBrainImg, setTransparentBrainImg] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  // Process Brain Image to remove white background and illuminate sketch lines
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = "/brain-strategy.jpg";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Make white background 100% transparent
          if (r > 215 && g > 215 && b > 215) {
            data[i + 3] = 0;
          } else if (r < 120 && g < 120 && b < 120) {
            // Turn black sketch lines on left brain to bright glowing cyan-white
            data[i] = 230;
            data[i + 1] = 240;
            data[i + 2] = 255;
            data[i + 3] = 255;
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setTransparentBrainImg(canvas.toDataURL("image/png"));
      } catch (err) {
        console.error("Canvas brain processing:", err);
      }
    };
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#0D0E15] py-20 md:py-28 overflow-hidden relative border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-nm-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Text & Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-6">
              <Target className="w-3.5 h-3.5" />
              About Nine Media
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
              Creativity Meets Commerce.
              <br />
              <span className="text-gradient">We Bridge Strategy &amp; Execution.</span>
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed font-normal">
              Nine Media is a digital marketing agency empowering businesses since <span className="text-white font-semibold">2018</span>. We have partnered with <span className="text-nm-yellow font-semibold">150+ leading brands</span> across hospitality, education, healthcare, D2C, and corporate sectors to drive quantifiable revenue and audience growth.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed font-normal">
              Traditional branding agencies often miss digital growth hacks, while pure digital firms lack creative storytelling. At Nine Media, we combine both under one roof &mdash; giving your brand an unfair advantage.
            </p>
          </motion.div>

          {/* Stats Counter Grid */}
          <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-nm-orange mb-1">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-3xl text-white">
                {inView ? <CountUp end={150} duration={2.5} /> : "0"}+
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Brands Empowered</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-nm-yellow mb-1">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-3xl text-white">
                {inView ? <CountUp end={new Date().getFullYear() - 2018} duration={2} /> : "0"}+
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Years Experience</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
              <div className="text-nm-red mb-1">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-3xl text-white">
                {inView ? <CountUp end={9} duration={2} /> : "0"}
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Core Solutions</p>
            </div>
          </div>
        </div>

        {/* Brain Strategy Animation Showcase with ContainerScroll 3D Tilt Animation */}
        <ContainerScroll
          titleComponent={
            <div className="mb-4 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-yellow text-xs font-mono tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-nm-yellow" />
                Whole-Brain Growth Strategy
              </div>
              <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white">
                Analytical Strategy Meets <br />
                <span className="text-gradient">Visual Creative Magic</span>
              </h3>
              <p className="text-xs sm:text-base text-slate-400 mt-3 font-normal max-w-2xl mx-auto">
                We balance data-driven performance engineering with high-impact visual storytelling.
              </p>
            </div>
          }
        >
          <div className="w-full h-full p-4 sm:p-8 bg-gradient-to-b from-[#131626]/95 via-[#0E101C]/98 to-[#080912] flex flex-col justify-center relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nm-orange/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header Banner Inside Card Image Container */}
            <div className="relative z-10 mb-3 sm:mb-6 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-2 sm:gap-4 backdrop-blur-md">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase truncate">
                  Whole-Brain Growth Engine Architecture
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-nm-orange animate-ping" />
                <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-nm-yellow font-semibold uppercase tracking-widest">
                  Live Matrix
                </span>
              </div>
            </div>

            {/* 3-Column Layout: Left Explanation Card - Animated Brain Center - Right Explanation Card */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1.1fr] gap-4 sm:gap-6 items-center relative z-10">
              
              {/* LEFT SIDE EXPLANATION: 01 / LEFT BRAIN */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 via-[#0F1424] to-[#0A0C16] border border-blue-500/30 relative shadow-xl hover:border-blue-400/60 transition-all group/left">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] sm:text-[10px] text-blue-400 tracking-widest uppercase font-bold block">01 / LEFT BRAIN</span>
                      <h4 className="font-display font-bold text-sm sm:text-lg text-white group-hover/left:text-blue-300 transition-colors">Data Strategy</h4>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 sm:px-2.5 py-1 rounded-full border border-blue-500/20 shrink-0">
                    Analytical Engine
                  </span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    SEO, SEM, Meta Ads, Audience Funnels, Analytics &amp; Conversion Optimization.
                  </p>
                </div>
              </div>

              {/* CENTER: ANIMATED TRANSPARENT BRAIN WITH PULSING ENERGY BEAMS */}
              <div className="relative flex flex-col items-center justify-center py-2 sm:py-4">
                {/* Pulsing Ambient Halo behind Brain */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-nm-orange/30 blur-2xl animate-pulse-slow pointer-events-none" />

                {/* Floating Animated Brain Element */}
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-36 xs:w-44 sm:w-56 lg:w-60 aspect-square flex items-center justify-center filter drop-shadow-[0_0_35px_rgba(255,107,0,0.35)]"
                >
                  <img
                    src={transparentBrainImg || "/brain-strategy.jpg"}
                    alt="Nine Media Left Brain vs Right Brain Strategy"
                    className="w-full h-full object-contain mix-blend-screen"
                  />
                </motion.div>

                {/* Center Brain Badge */}
                <div className="mt-2 sm:mt-3 inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/15 text-slate-200 text-[10px] sm:text-[11px] font-mono font-semibold shadow-lg backdrop-blur-md">
                  <Brain className="w-3.5 h-3.5 text-nm-yellow shrink-0" />
                  <span>Unified Growth Engine</span>
                </div>
              </div>

              {/* RIGHT SIDE EXPLANATION: 02 / RIGHT BRAIN */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-nm-orange/20 via-[#1C1410] to-[#0A0C16] border border-nm-orange/40 relative shadow-xl hover:border-nm-orange/70 transition-all group/right">
                <div className="flex items-center justify-between border-b border-nm-orange/20 pb-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-nm-orange/20 border border-nm-orange/30 flex items-center justify-center text-nm-yellow shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] sm:text-[10px] text-nm-yellow tracking-widest uppercase font-bold block">02 / RIGHT BRAIN</span>
                      <h4 className="font-display font-bold text-sm sm:text-lg text-white group-hover/right:text-nm-yellow transition-colors">Creative Magic</h4>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-nm-yellow bg-nm-orange/10 px-2 sm:px-2.5 py-1 rounded-full border border-nm-orange/30 shrink-0">
                    Visual Engine
                  </span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-nm-orange/10 border border-nm-orange/20">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-nm-yellow shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    Logo Design, Brand Identity, Motion Graphics &amp; Video Production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
