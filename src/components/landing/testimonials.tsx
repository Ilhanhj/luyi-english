"use client"

import Image from "next/image"
import { testimonials } from "@/lib/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SectionTitle from "./section-title"
import SectionSubtitle from "./section-subtitle"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-transparent relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-br from-emerald-400/10 to-blue-500/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <SectionTitle>Apa Kata Mereka?</SectionTitle>
          <SectionSubtitle>
            Cerita sukses dari para siswa yang telah bergabung dengan LuyiEnglish.
          </SectionSubtitle>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="p-4 flex justify-center"
                  data-aos="zoom-in"
                >
                  <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.imageAlt}
                      width={600}
                      height={800}
                      className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-12 bg-gradient-to-br from-blue-500 to-emerald-400 text-white border-none hover:opacity-80 transition" />
          <CarouselNext className="hidden sm:flex -right-12 bg-gradient-to-br from-blue-500 to-emerald-400 text-white border-none hover:opacity-80 transition" />
        </Carousel>
      </div>
    </section>
  )
}
