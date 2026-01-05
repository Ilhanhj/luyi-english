"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Faq() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Ambience (Biar konsisten sama section lain) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 mix-blend-screen -translate-y-1/2" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] opacity-20 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 max-w-2xl mx-auto" data-aos="fade-up">
          <SectionTitle>{t.faq.title}</SectionTitle>
          <SectionSubtitle className="mt-4 text-slate-400">
            {t.faq.subtitle}
          </SectionSubtitle>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className={cn(
                    "group border px-2 transition-all duration-300 rounded-2xl",
                    // Default State: Glass gelap, border tipis
                    "bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60",
                    // Active State (Data-state=open): Ada glow amber dikit biar highlight
                    "data-[state=open]:border-amber-500/30 data-[state=open]:bg-slate-900/80 data-[state=open]:shadow-lg data-[state=open]:shadow-amber-900/10"
                )}
              >
                <AccordionTrigger 
                    className={cn(
                        "text-left text-base md:text-lg font-semibold px-4 py-6 hover:no-underline transition-all",
                        "text-slate-200 group-hover:text-white",
                        // Pas dibuka, teksnya jadi warna Amber (Emas) biar jelas mana yang aktif
                        "data-[state=open]:text-amber-400"
                    )}
                >
                  {item.question}
                </AccordionTrigger>
                
                <AccordionContent className="text-slate-400 text-base leading-relaxed px-4 pb-6">
                  {/* Garis pemisah halus yang cuma muncul pas dibuka */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}