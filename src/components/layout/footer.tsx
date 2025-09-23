import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
    { href: 'https://github.com', icon: Github, label: 'Github' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'Linkedin' },
];

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-background/50 backdrop-blur-lg mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg sm:inline-block animated-gradient-text">
              ElaraTechLabs
            </h3>
            <p className="mt-2 text-white/60">
              Pioneering the future of <span className="animated-gradient-text">Artificial Intelligence</span>.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Button key={link.href} asChild variant="link" className="text-white/60 hover:text-primary justify-center md:justify-start p-0 h-auto">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.label} asChild variant="ghost" size="icon">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} ElaraTechLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
