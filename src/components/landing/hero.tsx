import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { companyLogos } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="py-24 md:py-40 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 items-center text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
              Buka Potensi Bahasa Inggrismu
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Belajar langsung dari tutor berpengalaman dengan jadwal fleksibel.
              Tingkatkan kepercayaan dirimu dalam berbahasa Inggris, mulai hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                <Link href="#contact">Daftar Gratis Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/5 border-white/20 text-white backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white/30 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
                <Link href="#tutors">
                  Lihat Tutor Kami <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-8">
              Dipercaya oleh para profesional dari
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {companyLogos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.logoUrl}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
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
