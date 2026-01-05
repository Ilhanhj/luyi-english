"use client";

import { Star, Quote, Sparkles } from "lucide-react";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Mahasiswa",
    tutor: "Mr. Ilhan",
    text: "Mr. Ilhan cara ngajarnya asik banget! Gak kaku, humoris, tapi materinya nempel. Grammar yang tadinya serem jadi gampang dimengerti.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Karyawan Swasta",
    tutor: "Miss Yuli",
    text: "Sangat terbantu dengan kelas Miss Yuli. Penjelasannya detail dan sabar banget ngadepin saya yang basic-nya nol.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Freelancer",
    tutor: "Mr. John",
    text: "Conversation class sama Mr. John bener-bener bikin PD. Awalnya takut salah ngomong, sekarang malah ketagihan cas-cis-cus.",
    rating: 5,
  },
  {
    name: "Rina Kartika",
    role: "Ibu Rumah Tangga",
    tutor: "Miss Sarah",
    text: "Anak saya les di sini seneng banget. Miss Sarah kreatif, belajarnya pake games jadi gak bosen. Nilai di sekolah langsung naik.",
    rating: 5,
  },
  {
    name: "Dimas Anggara",
    role: "Job Seeker",
    tutor: "Mr. Ilhan",
    text: "Persiapan interview kerja dibantu Mr. Ilhan, alhamdulillah lolos di perusahaan multinasional! Thank you Luyi English!",
    rating: 5,
  },
  {
    name: "Citra Kirana",
    role: "Pelajar SMA",
    tutor: "Miss Yuli",
    text: "Tadinya benci banget pelajaran Bahasa Inggris, tapi gara-gara Miss Yuli jadi malah jadi pelajaran favorit sekarang.",
    rating: 5,
  },
  {
    name: "Eka Saputra",
    role: "Entrepreneur",
    tutor: "Mr. Ilhan",
    text: "Business English class-nya daging semua. Mr. Ilhan ngasih contoh kasus real yang sering saya alami pas meeting sama klien asing.",
    rating: 5,
  },
  {
    name: "Fani Rahmawati",
    role: "Dokter",
    tutor: "Miss Sarah",
    text: "Jadwal saya padat banget, tapi Miss Sarah fleksibel dan pengertian. Progres belajar tetap jalan terus walau saya sering reschedule.",
    rating: 5,
  },
];

const ReviewCard = ({
  name,
  role,
  tutor,
  text,
  rating,
}: {
  name: string;
  role: string;
  tutor: string;
  text: string;
  rating: number;
}) => {
  return (
    <div className="relative flex-shrink-0 w-[300px] md:w-[380px] p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:bg-slate-900 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 hover:z-10 group/card cursor-default">
      
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
            {/* Avatar dengan Gradient Ring */}
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm shadow-inner border border-white/10 group-hover/card:border-amber-400/50 transition-colors">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-white text-sm group-hover/card:text-amber-100 transition-colors">{name}</h4>
                <p className="text-xs text-slate-400">{role}</p>
            </div>
        </div>
        
        {/* Rating Badge */}
        <div className="bg-slate-950/50 px-2 py-1 rounded-lg border border-white/5 group-hover/card:border-amber-500/20 transition-colors">
            <div className="flex gap-0.5">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
            </div>
        </div>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4 group-hover/card:text-white transition-colors relative z-10">
        "{text}"
      </p>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
         <div className="text-xs text-slate-500 flex items-center gap-2">
            Mentor: 
            <span className="flex items-center gap-1 text-blue-300 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                <Sparkles className="w-2.5 h-2.5" /> {tutor}
            </span>
         </div>
         <Quote className="w-4 h-4 text-white/10 rotate-180 group-hover/card:text-amber-500/20 transition-colors" />
      </div>
    </div>
  );
};

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden bg-slate-950">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="text-center" data-aos="fade-up">
          <SectionTitle>{t.testimonials.title}</SectionTitle>
          <SectionSubtitle className="mt-4 text-slate-400">
            {t.testimonials.subtitle}
          </SectionSubtitle>
        </div>
      </div>

      {/* === INFINITE MARQUEE AREA === */}
      <div className="relative w-full overflow-hidden group space-y-10">
        
        {/* Gradient Mask (Fade Out Kiri Kanan) */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

        {/* ROW 1: Kiri */}
        <div className="flex gap-6 animate-marquee w-max pl-4 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, idx) => (
             <ReviewCard key={`row1-${idx}`} {...item} />
          ))}
        </div>

        {/* ROW 2: Kanan (Reverse) */}
        <div className="flex gap-6 animate-marquee-reverse w-max pl-4 hover:[animation-play-state:paused]">
          {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((item, idx) => (
             <ReviewCard key={`row2-${idx}`} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}