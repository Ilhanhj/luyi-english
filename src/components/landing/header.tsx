
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from '@/public/images/logo-luyi.png';
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";


const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
    const { language, setLanguage } = useLanguage();
  
    const buttonStyle = "px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300";
    const activeStyle = "bg-amber-400 text-slate-900";
    const inactiveStyle = "bg-transparent text-white hover:bg-white/10";
  
    if (isMobile) {
      return (
        <div className="flex items-center justify-center gap-2 mt-6 p-1 rounded-full bg-white/5 border border-white/10">
          <button onClick={() => setLanguage('id')} className={cn(buttonStyle, language === 'id' ? activeStyle : inactiveStyle)}>
            ID
          </button>
          <button onClick={() => setLanguage('en')} className={cn(buttonStyle, language === 'en' ? activeStyle : inactiveStyle)}>
            EN
          </button>
        </div>
      );
    }
  
    return (
      <div className="flex items-center p-1 rounded-full bg-slate-800/60 glass-card">
        <button onClick={() => setLanguage('id')} className={cn(buttonStyle, language === 'id' ? activeStyle : inactiveStyle)}>
          ID
        </button>
        <button onClick={() => setLanguage('en')} className={cn(buttonStyle, language === 'en' ? activeStyle : inactiveStyle)}>
          EN
        </button>
      </div>
    );
};
  
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#tutors", label: t.nav.tutors },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <nav className="relative glass-card flex items-center p-1 rounded-full !bg-slate-800/60">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-href={link.href}
          className={cn(
            "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
            activeLink === link.href ? "text-white bg-white/10" : "text-gray-300 hover:text-white",
          )}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
            if (onLinkClick) onLinkClick();
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-slate-950/60 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
      data-aos="fade-in"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-white">
          <Image
             src={logo}
             alt="LuyiEnglish Logo"
             width={180}
             height={48}
             className="w-36 object-contain invert"
           />
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <NavLinks />
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 hover:-translate-y-px">
            <Link href="https://wa.me/6281234567890" target="_blank">
              <Send className="mr-2 h-4 w-4"/>
              {t.nav.chat}
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">{t.nav.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950/90 backdrop-blur-xl border-l-white/10 w-[250px] sm:w-[300px]">
              <SheetHeader>
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-white mb-4">
                    <Image
                      src={logo}
                      alt="LuyiEnglish Logo"
                      width={150}
                      height={40}
                      className="w-32 object-contain invert"
                    />
                 </Link>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-4">
                 {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-gray-300 hover:text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                 <Button asChild className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-blue-500/30">
                  <Link href="https://wa.me/6281234567890" target="_blank" onClick={() => setIsOpen(false)}>{t.nav.chat}</Link>
                </Button>
                <LanguageSwitcher isMobile={true} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
