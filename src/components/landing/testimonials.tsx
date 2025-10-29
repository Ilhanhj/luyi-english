
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-blue-500/10 via-pink-400/10 to-purple-400/10 rounded-full blur-[120px] -z-10 dark:from-blue-500/20 dark:via-pink-500/20 dark:to-purple-500/20"></div>

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

          <CarouselPrevious className="hidden sm:flex -left-12 bg-background/50 border-border text-foreground hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex -right-12 bg-background/50 border-border text-foreground hover:bg-secondary" />
        </Carousel>
        
        <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
          <Button asChild variant="outline" size="lg" className="bg-transparent backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-background/80 hover:border-pink-500/50 hover:text-pink-500 hover:scale-105 hover:-translate-y-px px-8 py-6 text-lg">
            <Link href="/testimonials-gallery">
              Lihat Semua Testimoni <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
