
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <main className="flex flex-col items-center justify-center p-12 text-center pt-32">
        <section className="relative z-10 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
            Welcome to Elara Tech
          </h1>
          <p className="max-w-[800px] text-lg text-white/80 md:text-xl">
            Your partner in unlocking the full power of{' '}
            <span className="animated-gradient-text">
              Artificial Intelligence
            </span>
            .
          </p>
          <p className="max-w-[800px] text-lg text-white/80 md:text-xl font-medium">
            Let’s build what’s next—together.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <section id="services" className="w-full max-w-5xl px-4 py-16">
        <div className="border border-white/10 rounded-2xl p-8 shadow-lg text-left">
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-orbitron">
                  <span className="animated-gradient-text">AI</span> Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-white/80">We design smart automations to streamline your workflow.</p>
                <Button className="mt-auto w-fit">Get Service</Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-orbitron">
                  <span className="animated-gradient-text">AI</span> Agency
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-white/80">Automate your business with our custom <span className="animated-gradient-text">AI</span>-driven solutions.</p>
                <Button className="mt-auto w-fit">Get Service</Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-orbitron">
                  SaaS
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-white/80">Software as a Service solutions tailored for your needs.</p>
                <Button className="mt-auto w-fit">Get Service</Button>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-orbitron">
                  Personalized Software
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-white/80">Custom software development to deliver on your unique vision.</p>
                <Button className="mt-auto w-fit">Get Service</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
