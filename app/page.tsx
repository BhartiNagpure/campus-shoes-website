import HeroSection from '@/components/sections/hero-section';
import JourneySection from '@/components/sections/journey-section';
import ProductsSection from '@/components/sections/products-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import LookbookSection from '@/components/sections/lookbook-section';
import SocialSection from '@/components/sections/social-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <JourneySection />
      <ProductsSection />
      <TestimonialsSection />
      <LookbookSection />
      <SocialSection />
      <CtaSection />
    </div>
  );
}