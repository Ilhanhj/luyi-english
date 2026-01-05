
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { tutors as getTutors } from "@/lib/data";
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
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Tutors() {
  const { language } = useLanguage();
  const t = translations[language];
  const tutors = getTutors(t);

  return (
    <section id="tutors" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <SectionTitle>{t.tutors.title}</SectionTitle>
          <SectionSubtitle>
            {t.tutors.subtitle}
          </SectionSubtitle>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {tutors.slice(0, 6).map((tutor) => (
            <div key={tutor.id} className="h-full">
              <div className="glass-card flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={tutor.photoUrl}
                      alt={`Photo of ${tutor.name}`}
                      width={72}
                      height={72}
                      className="rounded-lg object-cover border-4 border-white/10"
                      data-ai-hint={tutor.photoHint}
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white">{tutor.name}</h3>
                      <p className="text-sm text-amber-300/80 font-semibold">{tutor.specialization}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm text-gray-300">{tutor.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-sm text-gray-300 flex-grow mb-4">{tutor.bio}</p>
                  
                  <div className="bg-slate-950/50 rounded-lg p-4 text-sm italic relative border border-white/10">
                    <Quote className="absolute top-2 left-2 w-5 h-5 text-gray-300/30" />
                    <p className="z-10 relative text-gray-300">"{tutor.review.quote}"</p>
                    <p className="text-right font-medium mt-2 text-gray-400/80">- {tutor.review.author}</p>
                  </div>
                </CardContent>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div data-aos="fade-up" data-aos-delay="200">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full lg:hidden"
            >
            <CarouselContent>
                {tutors.map((tutor) => (
                <CarouselItem key={tutor.id} className="md:basis-1/2">
                    <div className="p-1 h-full">
                    <div className="glass-card flex flex-col h-full overflow-hidden transition-all duration-300">
                        <CardHeader className="p-6">
                        <div className="flex items-center gap-4">
                            <Image
                            src={tutor.photoUrl}
                            alt={`Photo of ${tutor.name}`}
                            width={72}
                            height={72}
                            className="rounded-lg object-cover border-4 border-white/10"
                            data-ai-hint={tutor.photoHint}
                            />
                            <div className="flex-1">
                            <h3 className="font-bold text-lg text-white">{tutor.name}</h3>
                            <p className="text-sm text-amber-300/80 font-semibold">{tutor.specialization}</p>
                            <div className="flex items-center gap-1 mt-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-sm text-gray-300">{tutor.rating}</span>
                            </div>
                            </div>
                        </div>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                        <p className="text-sm text-gray-300 flex-grow mb-4">{tutor.bio}</p>
                        
                        <div className="bg-slate-950/50 rounded-lg p-4 text-sm italic relative border border-white/10">
                            <Quote className="absolute top-2 left-2 w-5 h-5 text-gray-300/30" />
                            <p className="z-10 relative text-gray-300">"{tutor.review.quote}"</p>
                            <p className="text-right font-medium mt-2 text-gray-400/80">- {tutor.review.author}</p>
                        </div>
                        </CardContent>
                    </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex glass-card text-white hover:bg-white/20" />
            <CarouselNext className="hidden sm:flex glass-card text-white hover:bg-white/20" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
