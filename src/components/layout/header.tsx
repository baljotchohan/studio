import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/pricing', label: 'Pricing' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block animated-gradient-text">
              ElaraTechLabs
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/80 backdrop-blur-lg">
              <nav className="flex flex-col items-start space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Button key={link.href} asChild variant="ghost" className="w-full justify-start text-lg">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
