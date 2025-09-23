
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'We design and implement intelligent automation solutions to supercharge your workflow, reduce costs, and minimize human error. Our team identifies key opportunities for AI-powered optimization, transforming your business processes from the ground up.',
    details: [
        "In-depth analysis and optimization of your existing workflows to identify automation opportunities.",
        "Development of custom AI and machine learning models tailored to your specific business needs.",
        "Seamless integration of AI solutions with your existing software and systems, including ERPs and CRMs.",
        "Continuous monitoring, support, and maintenance to ensure optimal performance and ROI."
    ],
    howItWorks: "We begin with a comprehensive discovery phase to map out your current processes and pinpoint inefficiencies. From there, our experts design and build bespoke AI solutions that automate repetitive tasks, streamline data handling, and enhance decision-making capabilities, integrating them smoothly into your technology stack.",
    howItHelps: "By automating routine tasks, you can significantly lower operational expenses, improve accuracy, and boost overall productivity. This allows your team to shift their focus from mundane work to strategic initiatives that drive innovation and create a competitive advantage for your business.",
    pricing: "Starts from ₹25,000. Pricing is customized based on the project's complexity, the scale of integration, and the level of ongoing support required. Contact us for a detailed and transparent quote."
  },
  {
    slug: 'ai-agency',
    title: 'AI Agency',
    description: 'Automate your business operations with our comprehensive, custom-built AI-driven solutions. We function as your strategic AI partner, offering end-to-end services to conceptualize, build, deploy, and manage AI systems that fuel sustainable growth.',
     details: [
        "Strategic AI consulting to align artificial intelligence with your core business objectives.",
        "End-to-end development of bespoke AI applications, from backend infrastructure to frontend UI.",
        "Creation of intelligent chatbots and virtual assistants to enhance customer engagement and support.",
        "Advanced predictive analytics and data science services to uncover actionable insights from your data."
    ],
    howItWorks: "Our collaborative approach starts with understanding your long-term business goals. We then craft a tailored AI strategy and roadmap. Our full-stack team manages the entire lifecycle, from data analysis and model training to application deployment and post-launch support, delivering a turnkey AI solution.",
    howItHelps: "Unlock new revenue streams and enhance customer loyalty with intelligent, automated systems. Leverage our expertise to implement predictive analytics for data-driven decision-making and gain the capabilities of a dedicated in-house AI team without the associated overhead and recruitment challenges.",
    pricing: "Starts from ₹50,000. We provide flexible engagement models, including project-based work and dedicated team support, to best suit your needs and budget. Reach out to us to discuss your project in detail."
  },
  {
    slug: 'saas',
    title: 'SaaS',
    description: 'We develop scalable, cloud-native Software as a Service (SaaS) products tailored to your market needs. Our solutions are built for performance and growth, providing you with a robust platform to build your business on.',
     details: [
        "Collaborative product discovery, market analysis, and strategic roadmap planning.",
        "Robust, secure, and scalable multi-tenant architecture design to support a growing user base.",
        "Seamless integration with leading subscription management and billing platforms like Stripe and Razorpay.",
        "Deployment on scalable cloud infrastructure (AWS, Google Cloud, Azure) with CI/CD pipelines."
    ],
    howItWorks: "We adopt a product-centric methodology, beginning with in-depth market research and feature planning. Our development team builds high-performance, multi-tenant SaaS applications, ensuring they are equipped with all necessary features like user authentication, subscription management, and secure payment processing.",
    howItHelps: "Bring your SaaS vision to life without getting bogged down in technical complexities. Our solutions are engineered for scalability, allowing you to expand your customer base and revenue streams with confidence. We deliver a market-ready product that positions you for long-term success.",
    pricing: "Custom pricing based on project scope. The final cost depends on feature complexity, scalability requirements, and third-party integrations. Let's connect to discuss your idea and provide a detailed estimate."
  },
  {
    slug: 'personalized-software',
    title: 'Personalized Software',
    description: 'We create custom software solutions designed to meet your unique business challenges and goals. Our team collaborates closely with you to understand your vision and build a product that perfectly aligns with your operational needs.',
     details: [
        "Development of bespoke web and mobile applications from the ground up.",
        "Intuitive UI/UX design, wireframing, and interactive prototyping to ensure a user-centric final product.",
        "Agile development methodology with transparent communication and regular feedback loops.",
        "API development and third-party service integrations to extend software functionality."
    ],
    howItWorks: "Our process is built on collaboration and transparency. We start with in-depth consultations to define requirements, followed by UI/UX design and prototyping. Using an agile approach, we develop your software in iterative sprints, ensuring you are involved at every stage and the final product meets your expectations.",
    howItHelps: "Address your unique business challenges with a software solution built to your exact specifications. A custom application can streamline workflows, boost employee productivity, and provide a superior, seamless experience for your customers, giving you a distinct competitive edge in the market.",
    pricing: "Custom pricing based on project scope. We offer a free initial consultation to understand your requirements and provide a detailed, no-obligation quote. Get in touch with us for an estimate."
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

  const highlightAI = (text: string) => {
    return text.split('AI').map((part, index) => (
      <span key={index}>
        {part}
        {index < text.split('AI').length - 1 && <span className="animated-gradient-text">AI</span>}
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          {service.title.includes('AI') ? 
            <>{highlightAI(service.title)}</> : 
            service.title
          }
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          {highlightAI(service.description)}
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
                        <span>{highlightAI(detail)}</span>
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
            <p className="text-lg text-white/80 text-center">{highlightAI(service.howItWorks)}</p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">How It Helps You</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-white/80 text-center">{highlightAI(service.howItHelps)}</p>
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
