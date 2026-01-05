
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
  const [indicatorStyle, setIndicatorStyle] = useState({});

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

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`[data-href="${activeLink}"]`) as HTMLElement;
      if (activeElement) {
        setIndicatorStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
        });
      }
    }
  }, [activeLink]);

  const NavLinks = ({ className, onLinkClick }: { className?: string, onLinkClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-href={link.href}
          className={cn(
            "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300",
            activeLink === link.href ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground",
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
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-gray-700 transition-colors">
          <Image
             src={logo}
             alt="LuyiEnglish Logo"
             width={180}
             height={48}
             className="w-36 object-contain dark:invert"
           />
        </Link>

        {/* Center: Floating Nav */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <nav ref={navRef} className="relative bg-card flex items-center p-1 rounded-full border border-border shadow-md">
                 <NavLinks />
                 <div
                    className="absolute top-1 bottom-1 bg-accent rounded-full transition-all duration-300 ease-in-out"
                    style={indicatorStyle}
                ></div>
            </nav>
        </div>
        
        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 hover:-translate-y-px">
            <Link href="https://wa.me/6281234567890" target="_blank">
              <Play className="mr-2 h-4 w-4 fill-current"/>
              Chat Us Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-lg border-l-border w-[250px] sm:w-[300px]">
              <SheetHeader>
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-foreground mb-4">
                    <Image
                      src={logo}
                      alt="LuyiEnglish Logo"
                      width={150}
                      height={40}
                      className="w-32 object-contain dark:invert"
                    />
                 </Link>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-4">
                 {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-foreground"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                 <Button asChild className="mt-4 bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-yellow-500/30">
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
