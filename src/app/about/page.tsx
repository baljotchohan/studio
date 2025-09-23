
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Baljot Singh Chohan',
    role: 'CEO & Founder',
    bio: <>As the creator of StudIQ, Baljot is an 18-year-old BCA student specializing in <span className="animated-gradient-text">AI</span> & ML. He is also an accomplished <span className="animated-gradient-text">AI</span> Journalist, combining technical skill with insightful industry commentary.</>,
  },
  {
    name: 'Mankirat Singh',
    role: 'Content Manager & Co-founder',
    bio: 'At 18 years old, Mankirat is a forward-thinking engineering student in Canada who brings a sharp strategic vision to our content, ensuring it is engaging, informative, and impactful.',
  },
  {
    name: 'Daman Deep Singh',
    role: 'CFO',
    bio: <>Daman is a dedicated <span className="animated-gradient-text">AI</span> & ML student at Chandigarh, where he skillfully manages the financial strategy that fuels our innovation and growth.</>,
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-orbitron animated-gradient-text">
          About Elara Tech
        </h1>
        <p className="mt-6 max-w-[800px] text-lg text-white/80 md:text-xl">
          Pioneering the future of <span className="animated-gradient-text">Artificial Intelligence</span>.
        </p>
      </section>

      <section className="mt-16">
        <div className="bg-black/60 border border-white/10 rounded-2xl p-8 shadow-lg text-left">
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Mission</h2>
          <p className="text-center text-white/80 md:text-lg">
            As a future-focused company, our mission is to empower businesses and individuals by providing cutting-edge <span className="animated-gradient-text">AI</span> solutions that drive growth, efficiency, and innovation. We are committed to demystifying <span className="animated-gradient-text">Artificial Intelligence</span> and making its transformative power accessible to everyone, helping our clients navigate the complexities of the digital age with confidence.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="bg-black/60 border border-white/10 rounded-2xl p-8 shadow-lg text-left">
          <h2 className="text-3xl font-bold mb-6 text-center font-orbitron animated-gradient-text">Our Vision</h2>
          <p className="text-center text-white/80 md:text-lg">
            We envision a world where intelligent technology seamlessly integrates with human potential. Our goal is to be at the forefront of the <span className="animated-gradient-text">AI</span> revolution, creating innovative solutions that not only solve business challenges but also contribute to a smarter, more connected, and sustainable future for all.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center font-orbitron animated-gradient-text">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-black/60 border-white/10 text-center flex flex-col items-center">
              <CardHeader className="items-center">
                <CardTitle className="font-orbitron pt-6">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
