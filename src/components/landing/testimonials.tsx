
"use client";

import Image from "next/image";
import Link from "next/link";
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
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { testimonials } from "@/lib/data";

const SpeechBubble = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    {children}
    <div className="absolute bottom-0 left-8 sm:left-12 transform translate-y-1/2 w-0 h-0 border-t-[20px] border-t-card border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent"></div>
  </div>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
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
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-4 h-full">
                  <SpeechBubble>
                    <Card className="overflow-hidden rounded-2xl shadow-lg border border-primary/20 hover:scale-[1.02] hover:shadow-xl transition-all duration-500 bg-card">
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
                  </SpeechBubble>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-12 bg-card border-primary/30 text-primary hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex -right-12 bg-card border-primary/30 text-primary hover:bg-secondary" />
        </Carousel>
        
        <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
          <Button asChild variant="outline" size="lg" className="bg-card border-primary/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-card/80 hover:border-accent hover:text-accent hover:scale-105 hover:-translate-y-px px-8 py-6 text-lg">
            <Link href="/testimonials-gallery">
              Lihat Semua Testimoni <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
