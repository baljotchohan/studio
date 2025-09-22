import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let's build something amazing together.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? Fill out the form, and we'll get back to you as soon as possible.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
