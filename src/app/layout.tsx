import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Innovative Solutions for the Digital Age',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-black font-body antialiased')}>
        <div className="relative flex min-h-dvh flex-col">
          <div className="bg-slate-900/50 p-2 md:p-4 max-w-7xl mx-auto w-full">
            <div className="bg-slate-900 border border-slate-700/50 rounded-lg shadow-2xl shadow-blue-500/10">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
