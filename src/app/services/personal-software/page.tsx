
import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceDetailPage() {
    const service = services.find(s => s.slug === 'personal-software');

    if (!service) {
        notFound();
    }

    return (
        <>
            <div className="bg-[#0d1117] text-gray-300 font-code">
                <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-green-400 text-4xl">&gt;</span>
                                <service.icon className="h-16 w-16 text-green-400" />
                            </div>
                            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                // {service.title}
                            </h1>
                            <p className="mt-6 text-xl text-gray-400">
                                /* {service.description} */
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-black font-bold">
                                <a href="https://elaratechlabs.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    Build Your Vision <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                        
                        <div className="space-y-6">
                           {Array.isArray(service.details) && service.details.map((section, index) => (
                               <Card key={index} className="bg-[#161b22] border border-gray-700 shadow-md transition-all duration-300 hover:border-green-500">
                                   <CardHeader>
                                       <CardTitle className="font-code text-2xl text-green-400"><span className="text-purple-400">const</span> {section.title.replace(/\s/g, '_')} = &#123;</CardTitle>
                                   </CardHeader>
                                   <CardContent className="space-y-4 pl-12">
                                       <p className="text-gray-400">// {section.description}</p>
                                       <ul className="space-y-3">
                                           {section.points.map((point, pIndex) => (
                                               <li key={pIndex} className="flex items-start">
                                                   <span className="text-yellow-400 mr-3 mt-1">&#8227;</span>
                                                   <span className="text-gray-300">'{point}'</span>
                                               </li>
                                           ))}
                                       </ul>
                                   </CardContent>
                                    <div className="font-code text-2xl text-green-400 p-6 pt-0 pl-8">&#125;;</div>
                               </Card>
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
