
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: 'https://studio--studiq-ai.us-central1.hosted.app', label: 'Live Product', target: '_blank' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg sm:inline-block animated-gradient-text">
            ElaraTechLabs
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost">
                <Link href={link.href} target={link.target}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/80 backdrop-blur-lg">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-start space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Button key={link.href} asChild variant="ghost" className="w-full justify-start text-lg">
                    <Link href={link.href} onClick={() => setIsSheetOpen(false)} target={link.target}>{link.label}</Link>
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
