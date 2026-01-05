
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { tutors } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-700">
          {tutors.slice(0, 6).map((tutor) => (
            <div key={tutor.id} className="h-full">
              <Card className="bg-card border border-border flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={tutor.photoUrl}
                      alt={`Photo of ${tutor.name}`}
                      width={72}
                      height={72}
                      className="rounded-lg object-cover border-4 border-card"
                      data-ai-hint={tutor.photoHint}
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-primary">{tutor.name}</h3>
                      <p className="text-sm text-accent-foreground/80 font-semibold">{tutor.specialization}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm text-muted-foreground">{tutor.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground flex-grow mb-4">{tutor.bio}</p>
                  
                  <div className="bg-background rounded-lg p-4 text-sm italic relative border border-border">
                    <Quote className="absolute top-2 left-2 w-5 h-5 text-muted-foreground/30" />
                    <p className="z-10 relative text-muted-foreground">"{tutor.review.quote}"</p>
                    <p className="text-right font-medium mt-2 text-muted-foreground/80">- {tutor.review.author}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full lg:hidden animate-in fade-in slide-in-from-bottom-12 duration-700"
        >
          <CarouselContent>
            {tutors.map((tutor) => (
              <CarouselItem key={tutor.id} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="bg-card border border-border flex flex-col h-full overflow-hidden transition-all duration-300">
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={tutor.photoUrl}
                          alt={`Photo of ${tutor.name}`}
                          width={72}
                          height={72}
                          className="rounded-lg object-cover border-4 border-card"
                          data-ai-hint={tutor.photoHint}
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-primary">{tutor.name}</h3>
                          <p className="text-sm text-accent-foreground/80 font-semibold">{tutor.specialization}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm text-muted-foreground">{tutor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                      <p className="text-sm text-muted-foreground flex-grow mb-4">{tutor.bio}</p>
                      
                      <div className="bg-background rounded-lg p-4 text-sm italic relative border border-border">
                        <Quote className="absolute top-2 left-2 w-5 h-5 text-muted-foreground/30" />
                        <p className="z-10 relative text-muted-foreground">"{tutor.review.quote}"</p>
                        <p className="text-right font-medium mt-2 text-muted-foreground/80">- {tutor.review.author}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-card border-border text-foreground hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex bg-card border-border text-foreground hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  );
}
