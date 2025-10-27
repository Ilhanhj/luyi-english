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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-br from-blue-500/10 to-pink-500/20 rounded-full blur-[120px] -z-10 dark:from-blue-500/5 dark:to-pink-500/10"></div>

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
          data-aos-delay="200"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="p-4"
                  data-aos="zoom-in"
                  data-aos-delay={100 * (parseInt(testimonial.id) % 3)}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.imageAlt}
                          width={400}
                          height={600}
                          className="rounded-2xl object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-3xl bg-transparent">
                       <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.imageAlt}
                          width={800}
                          height={1200}
                          className="rounded-lg object-contain w-full h-auto"
                        />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 bg-background/80 backdrop-blur-sm border-border text-foreground hover:bg-secondary" />
          <CarouselNext className="hidden sm:flex -right-4 md:-right-12 bg-background/80 backdrop-blur-sm border-border text-foreground hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  )
}
