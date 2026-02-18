'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BrainCircuit, Briefcase, Code, Dumbbell, Headset, Home as HomeIcon, MessageSquare, MessagesSquare, Mic, PackagePlus, Send, ShoppingCart, Store, Stethoscope, TrendingUp, Utensils, Workflow, Zap, BarChart, Users, ClipboardList, Scissors, HeartHandshake } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const services = [
    {
      icon: <Bot size={32} className="text-primary" />,
      title: <><span className="text-gradient">AI</span> Chatbots</>,
      description: 'Custom chatbots that handle queries, qualify leads, and provide 24/7 support.',
    },
    {
      icon: <MessagesSquare size={32} className="text-primary" />,
      title: 'Social Media Automation',
      description: 'Engage customers on WhatsApp & Instagram with automated replies and workflows.',
    },
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically, sending them directly to your CRM.',
    },
    {
      icon: <HeartHandshake size={32} className="text-primary" />,
      title: <><span className="text-gradient">AI</span> Customer Support</>,
      description: 'Reduce support tickets and improve satisfaction with intelligent, automated helpdesks.',
    },
    {
      icon: <Workflow size={32} className="text-primary" />,
      title: 'Custom Workflows',
      description: <>Bespoke <span className="text-gradient">AI</span>-powered tools designed to solve your unique business challenges.</>,
    },
    {
      icon: <Scissors size={32} className="text-primary" />,
      title: 'Content Creation',
      description: 'Generate engaging and high-quality content for your brand automatically.',
    },
  ];

  const industries = [
      { icon: <Store />, name: 'Local Businesses' },
      { icon: <Dumbbell />, name: 'Gyms & Fitness' },
      { icon: <ClipboardList />, name: 'Coaching' },
      { icon: <Stethoscope />, name: 'Clinics' },
      { icon: <HomeIcon />, name: 'Real Estate' },
      { icon: <ShoppingCart />, name: 'E-commerce' },
      { icon: <Utensils />, name: 'Restaurants' },
      { icon: <Briefcase />, name: 'Small Businesses' },
  ];

function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    revealElements.forEach(elem => {
      observer.observe(elem);
    });

    return () => {
      revealElements.forEach(elem => {
        observer.unobserve(elem);
      });
    };
  }, []);
}

const AnimatedCounter = ({ finalValue, duration = 2000 } : { finalValue: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = finalValue;
          if (start === end) return;

          let startTime = Date.now();
          const timer = setInterval(() => {
            const timePassed = Date.now() - startTime;
            const progress = timePassed / duration;
            const currentCount = Math.min(Math.floor(progress * end), end);
            setCount(currentCount);

            if (currentCount === end) {
              clearInterval(timer);
            }
          }, 20);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [finalValue, duration]);


  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  useScrollReveal();

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex h-[calc(100vh-56px)] w-full flex-col items-center justify-center text-center">
        <div className="relative z-10 p-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
            Automate Your Business with <span className="text-gradient">Elaratech</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            We build intelligent chatbots and automation systems that save time and increase customer engagement.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="glow-button">
              <Link href="#demo">View Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10 hover:text-white">
              <Link href="/contact">Hire Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Section 2: What I Build */}
      <section id="services" className="w-full max-w-6xl px-4 py-16 md:py-24 scroll-reveal">
        <div className="text-center">
          <h2 className="section-heading">What We Build</h2>
          <p className="section-subheading mx-auto">From intelligent chatbots to complete automation systems, we create solutions that drive growth.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
              <div key={index} className="relative group h-full">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>
                  <Card className="glass-card relative h-full transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col [transform-style:preserve-3d] group-hover:[transform:translateZ(20px)_rotateY(5deg)]">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
              </div>
          ))}
        </div>
      </section>

      {/* Section 3: How AI Helps */}
      <section id="process" className="w-full max-w-7xl px-4 py-16 md:py-24 scroll-reveal">
        <div className="text-center">
            <h2 className="section-heading">How <span className="text-gradient">AI</span> Connects Everything</h2>
            <p className="section-subheading mx-auto">An automated ecosystem turning inquiries into opportunities, 24/7.</p>
        </div>

        {/* Desktop View */}
        <div className="mt-24 hidden md:grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-x-16 gap-y-12 lg:gap-x-24 lg:gap-y-20 relative">
            {/* Connecting Lines in background */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
                <div className="absolute h-[300px] w-[300px] rounded-full border border-primary/30 animate-ping-slow [animation-delay:-2s]"></div>
                <div className="absolute h-[500px] w-[500px] rounded-full border border-primary/30 animate-ping-slow [animation-delay:-1s]"></div>
                <div className="absolute h-[700px] w-[700px] rounded-full border border-secondary/30 animate-ping-slow"></div>
                 <div className="absolute h-full w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
                <div className="absolute w-full h-px bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0"></div>
            </div>
            
            <div className="col-start-1 row-start-1"></div>
            <div className="col-start-3 row-start-1"></div>
            <div className="col-start-1 row-start-3"></div>
            <div className="col-start-3 row-start-3"></div>

            <div className="col-start-2 row-start-2 flex flex-col items-center gap-3 text-center p-4">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20 text-primary ring-8 ring-primary/30 animate-pulse-glow">
                    <BrainCircuit size={56} />
                </div>
                <h3 className="text-xl font-bold text-white"><span className="text-gradient">AI</span> Assistant</h3>
            </div>

            <div className="col-start-2 row-start-1 flex flex-col items-center gap-2 text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm ring-4 ring-border transition-all duration-300 group-hover:ring-primary">
                    <MessageSquare size={40} className="text-primary"/>
                </div>
                <p className="font-semibold text-white">Customer Message</p>
            </div>

            <div className="col-start-2 row-start-3 flex flex-col items-center gap-2 text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm ring-4 ring-border transition-all duration-300 group-hover:ring-primary">
                    <PackagePlus size={40} className="text-primary"/>
                </div>
                <p className="font-semibold text-white">Lead Saved</p>
            </div>

            <div className="col-start-1 row-start-2 flex flex-col items-center gap-2 text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm ring-4 ring-border transition-all duration-300 group-hover:ring-primary">
                    <Zap size={40} className="text-primary"/>
                </div>
                <p className="font-semibold text-white">Instant Reply</p>
            </div>

            <div className="col-start-3 row-start-2 flex flex-col items-center gap-2 text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm ring-4 ring-border transition-all duration-300 group-hover:ring-primary">
                    <TrendingUp size={40} className="text-primary"/>
                </div>
                <p className="font-semibold text-white">Business Growth</p>
            </div>
        </div>

        {/* Mobile View */}
        <div className="mt-16 flex flex-col items-center gap-12 md:hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-background -z-10"></div>
            {[
                { icon: Users, label: 'Customer Message' },
                { icon: BrainCircuit, label: 'AI Assistant' },
                { icon: Zap, label: 'Instant Reply' },
                { icon: PackagePlus, label: 'Lead Saved' },
                { icon: BarChart, label: 'Business Growth' },
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3 text-center p-2 bg-background z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card/80 text-primary ring-4 ring-border backdrop-blur-sm">
                        <item.icon size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                </div>
            ))}
        </div>
      </section>

      {/* Section 4: Live Demo */}
      <section id="demo" className="w-full max-w-3xl px-4 py-16 md:py-24 scroll-reveal">
        <div className="text-center">
          <h2 className="section-heading">Live Demo Experience</h2>
          <p className="section-subheading mx-auto">See how an <span className="text-gradient">AI</span> chatbot can interact with your customers in real-time.</p>
        </div>
        <Card className="glass-card mt-12">
          <CardContent className="p-4 md:p-6">
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar>
                <div className="max-w-xs rounded-2xl rounded-bl-none bg-primary/80 p-3 text-white">
                  <p className="animate-typing">What are your timings?</p>
                </div>
              </div>
              <div className="flex items-end gap-2 justify-end">
                <div className="max-w-xs rounded-2xl rounded-br-none bg-muted p-3 text-white">
                  <p>We are open from 9 AM to 8 PM, Monday to Saturday.</p>
                </div>
                 <Avatar className="h-8 w-8"><AvatarFallback><span className="text-gradient">AI</span></AvatarFallback></Avatar>
              </div>
               <div className="flex items-end gap-2">
                <Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar>
                <div className="max-w-xs rounded-2xl rounded-bl-none bg-primary/80 p-3 text-white">
                  <p>I want to book an appointment.</p>
                </div>
              </div>
              <div className="flex items-end gap-2 justify-end">
                 <div className="max-w-xs rounded-2xl rounded-br-none bg-muted p-3 text-white">
                  <p>Great! Please share your name and phone number to proceed.</p>
                </div>
                 <Avatar className="h-8 w-8"><AvatarFallback><span className="text-gradient">AI</span></AvatarFallback></Avatar>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 rounded-lg border border-primary/20 bg-card/50 p-1">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-gray-400" />
              <Button size="icon" variant="ghost" className="h-8 w-8 flex-shrink-0 text-primary hover:text-primary/80"><Mic /></Button>
              <Button size="icon" className="h-8 w-8 flex-shrink-0 rounded-md"><Send /></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Why Choose Me */}
      <section className="w-full max-w-6xl px-4 py-16 md:py-24 scroll-reveal">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-primary"><AnimatedCounter finalValue={24} />/7</h3>
              <p className="mt-2 text-gray-400">Customer Response</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-primary"><AnimatedCounter finalValue={80} />%</h3>
              <p className="mt-2 text-gray-400">Time Saved for Businesses</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-primary"><AnimatedCounter finalValue={300} />%</h3>
              <p className="mt-2 text-gray-400">Increase in Leads</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-primary"><AnimatedCounter finalValue={95} />%</h3>
              <p className="mt-2 text-gray-400">Client Satisfaction</p>
            </div>
        </div>
      </section>

      {/* Section 6: Industries I Serve */}
      <section className="w-full max-w-6xl px-4 py-16 md:py-24 scroll-reveal">
        <div className="text-center">
          <h2 className="section-heading">Industries We Serve</h2>
          <p className="section-subheading mx-auto">Providing <span className="text-gradient">AI</span> solutions for a wide range of businesses, both big and small.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry.name} className="relative group cursor-pointer">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>
              <div className="glass-card relative flex h-full flex-col items-center justify-center p-6 text-center transition-transform duration-300 group-hover:-translate-y-1">
                <div className="mb-4 text-primary">{React.cloneElement(industry.icon, { size: 32 })}</div>
                <p className="font-semibold text-white">{industry.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Section 7: About Me */}
      <section id="about" className="w-full max-w-4xl px-4 py-16 md:py-24 scroll-reveal">
         <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">
            <Avatar className="h-32 w-32 flex-shrink-0 border-4 border-primary/20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback><span className="text-gradient">ET</span></AvatarFallback>
            </Avatar>
            <div>
              <h2 className="section-heading">About Elaratech</h2>
              <p className="mt-4 text-lg text-gray-300">
                We’re a team specializing in <span className="text-gradient">AI</span> automation and smart chat systems. We help businesses save time, capture leads, and grow using intelligent technology.
              </p>
               <Button asChild variant="link" className="mt-4 px-0 text-lg text-primary">
                <Link href="/about">Learn More &rarr;</Link>
              </Button>
            </div>
         </div>
      </section>
      
      {/* Section 8: CTA */}
      <section id="contact" className="w-full px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
            <div className="absolute h-full w-full rounded-full bg-primary/50 animate-pulse-glow"></div>
            <Bot size={40} className="relative text-white" />
          </div>
          <h2 className="mt-8 section-heading">Ready to automate your business?</h2>
          <p className="section-subheading mx-auto">Let's discuss how <span className="text-gradient">AI</span> can transform your operations and drive growth.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="glow-button">
              <Link href="#demo">Get a Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10 hover:text-white">
              <Link href="https://wa.me/919465661767" target="_blank">Contact on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
