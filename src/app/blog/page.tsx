import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const topics = [
  {
    number: "01",
    title: "Build logs",
    description: "Real-time updates on what we&apos;re building.",
  },
  {
    number: "02",
    title: "Decisions",
    description: "Why we chose X over Y.",
  },
  {
    number: "03",
    title: "Lessons",
    description: "What worked, what didn&apos;t.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] gradient-blur bg-primary/10 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] gradient-blur bg-primary/5 translate-y-1/3 -translate-x-1/3" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <span className="eyebrow mb-8 block animate-fade-up">The Blog</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-10 animate-fade-up stagger-1">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              in public.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-up stagger-2">
            We document what we build, why we build it, and what we learn along the way.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="bg-secondary/30 rounded-3xl p-12 border border-border hover-lift animate-fade-up">
                <span className="eyebrow mb-4 block">Coming Soon</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  First post is in the works
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We&apos;re working on our first post. Sign up below to be notified when it drops.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-secondary/30 rounded-3xl p-10 border border-border animate-fade-up stagger-1">
                <h3 className="text-2xl font-bold mb-8">
                  What you&apos;ll find here
                </h3>
                <div className="space-y-8">
                  {topics.map((topic, index) => (
                    <div key={topic.number} className="flex items-start gap-5">
                      <span className="text-xl font-mono text-primary font-bold">
                        {topic.number}
                      </span>
                      <div>
                        <span className="font-semibold text-lg block mb-1">{topic.title}</span>
                        <p className="text-muted-foreground">{topic.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur bg-primary/10" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
            Don&apos;t miss a post.
          </h2>
          <p className="text-xl text-muted-foreground mb-14 max-w-2xl mx-auto animate-fade-up stagger-1">
            Join the list. No spam, just updates when we publish something worth reading.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up stagger-2">
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
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
