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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-transparent relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
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
          className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="glass-card overflow-hidden cursor-pointer hover:scale-[1.02] hover:border-pink-400/50 transition-all duration-300 shadow-xl shadow-black/20">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                              <Avatar className="w-20 h-20 text-2xl border-4 border-white/10">
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-pink-600 text-white font-bold">
                                  {testimonial.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="text-center sm:text-left">
                              <blockquote className="text-lg font-medium italic text-gray-200">
                                “{testimonial.summary}”
                              </blockquote>
                              <p className="text-sm text-pink-400/80 mt-4">
                                Klik untuk melihat testimoni lengkap
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-md bg-transparent">
                      <Image
                        src={testimonial.fullImageUrl}
                        alt={`Testimonial from ${testimonial.initials}`}
                        width={400}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-2xl shadow-black/50"
                        data-ai-hint={testimonial.fullImageHint}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="hidden sm:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
}
