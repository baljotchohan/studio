import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceDetailPage() {
    const service = services.find(s => s.slug === 'saas');

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="sticky top-24">
                        <service.icon className="h-16 w-16 text-primary mb-4" />
                        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {service.title}
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground">
                            {service.description}
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <Link href="/contact">
                                Get Started with {service.title} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    
                    <div className="space-y-8">
                       {Array.isArray(service.details) && service.details.map((section, index) => (
                           <Card key={index} className="overflow-hidden">
                               <CardHeader>
                                   <CardTitle className="font-headline text-2xl text-primary">{section.title}</CardTitle>
                               </CardHeader>
                               <CardContent className="space-y-4">
                                   <p className="text-muted-foreground">{section.description}</p>
                                   <ul className="space-y-3">
                                       {section.points.map((point, pIndex) => (
                                           <li key={pIndex} className="flex items-start">
                                               <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                               <span>{point}</span>
                                           </li>
                                       ))}
                                   </ul>
                               </CardContent>
                           </Card>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
