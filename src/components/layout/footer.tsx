import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-background/50 backdrop-blur-lg mt-16">
      <div className="container mx-auto px-4 py-6 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex-1">
            <h3 className="font-bold text-lg animated-gradient-text">
              ElaraTechLabs
            </h3>
            <p className="mt-1 text-white/60">
              Pioneering the future of <span className="animated-gradient-text">AI</span>.
            </p>
          </div>
          <nav className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="link" className="text-white/60 hover:text-primary p-0 h-auto font-normal">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} ElaraTechLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
