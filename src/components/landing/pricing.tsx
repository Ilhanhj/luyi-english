
"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPackages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Investasi untuk Masa Depanmu</SectionTitle>
          <SectionSubtitle>
            Belajar bukan sekadar biaya — ini langkah menuju versi terbaik dirimu.
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
          {pricingPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "flex flex-col rounded-xl overflow-hidden transition-all duration-300 bg-card shadow-sm",
                pkg.isPopular
                  ? "border-2 border-accent shadow-lg shadow-yellow-500/20 dark:shadow-yellow-400/10"
                  : "border border-border"
              )}
            >
              <CardHeader className="p-6 text-center relative">
                {pkg.badgeText && (
                  <Badge
                    className={cn(
                      "absolute -top-4 left-1/2 -translate-x-1/2 border-0 shadow-md text-sm py-1 px-4",
                      pkg.isPopular
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {pkg.badgeText}
                  </Badge>
                )}
                <CardTitle className="text-xl font-bold text-foreground pt-4">{pkg.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 pt-2">
                  <span className="text-4xl font-extrabold text-foreground">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">{pkg.priceDetails}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <ul className="space-y-4 flex-grow mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature.name}</span>
                    </li>

                  ))}
                </ul>
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-px mt-4",
                    pkg.isPopular
                      ? "bg-accent text-accent-foreground shadow-lg shadow-yellow-500/30 dark:shadow-yellow-400/20 hover:shadow-yellow-500/50"
                      : "bg-primary text-primary-foreground"
                  )}
                  size="lg"
                >
                  <Link href="#contact">{pkg.ctaText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
