"use client";

import { motion } from "framer-motion";
import { contact } from "./data";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Hover Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:flex items-center gap-2 bg-[#0F111A]/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-2xl"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        Need help? Chat on WhatsApp
      </motion.div>

      {/* Floating Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all group cursor-pointer"
        aria-label="Chat with Nine Media on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-60" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/20 stroke-[2.2]" />
      </motion.a>
    </div>
  );
}
