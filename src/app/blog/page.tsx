import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { getAllBlogPosts } from "@/lib/blog";

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
  const posts = getAllBlogPosts();
  return (
    <div className="flex flex-col">
      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] gradient-blur bg-primary/15 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] gradient-blur bg-primary/10 translate-y-1/3 -translate-x-1/3" />
        
        <div className="absolute top-1/4 left-[8%] w-32 h-32 border border-primary/20 rounded-full animate-float" />
        <div className="absolute top-1/3 left-[12%] w-20 h-20 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-1/2 right-[5%] w-px h-48 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-1/2 right-[5%] w-3 h-3 bg-primary rounded-full" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow mb-8 block animate-fade-up">The Blog</span>
              <h1 className="text-[80px] md:text-[100px] lg:text-[120px] font-bold tracking-tight leading-[0.95] mb-12 animate-fade-up stagger-1">
                Building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  in public.
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up stagger-2">
                We document what we build, why we build it, and what we learn along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              {posts.length === 0 ? (
                <div className="bg-secondary/30 rounded-3xl p-12 lg:p-16 border border-border hover:border-primary/30 transition-all duration-500 animate-fade-up">
                  <span className="eyebrow mb-6 block">Coming Soon</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    First post is in the works
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We&apos;re working on our first post. Sign up below to be notified when it drops.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {posts.map((post) => (
                    <Link 
                      key={post.slug} 
                      href={`/blog/${post.slug}`}
                      className="block bg-secondary/30 rounded-3xl p-12 lg:p-16 border border-border hover:border-primary/30 transition-all duration-500 animate-fade-up group"
                    >
                      <span className="eyebrow mb-6 block">{post.date}</span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-secondary/30 rounded-3xl p-10 lg:p-12 border border-border animate-fade-up stagger-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-10">
                  What you&apos;ll find here
                </h3>
                <div className="space-y-8">
                  {topics.map((topic) => (
                    <div key={topic.number} className="flex items-start gap-6">
                      <span className="text-3xl font-mono text-primary font-bold">
                        {topic.number}
                      </span>
                      <div>
                        <span className="font-semibold text-xl block mb-2">{topic.title}</span>
                        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: topic.description }} />
                      </div>
                    </div>
                  ))}
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
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight mb-8 animate-fade-up">
            Don&apos;t miss a post.
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-up stagger-1">
            Join the list. No spam, just updates when we publish something worth reading.
          </p>
          
          <div className="max-w-lg mx-auto animate-fade-up stagger-2">
            <NewsletterForm variant="newsletter" />
          </div>
          
          <div className="mt-12 animate-fade-up stagger-3">
            <Link href="/" className="btn-secondary text-lg px-10 py-5">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}