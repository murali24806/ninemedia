"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, contact } from "./data";
import { 
  Laptop, 
  PenTool, 
  Box, 
  TrendingUp, 
  Target, 
  Share2, 
  Video, 
  Rocket, 
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const getIcon = (index) => {
  const icons = [Laptop, PenTool, Box, TrendingUp, Target, Share2, Video, Rocket, ShieldCheck];
  const Icon = icons[index] || Laptop;
  return <Icon className="w-6 h-6 text-nm-orange group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" strokeWidth={1.8} />;
};

const serviceDeliverables = {
  "01": ["SEO-Optimized Code", "Custom UI/UX Design", "Mobile-First Layout", "Fast Page Speed"],
  "02": ["Vector Icon Marks", "Color Psychology", "Typography Guide", "Favicon & Scalable Formats"],
  "03": ["Product Packaging", "Brand Collateral", "Print & Retail Assets", "Social Templates"],
  "04": ["Full SMM Suite", "Google Business Profile", "Technical SEO", "Growth Reports"],
  "05": ["Meta & Google Ads", "Audience Research", "A/B Creative Testing", "High-ROAS Funnels"],
  "06": ["Instagram Reels & Post", "Community Management", "Viral Content Strategy", "Cross-Platform Reach"],
  "07": ["Corporate Storytelling", "High-End Video Editing", "Scripting & Storyboard", "Color Grading"],
  "08": ["Acquisition Funnels", "Conversion Rate Magic", "Customer Retention", "Growth Analytics"],
  "09": ["Online Review Defense", "Brand Sentiment Mgmt", "Internal Culture Assets", "Crisis Protection"],
};

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Digital", "Design", "Growth"];

  const filteredServices = services.filter((s) => {
    if (selectedTag === "All") return true;
    if (selectedTag === "Design") return ["02", "03", "07"].includes(s.n);
    if (selectedTag === "Digital") return ["01", "04", "05", "06"].includes(s.n);
    if (selectedTag === "Growth") return ["05", "08", "09"].includes(s.n);
    return true;
  });

  return (
    <section id="services" className="bg-[#08090D] py-24 md:py-36 relative border-t border-white/5 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-nm-orange/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-nm-yellow/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-nm-yellow text-xs font-mono tracking-widest uppercase mb-4 shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Capabilities
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Nine Core Solutions.
              <br />
              <span className="text-gradient">Engineered to Scale Brands.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-nm-gradient text-nm-ink shadow-lg shadow-nm-orange/25"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animated Services Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, idx) => {
              const isExpanded = expandedIndex === idx;
              const deliverables = serviceDeliverables[s.n] || [];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  key={s.n}
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className={`rounded-3xl p-7 md:p-8 border transition-all duration-500 group cursor-pointer relative flex flex-col justify-between ${
                    isExpanded
                      ? "bg-[#141724] border-nm-orange shadow-[0_0_40px_rgba(255,107,0,0.2)]"
                      : "bg-[#0F111A]/90 border-white/10 hover:border-nm-orange/50 hover:bg-[#141724] hover:-translate-y-1.5 shadow-xl"
                  }`}
                >
                  {/* Subtle Top Glow Line on Hover */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-nm-orange/0 group-hover:via-nm-orange/60 to-transparent transition-all duration-500" />

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-yellow group-hover:bg-nm-orange/20 group-hover:text-white group-hover:border-nm-orange/40 transition-all">
                        SOLUTION #{s.n}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-nm-orange/50 group-hover:bg-nm-orange/10 transition-all duration-300">
                        {getIcon(idx)}
                      </div>
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-nm-yellow transition-colors leading-snug">
                      {s.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10 pt-4"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-widest text-nm-yellow block mb-3 font-semibold">
                          Key Deliverables Include:
                        </span>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-200 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-nm-orange shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>

                        <a
                          href={`https://wa.me/${contact.phoneRaw}?text=Hello%20Nine%20Media%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(s.title)}%20solutions.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded-full bg-nm-gradient text-nm-ink font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-nm-orange/20 hover:scale-102 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Solution Consultation <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="group-hover:text-slate-200 transition-colors">
                      {isExpanded ? "Click to collapse" : "Click to expand details"}
                    </span>
                    <motion.div 
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-nm-orange group-hover:bg-nm-orange group-hover:text-nm-ink transition-all"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
