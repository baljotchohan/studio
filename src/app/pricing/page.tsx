
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-200px)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
        Custom Solutions, Custom Pricing
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
        Every business is unique. I provide custom quotes based on your specific needs and project scope to ensure you get the best value.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/contact">Get Your Free Quote</Link>
      </Button>
    </div>
  );
}
