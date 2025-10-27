"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";

import testiAdwiyah from '@/public/images/testimonials/testi-adwiyah.jpg';
import testiAprial from '@/public/images/testimonials/testi-aprial.jpg';
import testiBianca from '@/public/images/testimonials/testi-bianca.jpg';
import testiDevika from '@/public/images/testimonials/testi-devika.jpg';
import testiEva from '@/public/images/testimonials/testi-eva.jpg';
import testiFika from '@/public/images/testimonials/testi-fika.jpg';
import testiJuliana from '@/public/images/testimonials/testi-juliana.jpg';
import testiKhalid from '@/public/images/testimonials/testi-khalid.jpg';
import testiNat from '@/public/images/testimonials/testi-nat.jpg';
import testiNisa from '@/public/images/testimonials/testi-nisa.jpg';
import testiNofia from '@/public/images/testimonials/testi-nofvia.jpg';
import testiTeguh from '@/public/images/testimonials/testi-teguh.jpg';
import testiVania from '@/public/images/testimonials/testi-vania.jpg';
import testiWiwin from '@/public/images/testimonials/testi-wiwin.jpg';







// Testimonial data
export const testimonials = [
  { id: "1", imageUrl: testiAdwiyah, imageAlt: "Adwiyah" },
  { id: "2", imageUrl: testiAprial, imageAlt: "Aprial" },
  { id: "3", imageUrl: testiBianca, imageAlt: "Bianca" },
  { id: "5", imageUrl: testiDevika, imageAlt: "Devika" },
  { id: "6", imageUrl: testiEva, imageAlt: "Eva" },
  { id: "7", imageUrl: testiFika, imageAlt: "Fika" },
  { id: "8", imageUrl: testiJuliana, imageAlt: "Juliana" },
  { id: "10", imageUrl: testiKhalid, imageAlt: "Khalid" },
  { id: "11", imageUrl: testiNat, imageAlt: "Nat" },
  { id: "12", imageUrl: testiNisa, imageAlt: "Nisa" },
  { id: "13", imageUrl: testiNofia, imageAlt: "Nofvia" },
  { id: "14", imageUrl: testiTeguh, imageAlt: "Teguh" },
  { id: "15", imageUrl: testiVania, imageAlt: "Vania" },
  { id: "16", imageUrl: testiWiwin, imageAlt: "Wiwin" },
];


export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-transparent relative overflow-hidden"
    >
      {/* Background gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-blue-500/10 via-pink-400/10 to-purple-400/10 rounded-full blur-[120px] -z-10 dark:from-blue-500/20 dark:via-pink-500/20 dark:to-purple-500/20"></div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <SectionTitle>Apa Kata Mereka?</SectionTitle>
          <SectionSubtitle>
            Cerita nyata dari para siswa yang belajar bersama LuyiEnglish
          </SectionSubtitle>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-4 h-full">
                  <Card className="overflow-hidden rounded-2xl shadow-lg shadow-black/5 border border-border hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg dark:from-white/5 dark:to-white/10">
                    <CardContent className="p-0">
                    <Image
  src={testimonial.imageUrl}
  alt={testimonial.imageAlt}
  width={400}
  height={600}
  className="w-full h-auto object-cover rounded-2xl"
/>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="hidden sm:flex -left-12 bg-background/50 border-border text-foreground hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex -right-12 bg-background/50 border-border text-foreground hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  );
}
