
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

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

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          Our Services
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          We offer a range of services to help you leverage the power of AI.
        </p>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug} className="bg-black/60 border-white/10 flex flex-col">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl animated-gradient-text">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white/80">{service.description}</p>
            </CardContent>
            <CardContent>
              <Button asChild>
                <Link href={`/services/${service.slug}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
