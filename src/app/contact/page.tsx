'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
  };

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

      <section className="mt-16 w-full max-w-2xl mx-auto">
        <Card className="bg-black/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-orbitron animated-gradient-text">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
