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
    <section id="tutors" className="py-16 md:py-24 bg-secondary">
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
                  <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={tutor.photoUrl}
                          alt={`Photo of ${tutor.name}`}
                          width={80}
                          height={80}
                          className="rounded-full object-cover border-4 border-primary/20"
                          data-ai-hint={tutor.photoHint}
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{tutor.name}</h3>
                          <p className="text-sm text-primary">{tutor.specialization}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm">{tutor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground flex-grow mb-4">{tutor.bio}</p>
                      
                      <div className="bg-background rounded-lg p-4 mb-6 text-sm italic relative">
                        <Quote className="absolute top-2 left-2 w-5 h-5 text-muted-foreground/30" />
                        <p className="z-10 relative">"{tutor.review.quote}"</p>
                        <p className="text-right font-medium mt-2">- {tutor.review.author}</p>
                      </div>

                      <Button asChild className="w-full mt-auto">
                        <Link href="#contact">Book Trial</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
