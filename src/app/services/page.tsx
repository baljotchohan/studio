import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Code, HeartHandshake, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    icon: <Bot />,
    title: <><span className="text-gradient">AI</span> Chatbots for Businesses</>,
    description: 'Custom chatbots that handle queries, qualify leads, and provide 24/7 support on your website.',
  },
  {
    icon: <MessageSquare />,
    title: 'WhatsApp & Instagram Automation',
    description: 'Engage customers instantly on their favorite platforms with automated replies and workflows.',
  },
  {
    icon: <TrendingUp />,
    title: 'Lead Generation Automation',
    description: 'Capture and qualify leads automatically, sending them directly to your CRM or sales team.',
  },
  {
    icon: <HeartHandshake />,
    title: <><span className="text-gradient">AI</span> Customer Support Systems</>,
    description: 'Reduce support tickets and improve customer satisfaction with intelligent, automated helpdesks.',
  },
  {
    icon: <Code />,
    title: 'Custom Automation Tools',
    description: <>Bespoke <span className="text-gradient">AI</span>-powered tools and workflows designed to solve your unique business challenges.</>,
  },
    {
    icon: <Zap />,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and connect your apps to create seamless, automated processes.',
  },
];


export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          My Services
        </h1>
        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          From intelligent chatbots to complete automation systems, I create solutions that drive growth and efficiency for your business.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
         {services.map((service, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>
              <Card className="glass-card relative h-full transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
                <CardHeader>
                  <div className="mb-4 text-primary">{React.cloneElement(service.icon, { size: 32 })}</div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
                 <CardContent>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                    <Link href={`/services/${(typeof service.title === 'string' ? service.title : 'ai-service').toLowerCase().replace(/ /g, '-')}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
