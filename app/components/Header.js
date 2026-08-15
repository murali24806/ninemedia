"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { contact } from "./data";
import { Phone, MessageCircle } from "lucide-react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-9 sm:h-11 md:h-14 w-36 xs:w-44 sm:w-56 md:w-64 max-w-[60vw] sm:max-w-none transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo-full.png"
              alt="Nine Media Brand Solutions"
              className="h-full w-full object-contain object-left"
            />
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-nm-yellow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-nm-orange" />
            {contact.phone}
          </a>
          <a
            href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-nm-gradient text-nm-ink text-xs font-bold shadow-lg shadow-nm-orange/20 hover:shadow-nm-orange/40 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden min-w-[44px] min-h-[44px] w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-all touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-3 sm:mx-6 rounded-2xl bg-[#0F111A]/95 border border-white/10 backdrop-blur-2xl shadow-2xl p-5 sm:p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto smooth-scroll-mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-200 hover:text-nm-orange transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="text-xs font-medium text-slate-300 flex items-center gap-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-nm-orange shrink-0" />
              {contact.phone} / {contact.phone2}
            </a>
            <a
              href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-nm-gradient text-nm-ink text-center text-xs font-bold shadow-lg"
            >
              Chat on WhatsApp ({contact.whatsapp})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
