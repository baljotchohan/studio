import { Faq } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesOverview } from '@/components/sections/services-overview';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <Faq />
    </>
  );
}
