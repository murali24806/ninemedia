"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, ChevronLeft, ChevronRight, Maximize2, Sparkles, MessageCircle } from "lucide-react";
import { contact } from "./data";

export default function PortfolioModal({ item, onClose, logoData, impact }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close modal on ESC key and handle scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, isLightboxOpen]);

  if (!item) return null;

  // Fallback work images if none explicitly provided
  const images = item.workImages && item.workImages.length > 0
    ? item.workImages
    : [
        "/portfolio/sun_international_1.png",
        "/portfolio/hatrick_1.png",
        "/portfolio/bakehouse_1.png",
        "/portfolio/park_hotels_1.png",
      ];

  const currentImage = images[activeImageIndex] || images[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Nine Media! I am interested in seeing more work samples and results for ${item.client}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-5xl bg-[#0F111A] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        >
          {/* Top Header Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-[#141724]/95 backdrop-blur-md flex items-center justify-between sticky top-0 z-20 gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              {logoData && (
                <div className="h-9 sm:h-11 px-2.5 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img
                    src={logoData.src}
                    alt={item.client}
                    className={`max-h-6 sm:max-h-7 max-w-[90px] sm:max-w-[120px] object-contain ${
                      logoData.invertOnDark ? "filter invert brightness-200" : ""
                    }`}
                  />
                </div>
              )}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-white/10 text-nm-yellow border border-white/10">
                    {item.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-nm-orange font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 flex-shrink-0" />
                    {impact?.metric || "High ROAS Impact"}
                  </span>
                </div>
                <h3 className="font-display font-black text-lg sm:text-2xl text-white mt-0.5 truncate">
                  {item.client}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors flex-shrink-0 touch-manipulation"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1 scrollbar-thin">
            {/* Gallery / Image Showcase Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <h4 className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-nm-orange flex-shrink-0" />
                  Work Samples ({images.length})
                </h4>
                <span className="text-[10px] sm:text-[11px] text-slate-400">Tap image for fullscreen</span>
              </div>

              {/* Main Image Viewer */}
              <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden bg-black/80 border border-white/10 aspect-[4/3] sm:aspect-[16/9] flex items-center justify-center p-2 sm:p-4">
                <img
                  src={currentImage}
                  alt={`${item.client} Work Sample ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain transition-transform duration-300"
                />

                {/* Click to Expand Overlay */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-mono text-xs uppercase tracking-wider bg-black/30 backdrop-blur-xs touch-manipulation"
                >
                  <Maximize2 className="w-5 h-5" /> View Fullscreen
                </button>

                {/* Navigation Arrows for Gallery */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                      }}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-nm-orange hover:border-transparent transition-all shadow-lg touch-manipulation z-10"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                      }}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-nm-orange hover:border-transparent transition-all shadow-lg touch-manipulation z-10"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x">
                  {images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all touch-manipulation ${
                        activeImageIndex === idx
                          ? "border-nm-orange scale-105 shadow-md shadow-nm-orange/20"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Case Study Details & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-4 border-t border-white/10">
              {/* Campaign Highlights Column */}
              <div className="md:col-span-2 space-y-4 sm:space-y-5">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-nm-orange mb-1">
                    Project Overview
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.overview ||
                      item.tag ||
                      `High-impact branding and digital growth campaign designed specifically for ${item.client}.`}
                  </p>
                </div>

                {item.challenge && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                    <h5 className="text-[11px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                      Challenge
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.challenge}</p>
                  </div>
                )}

                {item.solution && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                    <h5 className="text-[11px] sm:text-xs font-mono font-bold text-nm-yellow uppercase tracking-wider mb-1">
                      Nine Media Approach &amp; Solution
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.solution}</p>
                  </div>
                )}
              </div>

              {/* Performance Impact Sidebar */}
              <div className="space-y-4 sm:space-y-5 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#181C2E] to-[#101322] border border-white/10 flex flex-col justify-between">
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    Key Performance Outcome
                  </span>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-nm-orange/10 border border-nm-orange/30">
                    <span className="text-xl sm:text-2xl font-black text-nm-yellow block font-display">
                      {impact?.metric || "Verified Growth"}
                    </span>
                    <span className="text-xs text-slate-300 mt-1 block">
                      {impact?.highlight || "Full Campaign Execution"}
                    </span>
                  </div>

                  <div className="space-y-2 pt-1 sm:pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      Services Provided
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(item.servicesProvided || ["Digital Marketing", "Branding", "Social Media"]).map((s, i) => (
                        <span key={i} className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct CTA to Contact Section */}
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.hash = "contact";
                      }
                    }, 100);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-nm-gradient hover:opacity-95 text-nm-ink font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 mt-3 sm:mt-4 cursor-pointer touch-manipulation"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  Discuss Similar Growth
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        {isLightboxOpen && (
          <div
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center touch-manipulation"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <img
              src={currentImage}
              alt="Fullscreen View"
              className="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
