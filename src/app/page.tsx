import { Faq } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero-section';
import { Pricing } from '@/components/sections/pricing';
import { ServicesOverview } from '@/components/sections/services-overview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <Pricing />
      <Faq />
    </>
  );
}
