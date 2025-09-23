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
      <div className="nebula"></div>
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
        <div className="absolute top-0 left-0 w-full h-full animate-orbit">
            <Image
            src="https://picsum.photos/seed/elara/100/100"
            alt="Elara"
            width={100}
            height={100}
            className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-50 rounded-full shadow-[0_0_20px_5px_rgba(255,255,220,0.5)]"
            data-ai-hint="moon rock"
            />
        </div>
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
        .animate-orbit {
            animation: orbit 45s linear infinite;
        }
        @keyframes orbit {
            from {
                transform: rotate(0deg) translateX(300px) rotate(0deg);
            }
            to {
                transform: rotate(360deg) translateX(300px) rotate(-360deg);
            }
        }
      `}</style>
    </div>
  );
}
