
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Play } from "lucide-react";
import SectionTitle from "./section-title";
import { Sparkles } from "./sparkles";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.93-2.3-4.5-2.2-7.15.02-1.55.36-3.09 1.05-4.45.69-1.36 1.72-2.51 2.99-3.36 1.27-.85 2.78-1.36 4.3-1.49.01 2.89-.01 5.78.02 8.66.02 1.14-.43 2.26-1.12 3.17-.69.91-1.64 1.57-2.73 1.82-1.09.26-2.25.18-3.29-.24-1.04-.42-1.92-1.14-2.56-2.03-.64-.89-1-1.96-.98-3.08.02-1.13.43-2.25 1.12-3.18.69-.92 1.64-1.57 2.73-1.82 1.09-.25 2.25-.18 3.29.24.01-2.9.01-5.79-.02-8.68Z" />
  </svg>
);

const socialLinks = [
    { Icon: TikTokIcon, href: "#", label: "TikTok" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative glass-card p-8 md:p-12 overflow-hidden rounded-3xl animate-in fade-in slide-in-from-bottom-12 duration-700">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                Jangan Tunggu Lagi, Kuasai Bahasa Inggris Sekarang!
              </h2>
              <p className="mt-4 text-gray-300">Ambil langkah pertama menuju masa depan yang lebih cerah. Hubungi kami untuk sesi trial gratis.</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
               <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60 hover:-translate-y-px px-8 py-6 text-lg">
                <Link href="https://wa.me/6281234567890" target="_blank">
                  <Play className="mr-2" />
                  Chat Us Now
                </Link>
              </Button>
               <div className="flex items-center gap-4 mt-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
