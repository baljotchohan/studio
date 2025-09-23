
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          About Elara Tech
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          Pioneering the future of Artificial Intelligence.
        </p>
      </section>

      <section className="mt-16">
        <div className="bg-black/60 border border-white/10 rounded-2xl p-8 shadow-lg text-left">
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Mission</h2>
          <p className="text-center text-white/80 md:text-lg">
            Our mission is to empower businesses and individuals by providing cutting-edge AI solutions that drive growth, efficiency, and innovation. We believe in the transformative power of technology and strive to make it accessible to everyone.
          </p>
        </div>
      </section>
    </div>
  );
}
