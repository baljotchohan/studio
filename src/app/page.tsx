
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Bot, CheckCircle } from 'lucide-react';

const services = [
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'We design smart automations to streamline your workflow.',
  },
  {
    slug: 'ai-agency',
    title: 'AI Agency',
    description: 'Automate your business with our custom AI-driven solutions.',
  },
  {
    slug: 'saas',
    title: 'SaaS',
    description: 'Software as a Service solutions tailored for your needs.',
  },
  {
    slug: 'personalized-software',
    title: 'Personalized Software',
    description: 'Custom software development to deliver on your unique vision.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <main className="flex flex-col items-center justify-center p-12 text-center">
        <section className="relative z-10 flex flex-col items-center justify-center space-y-6 pt-16">
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
        <div className="bg-black/60 border border-white/10 rounded-2xl p-8 shadow-lg text-left">
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.slug} className="bg-transparent border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-orbitron">
                    <span className="animated-gradient-text">{service.title.split(' ')[0]}</span> {service.title.split(' ').slice(1).join(' ')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-white/80">{service.description}</p>
                   <Button className="mt-auto w-fit" variant="default" asChild>
                    <Link href={`/services/${service.slug}`}>Get Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="live-product" className="w-full max-w-5xl px-4 py-16">
        <div className="bg-black/60 border border-white/10 rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Live AI Product</h2>
          <Card className="bg-transparent border-white/10 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl animated-gradient-text flex items-center justify-center gap-3">
                <Bot className="h-8 w-8" />
                Stud IQ
              </CardTitle>
              <CardDescription className="text-white/80 text-lg">
                An AI tutor app which improves your learning.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-white/80">
                  Elevate your study sessions with personalized guidance and instant feedback.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-white/80">
                  Test your knowledge with our interactive <span className="animated-gradient-text">AI Quiz</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-white/80">
                  Discover your future path with the <span className="animated-gradient-text">AI Career Finder</span>.
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center pt-6">
              <Button asChild size="lg">
                <Link href="https://studio--learnflow-ai-co3xd.us-central1.hosted.app/dashboard" target="_blank" rel="noopener noreferrer">Start Learning with AI</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
