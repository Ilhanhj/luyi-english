"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 1. IMPORT INI PENTING
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Send, Globe, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from '@/public/images/logo-luyi.png';
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { language, setLanguage } = useLanguage();
  const baseStyle = "relative z-10 px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center";
  const activeStyle = "text-slate-900 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"; 
  const inactiveStyle = "text-slate-400 hover:text-white hover:bg-white/10";

  return (
    <div className={cn(
        "flex items-center p-1 rounded-full border border-white/5",
        isMobile ? "bg-slate-900/50 w-fit mx-auto mt-6" : "bg-slate-950/30 backdrop-blur-sm"
    )}>
      {isMobile ? null : <Globe className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" />}
      <button onClick={() => setLanguage('id')} className={cn(baseStyle, language === 'id' ? activeStyle : inactiveStyle)}>ID</button>
      <button onClick={() => setLanguage('en')} className={cn(baseStyle, language === 'en' ? activeStyle : inactiveStyle)}>EN</button>
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  
  // 2. AMBIL PATHNAME SAAT INI
  const pathname = usePathname(); 
  const isHome = pathname === "/"; // Boolean check: apakah kita lagi di home?

  const { language } = useLanguage();
  const t = translations[language];

  // Data Navigasi (Perhatikan href-nya tetap basic)
  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "/tutors", label: t.nav.tutors }, // Ini link halaman, bukan section
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Scroll Spy Logic (Cuma jalan kalau di Home)
      if (isHome) {
        const sections = navLinks
            .filter(link => link.href.startsWith("#")) // Ambil cuma yang hash link
            .map(link => document.querySelector(link.href));
            
        const scrollPosition = window.scrollY + 200; 

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i] as HTMLElement;
          if (section && section.offsetTop <= scrollPosition) {
            // Kita match-kan indexnya balik ke navLinks
            // Note: Perlu filter ulang biar indexnya pas
            const hashLinks = navLinks.filter(link => link.href.startsWith("#"));
            if(hashLinks[i]) setActiveLink(hashLinks[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks, isHome]);

  // 3. LOGIKA SMART CLICK
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Kalau link ke halaman lain (misal /tutors), biarkan default behavior (pindah page)
    if (!href.startsWith("#")) {
        setIsOpen(false);
        return;
    }

    // Kalau kita di HOME, kita pake Smooth Scroll manual
    if (isHome) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
          setActiveLink(href);
      }
    } 
    // Kalau BUKAN di Home (lagi di /tutors), JANGAN preventDefault.
    // Biarkan Link Next.js bekerja membawa kita ke "/" lalu otomatis scroll ke section.
    else {
        setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 pointer-events-none">
      <div 
        className={cn(
            "pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between",
            !isScrolled && "w-full bg-transparent px-6 py-6 md:px-12 border-b border-transparent",
            isScrolled && "w-[95%] md:w-[85%] max-w-6xl mt-4 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-3"
        )}
      >
        <Link href="/" className="flex items-center gap-2 relative z-50 group">
        <Image
  src={logo}
  alt="LuyiEnglish Logo"
  // Rasio 3.1 (Sesuai aslinya 5834x1868)
  width={160} 
  height={51} 
  priority // Tambahkan ini biar logo loading paling duluan (LCP Optimization)
  className={cn(
    "object-contain transition-all duration-500",
    // HAPUS CLASS 'invert' DISINI
    isScrolled ? "w-28 md:w-32" : "w-32 md:w-40"
  )}
/>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            // 4. GENERATE HREF PINTAR
            // Kalau linknya hash (#pricing) DAN kita BUKAN di home, 
            // tambahkan "/" di depannya (jadi /#pricing)
            const finalHref = (link.href.startsWith("#") && !isHome) 
                ? `/${link.href}` 
                : link.href;

            // Logic Active State: 
            // Kalau di Home -> Cek activeLink state
            // Kalau di Tutors -> Cek pathname startWith link.href (biar /tutors tetep nyala)
            const isActive = isHome 
                ? activeLink === link.href 
                : (link.href !== "#home" && pathname.startsWith(link.href));

            return (
                <Link
                key={link.href}
                href={finalHref} // Pakai href yang udah dikalkulasi
                onClick={(e) => handleNavClick(e, link.href)} // Pakai handler baru
                className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden",
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
                >
                <span className={cn(
                    "absolute inset-0 bg-white/10 rounded-full transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}></span>
                
                {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_5px_rgba(251,191,36,1)]"></span>
                )}
                
                <span className="relative z-10">{link.label}</span>
                </Link>
            );
          })}
        </nav>
        
        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button 
            asChild 
            size={isScrolled ? "sm" : "default"} 
            className={cn(
                "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] border-0",
                isScrolled ? "h-9 px-5 text-sm" : "h-11 px-6"
            )}
          >
            <Link href="https://wa.me/6281234567890" target="_blank">
              <Send className={cn("mr-2 fill-white/20", isScrolled ? "w-3 h-3" : "w-4 h-4")}/>
              {t.nav.chat}
            </Link>
          </Button>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="lg:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.nav.openMenu}</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-slate-950/95 backdrop-blur-3xl border-l-white/10 w-[320px] p-0 overflow-hidden sm:max-w-sm">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -z-10" />

              <SheetHeader className="p-8 border-b border-white/5 text-left">
                 <SheetTitle className="sr-only">Menu</SheetTitle>
                 <Image src={logo} alt="LuyiEnglish" width={140} height={40} className="w-32 object-contain invert opacity-90" />
              </SheetHeader>

              <nav className="flex flex-col p-6 space-y-2">
                 {navLinks.map((link, i) => {
                    // Logic yang sama untuk Mobile
                    const finalHref = (link.href.startsWith("#") && !isHome) 
                        ? `/${link.href}` 
                        : link.href;
                    
                    const isActive = isHome 
                        ? activeLink === link.href 
                        : (link.href !== "#home" && pathname.startsWith(link.href));

                    return (
                        <Link
                        key={link.href}
                        href={finalHref}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                            "group flex items-center justify-between text-lg font-medium px-4 py-4 rounded-2xl transition-all duration-300 border border-transparent",
                            isActive 
                                ? "bg-white/10 text-white border-white/5 shadow-inner" 
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                        style={{ animationDelay: `${i * 50}ms` }} 
                        >
                        {link.label}
                        <ChevronRight className={cn(
                            "w-5 h-5 transition-all duration-300 text-amber-400",
                            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        )} />
                        </Link>
                    );
                  })}

                 <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                    <Button asChild className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg text-lg">
                        <Link href="https://wa.me/6281234567890" target="_blank" onClick={() => setIsOpen(false)}>
                            <Send className="mr-3 h-5 w-5"/> {t.nav.chat}
                        </Link>
                    </Button>
                    <div className="flex justify-center">
                         <LanguageSwitcher isMobile={true} />
                    </div>
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}