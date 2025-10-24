import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Users, Star, ThumbsUp, GraduationCap, MessageCircle } from "lucide-react";
import { tutors } from "@/lib/data";
import { cn } from "@/lib/utils";


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
  const floatingTutors = tutors.slice(0, 8); // Take first 8 tutors for floating cards

  return (
    <section id="home" className="py-24 md:py-40 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] -z-10"></div>

        {/* Floating Tutor Cards */}
        <div className="absolute inset-0 w-full h-full -z-10">
          {floatingTutors.map((tutor, index) => {
            const positions = [
              "top-[10%] left-[5%]",
              "top-[25%] right-[5%]",
              "top-[45%] left-[10%]",
              "bottom-[20%] right-[15%]",
              "top-[10%] right-[25%]",
              "top-[50%] left-[15%]",
              "top-[20%] right-[10%]",
              "top-[5%] right-[40%]",
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
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full p-1 pr-4 transition-all duration-300 hover:scale-110">
                    <Image
                      src={tutor.photoUrl}
                      alt={tutor.name}
                      width={32}
                      height={32}
                      className="rounded-lg object-cover w-8 h-8"
                      data-ai-hint={tutor.photoHint}
                    />
                    <span className="font-bold text-sm text-foreground">{tutor.name.split(' ')[0]}</span>
                </div>
              </div>
            )
          })}
        </div>


      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 items-center text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline text-transparent bg-clip-text bg-gradient-to-b from-foreground to-gray-600">
              Buka Potensi Bahasa Inggrismu
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Belajar langsung dari tutor berpengalaman dengan jadwal fleksibel.
              Tingkatkan kepercayaan dirimu dalam berbahasa Inggris, mulai hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="bg-background/50 border-border text-foreground backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/80 hover:border-pink-500/50 hover:text-pink-500 hover:scale-105 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="#tutors">
                  Lihat Tutor Kami <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/60 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="https://wa.me/6281234567890" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat Us Now
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center transition-all duration-300 hover:border-blue-400/50 hover:scale-105 hover:-translate-y-1">
                  <stat.icon className="h-8 w-8 mx-auto text-pink-500 mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
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
