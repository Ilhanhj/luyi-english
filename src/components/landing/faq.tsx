
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Pertanyaan yang Sering Diajukan</SectionTitle>
          <SectionSubtitle>
            Tidak menemukan jawabanmu? Hubungi kami langsung.
          </SectionSubtitle>
        </div>
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
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
