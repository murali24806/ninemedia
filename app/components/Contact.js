"use client";

import { useState } from "react";
import { contact } from "./data";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-[#08090D] py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-orange text-xs font-mono tracking-widest uppercase mb-4">
              <Mail className="w-3.5 h-3.5" />
              {contact.name}
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Let&rsquo;s Build a Brand That <span className="text-gradient">Sells More.</span>
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed max-w-md text-sm">
              Ready to accelerate your market growth? Reach out directly or send us a brief inquiry, and our strategy team will respond within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-nm-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Headquarters</h4>
                  <p className="text-sm font-bold text-white mt-1">{contact.name}</p>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-nm-yellow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Call Us Directly</h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    <a href={`tel:${contact.phoneRaw}`} className="text-sm font-bold text-white hover:text-nm-yellow transition-colors">
                      {contact.phone}
                    </a>
                    <span className="text-slate-500 text-xs">•</span>
                    <a href={`tel:${contact.phone2Raw}`} className="text-sm font-bold text-white hover:text-nm-yellow transition-colors">
                      {contact.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-nm-red">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Email Inquiry</h4>
                  <a href={`mailto:${contact.email}`} className="text-sm font-bold text-white hover:text-nm-orange transition-colors mt-1 block">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20discuss%20a%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-lg hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20 stroke-[2.2]" />
                  Chat on WhatsApp ({contact.whatsapp})
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#141724] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl space-y-6"
          >
            <h3 className="font-display font-bold text-xl text-white mb-2">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-nm-orange focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Your Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-nm-orange focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-nm-orange focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Project Brief</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-nm-orange focus:outline-none resize-none transition-colors"
                  placeholder="Tell us about your brand goals, target timeline, or required services..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-nm-gradient text-nm-ink font-bold text-xs uppercase tracking-wider shadow-lg shadow-nm-orange/30 hover:scale-102 transition-all flex items-center justify-center gap-2"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Message Sent Successfully
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Inquiry
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-xs text-nm-yellow text-center mt-3">
                Thank you! Our strategy team will reach out to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
