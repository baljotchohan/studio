import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <h1 
          className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ELARA
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl">
          Named after a moon of Jupiter, Elara represents a new frontier. Let's build something out of this world.
        </p>
    </main>
  );
}
