import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPackages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-transparent relative">
        <div className="absolute -top-40 left-0 w-full h-full bg-cover bg-center opacity-5" style={{backgroundImage: 'url(/grid.svg)'}}></div>
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Investasi untuk Masa Depanmu 💫</SectionTitle>
          <SectionSubtitle>
            Belajar bukan sekadar biaya — ini langkah menuju versi terbaik dirimu.
          </SectionSubtitle>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "rounded-2xl p-px transition-all duration-300",
                pkg.isPopular ? "bg-gradient-to-b from-blue-500 to-pink-500" : "bg-white/10"
              )}
            >
              <Card
                className={cn(
                  "flex flex-col h-full bg-[#111836] rounded-[15px] border-0 relative",
                )}
              >
                {pkg.isPopular && (
                  <Badge className="absolute -top-4 right-5 bg-gradient-to-r from-blue-500 to-pink-500 text-white border-0 shadow-lg shadow-pink-500/30 text-sm py-1 px-3">Paling Populer</Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-400">{pkg.title}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">{pkg.price}</span>
                    <span className="text-sm text-gray-400">{pkg.priceDetails}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={cn(
                    "w-full rounded-full font-bold transition-all duration-300 transform hover:scale-105",
                     pkg.isPopular 
                        ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg shadow-pink-500/30" 
                        : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    )} size="lg">
                    <Link href="#contact">{pkg.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
