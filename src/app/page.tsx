
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { CheckCircle, Instagram, Linkedin, Twitter } from 'lucide-react';

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
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-chart-4 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black/80 border border-white/10 rounded-2xl p-8 shadow-lg text-left">
            <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.slug} className="bg-transparent border-white/10">
                  <CardHeader>
                    <CardTitle className="font-orbitron animated-gradient-text">
                      {service.title}
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
        </div>
      </section>
      <section id="live-product" className="w-full max-w-5xl px-4 py-16">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-chart-4 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black/80 border border-white/10 rounded-2xl p-8 shadow-lg text-left">
            <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">
              Our Live Product: StudIQ
            </h2>
            <p className="text-lg text-white/80 md:text-xl mb-8 text-center">
              World's first AI-based personalized platform, designed to revolutionize your learning experience.
            </p>
            <div className="space-y-8">
              <div className="flex flex-col gap-4 text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Personalized Learning Paths</h4>
                    <p className="text-white/70">Our AI analyzes your unique learning style, strengths, and weaknesses to create a fully customized study plan. This adaptive approach ensures you focus on what matters most, helping you master any subject faster and more effectively than ever before.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">AI-Powered Quizzes & Feedback</h4>
                    <p className="text-white/70">Test your knowledge with intelligent quizzes that go beyond right or wrong. Receive instant, detailed feedback on your performance, pinpointing specific areas for improvement and providing targeted resources to accelerate your growth and retention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">AI-Driven Career Suggestions</h4>
                    <p className="text-white/70">Unlock your potential with career suggestions tailored to your skills, interests, and academic performance. StudIQ’s AI provides actionable insights into potential career paths, connecting you with resources and guidance to help you achieve your professional goals.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center pt-4">
                <Button asChild size="lg" className="w-fit">
                  <Link href="https://studio--studiq-ai.us-central1.hosted.app" target="_blank">
                    Check it out
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-5xl px-4 py-16">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-chart-4 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black/80 border border-white/10 rounded-2xl p-8 shadow-lg">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-center font-orbitron animated-gradient-text">Connect With Our Team</CardTitle>
              <CardDescription className="text-center text-white/70 mt-2">
                Meet the minds behind the innovation. Reach out to our leadership team directly.
              </CardDescription>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-lg font-orbitron">Baljot Singh Chohan</h3>
                <p className="text-primary mb-2">CEO & Founder</p>
                <p className="text-white/70 mb-4 max-w-xs">The visionary leader driving our mission to innovate with <span className="animated-gradient-text">AI</span>.</p>
                <div className="flex space-x-4 mt-auto">
                  <Button asChild variant="ghost" size="icon">
                    <Link href="https://www.instagram.com/baljotchohan_01" target="_blank" rel="noopener noreferrer">
                      <Instagram />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="https://twitter.com/baljotchohan" target="_blank" rel="noopener noreferrer">
                      <Twitter />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="https://www.linkedin.com/in/baljot-chohan-866ba6356" target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-lg font-orbitron">Daman Deep Singh</h3>
                <p className="text-primary mb-2">CFO</p>
                <p className="text-white/70 mb-4 max-w-xs">The financial strategist ensuring our growth and stability in the <span className="animated-gradient-text">AI</span> landscape.</p>
                <div className="flex space-x-4 mt-auto">
                  <Button asChild variant="ghost" size="icon">
                    <Link href="https://www.instagram.com/x7_daman" target="_blank" rel="noopener noreferrer">
                      <Instagram />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="https://twitter.com/Damandeep018" target="_blank" rel="noopener noreferrer">
                      <Twitter />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
