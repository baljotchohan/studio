"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function GalaxyBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="https://picsum.photos/seed/jupiter/1200/1200"
          alt="Jupiter"
          width={1200}
          height={1200}
          className="opacity-20 animate-pulse-slow"
          data-ai-hint="jupiter planet"
        />
      </div>
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite alternate;
        }
        @keyframes pulse-slow {
          0% {
            opacity: 0.1;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
