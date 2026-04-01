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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] gradient-blur bg-primary/20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] gradient-blur bg-primary/10 translate-y-1/3 -translate-x-1/3" />
        
        <div className="absolute top-1/4 right-[10%] w-40 h-40 border border-primary/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-[15%] w-24 h-24 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-[5%] w-32 h-32 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="absolute top-1/2 left-[5%] w-px h-48 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-primary rounded-full" />
        
        <div className="relative z-10 container mx-auto max-w-7xl px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-8 block animate-fade-up">The Apps</span>
            <h1 className="text-[80px] md:text-[100px] lg:text-[140px] font-bold tracking-tight leading-[0.9] mb-12 animate-fade-up stagger-1">
              Coming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                soon.
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed animate-fade-up stagger-2">
              We&apos;re building our first app now. Follow us on GitHub to watch it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up stagger-3">
              <a
                href="https://github.com/mysteryd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-lg px-10 py-5"
              >
                <GithubIcon className="h-6 w-6" />
                Watch on GitHub
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/" className="btn-secondary text-lg px-10 py-5">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24 animate-fade-up">
            <span className="eyebrow mb-8 block">What to expect</span>
            <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight">
              Built different.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {expectations.map((item, index) => (
              <div 
                key={item.title} 
                className="group p-10 lg:p-12 bg-secondary/30 rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-4xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
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
            Want early access?
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 mb-16 max-w-2xl mx-auto animate-fade-up stagger-1">
            Join the mailing list and be the first to know when our first app launches.
          </p>
          
          <div className="animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-primary hover:bg-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105 text-xl"
            >
              <GithubIcon className="h-7 w-7" />
              Watch on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}