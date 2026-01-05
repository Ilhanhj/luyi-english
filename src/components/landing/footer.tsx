
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import logo from '@/public/images/logo-luyi.png';

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

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#tutors", label: "Tutor" },
    { href: "#pricing", label: "Harga" },
    { href: "#contact", label: "Kontak" },
];

const socialLinks = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: TikTokIcon, href: "#", label: "TikTok" },
  { Icon: MessageCircle, href: "https://wa.me/6281234567890", label: "WhatsApp" },
];

const contactInfo = [
  { Icon: MessageCircle, text: "+62 812 3456 7890", href: "https://wa.me/6281234567890" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-primary/20 mt-16 md:mt-24">
      <div className="container mx-auto px-4 md:px-6 py-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <Link href="#home" className="flex items-center gap-2 font-bold text-xl text-primary transition-transform duration-300 hover:scale-105">
              <Image
                  src={logo}
                  alt="LuyiEnglish Logo"
                  width={180}
                  height={48}
                  className="w-36 object-contain"
                />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Learn English the fun and easy way with our professional tutors.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-3 text-center md:text-left">
              {contactInfo.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group">
                    <Icon className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4 text-center md:text-left">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-primary/20 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} LuyiEnglish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
