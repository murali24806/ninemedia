"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, contact } from "./data";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-[#0D0E15] py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-yellow text-xs font-mono tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Got Questions? <span className="text-gradient">We&rsquo;ve Got Answers.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            Everything you need to know about partnering with Nine Media.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                openIndex === idx
                  ? "bg-[#141724] border-nm-orange/50 shadow-xl"
                  : "bg-[#0F111A] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="p-6 flex items-center justify-between gap-4">
                <h3 className="font-display font-bold text-base md:text-lg text-white">
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-nm-orange shrink-0"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Quick WhatsApp Inquiry Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-nm-orange/10 via-transparent to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-white text-base">Have a unique requirement?</h4>
            <p className="text-xs text-slate-400 mt-1">Talk directly to our lead strategy consultant on WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20have%20a%20question%20about%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20 stroke-[2.2]" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
