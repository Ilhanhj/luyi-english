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
    <section id="pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Investasi untuk Masa Depanmu</SectionTitle>
          <SectionSubtitle>
            Pilih paket yang paling sesuai dengan kebutuhan dan target belajarmu.
          </SectionSubtitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700">
          {pricingPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300",
                pkg.isPopular && "border-primary ring-2 ring-primary relative"
              )}
            >
              {pkg.isPopular && (
                <Badge className="absolute -top-3 right-5 bg-accent hover:bg-accent/90">Paling Populer</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">{pkg.title}</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.priceDetails}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.isPopular ? "default" : "outline"}>
                  <Link href="#contact">{pkg.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
