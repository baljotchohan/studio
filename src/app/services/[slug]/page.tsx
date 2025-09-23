
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
    ],
    howItWorks: "We start with a deep dive into your existing workflows to identify bottlenecks. Then, we design and implement custom AI solutions that integrate seamlessly with your current software stack, automating repetitive tasks and freeing up your team to focus on high-value work.",
    howItHelps: "By automating routine processes, we help you reduce operational costs, minimize human error, and increase overall efficiency. Your team can dedicate more time to strategic initiatives that drive business growth.",
    pricing: "Starts from ₹25,000. Pricing varies based on complexity and integration requirements. Contact us for a custom quote."
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
    ],
    howItWorks: "Our team partners with you to understand your business goals. We then develop a comprehensive AI strategy, from conceptualization to deployment. We handle everything, including data analysis, model training, and application development, ensuring a turnkey solution.",
    howItHelps: "Leverage our expertise to unlock new revenue streams, enhance customer engagement with intelligent chatbots, and make data-driven decisions with predictive analytics. We provide the power of an in-house AI team without the overhead.",
    pricing: "Starts from ₹50,000. We offer flexible engagement models, from project-based work to dedicated team support. Contact us to discuss your needs."
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
    ],
    howItWorks: "We follow a product-centric approach, starting with market research and roadmap planning. Our developers build robust, multi-tenant SaaS applications on scalable cloud infrastructure, complete with subscription management and billing systems.",
    howItHelps: "Launch your own SaaS product without the technical hassle. Our solutions are designed for growth, allowing you to scale your user base and revenue. We provide a market-ready product that you can take to your customers with confidence.",
    pricing: "Custom pricing based on scope. The cost depends on the feature set, complexity, and scalability requirements. Let's talk about your vision."
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
    ],
    howItWorks: "Our process is collaborative. We begin with in-depth consultations and UI/UX prototyping to ensure we capture your vision. Using an agile methodology, we develop and iterate on your software, providing regular updates and incorporating your feedback.",
    howItHelps: "Get a software solution that is built to your exact specifications. A custom application can improve productivity, solve unique business challenges, and provide a seamless experience for your users and customers.",
    pricing: "Custom pricing based on project scope. We provide detailed quotes after an initial consultation to understand your specific requirements. Get in touch for a free estimate."
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
      <section className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          {service.title}
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          {service.description}
        </p>
      </section>
      
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <Card className="bg-black/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">What's Included</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-lg text-white/90">
                {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">&#10003;</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-white/80 text-center">{service.howItWorks}</p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">How It Helps You</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-white/80 text-center">{service.howItHelps}</p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-white/80 text-center">{service.pricing}</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <Button asChild size="lg">
          <Link href="/contact">
            Get a Custom Quote
          </Link>
        </Button>
      </div>

      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
        </Button>
      </div>
    </div>
  );
}
