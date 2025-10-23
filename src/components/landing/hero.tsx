import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Users, Star, ThumbsUp, GraduationCap } from "lucide-react";
import { companyLogos } from "@/lib/data";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Siswa Terdaftar",
  },
  {
    icon: GraduationCap,
    value: "50+",
    label: "Tutor Profesional",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Tingkat Kepuasan",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Rating Rata-Rata",
  },
];


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
          
          <div className="mt-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center transition-all duration-300 hover:border-blue-400/50 hover:scale-105">
                  <stat.icon className="h-8 w-8 mx-auto text-pink-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
