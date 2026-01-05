"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight, Users, Star, ThumbsUp, GraduationCap, Send, Clock, Globe } from "lucide-react";
// Pastikan path Sparkles benar
import { Sparkles } from "./sparkles"; 
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const FloatingElement = ({ className }: { className?: string }) => (
    <div className={cn("absolute pointer-events-none opacity-30 mix-blend-overlay blur-md animate-float-slow", className)}>
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl"></div>
    </div>
);

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  // DATA STATISTIK DIPERBANYAK (6 ITEM)
  const stats = [
    // Item 1: Wide (Span 2)
    { 
      id: "students",
      icon: Users, 
      value: "10,000+", 
      label: t.hero.stats.students, 
      color: "text-blue-400", 
      span: "md:col-span-2" // Kotak Besar
    },
    // Item 2: Small
    { 
      id: "tutors",
      icon: GraduationCap, 
      value: "50+", 
      label: t.hero.stats.tutors, 
      color: "text-amber-400", 
      span: "md:col-span-1" 
    },
    // Item 3: Small
    { 
      id: "satisfaction",
      icon: ThumbsUp, 
      value: "98%", 
      label: t.hero.stats.satisfaction, 
      color: "text-emerald-400", 
      span: "md:col-span-1" 
    },
    // Item 4: Small
    { 
      id: "rating",
      icon: Star, 
      value: "4.9/5", 
      label: t.hero.stats.rating, 
      color: "text-yellow-400", 
      span: "md:col-span-1" 
    },
    // Item 5: Small (NEW) - Anggap aja tambah di translation nanti
    { 
      id: "hours",
      icon: Clock, 
      value: "50k+", 
      label: language === 'id' ? "Jam Mengajar" : "Hours Taught", 
      color: "text-purple-400", 
      span: "md:col-span-1" 
    },
    // Item 6: Wide (Span 2) (NEW)
    { 
      id: "countries",
      icon: Globe, 
      value: "12+", 
      label: language === 'id' ? "Negara Siswa" : "Student Countries", 
      color: "text-cyan-400", 
      span: "md:col-span-2" // Kotak Besar
    },
  ];

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[95vh]">
      
      {/* ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-blue-700/30 rounded-full blur-[120px] mix-blend-screen animate-[blob_20s_infinite_alternate]" />
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] mix-blend-screen animate-[blob_25s_infinite_alternate_reverse]" />
      </div>

      <FloatingElement className="top-20 left-[10%] w-20 h-20 rotate-12 animate-[float_8s_ease-in-out_infinite]" />
      <FloatingElement className="bottom-40 right-[15%] w-24 h-24 -rotate-12 animate-[float_10s_ease-in-out_infinite_1s]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 items-center text-center max-w-5xl mx-auto">
          
          {/* MAIN HERO CONTENT */}
          <div className="space-y-8 flex flex-col items-center" data-aos="fade-up">
            <Badge variant="outline" className="py-1.5 px-4 glass-card text-amber-300 border-amber-500/30 text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
               {t.hero.trustBadge}
            </Badge>

            <div className="relative inline-block">
                <Sparkles className="absolute -top-12 -left-8 md:-top-16 md:-left-16 w-16 h-16 md:w-28 md:h-28 text-amber-400 animate-pulse z-0 opacity-90" />
                <h1 className="relative z-10 text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-200 to-amber-500 drop-shadow-sm">
                    {t.hero.title}
                  </span>
                </h1>
                <Sparkles className="absolute -bottom-12 -right-8 md:-bottom-16 md:-right-16 w-16 h-16 md:w-28 md:h-28 text-blue-400 animate-pulse delay-700 z-0 opacity-90" />
            </div>

            <p className="mx-auto max-w-[750px] text-slate-300 md:text-xl font-medium leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 w-full sm:w-auto">
              <Button asChild variant="outline" size="lg" className="glass-card border-white/10 text-white backdrop-blur-md rounded-full h-14 px-8 text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 w-full sm:w-auto">
                <Link href="#tutors">
                  {t.hero.cta.viewTutors} <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full h-14 px-8 text-lg shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:-translate-y-1 border-0 w-full sm:w-auto overflow-hidden">
                <Link href="https://wa.me/6281234567890" target="_blank" className="flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></span>
                  <Send className="mr-2 h-5 w-5 relative z-10 fill-white/20" />
                  <span className="relative z-10">{t.hero.cta.freeTrial}</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* === 3. STATS (IMPROVED BENTO GRID) === */}
          <div className="mt-16 md:mt-24 w-full px-2" data-aos="fade-up" data-aos-delay="200">
            {/* GRID SYSTEM: 4 COLUMNS BIAR RAPI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
              
              {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "group relative overflow-hidden rounded-[2rem] border border-white/10 transition-all duration-500",
                      "bg-slate-900/40 backdrop-blur-xl",
                      "hover:-translate-y-1 hover:shadow-2xl hover:border-white/20",
                      // Menggunakan Span Dinamis dari Data
                      stat.span,
                      // Biar tinggi kartu konsisten
                      "flex flex-col justify-center min-h-[160px]"
                    )}
                  >
                    {/* Background Glow halus menyesuaikan warna icon */}
                    <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                        stat.color.replace("text-", "bg-")
                    )} />
                    
                    {/* Blob Dekorasi di pojok */}
                    <div className={cn(
                        "absolute -top-12 -right-12 w-24 h-24 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500",
                        stat.color.replace("text-", "bg-")
                    )} />

                    <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center h-full">
                      {/* Icon Box */}
                      <div className={cn(
                          "mb-3 p-3 rounded-2xl border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                          "bg-slate-950/30"
                      )}>
                        <stat.icon className={cn("h-7 w-7 md:h-8 md:w-8", stat.color)} strokeWidth={2} />
                      </div>

                      {/* Value */}
                      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm leading-none mt-1">
                        {stat.value}
                      </p>

                      {/* Label */}
                      <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-widest mt-3 group-hover:text-white transition-colors">
                        {stat.label}
                      </p>
                    </div>
                  </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}