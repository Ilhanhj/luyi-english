
import type { Tutor, Testimonial, PricingPackage, FAQItem, GalleryTestimonial } from './types';
import jsonData from './placeholder-images.json';

const PlaceHolderImages = jsonData.placeholderImages;

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        console.error(`Placeholder image with id "${id}" not found.`);
        return { url: `https://picsum.photos/seed/${id}/400/600`, hint: 'placeholder' };
    }
    return { url: img.imageUrl, hint: img.imageHint };
}

export const tutors = (t: any): Tutor[] => [
  {
    id: '1',
    name: 'Sarah L.',
    photoUrl: findImage('tutor-1').url,
    photoHint: findImage('tutor-1').hint,
    specialization: t.tutors.specializations.business,
    rating: 4.9,
    bio: t.tutors.bios.sarah,
    review: {
      quote: t.tutors.reviews.sarah.quote,
      author: t.tutors.reviews.sarah.author
    }
  },
  {
    id: '2',
    name: 'John D.',
    photoUrl: findImage('tutor-2').url,
    photoHint: findImage('tutor-2').hint,
    specialization: t.tutors.specializations.ielts,
    rating: 5.0,
    bio: t.tutors.bios.john,
    review: {
      quote: t.tutors.reviews.john.quote,
      author: t.tutors.reviews.john.author
    }
  },
  {
    id: '3',
    name: 'Emily S.',
    photoUrl: findImage('tutor-3').url,
    photoHint: findImage('tutor-3').hint,
    specialization: t.tutors.specializations.conversation,
    rating: 4.8,
    bio: t.tutors.bios.emily,
    review: {
      quote: t.tutors.reviews.emily.quote,
      author: t.tutors.reviews.emily.author
    }
  },
  {
    id: '4',
    name: 'Michael B.',
    photoUrl: findImage('tutor-4').url,
    photoHint: findImage('tutor-4').hint,
    specialization: t.tutors.specializations.kids,
    rating: 4.9,
    bio: t.tutors.bios.michael,
    review: {
      quote: t.tutors.reviews.michael.quote,
      author: t.tutors.reviews.michael.author
    }
  },
  {
    id: '5',
    name: 'Jessica P.',
    photoUrl: findImage('tutor-5').url,
    photoHint: findImage('tutor-5').hint,
    specialization: t.tutors.specializations.grammar,
    rating: 4.9,
    bio: t.tutors.bios.jessica,
    review: {
      quote: t.tutors.reviews.jessica.quote,
      author: t.tutors.reviews.jessica.author
    }
  },
  {
    id: '6',
    name: 'David K.',
    photoUrl: findImage('tutor-6').url,
    photoHint: findImage('tutor-6').hint,
    specialization: t.tutors.specializations.publicSpeaking,
    rating: 4.9,
    bio: t.tutors.bios.david,
    review: {
      quote: t.tutors.reviews.david.quote,
      author: t.tutors.reviews.david.author
    }
  }
];

export const testimonials: Testimonial[] = [
  { id: "1", imageUrl: findImage('testimonial-adwiyah').url, imageAlt: "Adwiyah" },
  { id: "2", imageUrl: findImage('testimonial-aprial').url, imageAlt: "Aprial" },
  { id: "3", imageUrl: findImage('testimonial-bianca').url, imageAlt: "Bianca" },
  { id: "5", imageUrl: findImage('testimonial-devika').url, imageAlt: "Devika" },
  { id: "6", imageUrl: findImage('testimonial-eva').url, imageAlt: "Eva" },
  { id: "7", imageUrl: findImage('testimonial-fika').url, imageAlt: "Fika" },
  { id: "8", imageUrl: findImage('testimonial-juliana').url, imageAlt: "Juliana" },
  { id: "10", imageUrl: findImage('testimonial-khalid').url, imageAlt: "Khalid" },
  { id: "11", imageUrl: findImage('testimonial-nat').url, imageAlt: "Nat" },
  { id: "12", imageUrl: findImage('testimonial-nisa').url, imageAlt: "Nisa" },
  { id: "13", imageUrl: findImage('testimonial-nofvia').url, imageAlt: "Nofvia" },
  { id: "14", imageUrl: findImage('testimonial-teguh').url, imageAlt: "Teguh" },
  { id: "15", imageUrl: findImage('testimonial-vania').url, imageAlt: "Vania" },
  { id: "16", imageUrl: findImage('testimonial-wiwin').url, imageAlt: "Wiwin" },
];

export const pricingPackages = (t: any): PricingPackage[] => [
  {
    id: 'grouping',
    title: t.pricing.packages.group.title,
    description: t.pricing.packages.group.description,
    price: 'Rp 350K',
    priceDetails: t.pricing.perMonth,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.max15, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.dailyMaterial, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.bestValue
  },
  {
    id: 'semi-private',
    title: t.pricing.packages.semiPrivate.title,
    description: t.pricing.packages.semiPrivate.description,
    price: 'Rp 550K',
    priceDetails: t.pricing.perMonth,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.max6, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.dailyMaterial, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.maxFocus
  },
  {
    id: 'private',
    title: t.pricing.packages.private.title,
    description: t.pricing.packages.private.description,
    price: 'Rp 750K',
    priceDetails: t.pricing.perMonth,
    features: [
        { name: t.pricing.features.meetings12, included: true },
        { name: t.pricing.features.flexibleSchedule, included: true },
        { name: t.pricing.features.minutes60, included: true },
        { name: t.pricing.features.dailyMaterial, included: true },
        { name: t.pricing.features.oneOnOne, included: true },
        { name: t.pricing.features.moduleIncluded, included: true },
    ],
    isPopular: true,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.mostPopular
  },
  {
    id: 'toefl',
    title: t.pricing.packages.toefl.title,
    description: t.pricing.packages.toefl.description,
    price: 'Rp 850K',
    priceDetails: t.pricing.perProgram,
    features: [
        { name: t.pricing.features.meetings12, included: true },
        { name: t.pricing.features.flexibleSchedule, included: true },
        { name: t.pricing.features.minutes60, included: true },
        { name: t.pricing.features.oneOnOne, included: true },
        { name: t.pricing.features.prePostTest, included: true },
        { name: t.pricing.features.moduleIncluded, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.dreamScore
  },
  {
    id: 'ielts',
    title: t.pricing.packages.ielts.title,
    description: t.pricing.packages.ielts.description,
    price: 'Rp 1.4JT',
    priceDetails: t.pricing.perProgram,
    features: [
        { name: t.pricing.features.meetings12, included: true },
        { name: t.pricing.features.flexibleSchedule, included: true },
        { name: t.pricing.features.minutes60, included: true },
        { name: t.pricing.features.oneOnOne, included: true },
        { name: t.pricing.features.prePostTest, included: true },
        { name: t.pricing.features.moduleIncluded, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.goInternational
  },
];


export const faqItems = (t: any): FAQItem[] => t.faq.items;

export const galleryTestimonials: GalleryTestimonial[] = [
  { id: '1', src: findImage('testimonial-adwiyah').url, alt: 'Testimonial from Adwiyah' },
  { id: '2', src: findImage('testimonial-aprial').url, alt: 'Testimonial from Aprial' },
  { id: '3', src: findImage('testimonial-bianca').url, alt: 'Testimonial from Bianca' },
  { id: '4', src: findImage('testimonial-devika').url, alt: 'Testimonial from Devika' },
  { id: '5', src: findImage('testimonial-eva').url, alt: 'Testimonial from Eva' },
  { id: '6', src: findImage('testimonial-fika').url, alt: 'Testimonial from Fika' },
  { id: '7', src: findImage('testimonial-juliana').url, alt: 'Testimonial from Juliana' },
  { id: '8', src: findImage('testimonial-khalid').url, alt: 'Testimonial from Khalid' },
  { id: '9', src: findImage('testimonial-nat').url, alt: 'Testimonial from Nat' },
  { id: '10', src: findImage('testimonial-nisa').url, alt: 'Testimonial from Nisa' },
  { id: '11', src: findImage('testimonial-nofvia').url, alt: 'Testimonial from Nofvia' },
  { id: '12', src: findImage('testimonial-teguh').url, alt: 'Testimonial from Teguh' },
  { id: '13', src: findImage('testimonial-vania').url, alt: 'Testimonial from Vania' },
  { id: '14', src: findImage('testimonial-wiwin').url, alt: 'Testimonial from Wiwin' },
];
