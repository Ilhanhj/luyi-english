import { StaticImageData } from "next/image";

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Tutor {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  testimonials: Testimonial[];
}

export interface PricingPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  priceDetails: string;
  features: { name: string; included: boolean }[];
  isPopular: boolean;
  ctaText: string;
  badgeText?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logoUrl: string;
  logoHint: string;
}

export interface GalleryTestimonial {
  id: string;
  src: string;
  alt: string;
}
