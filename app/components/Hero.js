"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { contact } from "./data";

export default function Hero() {
  const containerRef = useRef(null);
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
      className="relative overflow-hidden bg-[#08090D] pt-36 pb-24 md:pt-48 md:pb-36 min-h-[92vh] flex items-center"
    >
      {/* Dynamic Background Glow & Ambient Elements */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        {/* Main Ambient Radial Lights */}
        <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] bg-nm-orange/15 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-nm-yellow/10 rounded-full blur-[130px]" />
        
        {/* Subtle Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: `32px 32px`
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-8 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Branding &amp; Digital Agency</span>
          </div>

          {/* Dynamic Animated Title */}
          <h1 className="font-display font-black text-white text-[2.6rem] leading-[1.08] sm:text-[3.8rem] lg:text-[4.4rem] tracking-tight">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em]">
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
          <p className="mt-8 max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Nine Media empowers brands to achieve maximum revenue and visibility since 2018. 
            We integrate strategic brand identity, high-conversion digital marketing, and video production into one accountable partner.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-nm-gradient text-nm-ink font-bold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] hover:scale-105 transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${contact.phoneRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-nm-orange/50 transition-all"
            >
              Quick Consultation
            </a>
          </div>

          {/* Feature Highlights Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
            <div>
              <div className="font-display font-bold text-2xl text-white">6+ Years</div>
              <div className="text-xs text-slate-400 mt-1">Proven Excellence</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-white">150+</div>
              <div className="text-xs text-slate-400 mt-1">Successful Campaigns</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-white">50+</div>
              <div className="text-xs text-slate-400 mt-1">Trusted Clients</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column Logo Graphic Showcase */}
        <motion.div
          style={{ opacity: opacityGraphic }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Glass Card Container for Logo Icon */}
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center group hover:border-nm-orange/40 transition-all duration-500">
            {/* Spinning Gradient Ring */}
            <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-nm-yellow via-nm-orange to-nm-red opacity-20 blur-md group-hover:opacity-50 transition-opacity" />

            {/* Main Brand Logo Mark Image */}
            <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_35px_rgba(255,107,0,0.4)]">
              <img
                src="/logo-icon.jpg"
                alt="Nine Media Icon"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>

            {/* Floating Metric Pill 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-[#0F111A]/90 border border-white/15 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-nm-orange/20 flex items-center justify-center text-nm-orange">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">ROI Driven</div>
                <div className="text-[10px] text-slate-400">Targeted Growth</div>
              </div>
            </motion.div>

            {/* Floating Metric Pill 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-[#0F111A]/90 border border-white/15 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-nm-yellow/20 flex items-center justify-center text-nm-yellow">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Full-Stack Media</div>
                <div className="text-[10px] text-slate-400">9 Core Services</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
