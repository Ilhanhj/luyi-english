import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { companyLogos } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 items-center text-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Buka Potensi Bahasa Inggrismu
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Belajar langsung dari tutor berpengalaman dengan jadwal fleksibel.
              Tingkatkan kepercayaan dirimu dalam berbahasa Inggris, mulai hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">Daftar Gratis Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#tutors">
                  Lihat Tutor Kami <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-6">
              Dipercaya oleh para profesional dari
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {companyLogos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.logoUrl}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="object-contain"
                  data-ai-hint={logo.logoHint}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
