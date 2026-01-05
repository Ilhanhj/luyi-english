
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Faq() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12" data-aos="fade-up">
          <SectionTitle>{t.faq.title}</SectionTitle>
          <SectionSubtitle>
            {t.faq.subtitle}
          </SectionSubtitle>
        </div>
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="glass-card overflow-hidden !border-white/10">
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline px-6 py-4 text-white hover:bg-white/5 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base bg-transparent px-6">
                  <div className="pt-4 border-t border-white/10">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
