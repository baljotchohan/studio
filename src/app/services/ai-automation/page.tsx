
'use client';

import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceDetailPage() {
    const service = services.find(s => s.slug === 'ai-automation');

    if (!service) {
        notFound();
    }

    return (
        <>
            <div className="relative overflow-hidden bg-background">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                 <div className="relative container mx-auto max-w-7xl px-4 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                             <div className="p-4 bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mb-4 ring-4 ring-primary/20">
                                <service.icon className="h-16 w-16 text-primary" />
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                {service.title}
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground">
                                {service.description}
                            </p>
                            <Button asChild size="lg" className="mt-8">
                                <a href="https://elaratechlabs.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    Automate Now <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                        
                        <div className="space-y-8">
                           {Array.isArray(service.details) && service.details.map((section, index) => (
                               <Card key={index} className="border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                                   <CardHeader>
                                       <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                                            <span>{section.title}</span>
                                       </CardTitle>
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
            <style jsx>{`
                .bg-grid-pattern {
                    background-image:
                        linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                        linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </>
    );
}
