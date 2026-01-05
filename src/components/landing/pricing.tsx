
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
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[100vh] -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_4s]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-amber-500/30 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_6s]"></div>
        </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Investasi untuk Masa Depanmu</SectionTitle>
          <SectionSubtitle>
            Belajar bukan sekadar biaya — ini langkah menuju versi terbaik dirimu.
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "glass-card flex flex-col rounded-3xl overflow-hidden transition-all duration-300",
                pkg.isPopular
                  ? "border-2 border-amber-400 shadow-2xl shadow-amber-500/20"
                  : "!border-white/10"
              )}
            >
              <CardHeader className="p-6 text-center relative">
                {pkg.badgeText && (
                  <Badge
                    className={cn(
                      "absolute -top-4 left-1/2 -translate-x-1/2 border-0 shadow-md text-sm py-1 px-4",
                      pkg.isPopular
                        ? "bg-amber-400 text-slate-900 font-semibold"
                        : "bg-blue-500 text-white"
                    )}
                  >
                    {pkg.badgeText}
                  </Badge>
                )}
                <CardTitle className="text-xl font-bold text-white pt-4">{pkg.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 pt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-sm text-gray-400">{pkg.priceDetails}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <ul className="space-y-4 flex-grow mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature.name}</span>
                    </li>

                  ))}
                </ul>
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-px mt-4",
                    pkg.isPopular
                      ? "bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
                      : "bg-blue-500 text-white"
                  )}
                  size="lg"
                >
                  <Link href="#contact">{pkg.ctaText}</Link>
                </Button>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
