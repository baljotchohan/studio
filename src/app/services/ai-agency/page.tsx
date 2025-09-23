import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceDetailPage() {
    const service = services.find(s => s.slug === 'ai-agency');

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <service.icon className="h-16 w-16 text-primary mb-4" />
                        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {service.title}
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground">
                            {service.description}
                        </p>
                        <p className="mt-4 text-lg text-foreground">
                            {service.details}
                        </p>
                         <Button asChild size="lg" className="mt-8">
                            <Link href="/contact">
                                Get Started with {service.title} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    {/* You can add an image or illustration here */}
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}
