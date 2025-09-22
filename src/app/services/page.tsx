import { ServicesOverview } from "@/components/sections/services-overview";

export default function ServicesPage() {
    return (
        <div className="bg-background">
             <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Our Services
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We offer a comprehensive suite of digital services to bring your ideas to life.
                </p>
            </div>
            <ServicesOverview />
        </div>
    )
}