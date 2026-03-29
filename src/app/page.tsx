import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const valueProps = [
  {
    number: "01",
    title: "No bloat",
    description:
      "Every app does one thing well. Nothing more. We don't build feature factories — we build focused tools that do exactly what you need.",
  },
  {
    number: "02",
    title: "Open source",
    description:
      "The code is public. No mystery about what's running your store. Audit it, fork it, trust it.",
  },
  {
    number: "03",
    title: "Built by experience",
    description:
      "We've been in ecommerce long enough to know what works and what doesn't. We build the apps we wish existed.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-0 left-0 w-[800px] h-[800px] gradient-blur bg-primary/20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] gradient-blur bg-primary/10 translate-x-1/3 translate-y-1/3" />
        
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-20 w-20 h-20 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-20 right-1/4 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-primary rounded-full" />
        
        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 text-sm font-mono tracking-[0.3em] uppercase text-primary/80 mb-8">
                  <span className="w-8 h-px bg-primary/50" />
                  MysteryD
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold tracking-tight leading-[0.95] mb-10 animate-fade-up stagger-1">
                <span className="block">No black boxes.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Just better apps.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed animate-fade-up stagger-2">
                We build Shopify apps that are simpler, faster, and better supported than what you&apos;re using now. Open source. Built in public.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 animate-fade-up stagger-3">
                <a
                  href="https://github.com/mysteryd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  <GithubIcon className="h-5 w-5" />
                  Follow on GitHub
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#newsletter"
                  className="btn-secondary"
                >
                  <Mail className="h-5 w-5" />
                  Join Mailing List
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative animate-fade-up stagger-4">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <GithubIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Open Source</p>
                        <p className="text-sm text-muted-foreground">All code on GitHub</p>
                      </div>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Apps in development</span>
                        <span className="font-mono text-primary font-semibold">01</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Building in public
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up stagger-6">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 px-6 bg-card">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <span className="eyebrow mb-6 block animate-fade-up">What We&apos;re Building</span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1] animate-fade-up stagger-1">
                  Focused Shopify apps,
                  <br />
                  <span className="text-gradient">one at a time.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up stagger-2">
                  We build one app at a time. Each one solves one real problem — not a hundred imaginary ones. We open source everything and document the build in public.
                </p>
                <Link
                  href="/apps"
                  className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-4 transition-all animate-fade-up stagger-3"
                >
                  See what&apos;s coming
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="bg-secondary/50 rounded-3xl p-10 border border-border hover-lift animate-fade-up stagger-2">
                  <div className="flex items-start gap-6">
                    <span className="text-7xl font-bold text-primary/20">01</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">The Problem We Solve</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Shopify app ecosystem is full of bloated solutions that try to do everything. merchants end up paying for features they don&apos;t need and dealing with complexity they didn&apos;t ask for.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-3xl p-10 border border-border hover-lift animate-fade-up stagger-3">
                  <div className="flex items-start gap-6">
                    <span className="text-7xl font-bold text-primary/20">02</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">How We&apos;re Different</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        One app. One purpose. Done exceptionally well. No hidden pricing surprises. No feature creep. Just honest software that does exactly what it says.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-3xl p-10 border border-border hover-lift animate-fade-up stagger-4">
                  <div className="flex items-start gap-6">
                    <span className="text-7xl font-bold text-primary/20">03</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Built in Public</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Watch the code evolve. See the decisions we make and why. Get involved if you want. No closed door development here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-blur bg-primary/10" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="eyebrow mb-6 block animate-fade-up">Why MysteryD</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up stagger-1">
              Built different.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={prop.number}
                className="group relative bg-card rounded-3xl p-10 border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="absolute top-6 right-6 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {prop.number}
                </div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="relative py-32 md:py-40 px-6 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
              Follow the build.
            </h2>
            <p className="text-xl text-white/80 mb-14 max-w-2xl mx-auto animate-fade-up stagger-1">
              We ship in public. Watch the code evolve, see what decisions we make and why, and get involved if you want.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up stagger-2">
              <a
                href="https://github.com/mysteryd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary hover:bg-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <GithubIcon className="h-6 w-6" />
                Watch on GitHub
              </a>
              <a
                href="https://github.com/mysteryd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
                Join Mailing List
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
