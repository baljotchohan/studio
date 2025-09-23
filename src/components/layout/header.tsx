"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services/saas", label: "SAAS" },
  { href: "/services/ai-automation", label: "AI Automation" },
  { href: "/services/ai-agency", label: "AI Agency" },
  { href: "/services/personal-software", label: "Personal Software" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-header-background text-header-foreground backdrop-blur-sm">
      <div className="container flex h-auto min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
        <Link href="/" className="font-headline text-xl font-bold">
          
        </Link>
        <nav className="flex items-center gap-x-4 gap-y-2 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-header-foreground/80",
                isClient && pathname === link.href ? "text-header-foreground" : "text-header-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">Get Started</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
