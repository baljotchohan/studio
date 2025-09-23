import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <section className="relative z-10 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          Welcome to Elara Tech
        </h1>
        <p className="max-w-[800px] text-lg text-white/80 md:text-xl">
          Your partner in unlocking the full power of Artificial Intelligence.
        </p>
        <p className="max-w-[800px] text-base text-white/70 md:text-lg">
          We design smart automations, build custom AI-driven software, and
          deliver solutions that simplify your work, grow your business, and
          prepare you for the future. From personalized digital tools to
          intelligent trading insights, Elara Tech is where innovation meets
          reliability.
        </p>
        <p className="max-w-[800px] text-lg text-white/80 md:text-xl font-medium">
          Let’s build what’s next—together.
        </p>
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#projects">Explore Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
