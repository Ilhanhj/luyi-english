"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Heart, ArrowUpRight } from "lucide-react";
import logo from '@/public/images/logo-luyi.png';
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

// --- CUSTOM SOCIAL ICONS ---
// Biar ikonnya persis dan tajam (terutama TikTok yang suka ga ada di library standar)
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
);


export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: InstagramIcon, 
      href: "https://instagram.com/luyienglish", 
      color: "hover:bg-pink-600 hover:border-pink-500" 
    },
    { 
      name: "TikTok", 
      icon: TiktokIcon, 
      href: "https://tiktok.com/@luyienglish", 
      color: "hover:bg-slate-800 hover:border-white" // TikTok color style
    },
    { 
      name: "WhatsApp", 
      icon: WhatsappIcon, 
      href: "https://wa.me/6281234567890", 
      color: "hover:bg-green-600 hover:border-green-500" 
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND COLUMN */}
          <div className="space-y-6">
            <Link href="#home" className="inline-block transition-transform hover:scale-105">
            <Image
  src={logo}
  alt="LuyiEnglish Logo"
  // Samakan rasionya
  width={160}
  height={51}
  className="w-40 object-contain opacity-90 hover:opacity-100 transition-opacity" 
  // HAPUS CLASS 'invert' DISINI JUGA
/>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  className={`w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative inline-block">
                {t.footer.quickLinks}
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-amber-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                  { label: t.nav.home, href: "#home" },
                  { label: t.nav.tutors, href: "#tutors" },
                  { label: t.nav.pricing, href: "#pricing" },
                  { label: t.nav.faq, href: "#faq" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. PROGRAMS (Static for now) */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative inline-block">
                Program
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
               {[
                 "General English", 
                 "TOEFL Preparation", 
                 "IELTS Mastery", 
                 "Business Conversation", 
                 "English for Kids"
                ].map((item) => (
                 <li key={item} className="text-slate-400 text-sm hover:text-blue-300 transition-colors flex items-center justify-between cursor-default group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                 </li>
               ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative inline-block">
                {t.footer.contactUs}
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-emerald-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 transition-colors shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="leading-relaxed">Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <Link href="mailto:hello@luyienglish.com" className="hover:text-white transition-colors">hello@luyienglish.com</Link>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <Link href="https://wa.me/6281234567890" target="_blank" className="hover:text-white transition-colors">+62 812 3456 7890</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Luyi English Course. {t.footer.rights}</p>
          <p className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> for Better Education
          </p>
        </div>
      </div>
    </footer>
  );
}