
"use client";

import Image from 'next/image';
import { galleryTestimonials } from '@/lib/data';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import SectionTitle from '@/components/landing/section-title';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

export default function TestimonialsGallery() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <SectionTitle>{t.testimonialsGallery.title}</SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 glass-card"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.alt}
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
