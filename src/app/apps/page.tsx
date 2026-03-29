import { GithubIcon } from "@/components/icons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const expectations = [
  {
    icon: "🎯",
    title: "Focused apps",
    description: "One problem solved well. No feature bloat, no confused UX. Every app does exactly what it says.",
  },
  {
    icon: "🔓",
    title: "Open source",
    description: "Every app is open source. Audit the code, contribute, or fork it. No black boxes.",
  },
  {
    icon: "💰",
    title: "Fair pricing",
    description: "No surprise charges. No tier gymnastics. Simple, transparent pricing you can understand.",
  },
  {
    icon: "💬",
    title: "Real support",
    description: "Talk to a human who knows the product. No ticket purgatory, no chatbots.",
  },
];

export default function AppsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] gradient-blur bg-primary/10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] gradient-blur bg-primary/5 -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 container mx-auto max-w-5xl px-6 py-32 text-center">
          <span className="eyebrow mb-8 block animate-fade-up">The Apps</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-10 animate-fade-up stagger-1">
            Coming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              soon.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-14 animate-fade-up stagger-2">
            We&apos;re building our first app now. Follow us on GitHub to watch it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up stagger-3">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <GithubIcon className="h-5 w-5" />
              Watch on GitHub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="eyebrow mb-6 block animate-fade-up">What to expect</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-up stagger-1">
              Built different.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expectations.map((item, index) => (
              <div 
                key={item.title} 
                className="group p-10 bg-secondary/30 rounded-3xl border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
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
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
            Want early access?
          </h2>
          <p className="text-xl text-white/80 mb-14 max-w-2xl mx-auto animate-fade-up stagger-1">
            Join the mailing list and be the first to know when our first app launches.
          </p>
          
          <div className="animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary hover:bg-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <GithubIcon className="h-6 w-6" />
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
