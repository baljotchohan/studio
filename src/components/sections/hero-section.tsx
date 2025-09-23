import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThreeAnimation from "@/components/three-animation";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Link href="/services/3d-animation" className="absolute inset-0 z-0" aria-label="View 3D Animation Service">
          <ThreeAnimation />
      </Link>
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Innovative Solutions
            <br />
            for the <span className="text-primary">Digital Age</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            We specialize in crafting breathtaking 3D animations, intuitive user experiences, and powerful web applications.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
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
