
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight, Users, Star, ThumbsUp, GraduationCap, Send } from "lucide-react";
import { tutors } from "@/lib/data";
import { Sparkles } from "./sparkles";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: t.hero.stats.students,
    },
    {
      icon: GraduationCap,
      value: "50+",
      label: t.hero.stats.tutors,
    },
    {
      icon: ThumbsUp,
      value: "98%",
      label: t.hero.stats.satisfaction,
    },
    {
      icon: Star,
      value: "4.9/5",
      label: t.hero.stats.rating,
    },
  ];

  return (
    <section id="home" className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 items-center text-center">
          <div className="space-y-8 z-10" data-aos="fade-up">
            <h1 className="relative text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-300 to-amber-400">
              <Sparkles className="absolute -top-12 left-0 w-24 h-24 text-amber-400" />
              {t.hero.title}
              <Sparkles className="absolute -bottom-12 right-0 w-24 h-24 text-blue-400" />
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="glass-card border-white/10 text-white backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="#tutors">
                  {t.hero.cta.viewTutors} <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="https://wa.me/6281234567890" target="_blank">
                  <Send className="mr-2 h-5 w-5" />
                  {t.hero.cta.freeTrial}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-20" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center transition-all duration-300 hover:border-white/20 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                  <stat.icon className="h-8 w-8 mx-auto text-amber-400 mb-2" />
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
