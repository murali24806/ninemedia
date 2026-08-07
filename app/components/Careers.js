import { roles, contact } from "./data";
import { Briefcase, ArrowUpRight } from "lucide-react";

export default function Careers() {
  return (
    <section id="careers" className="bg-[#0D0E15] py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-nm-yellow text-xs font-mono tracking-widest uppercase mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Join Our Team
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              We&rsquo;re Innovating.
              <br />
              <span className="text-gradient">And We&rsquo;re Hiring.</span>
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed max-w-md text-sm">
              Nine Media is constantly looking for exceptional creative strategists, performance marketers, motion designers, and account managers in Hyderabad.
            </p>

            <a
              href={`mailto:${contact.email}?subject=Career%20Inquiry%20-%20Nine%20Media`}
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-nm-gradient text-nm-ink font-bold text-xs uppercase tracking-wider shadow-lg shadow-nm-orange/20 hover:scale-105 transition-all"
            >
              Send Your Portfolio
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {roles.map((r) => (
              <div
                key={r.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#141724] p-6 hover:border-nm-orange/40 transition-all group"
              >
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-nm-yellow transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{r.type}</p>
                </div>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Job Application: " + r.title
                  )}`}
                  className="shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-nm-orange group-hover:bg-nm-gradient group-hover:text-nm-ink group-hover:border-transparent transition-all flex items-center gap-1"
                >
                  Apply Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
