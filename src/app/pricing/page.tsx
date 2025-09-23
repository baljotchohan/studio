
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          Our Pricing
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          Find the perfect plan to fuel your next project. Simple, transparent, and powerful.
        </p>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-black/40 border-white/10 flex flex-col">
          <CardHeader>
            <CardTitle className="font-orbitron">Starter</CardTitle>
            <CardDescription className="text-white/70">For individuals and small teams getting started.</CardDescription>
            <p className="text-4xl font-bold animated-gradient-text pt-2">$49<span className="text-lg font-normal text-white/60">/mo</span></p>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />AI Automation Tools</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />Basic Support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-black/60 border-primary shadow-2xl shadow-primary/20 flex flex-col">
          <CardHeader>
            <CardTitle className="font-orbitron">Pro</CardTitle>
            <CardDescription className="text-white/70">For growing businesses that need more power.</CardDescription>
            <p className="text-4xl font-bold animated-gradient-text pt-2">$99<span className="text-lg font-normal text-white/60">/mo</span></p>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />Everything in Starter</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />AI Agency Services</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />Priority Support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="default">Choose Plan</Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-black/40 border-white/10 flex flex-col">
          <CardHeader>
            <CardTitle className="font-orbitron">Enterprise</CardTitle>
            <CardDescription className="text-white/70">For large-scale applications and custom needs.</CardDescription>
             <p className="text-4xl font-bold animated-gradient-text pt-2">Custom</p>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />Everything in Pro</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />Personalized Software</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" />Dedicated Account Manager</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
