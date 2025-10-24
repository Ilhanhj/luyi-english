"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-transparent relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Apa Kata Mereka?</SectionTitle>
          <SectionSubtitle>
            Cerita sukses dari para siswa yang telah bergabung dengan LuyiEnglish.
          </SectionSubtitle>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center gap-4 cursor-pointer group h-full">
                        <Avatar className="w-20 h-20 text-2xl border-4 border-border flex-shrink-0 rounded-lg">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-pink-600 text-white font-bold rounded-lg">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="relative glass-card rounded-2xl p-6 group-hover:border-pink-400/50 transition-all duration-300 shadow-xl shadow-black/5 w-full flex-grow flex flex-col justify-between">
                           <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/50 transform rotate-45 backdrop-blur-lg border-l border-t border-border"></div>
                          <blockquote className="text-base font-normal italic text-gray-700 flex-grow">
                            “{testimonial.summary}”
                          </blockquote>
                          <p className="text-xs text-pink-500/80 mt-4">
                            Klik untuk melihat testimoni lengkap
                          </p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-md bg-transparent">
                      <DialogTitle className="sr-only">Testimonial from {testimonial.initials}</DialogTitle>
                      <Image
                        src={testimonial.fullImageUrl}
                        alt={`Testimonial from ${testimonial.initials}`}
                        width={400}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-2xl shadow-black/20"
                        data-ai-hint={testimonial.fullImageHint}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 bg-background/50 border-border text-foreground hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex -right-12 bg-background/50 border-border text-foreground hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  );
}
