
export interface Tutor {
  id: string;
  name: string;
  photoUrl: string;
  photoHint: string;
  specialization: string;
  rating: number;
  bio: string;
  review: {
    quote: string;
    author: string;
  };
}

export interface Testimonial {
  id: string;
  initials: string;
  summary: string;
  fullImageUrl: string;
  fullImageHint: string;
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
