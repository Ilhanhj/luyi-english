"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted-foreground transition-colors duration-300 hover:text-pink-500"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 animate-in fade-in-0 slide-in-from-top-4",
        isScrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-gray-700 transition-colors">
          <BookOpenCheck className="h-7 w-7 text-blue-500" />
          <span>LuyiEnglish</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50 hover:-translate-y-px">
            <Link href="https://wa.me/6281234567890" target="_blank">Chat Us Now</Link>
          </Button>
        </div>

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
              </SheetHeader>
              <div className="flex flex-col gap-8 pt-10">
                <NavLinks className="flex-col items-start gap-4 text-lg" />
                <Button asChild className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/30">
                  <Link href="https://wa.me/6281234567890" target="_blank" onClick={() => setIsOpen(false)}>Chat Us Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
