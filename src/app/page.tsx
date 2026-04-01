import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { NewsletterForm } from "@/components/ui/newsletter-form";

const manifesto = [
  "Shopify apps don't have to be bloated.",
  "They don't have to be confusing.",
  "They don't have to break the bank.",
];

const pillars = [
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
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] gradient-blur bg-primary/30 -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] gradient-blur bg-primary/15 translate-x-1/4 translate-y-1/4" />
        
        <div className="absolute top-20 right-[10%] w-40 h-40 border border-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-[15%] w-24 h-24 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-[5%] w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="absolute top-1/3 right-[8%] w-px h-48 bg-gradient-to-b from-primary/60 to-transparent" />
        <div className="absolute top-1/3 right-[8%] w-3 h-3 bg-primary rounded-full" />
        <div className="absolute top-1/2 right-[8%] w-px h-32 bg-gradient-to-b from-primary/30 to-transparent" />
        
        <div className="absolute bottom-32 left-8 w-32 h-32 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-48 left-16 w-px h-24 bg-gradient-to-t from-primary/40 to-transparent" />
        
        <div className="relative z-10 container mx-auto max-w-7xl px-6 py-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            <div className="lg:col-span-10 lg:col-start-1">
              <div className="max-w-5xl">
                <div className="mb-8 animate-fade-up">
                  <span className="inline-flex items-center gap-3 text-sm font-mono tracking-[0.3em] uppercase text-primary/80">
                    <span className="w-12 h-px bg-primary/50" />
                    MysteryD
                  </span>
                </div>
                
                <h1 className="text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-bold tracking-tight leading-[0.9] mb-12 animate-fade-up stagger-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="block">No black boxes.</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">Just better apps.</span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mb-16 leading-relaxed animate-fade-up stagger-2">
                  We build Shopify apps that are simpler, faster, and better supported than what you&apos;re using now. Open source. Built in public.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 animate-fade-up stagger-3">
                  <a
                    href="https://github.com/mysteryd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group text-lg px-10 py-5"
                  >
                    <GithubIcon className="h-6 w-6" />
                    Follow on GitHub
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#newsletter"
                    className="btn-secondary group text-lg px-10 py-5"
                  >
                    <Mail className="h-6 w-6" />
                    Join Mailing List
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up stagger-5">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Scroll</span>
            <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-40">
                <span className="eyebrow mb-8 block animate-fade-up">The Manifesto</span>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-12 animate-fade-up stagger-1">
                  We believe <span className="text-gradient">software</span> can be better.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up stagger-2">
                  Shopify app ecosystem is full of bloated solutions that try to do everything. Merchants end up paying for features they don&apos;t need and dealing with complexity they didn&apos;t ask for.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-4 transition-all animate-fade-up stagger-3"
                >
                  Read our story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 pt-24 lg:pt-0">
              <div className="space-y-4">
                {manifesto.map((line, index) => (
                  <div
                    key={index}
                    className="bg-secondary/30 rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors animate-fade-up"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-10 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl border border-primary/20 animate-fade-up stagger-5">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">One app. One purpose. Done exceptionally well.</span> No hidden pricing surprises. No feature creep. Just honest software that does exactly what it says.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] gradient-blur bg-primary/10" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24 animate-fade-up">
            <span className="eyebrow mb-8 block">Why MysteryD</span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Built different.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((prop, index) => (
              <div
                key={prop.number}
                className="group relative bg-card rounded-3xl p-10 lg:p-12 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="absolute top-6 right-6 text-[120px] font-bold text-primary/[0.07] leading-none group-hover:text-primary/[0.12] transition-colors duration-500">
                  {prop.number}
                </div>
                
                <div className="relative">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                    {prop.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-up">
            Follow the build.
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 mb-16 max-w-3xl mx-auto animate-fade-up stagger-1">
            We ship in public. Watch the code evolve, see what decisions we make and why, and get involved if you want.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-primary hover:bg-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105 text-xl"
            >
              <GithubIcon className="h-7 w-7" />
              Watch on GitHub
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 text-xl"
            >
              <Mail className="h-7 w-7" />
              Join Mailing List
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="relative py-32 md:py-40 px-6 bg-card">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-up">
            Stay in the loop.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-up stagger-1">
            Get notified when we launch new apps or publish build logs. No spam, just updates.
          </p>
          
          <div className="animate-fade-up stagger-2">
            <NewsletterForm variant="newsletter" />
          </div>
        </div>
      </section>
    </div>
  );
}