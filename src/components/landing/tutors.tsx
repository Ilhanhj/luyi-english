"use client";

import Image from "next/image";
import { Star, Quote, Sparkles } from "lucide-react";
import { tutors as getTutors } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent, CardHeader } from "@/components/ui/card";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export default function Tutors() {
  const { language } = useLanguage();
  const t = translations[language];
  const tutors = getTutors(t);

  return (
    <section id="tutors" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Ambience (WPU Style Glows) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-blue-900/10 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12" data-aos="fade-up">
          <SectionTitle>{t.tutors.title}</SectionTitle>
          <SectionSubtitle className="mt-4 text-slate-400">
            {t.tutors.subtitle}
          </SectionSubtitle>
        </div>

        {/* UNIFIED CAROUSEL (Mobile & Desktop) */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {tutors.map((tutor) => (
                <CarouselItem key={tutor.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full pt-2 pb-2"> {/* Padding vertikal biar hover gak kepotong */}
                    <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10">
                      
                      {/* Card Header: Profile Info */}
                      <CardHeader className="p-6 pb-2 relative z-10">
                        <div className="flex items-start gap-4">
                          {/* Photo with Glowing Ring Effect */}
                          <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-blue-600 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                            <Image
                              src={tutor.photoUrl}
                              alt={`Photo of ${tutor.name}`}
                              width={80}
                              height={80}
                              className="relative rounded-2xl object-cover border-2 border-white/10 group-hover:border-transparent transition-all duration-300 shadow-lg"
                              data-ai-hint={tutor.photoHint}
                            />
                            {/* Verified Icon (Optional fun detail) */}
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1 border-2 border-slate-900">
                                <Sparkles className="w-3 h-3 text-white" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg text-white truncate group-hover:text-amber-400 transition-colors">
                                {tutor.name}
                            </h3>
                            <p className="text-sm text-blue-200/80 font-medium truncate mb-2">
                                {tutor.specialization}
                            </p>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              <span className="font-bold text-xs text-white">{tutor.rating}</span>
                              <span className="text-[10px] text-slate-400">/ 5.0</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6 flex flex-col flex-grow relative z-10">
                        {/* Bio */}
                        <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                            {tutor.bio}
                        </p>
                        
                        {/* Review Section (The "Bubble") */}
                        <div className="mt-auto relative">
                             {/* Decorative Quote Icon Big Background */}
                             <Quote className="absolute -top-4 -left-2 w-8 h-8 text-amber-500/20 rotate-180" />
                             
                             <div className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-4 border border-white/5 relative backdrop-blur-sm">
                                <p className="text-sm italic text-slate-200 relative z-10 leading-relaxed">
                                    "{tutor.review.quote}"
                                </p>
                                <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-white/5">
                                    <div className="w-6 h-[1px] bg-amber-500/50"></div>
                                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                                        {tutor.review.author}
                                    </p>
                                </div>
                             </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons (Outside on desktop) */}
            <div className="hidden lg:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 border-white/10 bg-slate-900/50 text-white hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 border-white/10 bg-slate-900/50 text-white hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all" />
            </div>
            {/* Mobile Navigation (Simple dots or smaller arrows usually auto-handled, but we can add arrows below if needed) */}
            <div className="flex lg:hidden justify-center gap-4 mt-6">
                 <CarouselPrevious className="static translate-y-0 w-10 h-10 border-white/10 bg-slate-900/50 text-white hover:bg-amber-500 hover:text-slate-900" />
                 <CarouselNext className="static translate-y-0 w-10 h-10 border-white/10 bg-slate-900/50 text-white hover:bg-amber-500 hover:text-slate-900" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}