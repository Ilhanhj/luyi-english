import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Tutors from "@/components/landing/tutors";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import Faq from "@/components/landing/faq";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-transparent overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Tutors />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
