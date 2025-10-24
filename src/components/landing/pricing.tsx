"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { pricingPackages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { Badge } from "@/components/ui/badge";

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

        <div className="relative mt-12 pt-8 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-border rounded-2xl shadow-xl shadow-black/10">
            
            {/* Vertical Lines */}
            <div className="hidden lg:block absolute top-0 left-1/5 w-px h-full bg-border"></div>
            <div className="hidden lg:block absolute top-0 left-2/5 w-px h-full bg-border"></div>
            <div className="hidden lg:block absolute top-0 left-3/5 w-px h-full bg-border"></div>
            <div className="hidden lg:block absolute top-0 left-4/5 w-px h-full bg-border"></div>

                {pricingPackages.map((pkg, index) => (
                    <div key={pkg.id} className={cn(
                    "flex flex-col bg-card transition-all duration-300 relative p-6",
                    index === 0 && "rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none rounded-tr-2xl",
                    index === pricingPackages.length - 1 && "rounded-br-2xl rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-bl-none",
                    )}>
                        {pkg.badgeText && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500", style={{ display: pkg.isPopular ? 'block' : 'none' }}></div>
                        )}
                        {pkg.badgeText && (
                            <Badge className={cn(
                              "absolute -top-4 left-1/2 -translate-x-1/2 border-0 shadow-lg text-sm py-1 px-3 w-auto text-center",
                              pkg.isPopular 
                                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-pink-500/30"
                                : "bg-muted text-muted-foreground shadow-black/10"
                            )}>
                            {pkg.badgeText}
                            </Badge>
                        )}
                        
                        <div className="text-center">
                        <CardTitle className="text-xl font-semibold text-foreground h-14 flex items-center justify-center">{pkg.title}</CardTitle>
                        <div className="flex items-baseline justify-center gap-2 pt-4">
                            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">{pkg.price}</span>
                            <span className="text-sm text-muted-foreground">{pkg.priceDetails}</span>
                        </div>
                        <Button asChild className={cn(
                            "w-full rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-px mt-4",
                            pkg.isPopular 
                                ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50" 
                                : "bg-foreground/5 text-foreground border border-border hover:bg-foreground/10"
                            )} size="lg">
                            <Link href="#contact">{pkg.ctaText}</Link>
                        </Button>
                        </div>

                        <hr className="my-6 border-border" />
                        
                        <ul className="space-y-4 flex-grow">
                          {pkg.features.map((feature) => (
                            feature.included && (
                                <li key={feature.name} className="flex items-center gap-3 text-sm">
                                    <Check className="h-5 w-5 text-pink-500 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature.name}</span>
                                </li>
                            )
                          ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
