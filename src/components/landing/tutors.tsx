import Image from "next/image";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

import { tutors } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";

export default function Tutors() {
  return (
    <section id="tutors" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Tutor Profesional Kami</SectionTitle>
          <SectionSubtitle>
            Belajar dari para ahli yang berdedikasi untuk kesuksesanmu.
          </SectionSubtitle>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full animate-in fade-in slide-in-from-bottom-12 duration-700"
        >
          <CarouselContent>
            {tutors.map((tutor) => (
              <CarouselItem key={tutor.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-background/80 backdrop-blur-sm border-border flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={tutor.photoUrl}
                          alt={`Photo of ${tutor.name}`}
                          width={72}
                          height={72}
                          className="rounded-lg object-cover border-4 border-white/10"
                          data-ai-hint={tutor.photoHint}
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground">{tutor.name}</h3>
                          <p className="text-sm text-blue-500">{tutor.specialization}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm text-muted-foreground">{tutor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground flex-grow mb-4">{tutor.bio}</p>
                      
                      <div className="bg-secondary/50 rounded-lg p-4 mb-6 text-sm italic relative border border-border">
                        <Quote className="absolute top-2 left-2 w-5 h-5 text-gray-300 dark:text-gray-700" />
                        <p className="z-10 relative text-muted-foreground">"{tutor.review.quote}"</p>
                        <p className="text-right font-medium mt-2 text-muted-foreground/80">- {tutor.review.author}</p>
                      </div>

                      <Button asChild className="w-full mt-auto bg-gray-100 dark:bg-gray-800 border-border text-foreground hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-px">
                        <Link href="#contact">Book Trial</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-background/50 border-border text-foreground hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex bg-background/50 border-border text-foreground hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  );
}
