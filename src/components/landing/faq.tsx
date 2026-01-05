
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
    <section id="faq" className="py-16 md:py-24 bg-background relative">
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
              <AccordionItem key={item.id} value={item.id} className="bg-card border border-primary/20 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline px-6 py-4 text-primary hover:bg-secondary/50 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base bg-secondary/30 px-6">
                  <div className="pt-4">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
