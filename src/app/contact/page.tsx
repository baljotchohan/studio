
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: <Mail />,
    title: "Email",
    description: "For detailed inquiries and proposals.",
    href: "mailto:baljotchohan23@gmail.com",
    cta: "Send Email",
  },
  {
    icon: <Phone />,
    title: "Book a Call",
    description: "Schedule a free discovery call.",
    href: "#",
    cta: "Schedule Call",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          Ready to automate your business or have a question? Let's talk.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {contactMethods.map((method) => (
          <div key={method.title} className="relative group">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-50 blur transition duration-500 group-hover:opacity-75"></div>
            <Card className="relative h-full flex flex-col items-center justify-center bg-card/80 p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-primary">{React.cloneElement(method.icon, { size: 40 })}</div>
              <h3 className="mb-2 text-xl font-bold text-white">{method.title}</h3>
              <p className="mb-6 flex-grow text-gray-400">{method.description}</p>
              <Button asChild className="w-full">
                <Link href={method.href} target="_blank">{method.cta}</Link>
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
