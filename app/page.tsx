import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PropertyGrid />
      <Services />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  );
}
