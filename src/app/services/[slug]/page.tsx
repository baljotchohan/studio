
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'We design smart automations to streamline your workflow. Our team analyzes your current processes and identifies opportunities for AI-powered automation, from data entry to complex decision-making.',
    details: [
        "Workflow analysis and optimization",
        "Custom AI model development",
        "Integration with existing systems",
        "Ongoing support and maintenance"
    ]
  },
  {
    slug: 'ai-agency',
    title: 'AI Agency',
    description: 'Automate your business with our custom AI-driven solutions. We act as your dedicated AI partner, providing end-to-end services to build, deploy, and manage AI solutions that drive growth.',
     details: [
        "Strategic AI consulting",
        "Full-stack development of AI applications",
        "Chatbot and virtual assistant creation",
        "Predictive analytics and data science"
    ]
  },
  {
    slug: 'saas',
    title: 'SaaS',
    description: 'Software as a Service solutions tailored for your needs. We build scalable, cloud-native SaaS products that are ready for market, providing you with a competitive edge.',
     details: [
        "Product discovery and roadmap planning",
        "Multi-tenant architecture design",
        "Subscription and billing integration",
        "Scalable cloud deployment"
    ]
  },
  {
    slug: 'personalized-software',
    title: 'Personalized Software',
    description: 'Custom software development to deliver on your unique vision. Our team works closely with you to understand your requirements and build a solution that is perfectly suited to your business.',
     details: [
        "Bespoke application development",
        "Mobile and web application solutions",
        "UI/UX design and prototyping",
        "Agile development methodology"
    ]
  },
];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
        <p className="mt-4 text-white/80">The service you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          {service.title}
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          {service.description}
        </p>
      </section>
      
      <section className="mt-16 w-full max-w-3xl mx-auto">
        <Card className="bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">What's Included</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-lg text-white/90">
                {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <span className="text-primary">&#10003;</span>
                        {detail}
                    </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <div className="text-center mt-16">
        <Button asChild>
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
        </Button>
      </div>
    </div>
  );
}
