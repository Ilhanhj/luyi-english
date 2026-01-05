
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import logo from '@/public/images/logo-luyi.png';


const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tutors", label: "Tutor" },
  { href: "#pricing", label: "Harga" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontak" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navRef = useRef<HTMLElement>(null);

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
  }, []);

  const NavLinks = ({ className, onLinkClick }: { className?: string, onLinkClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-href={link.href}
          className={cn(
            "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
            activeLink === link.href ? "text-white bg-white/10" : "text-gray-300 hover:text-white",
            className
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
    </>
  );
  

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 animate-in fade-in-0 slide-in-from-top-4",
        isScrolled ? "bg-slate-950/60 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
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
            <nav ref={navRef} className="relative glass-card flex items-center p-1 rounded-full !bg-slate-800/60">
                 <NavLinks />
            </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 hover:-translate-y-px">
            <Link href="https://wa.me/6281234567890" target="_blank">
              <Play className="mr-2 h-4 w-4 fill-current"/>
              Chat Us Now
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Buka menu</span>
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
                  <Link href="https://wa.me/6281234567890" target="_blank" onClick={() => setIsOpen(false)}>Chat Us Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
