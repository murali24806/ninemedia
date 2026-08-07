import { contact } from "./data";
import { MessageCircle, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05060A] py-14 border-t border-white/10 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 - Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#top" className="inline-block">
              <img
                src="/logo-full.jpg"
                alt="Nine Media Brand Solutions"
                className="h-11 w-auto object-contain rounded-md"
              />
            </a>
            <p className="text-xs leading-relaxed max-w-sm text-slate-400">
              Nine Media is an integrated branding &amp; digital marketing agency helping brands sell more since 2018. Integrated web design, performance marketing, video production, and social media growth.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-nm-orange transition-colors">About Agency</a></li>
              <li><a href="#services" className="hover:text-nm-orange transition-colors">Core Solutions</a></li>
              <li><a href="#portfolio" className="hover:text-nm-orange transition-colors">Selected Work</a></li>
              <li><a href="#case-studies" className="hover:text-nm-orange transition-colors">Case Studies</a></li>
              <li><a href="#careers" className="hover:text-nm-orange transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3 - Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Contact Hub</h4>
            <div className="space-y-2.5 text-xs">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-slate-300 hover:text-nm-yellow transition-colors">
                <Mail className="w-3.5 h-3.5 text-nm-orange shrink-0" />
                {contact.email}
              </a>
              <div className="flex flex-col gap-1">
                <a href={`tel:${contact.phoneRaw}`} className="flex items-center gap-2 text-slate-300 hover:text-nm-yellow transition-colors">
                  <Phone className="w-3.5 h-3.5 text-nm-orange shrink-0" />
                  {contact.phone}
                </a>
                <a href={`tel:${contact.phone2Raw}`} className="flex items-center gap-2 text-slate-300 hover:text-nm-yellow transition-colors pl-5">
                  {contact.phone2}
                </a>
              </div>
              <a 
                href={`https://wa.me/${contact.whatsappRaw}?text=Hello%20Nine%20Media%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline mt-1"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]/20 stroke-[2.2]" />
                WhatsApp Direct Link
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-mono text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Nine Media Brand Solutions. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-slate-400 hover:text-nm-orange transition-colors font-mono text-[11px]"
          >
            Back To Top <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
