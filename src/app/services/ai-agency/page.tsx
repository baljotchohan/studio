
'use client';

import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceDetailPage() {
    const service = services.find(s => s.slug === 'ai-agency');

    if (!service) {
        notFound();
    }

    return (
        <>
            <div className="bg-slate-900 text-gray-200">
                <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="relative pr-8">
                           <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-lighten filter blur-xl opacity-40 animate-blob"></div>
                           <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-lighten filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
                           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-lighten filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
                            
                            <div className="relative">
                                <service.icon className="h-20 w-20 text-blue-300 mb-4" />
                                <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                    {service.title}
                                </h1>
                                <p className="mt-6 text-xl text-gray-300">
                                    {service.description}
                                </p>
                                <Button asChild size="lg" className="mt-8 bg-blue-500 hover:bg-blue-400 text-white">
                                    <a href="https://elaratechlabs.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                           {Array.isArray(service.details) && service.details.map((section, index) => (
                               <Card key={index} className="bg-slate-800/60 border border-slate-700 shadow-lg text-gray-300">
                                   <CardHeader>
                                       <CardTitle className="font-headline text-2xl text-blue-400">{section.title}</CardTitle>
                                   </CardHeader>
                                   <CardContent className="space-y-4">
                                       <p>{section.description}</p>
                                       <ul className="space-y-3">
                                           {section.points.map((point, pIndex) => (
                                               <li key={pIndex} className="flex items-start">
                                                   <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
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
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
            `}</style>
        </>
    );
}
