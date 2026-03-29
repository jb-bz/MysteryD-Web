import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Jolon Bankey",
    role: "Founder, Developer, Product Lead",
    initials: "JB",
    bio: "30+ years in software development and product management. Deep ecommerce background. Started MysteryD to build the Shopify apps he wishes existed.",
  },
  {
    name: "Zia",
    role: "Customer Support and Community",
    initials: "Z",
    bio: "Keeps users happy and communities thriving. Makes sure every customer feels heard and every question gets a real answer.",
  },
  {
    name: "Neira",
    role: "Marketing, Design, and Growth",
    initials: "N",
    bio: "Turns complex ideas into clear messages. Makes sure the right people find MysteryD at the right time.",
  },
];

const principles = [
  {
    number: "01",
    title: "Async-first",
    description: "Small team. Ship fast, listen hard, improve constantly. No standups for the sake of standups.",
  },
  {
    number: "02",
    title: "Customer-led",
    description: "What merchants tell us matters more than what we assume. Real feedback, real improvements.",
  },
  {
    number: "03",
    title: "One at a time",
    description: "Scope locked before build begins. No feature creep. Every app does one thing well.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-1/4 right-0 w-96 h-96 gradient-blur bg-primary/10 translate-x-1/2" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow mb-8 block animate-fade-up">About</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-10 animate-fade-up stagger-1">
              We build what we{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                wish existed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-up stagger-2">
              MysteryD was founded on a simple idea: the best software comes from solving real problems, not chasing feature lists.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-card">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <span className="eyebrow mb-6 block animate-fade-up">The Story</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-up stagger-1">
                  From Costa Rica
                  <br />
                  <span className="text-gradient">to the USA.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up stagger-2">
                  MysteryD was originally founded in Costa Rica in the early 2000s. It&apos;s being revived and relaunched in the USA in 2026.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-secondary/30 rounded-3xl p-10 border border-border animate-fade-up stagger-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The mission hasn&apos;t changed: build the Shopify apps we wish existed. Simple, well-crafted tools that do exactly what they say — no bloat, no surprises.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-3xl p-10 border border-border animate-fade-up stagger-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  30+ years of software and product experience tells us one thing: merchants deserve better than the bloated, expensive, poorly-supported apps they&apos;re stuck with today.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-3xl p-10 border border-border animate-fade-up stagger-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in transparency — open source code, public development, honest pricing. No black boxes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="eyebrow mb-6 block animate-fade-up">The Team</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up stagger-1">
              Small team.
              <br />
              <span className="text-gradient">Big experience.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-card rounded-3xl p-10 border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <span className="text-3xl font-bold text-primary">{member.initials}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-6">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-6 block animate-fade-up">How We Work</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-up stagger-1">
              Our principles.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={principle.number} 
                className="p-10 bg-secondary/30 rounded-3xl border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <span className="text-6xl font-bold text-primary/20 mb-6 block">
                  {principle.number}
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-40 px-6 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
            Get involved.
          </h2>
          <p className="text-xl text-white/80 mb-14 max-w-2xl mx-auto animate-fade-up stagger-1">
            Follow the build, join the mailing list, or just watch what we&apos;re working on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary hover:bg-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <GithubIcon className="h-6 w-6" />
              Follow on GitHub
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300"
            >
              Back to Home
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
