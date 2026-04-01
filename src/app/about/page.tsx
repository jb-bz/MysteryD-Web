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
      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] gradient-blur bg-primary/15 translate-x-1/3 -translate-y-1/3" />
        
        <div className="absolute top-24 right-[15%] w-32 h-32 border border-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-[20%] w-20 h-20 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-8 block animate-fade-up">About</span>
              <h1 className="text-[72px] md:text-[90px] lg:text-[110px] font-bold tracking-tight leading-[0.95] mb-12 animate-fade-up stagger-1">
                We build what we{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  wish existed.
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up stagger-2">
                MysteryD was founded on a simple idea: the best software comes from solving real problems, not chasing feature lists.
              </p>
            </div>
            
            <div className="lg:col-span-5 pt-12 lg:pt-24">
              <div className="sticky top-40 space-y-8 animate-fade-up stagger-3">
                <div className="p-8 bg-card rounded-2xl border border-border">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded originally in Costa Rica in the early 2000s. Revived and relaunched in the USA in 2026.
                  </p>
                </div>
                <div className="p-8 bg-card rounded-2xl border border-border">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    30+ years of software and product experience tells us: merchants deserve better than bloated, expensive, poorly-supported apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-blur bg-primary/10" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24 animate-fade-up">
            <span className="eyebrow mb-8 block">The Team</span>
            <h2 className="text-[72px] md:text-[90px] lg:text-[110px] font-bold tracking-tight">
              Small team.
              <br />
              <span className="text-gradient">Big experience.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-card rounded-3xl p-10 lg:p-12 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <span className="text-3xl font-bold text-primary">{member.initials}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-base text-primary font-medium mb-6">{member.role}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24 animate-fade-up">
            <span className="eyebrow mb-8 block">How We Work</span>
            <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight">
              Our principles.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((principle, index) => (
              <div 
                key={principle.number} 
                className="p-10 lg:p-12 bg-secondary/30 rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <span className="text-[100px] font-bold text-primary/10 leading-none block mb-6">
                  {principle.number}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {principle.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-black/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight mb-8 animate-fade-up">
            Get involved.
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 mb-16 max-w-2xl mx-auto animate-fade-up stagger-1">
            Follow the build, join the mailing list, or just watch what we&apos;re working on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-primary hover:bg-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105 text-xl"
            >
              <GithubIcon className="h-7 w-7" />
              Follow on GitHub
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 text-xl"
            >
              Back to Home
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}