import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
          About Me
        </h1>
        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          A passionate developer at the intersection of <span className="text-gradient">AI</span>, automation, and user experience.
        </p>
      </div>
      <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur"></div>
          <Avatar className="relative h-40 w-40 border-4 border-background md:h-56 md:w-56">
            <AvatarImage src="https://github.com/shadcn.png" alt="Developer" />
            <AvatarFallback><span className="text-gradient">AI</span></AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">I’m a developer specializing in <span className="text-gradient">AI</span> automation and smart chat systems.</h2>
          <p className="mt-4 text-gray-300">
            I help businesses save time, capture leads, and grow using intelligent technology. My focus is on building practical, efficient, and scalable <span className="text-gradient">AI</span> solutions that deliver real-world results. Whether it's a customer support chatbot that works 24/7 or an automated workflow that eliminates manual tasks, I design systems that empower businesses to do more.
          </p>
          <p className="mt-4 text-gray-300">
            With a deep understanding of modern <span className="text-gradient">AI</span> tools and platforms, I create custom solutions tailored to the unique needs of each client. Let's connect and explore how we can build the future of your business, together.
          </p>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
              <Link href="#" target="_blank">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
              <Link href="#" target="_blank">
                <Github />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
              <Link href="#" target="_blank">
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
