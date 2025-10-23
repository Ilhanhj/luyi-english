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
    <section id="testimonials" className="py-16 md:py-24 bg-background">
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
                      <Card className="overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-accent/20">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                              <Avatar className="w-16 h-16 text-xl">
                                <AvatarFallback className="bg-accent text-accent-foreground">
                                  {testimonial.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="text-center sm:text-left">
                              <blockquote className="text-lg font-medium italic text-foreground">
                                “{testimonial.summary}”
                              </blockquote>
                              <p className="text-sm text-muted-foreground mt-4">
                                Klik untuk melihat testimoni lengkap
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-md">
                      <Image
                        src={testimonial.fullImageUrl}
                        alt={`Testimonial from ${testimonial.initials}`}
                        width={400}
                        height={800}
                        className="w-full h-auto rounded-lg"
                        data-ai-hint={testimonial.fullImageHint}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
