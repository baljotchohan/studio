import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin, Mail, MessageSquare, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <MessageSquare />, href: '#', label: 'WhatsApp' },
  { icon: <Mail />, href: 'mailto:email@example.com', label: 'Email' },
  { icon: <Instagram />, href: '#', label: 'Instagram' },
  { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
  { icon: <Github />, href: '#', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-primary/10 bg-transparent py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div>
          <h3 className="text-lg font-bold text-white">AI Automation</h3>
          <p className="mt-1 text-sm text-gray-400">
            &copy; {new Date().getFullYear()}. Built for the future.
          </p>
        </div>
        <nav className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" size="icon" className="text-gray-400 transition-colors hover:text-primary hover:bg-primary/10">
              <Link href={link.href} target="_blank">
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
