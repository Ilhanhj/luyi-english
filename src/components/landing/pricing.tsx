"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { pricingPackages as getPricingPackages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

function PricingCard({ pkg }: { pkg: ReturnType<typeof getPricingPackages>[0] }) {
  return (
    <div className="relative pt-4 h-full"> {/* Tambah padding top buat tempat badge */}
      <div
        className={cn(
          "group relative flex flex-col h-full rounded-3xl transition-all duration-500 hover:-translate-y-2 w-full",
          // PENTING: overflow-visible biar badge gak kepotong
          "overflow-visible",
          // Base Glass Style
          "bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl",
          // Popular Card Special Effects
          pkg.isPopular
            ? "ring-2 ring-amber-400/50 shadow-amber-500/20"
            : "hover:border-white/20 hover:shadow-blue-500/10"
        )}
      >
        {/* Background Gradient (Inside Rounded Container to fix overflow) */}
        <div className={cn(
            "absolute inset-0 rounded-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none overflow-hidden",
            pkg.isPopular 
            ? "bg-gradient-to-b from-amber-500/20 to-transparent" 
            : "bg-gradient-to-b from-blue-500/10 to-transparent"
        )} />

        {/* Floating Badge (Pill Shape) - Posisi diatur biar gak kepotong */}
        {pkg.badgeText && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50 w-max">
                <Badge
                    className={cn(
                    "py-1.5 px-4 text-xs sm:text-sm font-bold shadow-lg uppercase tracking-wide border-0 rounded-full",
                    pkg.isPopular
                        ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:from-amber-500 hover:to-yellow-600"
                        : "bg-blue-600 text-white"
                    )}
                >
                    {pkg.isPopular && <Sparkles className="w-3 h-3 mr-1 inline-block" />}
                    {pkg.badgeText}
                </Badge>
            </div>
        )}

        <CardHeader className="p-6 text-center relative z-10">
            <CardTitle className={cn(
                "text-lg font-bold tracking-tight",
                pkg.isPopular ? "text-amber-300" : "text-blue-200"
            )}>
                {pkg.title}
            </CardTitle>
            
            <div className="flex items-baseline justify-center gap-1 pt-4">
                <span className="text-xs font-medium text-slate-400 self-start mt-2">IDR</span>
                <span className={cn(
                    "text-3xl lg:text-4xl font-extrabold tracking-tight text-white", // Font size disesuaikan biar muat 5 jejer
                    pkg.isPopular && "text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-200"
                )}>
                    {pkg.price}
                </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">{pkg.priceDetails}</p>
        </CardHeader>

        <CardContent className="p-6 pt-0 flex flex-col flex-grow relative z-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            <ul className="space-y-3 flex-grow mb-6">
            {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 group/item">
                <div className={cn(
                    "mt-0.5 rounded-full p-0.5 flex-shrink-0",
                    pkg.isPopular ? "bg-amber-400/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"
                )}>
                    <Check className="h-3 w-3" strokeWidth={3} />
                </div>
                <span className="text-slate-300 text-xs font-medium group-hover/item:text-white transition-colors text-left leading-tight">
                    {feature.name}
                </span>
                </li>
            ))}
            </ul>

            <Button
            asChild
            className={cn(
                "w-full rounded-2xl font-bold text-sm h-10 transition-all duration-300 shadow-lg",
                pkg.isPopular
                ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:scale-[1.02] hover:shadow-amber-500/25 border-0"
                : "bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02] backdrop-blur-md border border-white/5"
            )}
            >
            <Link href="#contact">{pkg.ctaText}</Link>
            </Button>
        </CardContent>
      </div>
    </div>
  );
}

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];
  const pricingPackages = getPricingPackages(t);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up">
          <SectionTitle>{t.pricing.title}</SectionTitle>
          <SectionSubtitle className="mt-4 text-slate-400">
            {t.pricing.subtitle}
          </SectionSubtitle>
        </div>

        {/* GRID SYSTEM UPDATED:
            - Mobile (default): 1 kolom
            - Tablet (md): 2 kolom
            - Laptop (lg): 3 kolom
            - Layar Lebar (xl): 5 kolom (BERJEJER 5)
        */}
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12"
            data-aos="fade-up" 
            data-aos-delay="200"
        >
            {pricingPackages.map((pkg) => (
                <PricingCard key={pkg.id} pkg={pkg} />
            ))}
        </div>

      </div>
    </section>
  );
}