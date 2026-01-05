"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, Users, Briefcase, Sparkles, GraduationCap, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const allTutors = [
  {
    id: 1,
    name: "Sarah Wijaya, M.Ed.",
    category: "business",
    rating: 5.0,
    students: "120+",
    experience: "5 Tahun",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&fit=crop", 
    specialization: "Business English Negotiation",
    bio: "Ekspertis dalam melatih profesional korporat untuk negosiasi dan presentasi internasional.",
  },
  {
    id: 2,
    name: "Mr. John Sterling",
    category: "ielts",
    rating: 4.9,
    students: "300+",
    experience: "8 Tahun",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&fit=crop",
    specialization: "IELTS Band 7+ Strategist",
    bio: "Native speaker (UK) yang fokus pada teknik 'rahasia' menaklukkan writing dan speaking IELTS.",
  },
  {
    id: 3,
    name: "Miss Emily Chen",
    category: "conversation",
    rating: 5.0,
    students: "250+",
    experience: "4 Tahun",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&fit=crop",
    specialization: "Daily & Travel Conversation",
    bio: "Belajar santai tanpa tekanan. Fokus membangun kepercayaan diri untuk ngobrol cas-cis-cus.",
  },
  {
    id: 4,
    name: "Kak Michael Davis",
    category: "kids",
    rating: 4.8,
    students: "100+",
    experience: "3 Tahun",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&h=500&fit=crop",
    specialization: "Fun English for Kids (4-12)",
    bio: "Metode 'Play-Based Learning'. Anak belajar lewat games, lagu, dan storytelling interaktif.",
  },
  {
    id: 5,
    name: "Dr. Jessica Tan",
    category: "grammar",
    rating: 5.0,
    students: "180+",
    experience: "6 Tahun",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&h=500&fit=crop",
    specialization: "Advanced Grammar Mastery",
    bio: "Membedah struktur grammar rumit menjadi rumus logika yang mudah dipahami.",
  },
  {
    id: 6,
    name: "David Smith, B.A.",
    category: "conversation",
    rating: 4.9,
    students: "400+",
    experience: "10 Tahun",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&fit=crop",
    specialization: "Public Speaking & Interview",
    bio: "Mantan jurnalis internasional, siap melatih intonasi dan struktur bicara yang meyakinkan.",
  },
];

export default function TutorsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const filteredTutors = allTutors.filter((tutor) => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || tutor.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", label: t.tutorsPage.filters.all },
    { id: "ielts", label: t.tutorsPage.filters.ielts },
    { id: "business", label: t.tutorsPage.filters.business },
    { id: "conversation", label: t.tutorsPage.filters.conversation },
    { id: "kids", label: t.tutorsPage.filters.kids },
    { id: "grammar", label: t.tutorsPage.filters.grammar },
  ];

  if (!mounted) return null;

  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-slate-200 selection:bg-amber-500/30 selection:text-amber-200">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 md:px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative" data-aos="fade-up">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />
           <Badge variant="outline" className="mb-4 glass-card text-amber-300 border-amber-500/30 gap-1">
              <Sparkles className="w-3 h-3" /> Official Mentors
           </Badge>
           <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-amber-200 tracking-tight mb-6">
             {t.tutorsPage.title}
           </h1>
           <p className="text-slate-400 text-lg leading-relaxed">
             {t.tutorsPage.subtitle}
           </p>
        </div>

        {/* FILTERS */}
        <div className="max-w-6xl mx-auto mb-12 space-y-8" data-aos="fade-up" data-aos-delay="100">
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                    <Search className="w-5 h-5" />
                </div>
                <Input 
                    type="text"
                    placeholder={t.tutorsPage.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 rounded-full bg-slate-900/60 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:ring-amber-400/20 transition-all shadow-lg backdrop-blur-md"
                />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                            "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
                            activeCategory === cat.id
                                ? "bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 border-transparent shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                                : "bg-slate-900/40 text-slate-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-slate-800/60"
                        )}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>

        {/* === TUTORS GRID (CLEAN VERSION) === */}
        <div className="max-w-7xl mx-auto">
            {filteredTutors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredTutors.map((tutor, index) => (
                        <Link 
                            href={`/tutors/${tutor.id}`}
                            key={tutor.id}
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 50)}
                            // CARD WRAPPER:
                            // 1. Group class untuk trigger hover effect anak-anaknya
                            // 2. Transition spesifik transform & border biar smooth dan gak jitter
                            className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/30 backdrop-blur-md transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500/40 cursor-pointer"
                        >
                            {/* === 1. IMAGE LAYER === */}
                            {/* Full height image, tapi nanti ditutup gradient di bawah */}
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src={tutor.image} 
                                    alt={tutor.name} 
                                    fill 
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Gradient Overlay: Lebih soft di atas biar muka kelihatan, pekat di bawah buat teks */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                            </div>

                            {/* === 2. TOP BADGES (Static) === */}
                            <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                                <Badge className="bg-blue-600/40 backdrop-blur-md text-white border-white/10 font-medium px-3 py-1">
                                    <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-blue-300" />
                                    {tutor.specialization.split(" ")[0]}
                                </Badge>
                            </div>
                            <div className="absolute top-5 right-5 z-20 bg-amber-500/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                                <Star className="w-3.5 h-3.5 fill-white text-white" />
                                <span className="text-xs font-bold text-slate-900">{tutor.rating.toFixed(1)}</span>
                            </div>

                            {/* === 3. CONTENT (Bottom Anchored) === */}
                            <div className="absolute bottom-0 left-0 w-full z-10 p-6 sm:p-8 flex flex-col justify-end h-full pointer-events-none">
                                
                                {/* Spacer agar konten ada di bawah */}
                                <div className="flex-1"></div>

                                {/* Text Content */}
                                <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-1">
                                    <div className="flex justify-between items-start gap-2">
                                        <div>
                                            <p className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-1 flex items-center gap-2">
                                                {tutor.specialization}
                                            </p>
                                            <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-100 transition-colors leading-tight drop-shadow-md">
                                                {tutor.name}
                                            </h3>
                                        </div>
                                        
                                        {/* Animated Arrow Icon (Pengganti Button) */}
                                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 backdrop-blur-sm">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-300/90 line-clamp-2 leading-relaxed max-w-[90%]">
                                        {tutor.bio}
                                    </p>

                                    {/* Minimalist Stats (Tanpa Button di bawahnya) */}
                                    <div className="pt-4 mt-2 border-t border-white/10 flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-emerald-400" />
                                            <span className="text-sm font-medium text-slate-200">{tutor.students} <span className="text-slate-500 text-xs">{t.tutorsPage.card.students}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-purple-400" />
                                            <span className="text-sm font-medium text-slate-200">{tutor.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                // EMPTY STATE
                <div className="text-center py-24 glass-card rounded-[3rem] max-w-2xl mx-auto border-dashed border-white/10" data-aos="zoom-in">
                    <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <Search className="w-10 h-10 text-slate-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Oops, Tutor Tidak Ditemukan</h3>
                    <p className="text-slate-400 max-w-md mx-auto">Kami tidak menemukan tutor dengan kriteria tersebut. Coba gunakan kata kunci lain atau reset filter.</p>
                    <Button variant="outline" onClick={() => {setSearchTerm(""); setActiveCategory("all")}} className="mt-6 rounded-full border-white/20 text-white hover:bg-white/10">
                        Reset Pencarian
                    </Button>
                </div>
            )}
        </div>

        {/* CTA BOTTOM */}
        <div className="mt-32 mb-10 max-w-5xl mx-auto relative" data-aos="zoom-in">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-amber-500/30 rounded-[3rem] blur-2xl opacity-50 -z-10"></div>
             <div className="glass-card p-10 md:p-16 rounded-[2.5rem] text-center border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-amber-300 to-blue-400 opacity-70"></div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{t.tutorsPage.cta.title}</h2>
                <p className="text-slate-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">{t.tutorsPage.cta.subtitle}</p>
                <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold rounded-full h-14 px-10 text-lg shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] hover:scale-105 transition-all">
                    <Link href="https://wa.me/6281234567890" target="_blank" className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        {t.tutorsPage.cta.btn}
                    </Link>
                </Button>
             </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}