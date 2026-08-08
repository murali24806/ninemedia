"use client";

import React from "react";
import { ContainerScroll } from "./ContainerScrollAnimation";
import { Sparkles, TrendingUp, ShieldCheck, Zap, ArrowRight, BarChart3 } from "lucide-react";
import { contact } from "./data";

export default function HeroScrollShowcase() {
  return (
    <section className="bg-[#08090D] relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-nm-gradient-glow pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-nm-yellow text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              3D Interactive Experience
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-display font-black text-white leading-tight">
              Unleash High-Impact <br />
              <span className="text-gradient">Brand Growth &amp; Performance</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-sm max-w-xl px-2">
              Scroll to explore Nine Media&rsquo;s unified marketing hub, campaign performance analytics, and brand identity ecosystem.
            </p>
          </div>
        }
      >
        {/* Dashboard Showcase Content inside 3D Card */}
        <div className="w-full h-full bg-[#0F111A] p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden text-left overflow-y-auto">
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: `24px 24px`
            }}
          />

          {/* Top Bar of Dashboard */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 relative z-10">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src="/logo-icon.jpg"
                alt="Nine Media Icon"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-contain border border-white/10"
              />
              <div>
                <div className="text-xs sm:text-sm font-bold text-white font-display">Nine Media Growth Engine</div>
                <div className="text-[9px] sm:text-[10px] text-nm-orange font-mono">Live Campaign Dashboard</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Campaigns Active
              </span>
              <a
                href={`https://wa.me/${contact.phoneRaw}?text=Hello%20Nine%20Media%2C%20I%20want%20to%20see%20live%20campaign%20dashboard%20demo`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-nm-gradient text-nm-ink font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg shadow-nm-orange/20 hover:scale-105 transition-all flex items-center gap-1"
              >
                Launch Growth <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Middle Dashboard Analytics Cards - 8-Year Company Growth */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-3 sm:my-6 relative z-10">
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141724] border border-white/10 flex flex-col justify-between">
              <div className="flex justify-between items-center text-slate-400 mb-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Campaigns Delivered</span>
                <BarChart3 className="w-4 h-4 text-nm-orange" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display">300+ Delivered</div>
              <div className="text-[10px] sm:text-[11px] text-emerald-400 mt-1.5 font-mono flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +340% Overall Expansion
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141724] border border-white/10 flex flex-col justify-between">
              <div className="flex justify-between items-center text-slate-400 mb-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Proven Track Record</span>
                <Zap className="w-4 h-4 text-nm-yellow" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display">8+ Years Scale</div>
              <div className="text-[10px] sm:text-[11px] text-nm-yellow mt-1.5 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Founded 2018 to 2026
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#141724] border border-white/10 flex flex-col justify-between">
              <div className="flex justify-between items-center text-slate-400 mb-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Client Retention</span>
                <Sparkles className="w-4 h-4 text-nm-red" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display">96.4% Retention</div>
              <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1.5 font-mono">
                150+ Brands Trust Us
              </div>
            </div>
          </div>

          {/* Bottom Banner Image / Graphic */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-nm-orange/20 via-nm-yellow/10 to-transparent p-3.5 sm:p-5 flex items-center justify-between relative z-10">
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-display">Integrated Branding &amp; Digital Marketing Engine</div>
              <div className="text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SEO, Web Development, Meta Ads, Video Production, &amp; SMM under one roof.</div>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Start Project &rarr;
            </a>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
