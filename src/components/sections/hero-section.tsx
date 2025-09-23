import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="container relative z-10 mx-auto flex min-h-[calc(80vh-4rem)] max-w-7xl items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Innovative Solutions
            <br />
            for the <span className="text-primary">Digital Age</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            We specialize in crafting intuitive user experiences and powerful web applications.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://elaratechlabs.vercel.app/" target="_blank" rel="noopener noreferrer">Start Your Project</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
              <Link href="/services/saas">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
