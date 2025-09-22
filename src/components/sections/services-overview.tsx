import Link from "next/link";
import { services } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From concept to launch, we provide the digital expertise your business needs to succeed.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1 bg-header-background text-header-foreground">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-header-background/80 text-header-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl text-header-foreground">{service.title}</CardTitle>
                  <CardDescription className="pt-2 text-header-foreground/80">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
