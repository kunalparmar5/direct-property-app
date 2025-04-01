import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { RecentListingsSection } from "@/components/home/recent-listings-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ServicesSection } from "@/components/home/services-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RecentListingsSection />
        <TestimonialsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
