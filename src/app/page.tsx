"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Tutors from "@/components/landing/tutors";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import Faq from "@/components/landing/faq";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";
import RedeemVoucher from "@/components/landing/redeem-voucher";
import FloatingWhatsApp from "@/components/landing/floating-whatsapp"; 

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = totalScroll / windowHeight;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${scrollPercentage})`;
      }

      if (totalScroll > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex min-h-dvh flex-col relative bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-slate-800/50 z-[60] w-full">
        <div 
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400 shadow-[0_0_10px_rgba(56,189,248,0.5)] origin-left"
            style={{ transform: 'scaleX(0)' }} 
        />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      <Header />
      
      <main className="flex-1 relative z-10">
        <Hero />
        <Tutors />
        <Testimonials />
        <Pricing />
        <RedeemVoucher />
        <Faq />
        <Contact />
      </main>
      
      <Footer />

      {/* === FLOATING ELEMENTS === */}
      
      {/* 1. WHATSAPP (Kiri Bawah) */}
      <FloatingWhatsApp />

      {/* 2. BACK TO TOP (Kanan Bawah) */}
      <button
        onClick={scrollToTop}
        className={cn(
            "fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-2xl transition-all duration-500",
            "bg-slate-900/50 backdrop-blur-md border border-white/10 text-white",
            "hover:bg-amber-500 hover:text-slate-900 hover:scale-110 hover:-translate-y-1",
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-6 h-6" strokeWidth={3} />
      </button>

    </div>
  );
}