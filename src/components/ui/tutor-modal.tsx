"use client";

import { X, Star, Briefcase, GraduationCap, Quote, Send, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Tutor {
  id: number;
  name: string;
  role: string;
  specialization?: string;
  experience: string;
  bio: string;
  image: string;
  rating?: number;
  students?: string;
  testimonials: { quote: string; author: string }[];
}

interface TutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutor: Tutor | null;
}

export function TutorModal({ isOpen, onClose, tutor }: TutorModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const headerEl = document.querySelector("header");

    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";

      if (headerEl) {
        headerEl.style.opacity = "0";
        headerEl.style.pointerEvents = "none";
        headerEl.style.transition = "opacity 0.2s ease";
      }
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";

      if (headerEl) {
        headerEl.style.opacity = "1";
        headerEl.style.pointerEvents = "auto";
      }

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;
  if (!tutor) return null;

  return (
    <div className={cn("fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
      {/* 1. BACKDROP */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" onClick={onClose} />

      {/* 2. MODAL CONTENT - KUNCI TINGGI DI SINI (h-[85vh] md:h-[600px]) */}
      <div
        className={cn(
          "relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[600px] transition-all duration-300 transform",
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8",
        )}
      >
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white transition-colors backdrop-blur-md border border-white/10">
          <X className="w-5 h-5" />
        </button>

        {/* === LEFT COLUMN: IMAGE === */}
        {/* Tambah shrink-0 biar gambar nggak kegencet */}
        <div className="w-full md:w-1/3 relative h-56 md:h-full shrink-0 bg-slate-800">
          <Image src={tutor.image} alt={tutor.name} fill unoptimized={true} className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/90" />

          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <Badge className="bg-amber-500/90 text-slate-900 backdrop-blur-md border-0 w-fit">
              <Star className="w-3 h-3 mr-1 fill-slate-900" />
              {tutor.rating ? tutor.rating.toFixed(1) : "5.0"}
            </Badge>
            <Badge variant="outline" className="bg-black/40 backdrop-blur-md text-white border-white/20 w-fit text-xs">
              <Briefcase className="w-3 h-3 mr-1.5" />
              {tutor.experience}
            </Badge>
          </div>
        </div>

        {/* === RIGHT COLUMN: DETAILS === */}
        {/* KUNCI SCROLL: Tambah flex-1 dan min-h-0 di bungkusnya */}
        <div className="w-full md:w-2/3 flex flex-col bg-slate-900 flex-1 min-h-0">
          {/* SCROLLABLE AREA: Tambah min-h-0 biar scroll-nya fungsi */}
          <div className="flex-1 overflow-y-auto p-5 md:p-7 custom-scrollbar min-h-0">
            {/* Header Info */}
            <div className="mb-5">
              <h4 className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                {tutor.role}
              </h4>
              <h2 className="text-2xl font-extrabold text-white mb-2">{tutor.name}</h2>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {tutor.specialization?.split("/").map((spec, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-200 text-[10px] font-medium border border-blue-500/20">
                    {spec.trim()}
                  </span>
                )) || <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-200 text-[10px] font-medium">{tutor.role}</span>}
              </div>
            </div>

            {/* Bio Section */}
            <div className="mb-6">
              <p className="text-slate-300 leading-relaxed text-sm">{tutor.bio}</p>
            </div>

            {/* Testimonials Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-slate-400 border-b border-white/10 pb-2 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-slate-500" />
                What Students Say
              </h3>

              <div className="flex flex-col gap-3">
                {tutor.testimonials.length > 0 ? (
                  tutor.testimonials.slice(0, 3).map((testi, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-slate-300 text-sm italic leading-relaxed">"{testi.quote}"</p>
                      <p className="text-amber-400 text-[11px] font-bold mt-3 text-right uppercase tracking-wide">— {testi.author}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 text-sm italic">Belum ada testimoni.</p>
                )}
              </div>
            </div>
          </div>

          {/* STICKY CTA FOOTER: Tambah shrink-0 biar nggak kegencet area scroll */}
          <div className="p-5 md:px-7 md:py-4 border-t border-white/10 bg-slate-900/95 backdrop-blur-md shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>
                Bergabung dengan <strong className="text-white">{tutor.students || "50+"}</strong> murid
              </span>
            </div>
            <Button asChild size="sm" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all">
              <Link href={`https://wa.me/6289526437454?text=Halo%20Admin%20Luyi%20English!%0A%0ASaya%20tertarik%20untuk%20mendaftar%20kelas%20nih.%20Boleh%20minta%20info%20lebih%20lanjut%3F`} target="_blank">
                <Send className="w-3.5 h-3.5 mr-1.5" />
                Daftar Kelas Ini
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
