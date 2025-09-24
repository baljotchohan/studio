'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          Contact Us
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      <section className="mt-16 w-full max-w-4xl mx-auto">
        <Card className="bg-black/60 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">Connect With Our Team</CardTitle>
            <CardDescription className="text-center text-white/70">
              Meet the minds behind the innovation. Reach out to our leadership team directly.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
