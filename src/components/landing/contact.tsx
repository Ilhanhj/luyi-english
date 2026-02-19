"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

// --- CUSTOM BRAND ICONS (SVG) ---
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const socialLinks = [
  {
    Icon: TiktokIcon,
    href: "https://tiktok.com/@luyienglish",
    label: "TikTok",
    hoverColor: "hover:bg-black hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]",
  },
  {
    Icon: InstagramIcon,
    href: "https://instagram.com/luyienglish",
    label: "Instagram",
    hoverColor: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]",
  },
  {
    Icon: WhatsappIcon,
    href: `https://wa.me/6289526437454?text=Halo%20Admin%20Luyi%20English!%0A%0ASaya%20tertarik%20untuk%20mendaftar%20kelas%20nih.%20Boleh%20minta%20info%20lebih%20lanjut%3F`,
    label: "WhatsApp",
    hoverColor: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]",
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* WIDE GLASS CARD */}
        <div className="max-w-7xl mx-auto glass-card rounded-[3rem] p-10 md:p-16 border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group" data-aos="fade-up">
          {/* Decorative Internal Glows (Balancing Left & Right) */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Highlight Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/30 via-amber-400/50 to-blue-500/30 opacity-50"></div>

          {/* FLEX CONTAINER: Kiri Teks, Kanan Tombol */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* LEFT COLUMN: Text & Context */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-amber-200 tracking-tight leading-tight">{t.contact.title}</h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">{t.contact.subtitle}</p>

              {/* Divider "Connect" (Aligned Left on Desktop) */}
              <div className="flex items-center gap-4 w-full max-w-[200px] mx-auto lg:mx-0 opacity-60 pt-4">
                <div className="h-px bg-white/20 flex-1"></div>
                <span className="text-xs text-white font-medium uppercase tracking-widest whitespace-nowrap">Connect Now</span>
                <div className="h-px bg-white/20 flex-1 lg:hidden"></div> {/* Hide right line on desktop */}
                <div className="hidden lg:block h-px bg-white/20 w-12"></div> {/* Shorter right line on desktop */}
              </div>
            </div>

            {/* RIGHT COLUMN: Actions */}
            <div className="flex flex-col items-center lg:items-end gap-8 shrink-0">
              {/* Main CTA Button (Huge & Glowing) */}
              <Button
                asChild
                size="lg"
                className="group/btn relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full h-16 px-12 text-xl shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:-translate-y-1 border-0 w-full sm:w-auto"
              >
                <Link
                  href={`https://wa.me/6289526437454?text=Halo%20Admin%20Luyi%20English!%0A%0ASaya%20tertarik%20untuk%20mendaftar%20kelas%20nih.%20Boleh%20minta%20info%20lebih%20lanjut%3F`}
                  target="_blank"
                  className="flex items-center justify-center gap-3"
                >
                  <Send className="w-6 h-6 fill-white/20 group-hover/btn:rotate-12 transition-transform" />
                  {t.contact.cta} <ArrowRight className="w-5 h-5 opacity-80" />
                </Link>
              </Button>

              {/* Social Media Row */}
              <div className="flex items-center gap-4">
                {socialLinks.map(({ Icon, href, label, hoverColor }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className={cn(
                      "w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-white/10 text-slate-400 transition-all duration-300 transform",
                      "hover:scale-110 hover:-translate-y-2 hover:shadow-xl",
                      hoverColor,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
