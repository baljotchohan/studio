import Link from "next/link";
import { pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Find the Right Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose the perfect plan to meet your project's needs and budget.
          </p>
        </div>
        <div className="mt-12 grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={cn("flex flex-col bg-card text-card-foreground", plan.popular && "border-primary ring-2 ring-primary")}>
              <CardHeader className="relative">
                {plan.popular && (
                  <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  </div>
                )}
                <plan.icon className="h-10 w-10 text-primary mx-auto" />
                <CardTitle className="font-headline text-2xl text-center pt-4">{plan.name}</CardTitle>
                <CardDescription className="text-center">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== "Enterprise" && <span className="text-muted-foreground">/project</span>}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={cn("w-full", plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80")}>
                  <Link href="/contact">
                    {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
