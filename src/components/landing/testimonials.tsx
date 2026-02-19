"use client";

import { useState, useEffect, useMemo } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { tutors as getTutors } from "@/lib/data";

const ReviewCard = ({ name, role, tutor, text, rating }: { name: string; role: string; tutor: string; text: string; rating: number }) => {
  return (
    // PERUBAHAN DI SINI: Tambah efek membesar (scale-[1.05]) dan efek meredup (group-hover/row:opacity-40 hover:!opacity-100)
    <div className="relative flex-shrink-0 w-[300px] md:w-[380px] h-[280px] flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md transition-all duration-500 opacity-100 group-hover/row:opacity-40 hover:!opacity-100 hover:scale-[1.05] hover:bg-slate-900 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 hover:!z-30 group/card cursor-default">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm shadow-inner border border-white/10 group-hover/card:border-amber-400/50 transition-colors uppercase shrink-0">
            {name.charAt(0)}
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-white text-sm group-hover/card:text-amber-100 transition-colors truncate max-w-[150px]">{name}</h4>
            <p className="text-xs text-slate-400 truncate max-w-[150px]">{role}</p>
          </div>
        </div>

        <div className="bg-slate-950/50 px-2 py-1 rounded-lg border border-white/5 group-hover/card:border-amber-500/20 transition-colors shrink-0">
          <div className="flex gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4 group-hover/card:text-white transition-colors relative z-10 flex-1">"{text}"</p>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10 shrink-0">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          Mentor:
          <span className="flex items-center gap-1 text-blue-300 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 truncate max-w-[120px]">
            <Sparkles className="w-2.5 h-2.5 shrink-0" /> <span className="truncate">{tutor}</span>
          </span>
        </div>
        <Quote className="w-4 h-4 text-white/10 rotate-180 group-hover/card:text-amber-500/20 transition-colors shrink-0" />
      </div>
    </div>
  );
};

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];
  const tutorsData = getTutors(t);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allTestimonials = useMemo(() => {
    const list: any[] = [];
    tutorsData.forEach((tutor) => {
      if (tutor.testimonials && tutor.testimonials.length > 0) {
        tutor.testimonials.forEach((testi) => {
          if (testi.author !== "Adwiyah" && testi.quote !== "Placeholder testimonial") {
            list.push({
              name: testi.author,
              role: "Student",
              tutor: tutor.name,
              text: testi.quote,
              rating: 5,
            });
          }
        });
      }
    });
    return list;
  }, [tutorsData]);

  if (!mounted) return null;
  if (allTestimonials.length === 0) return null;

  const halfLength = Math.ceil(allTestimonials.length / 2);
  const row1Data = allTestimonials.slice(0, halfLength);
  const row2Data = allTestimonials.slice(halfLength);

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="text-center" data-aos="fade-up">
          <SectionTitle>{t.testimonials?.title || "Testimonials"}</SectionTitle>
          <SectionSubtitle className="mt-4 text-slate-400">{t.testimonials?.subtitle || "Apa kata mereka tentang Luyi English."}</SectionSubtitle>
        </div>
      </div>

      {/* Container utama testimoninya */}
      <div className="relative w-full overflow-hidden space-y-10 py-4">
        {/* Gradient Mask (Makin lebar biar fade-nya lebih smooth di layar besar) */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

        {/* ROW 1: Tambah 'group/row' buat trigger efek focus */}
        {row1Data.length > 0 && (
          <div className="flex gap-6 animate-marquee w-max pl-4 hover:[animation-play-state:paused] group/row" style={{ animationDuration: "220s" }}>
            {[...row1Data, ...row1Data, ...row1Data].map((item, idx) => (
              <ReviewCard key={`row1-${idx}`} {...item} />
            ))}
          </div>
        )}

        {/* ROW 2: Tambah 'group/row' buat trigger efek focus */}
        {row2Data.length > 0 && (
          <div
            className="flex gap-6 animate-marquee-reverse w-max pl-4 hover:[animation-play-state:paused] group/row"
            style={{ animationDuration: "240s" }} // Dibuat beda 20s biar gak monoton
          >
            {[...row2Data, ...row2Data, ...row2Data].map((item, idx) => (
              <ReviewCard key={`row2-${idx}`} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
