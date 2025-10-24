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

const ReadyToHelpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.164 19.3364C19.164 21.054 17.6534 22.4277 15.7818 22.4277C13.9103 22.4277 12.3996 21.054 12.3996 19.3364C12.3996 17.6188 13.9103 16.2451 15.7818 16.2451C17.6534 16.2451 19.164 17.6188 19.164 19.3364Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.42436 4.9082L15.3524 15.5391L12.511 15.9333C11.3934 16.0856 10.4242 16.9272 10.1582 17.971L9.771 19.366C9.28315 21.1449 6.84159 21.3211 6.1264 19.5898L4.31682 14.8631C3.8996 13.7548 4.60683 12.5539 5.78783 12.3514L10.5902 11.4552L2.59918 2.871C1.9216 2.1449 2.41503 1 3.44299 1C3.96349 1 4.4587 1.20967 4.81156 1.58606L5.42436 4.9082Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);


export default function Hero() {
  const floatingTutors = tutors.slice(0, 5); // Take first 5 tutors for floating cards

  return (
    <section id="home" className="py-24 md:py-40 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] -z-10"></div>

        {/* Floating Tutor Cards */}
        <div className="absolute inset-0 w-full h-full -z-20">
          {floatingTutors.map((tutor, index) => {
            const positions = [
              "top-[10%] left-[5%] animate-[float_6s_ease-in-out_infinite]",
              "top-[30%] right-[5%] animate-[float_7s_ease-in-out_infinite_0.5s]",
              "bottom-[40%] left-[10%] animate-[float_8s_ease-in-out_infinite_1s]",
              "top-[60%] right-[15%] animate-[float_6.5s_ease-in-out_infinite_1.5s]",
              "top-[15%] right-[25%] animate-[float_7.5s_ease-in-out_infinite_2s]",
            ];
            return (
              <div 
                key={tutor.id} 
                className={cn(
                  "absolute hidden lg:block p-px rounded-full bg-gradient-to-br from-blue-500/50 to-pink-500/50 shadow-2xl shadow-black/10 transform scale-[0.9]",
                  positions[index % positions.length]
                )}
                style={{animationDelay: `${index * 0.5}s`}}
              >
                <div className="glass-card !bg-background/60 flex items-center gap-3 p-2 pr-4 rounded-full">
                  <ReadyToHelpIcon className="w-6 h-6 text-pink-500" />
                  <div>
                    <p className="font-bold text-xs text-foreground">{tutor.name}</p>
                    <p className="text-[10px] text-muted-foreground">Ready to help</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>


      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 items-center text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
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
