"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Zap, Target, Award, Rocket } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={containerRef} className="bg-[#0D0E15] py-24 md:py-32 overflow-hidden relative border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-nm-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Text */}
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
              Nine Media is an integrated branding &amp; digital marketing agency empowering businesses since <span className="text-white font-semibold">2018</span>. We have partnered with <span className="text-nm-yellow font-semibold">150+ leading brands</span> across hospitality, education, healthcare, D2C, and corporate sectors to drive quantifiable revenue and audience growth.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed font-normal">
              Traditional branding agencies often miss digital growth hacks, while pure digital firms lack creative storytelling. At Nine Media, we combine both under one roof &mdash; giving your brand an unfair advantage.
            </p>

            {/* Stats Counter Grid */}
            <div ref={ref} className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-nm-orange mb-1">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-3xl text-white">
                  {inView ? <CountUp end={150} duration={2.5} /> : "0"}+
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Brands Empowered</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-nm-yellow mb-1">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-3xl text-white">
                  {inView ? <CountUp end={new Date().getFullYear() - 2018} duration={2} /> : "0"}+
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Years Experience</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="text-nm-red mb-1">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-3xl text-white">
                  {inView ? <CountUp end={9} duration={2} /> : "0"}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Core Solutions</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Graphic Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: yVisual }}
            className="relative rounded-3xl overflow-hidden aspect-auto sm:aspect-[4/3] grid grid-cols-1 sm:grid-cols-2 border border-white/15 shadow-2xl bg-gradient-to-b from-[#141724] to-[#0A0C14]"
          >
            {/* Left Brain - Strategy */}
            <div className="border-b sm:border-b-0 sm:border-r border-white/10 p-6 sm:p-8 flex flex-col justify-between relative group hover:bg-white/5 transition-colors gap-6 sm:gap-0">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Target className="w-5 h-5 text-nm-orange" />
              </div>
              <div>
                <span className="font-mono text-xs text-nm-orange tracking-widest uppercase block mb-1">Analytical</span>
                <h4 className="font-display font-bold text-xl text-white">Data Strategy</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  SEO, SEM, Meta Ads, Audience Funnels, Analytics &amp; Conversion Optimization.
                </p>
              </div>
              <span className="font-mono text-[10px] text-slate-500 uppercase">01 / LEFT BRAIN</span>
            </div>

            {/* Right Brain - Creative */}
            <div className="p-6 sm:p-8 flex flex-col justify-between relative group bg-gradient-to-br from-nm-orange/20 via-nm-yellow/10 to-transparent hover:from-nm-orange/30 transition-all gap-6 sm:gap-0">
              <div className="w-10 h-10 rounded-xl bg-nm-gradient flex items-center justify-center text-nm-ink">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-nm-yellow tracking-widest uppercase block mb-1">Visual</span>
                <h4 className="font-display font-bold text-xl text-white">Creative Magic</h4>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                  Logo Design, Brand Identity, Motion Graphics &amp; Video Production.
                </p>
              </div>
              <span className="font-mono text-[10px] text-nm-yellow uppercase">02 / RIGHT BRAIN</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
