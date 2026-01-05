
import Image from 'next/image';
import { galleryTestimonials } from '@/lib/data';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

export default function TestimonialsGallery() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary">
                What Our Students Say ❤️
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 bg-card border border-border"
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
