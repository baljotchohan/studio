import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const serviceImageMap: { [key: string]: string } = {
  "3d-animation": "service-3d",
  "ui-ux-design": "service-uiux",
  "web-development": "service-webdev",
  "technical-support": "service-support",
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const imageId = serviceImageMap[service.slug];
  const image = PlaceHolderImages.find((img) => img.id === imageId);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/services" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Services
                </Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <service.icon className="h-8 w-8" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {service.details}
            </p>
            <Button asChild size="lg" className="mt-8 max-w-xs">
                <Link href="/contact">Inquire about {service.title}</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                    {image && (
                        <Image
                            src={image.imageUrl}
                            alt={service.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    )}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
