
"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPackages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-transparent relative">
      <div className="absolute -top-40 left-0 w-full h-full bg-cover bg-center opacity-5 dark:opacity-[0.02]" style={{backgroundImage: 'url(/grid.svg)'}}></div>
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Investasi untuk Masa Depanmu 💫</SectionTitle>
          <SectionSubtitle>
            Belajar bukan sekadar biaya — ini langkah menuju versi terbaik dirimu.
          </SectionSubtitle>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700"
        >
          <CarouselContent className="-ml-4 py-4">
            {pricingPackages.map((pkg) => (
              <CarouselItem key={pkg.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1 h-full">
                   <div
                    className={cn(
                      "rounded-2xl p-px transition-all duration-300 h-full",
                      pkg.isPopular ? "bg-gradient-to-b from-blue-500 to-pink-500" : "bg-border"
                    )}
                  >
                    <Card
                      className={cn(
                        "flex flex-col h-full bg-card rounded-[15px] border-0 relative transition-all duration-300",
                        pkg.isPopular ? "" : ""
                      )}
                    >
                      {pkg.isPopular && (
                        <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-pink-500 text-white border-0 shadow-lg shadow-pink-500/30 text-sm py-1 px-3 w-auto text-center">
                          Paling Populer
                        </Badge>
                      )}
                      <CardHeader className="pt-8">
                        <CardTitle className="text-xl font-semibold text-blue-600 dark:text-blue-400">{pkg.title}</CardTitle>
                        <CardDescription className="text-sm !text-muted-foreground">{pkg.description}</CardDescription>
                        <div className="flex items-baseline gap-2 pt-2">
                          <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                          <span className="text-sm text-muted-foreground">{pkg.priceDetails}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button asChild className={cn(
                          "w-full rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-px",
                          pkg.isPopular 
                              ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50" 
                              : "bg-foreground text-background hover:bg-foreground/80"
                          )} size="lg">
                          <Link href="#contact">{pkg.ctaText}</Link>
                        </Button>
                      </div>
                    </Card>
                  </div>
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
