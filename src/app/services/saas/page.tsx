
import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceDetailPage() {
    const service = services.find(s => s.slug === 'saas');

    if (!service) {
        notFound();
    }

    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white">
                <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
                    <div className="flex flex-col items-center text-center mb-12">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <service.icon className="h-16 w-16 text-primary" />
                        </div>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            {service.title}
                        </h1>
                        <p className="mt-6 text-xl text-white/80 max-w-3xl">
                            {service.description}
                        </p>
                        <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                            <a href="https://elaratechlabs.vercel.app/" target="_blank" rel="noopener noreferrer">
                                Launch Your Project <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       {Array.isArray(service.details) && service.details.map((section, index) => (
                           <Card key={index} className="bg-slate-800/50 border-blue-500/30 text-white backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
                               <CardHeader>
                                   <CardTitle className="font-headline text-2xl text-primary">{section.title}</CardTitle>
                               </CardHeader>
                               <CardContent className="space-y-4">
                                   <p className="text-white/70">{section.description}</p>
                                   <ul className="space-y-3">
                                       {section.points.map((point, pIndex) => (
                                           <li key={pIndex} className="flex items-start">
                                               <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
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
        </>
    );
}
