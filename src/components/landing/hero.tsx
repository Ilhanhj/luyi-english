
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Users, Star, ThumbsUp, GraduationCap, Play } from "lucide-react";
import { tutors } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Sparkles } from "./sparkles";


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
  const floatingTutors = tutors.slice(0, 8);

  return (
    <section id="home" className="py-24 md:py-40 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

        {/* Floating Tutor Cards */}
        <div className="absolute inset-0 w-full h-full -z-20">
          {floatingTutors.map((tutor, index) => {
            const positions = [
              "top-[25%] left-[5%]",
              "top-[25%] right-[5%]",
              "top-[55%] left-[10%]",
              "top-[55%] right-[10%]",
              "top-[5%] left-[20%]",
              "top-[5%] right-[20%]",
              "top-[10%] left-[40%]",
              "top-[10%] right-[40%]",
            ];
            const animations = [
              "animate-[float_6s_ease-in-out_infinite]",
              "animate-[float_7s_ease-in-out_infinite_0.5s]",
              "animate-[float_8s_ease-in-out_infinite_1s]",
              "animate-[float_6.5s_ease-in-out_infinite_1.5s]",
              "animate-[float_7.5s_ease-in-out_infinite_2s]",
              "animate-[float_7s_ease-in-out_infinite_0.2s]",
              "animate-[float_6s_ease-in-out_infinite_0.8s]",
              "animate-[float_8s_ease-in-out_infinite_1.2s]",
            ];
            return (
              <div 
                key={tutor.id} 
                className={cn(
                  "absolute hidden lg:flex items-center gap-3",
                  positions[index % positions.length],
                  animations[index % animations.length]
                )}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/80 to-accent/80 dark:from-primary/50 dark:to-accent/50 backdrop-blur-md border border-white/20 shadow-lg rounded-full p-1 pr-4 transition-all duration-300 hover:scale-110">
                    <Image
                      src={tutor.photoUrl}
                      alt={tutor.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover w-8 h-8"
                      data-ai-hint={tutor.photoHint}
                    />
                    <span className="font-bold text-sm text-white">{tutor.name.split(' ')[0]}</span>
                </div>
              </div>
            )
          })}
        </div>


      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 items-center text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10">
            <h1 className="relative text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline text-primary">
              <Sparkles className="absolute -top-12 left-0 w-24 h-24 text-accent" />
              Buka Potensi Bahasa Inggrismu
              <Sparkles className="absolute -bottom-12 right-0 w-24 h-24 text-accent" />
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Belajar langsung dari tutor berpengalaman dengan jadwal fleksibel.
              Tingkatkan kepercayaan dirimu dalam berbahasa Inggris, mulai hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="bg-background/50 border-primary/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-background/80 hover:border-accent hover:text-accent hover:scale-105 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="#tutors">
                  Lihat Tutor Kami <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-yellow-500/40 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/60 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="https://wa.me/6281234567890" target="_blank">
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Daftar Trial Gratis
                </Link>
              </Button>
            </div>
             <div className="flex justify-center">
                <Button asChild variant="outline" size="lg" className="bg-transparent border-primary/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-background/80 hover:border-accent/50 hover:text-accent hover:scale-105 hover:-translate-y-px px-8 py-6 text-lg">
                    <Link href="/testimonials-gallery">
                        Lihat Testimoni
                    </Link>
                </Button>
            </div>
          </div>
          
          <div className="mt-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card/80 backdrop-blur-sm border border-primary/20 p-4 rounded-xl text-center transition-all duration-300 hover:border-accent/50 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                  <stat.icon className="h-8 w-8 mx-auto text-accent mb-2" />
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
