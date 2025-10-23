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
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Pertanyaan yang Sering Diajukan</SectionTitle>
          <SectionSubtitle>
            Tidak menemukan jawabanmu? Hubungi kami langsung.
          </SectionSubtitle>
        </div>
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
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
