
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Mail />, href: 'mailto:baljotchohan23@gmail.com', label: 'Email' },
  { icon: <Instagram />, href: 'https://instagram.com/baljotchohan01', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-primary/10 bg-transparent py-2 md:py-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 sm:flex-row md:gap-6">
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-bold text-white">ETlabs</h3>
          <p className="mt-1 text-xs text-gray-400">
            &copy; {new Date().getFullYear()}. Built for the future.
          </p>
        </div>
        <nav className="flex items-center gap-0">
          {socialLinks.map((link) => (
            <Button key={link.label} asChild variant="ghost" size="icon" className="h-8 w-8 text-gray-400 transition-colors hover:text-primary hover:bg-primary/10">
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
